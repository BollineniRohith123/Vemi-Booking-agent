'use client';

import React, { useState, useCallback, useEffect, useRef } from 'react';
import { startCall, endCall } from '@/lib/callFunctions';
import { demoConfig } from '@/app/demo-config';
import VehicleDisplay from '@/app/components/VehicleDisplay';
import VehicleInquiryDetails from '@/app/components/OrderDetails';
import { Transcript } from 'ultravox-client';
import { autoSwitchCategoryFromInput } from '@/lib/categoryUtils';

export default function Home() {
  const [transcripts, setTranscripts] = useState<Transcript[]>([]);
  const [status, setStatus] = useState<string>('');
  const [isCallActive, setIsCallActive] = useState(false);
  const transcriptRef = useRef<HTMLDivElement>(null);

  // Auto-scroll transcripts
  useEffect(() => {
    if (transcriptRef.current) {
      transcriptRef.current.scrollTop = transcriptRef.current.scrollHeight;
    }

    // Auto-detect category from user messages and switch if needed
    if (transcripts.length > 0) {
      const lastMessage = transcripts[transcripts.length - 1];
      if (lastMessage.speaker === 'user' && lastMessage.text) {
        // Try to auto-switch category based on user input
        autoSwitchCategoryFromInput(lastMessage.text);
      }
    }
  }, [transcripts]);

  const handleStartCall = async () => {
    try {
      await startCall(
        {
          onTranscriptChange: (newTranscripts) => setTranscripts(newTranscripts || []),
          onStatusChange: (newStatus) => setStatus(newStatus || 'disconnected'),
          onDebugMessage: (msg) => console.log('Debug:', msg)
        },
        demoConfig.callConfig,
        true
      );
      setIsCallActive(true);
    } catch (error) {
      console.error('Failed to start call:', error);
    }
  };

  const handleEndCall = async () => {
    try {
      await endCall();
      setIsCallActive(false);
      setStatus('');
      setTranscripts([]);
    } catch (error) {
      console.error('Failed to end call:', error);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-slate-800 border-b border-blue-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-center space-x-4">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-white">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-slate-300">
                  Tata Commercial Vehicles
                </span>
                <span className="text-lg ml-2 text-blue-300">AI Assistant</span>
              </h1>
              <div className="flex items-center justify-center mt-2 space-x-2">
                <span className="text-sm text-blue-200">Powered by</span>
                <span className="text-sm font-semibold text-blue-300">VEMI AI</span>
              </div>
            </div>
          </div>
          <p className="text-center text-blue-200 mt-4 max-w-3xl mx-auto">
            Your intelligent commercial vehicle specialist. Explore trucks, buses, construction equipment, and specialty vehicles.
            Get expert guidance on specifications, applications, and find the perfect vehicle for your business needs.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Section - Vehicle Showcase (70%) */}
          <div className="w-full md:w-[70%]">
            <div className="bg-gray-800 rounded-xl shadow-2xl p-6 border border-blue-800">
              <VehicleDisplay />
            </div>
          </div>

          {/* Right Section - Inquiry & AI Assistant (30%) */}
          <div className="w-full md:w-[30%] space-y-6">
            {/* Vehicle Inquiries */}
            <div className="bg-gray-800 rounded-xl shadow-2xl p-6 border border-blue-800">
              <h2 className="text-lg font-medium text-white mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                Vehicle Inquiries
              </h2>
              <VehicleInquiryDetails />
            </div>

            {/* AI Vehicle Specialist */}
            <div className="bg-gray-800 rounded-xl shadow-2xl p-6 border border-blue-800">
              <h2 className="text-lg font-medium text-white mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                AI Vehicle Specialist
              </h2>

              {/* Call Controls */}
              <div className="mb-4">
                {!isCallActive ? (
                  <button
                    onClick={handleStartCall}
                    className="w-full bg-gradient-to-r from-blue-600 to-slate-600 text-white px-4 py-3 rounded-lg hover:from-blue-700 hover:to-slate-700 transition-all shadow-lg font-medium"
                  >
                    Start Vehicle Consultation
                  </button>
                ) : (
                  <button
                    onClick={handleEndCall}
                    className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white px-4 py-3 rounded-lg hover:from-red-700 hover:to-orange-700 transition-all shadow-lg font-medium"
                  >
                    End Consultation
                  </button>
                )}
              </div>

              {/* Conversation */}
              <div>
                <h3 className="text-sm font-medium text-blue-300 mb-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Vehicle Consultation
                </h3>
                <div
                  ref={transcriptRef}
                  className="h-60 overflow-y-auto bg-gray-900 rounded-lg p-4 space-y-3 border border-gray-700 shadow-inner"
                >
                  {transcripts.length === 0 ? (
                    <p className="text-gray-400 text-sm text-center py-4">
                      Start your vehicle consultation! Our AI specialist is ready to help you find the perfect commercial vehicle for your business needs.
                    </p>
                  ) : (
                    transcripts.map((transcript, index) => (
                      <div
                        key={index}
                        className={`text-sm p-2 rounded-lg ${
                          transcript.speaker === 'agent'
                            ? 'bg-blue-900 bg-opacity-50 text-blue-300 border-l-2 border-blue-500'
                            : 'bg-gray-800 text-gray-300 border-l-2 border-slate-500'
                        }`}
                      >
                        <span className={`text-xs font-medium ${transcript.speaker === 'agent' ? 'text-blue-400' : 'text-slate-400'}`}>
                          {transcript.speaker === 'agent' ? 'Vehicle Specialist:' : 'You:'}
                        </span>
                        <span className="ml-2">{transcript.text}</span>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}