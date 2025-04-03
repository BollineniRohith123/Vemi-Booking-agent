'use client';

import React, { useState, useCallback, useEffect, useRef } from 'react';
import { startCall, endCall } from '@/lib/callFunctions';
import { demoConfig } from '@/app/demo-config';
import ProductDisplay from '@/app/components/ProductDisplay';
import OrderDetails from '@/app/components/OrderDetails';
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
          onStatusChange: (newStatus) => setStatus(newStatus),
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
      <div className="bg-gradient-to-r from-indigo-800 to-purple-800 border-b border-purple-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <h1 className="text-3xl font-bold text-white text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
              Interactive Ordering Buddy
            </span>
            <span className="text-lg ml-2 text-purple-300">by VEMI AI</span>
          </h1>
          <p className="text-center text-purple-200 mt-3 max-w-2xl mx-auto">Your intelligent shopping assistant for Ecommerce, Restaurant, Grocery, and Medical categories. Browse products, add to cart, and place orders with ease.</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Section - Products (70%) */}
          <div className="w-full md:w-[70%]">
            <div className="bg-gray-800 rounded-xl shadow-2xl p-6 border border-purple-800">
              <ProductDisplay />
            </div>
          </div>

          {/* Right Section - Order & AI Assistant (30%) */}
          <div className="w-full md:w-[30%] space-y-6">
            {/* Order Details */}
            <div className="bg-gray-800 rounded-xl shadow-2xl p-6 border border-purple-800">
              <h2 className="text-lg font-medium text-white mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
                Your Order
              </h2>
              <OrderDetails />
            </div>

            {/* AI Assistant Controls */}
            <div className="bg-gray-800 rounded-xl shadow-2xl p-6 border border-purple-800">
              <h2 className="text-lg font-medium text-white mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                </svg>
                VEMI AI Assistant
              </h2>

              {/* Call Controls */}
              <div className="mb-4">
                {!isCallActive ? (
                  <button
                    onClick={handleStartCall}
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-3 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all shadow-lg font-medium"
                  >
                    Start Shopping
                  </button>
                ) : (
                  <button
                    onClick={handleEndCall}
                    className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white px-4 py-3 rounded-lg hover:from-red-700 hover:to-pink-700 transition-all shadow-lg font-medium"
                  >
                    End Shopping
                  </button>
                )}
              </div>

              {/* Conversation */}
              <div>
                <h3 className="text-sm font-medium text-purple-300 mb-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  Conversation
                </h3>
                <div
                  ref={transcriptRef}
                  className="h-60 overflow-y-auto bg-gray-900 rounded-lg p-4 space-y-3 border border-gray-700 shadow-inner"
                >
                  {transcripts.length === 0 ? (
                    <p className="text-gray-400 text-sm text-center py-4">
                      Start shopping by clicking the button above! Your AI assistant is ready to help.
                    </p>
                  ) : (
                    transcripts.map((transcript, index) => (
                      <div
                        key={index}
                        className={`text-sm p-2 rounded-lg ${
                          transcript.speaker === 'agent'
                            ? 'bg-indigo-900 bg-opacity-50 text-purple-300 border-l-2 border-purple-500'
                            : 'bg-gray-800 text-gray-300 border-l-2 border-blue-500'
                        }`}
                      >
                        <span className={`text-xs font-medium ${transcript.speaker === 'agent' ? 'text-purple-400' : 'text-blue-400'}`}>
                          {transcript.speaker === 'agent' ? 'VEMI AI:' : 'You:'}
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