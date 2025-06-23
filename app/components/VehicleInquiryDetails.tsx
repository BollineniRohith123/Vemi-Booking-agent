'use client';

import React, { useState, useEffect } from 'react';
import { VehicleInquiryData, VehicleInquiry } from '@/lib/types';

function prepVehicleInquiryDetails(inquiryData: VehicleInquiry[]): VehicleInquiryData {
  try {
    return {
      inquiries: inquiryData,
      totalInquiries: inquiryData.length
    };
  } catch (error) {
    console.error('Failed to prepare vehicle inquiry details:', error);
    return {
      inquiries: [],
      totalInquiries: 0
    };
  }
}

const VehicleInquiryDetails: React.FC = () => {
  const [inquiryDetails, setInquiryDetails] = useState<VehicleInquiryData>({
    inquiries: [],
    totalInquiries: 0
  });

  useEffect(() => {
    const handleInquiryUpdate = (event: CustomEvent<VehicleInquiry[]>) => {
      console.log('Received vehicle inquiry update:', event.detail);

      // Combine with existing inquiries or add new ones
      const updatedInquiries = [...inquiryDetails.inquiries];

      event.detail.forEach(newInquiry => {
        const existingInquiryIndex = updatedInquiries.findIndex(
          inquiry => inquiry.vehicleName === newInquiry.vehicleName
        );

        if (existingInquiryIndex >= 0) {
          // Update existing inquiry
          updatedInquiries[existingInquiryIndex] = { ...updatedInquiries[existingInquiryIndex], ...newInquiry };
        } else {
          // Add new inquiry
          updatedInquiries.push(newInquiry);
        }
      });

      // Process the updated inquiries
      const processedDetails = prepVehicleInquiryDetails(updatedInquiries);
      setInquiryDetails(processedDetails);
    };

    const handleCallEnded = () => {
      // Clear inquiries when call ends
      setInquiryDetails({
        inquiries: [],
        totalInquiries: 0
      });
    };

    // Listen for vehicle inquiry updates
    window.addEventListener('vehicleInquiryUpdated', handleInquiryUpdate as EventListener);
    window.addEventListener('callEnded', handleCallEnded);

    return () => {
      window.removeEventListener('vehicleInquiryUpdated', handleInquiryUpdate as EventListener);
      window.removeEventListener('callEnded', handleCallEnded);
    };
  }, [inquiryDetails.inquiries]);

  if (inquiryDetails.totalInquiries === 0) {
    return (
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 shadow-xl border border-slate-700">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
          <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Vehicle Inquiries
        </h3>
        <p className="text-slate-400 text-sm">
          Start a conversation to explore Tata Commercial Vehicles and build your inquiry list.
        </p>
      </div>
    );
  }

  const formatInquiryItem = (inquiry: VehicleInquiry, index: number) => (
    <div key={index} className="bg-slate-800 rounded-lg p-4 border border-slate-600 hover:border-blue-500 transition-colors">
      <div className="flex justify-between items-start mb-2">
        <h4 className="text-white font-medium">{inquiry.vehicleName}</h4>
        <span className={`px-2 py-1 text-xs rounded-full font-medium ${
          inquiry.inquiryType === 'test_drive' ? 'bg-green-900 text-green-300' :
          inquiry.inquiryType === 'pricing' ? 'bg-blue-900 text-blue-300' :
          inquiry.inquiryType === 'specifications' ? 'bg-yellow-900 text-yellow-300' :
          'bg-purple-900 text-purple-300'
        }`}>
          {inquiry.inquiryType.replace('_', ' ').toUpperCase()}
        </span>
      </div>
      
      {inquiry.applicationRequirement && (
        <div className="mb-2">
          <span className="text-xs text-slate-400">Application:</span>
          <p className="text-sm text-slate-300">{inquiry.applicationRequirement}</p>
        </div>
      )}
      
      {inquiry.businessRequirements && (
        <div>
          <span className="text-xs text-slate-400">Requirements:</span>
          <p className="text-sm text-slate-300">{inquiry.businessRequirements}</p>
        </div>
      )}
    </div>
  );

  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 shadow-xl border border-slate-700">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-white flex items-center">
          <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Vehicle Inquiries
        </h3>
        <div className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
          {inquiryDetails.totalInquiries} {inquiryDetails.totalInquiries === 1 ? 'inquiry' : 'inquiries'}
        </div>
      </div>

      <div className="space-y-3 max-h-96 overflow-y-auto custom-scrollbar">
        {inquiryDetails.inquiries.map((inquiry, index) => formatInquiryItem(inquiry, index))}
      </div>

      <div className="mt-4 pt-4 border-t border-slate-600">
        <div className="flex justify-between items-center">
          <span className="text-slate-400 text-sm">Ready to proceed?</span>
          <div className="flex space-x-2">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Request Quote
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Schedule Test Drive
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleInquiryDetails;
