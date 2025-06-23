'use client';
import { UltravoxSession, UltravoxSessionStatus, Transcript, UltravoxExperimentalMessageEvent, Role } from 'ultravox-client';
import { JoinUrlResponse, CallConfig } from '@/lib/types';
import { updateInquiryTool, highlightVehicleTool, switchCategoryTool } from '@/lib/clientTools';

let uvSession: UltravoxSession | null = null;
const debugMessages: Set<string> = new Set(["debug"]);

interface CallCallbacks {
  onStatusChange: (status: UltravoxSessionStatus | string | undefined) => void;
  onTranscriptChange: (transcripts: Transcript[] | undefined) => void;
  onDebugMessage?: (message: UltravoxExperimentalMessageEvent ) => void;
}

export function toggleMute(role: Role): void {

  if (uvSession) {
    // Toggle (user) Mic
    if (role == Role.USER) {
      uvSession.isMicMuted ? uvSession.unmuteMic() : uvSession.muteMic();
    }
    // Mute (agent) Speaker
    else {
      uvSession.isSpeakerMuted ? uvSession.unmuteSpeaker() : uvSession.muteSpeaker();
    }
  } else {
    console.error('uvSession is not initialized.');
  }
}

async function createCall(callConfig: CallConfig, showDebugMessages?: boolean): Promise<JoinUrlResponse> {

  try {
    if(showDebugMessages) {
      console.log(`Using model ${callConfig.model}`);
    }

    const response = await fetch(`/api/ultravox`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...callConfig }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
    }
    const data: JoinUrlResponse = await response.json();

    if(showDebugMessages) {
      console.log(`Call created. Join URL: ${data.joinUrl}`);
    }

    return data;
  } catch (error) {
    console.error('Error creating call:', error);
    throw error;
  }
}

export async function startCall(callbacks: CallCallbacks, callConfig: CallConfig, showDebugMessages?: boolean): Promise<void> {
  try {
    const callData = await createCall(callConfig, showDebugMessages);
    const joinUrl = callData.joinUrl;

    if (!joinUrl) {
      console.error('Join URL is required');
      return;
    }    console.log('Joining call:', joinUrl);    // Start up our Ultravox Session with experimental messages config
    uvSession = new UltravoxSession({
      experimentalMessages: debugMessages
    });
      // Set up event listeners using the proper event names
    uvSession.addEventListener('status', (status: any) => {
      callbacks.onStatusChange(status);
    });
    
    uvSession.addEventListener('transcripts', (transcripts: any) => {
      callbacks.onTranscriptChange(transcripts);
    });
    
    if (callbacks.onDebugMessage) {
      uvSession.addEventListener('experimental_message', (message: any) => {
        callbacks.onDebugMessage?.(message);
      });
    }

    // Register our tools for commercial vehicles
    uvSession.registerToolImplementation("updateInquiry", updateInquiryTool);
    uvSession.registerToolImplementation("highlightVehicle", highlightVehicleTool);
    uvSession.registerToolImplementation("switchCategory", switchCategoryTool);

    if(showDebugMessages) {
      console.log('uvSession created:', uvSession);
    }

    await uvSession.joinCall(joinUrl);
    console.log('Call started!');

  } catch (error) {
    console.error('Failed to start call:', error);
    throw error;
  }
}

export async function endCall(): Promise<void> {
  console.log('Call ended.');

  if (uvSession) {
    uvSession.leaveCall();
    uvSession = null;
  }

  // Dispatch a custom event when the call ends so that we can clear the order details form
  if (typeof window !== 'undefined') {
    const event = new CustomEvent('callEnded');
    window.dispatchEvent(event);
  }

}