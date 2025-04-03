'use client';

import React, { useState, useEffect } from 'react';
import { OrderDetailsData, OrderItem } from '@/lib/types';

function prepOrderDetails(orderDetailsData: OrderItem[]): OrderDetailsData {
  try {
    const totalAmount = orderDetailsData.reduce((sum, item) => {
      return sum + (item.price * item.quantity);
    }, 0);

    return {
      items: orderDetailsData,
      totalAmount: Number(totalAmount.toFixed(2))
    };
  } catch (error) {
    console.error('Failed to prepare order details:', error);
    return {
      items: [],
      totalAmount: 0
    };
  }
}

const OrderDetails: React.FC = () => {
  const [orderDetails, setOrderDetails] = useState<OrderDetailsData>({
    items: [],
    totalAmount: 0
  });

  useEffect(() => {
    const handleOrderUpdate = (event: CustomEvent<OrderItem[]>) => {
      console.log('Received order update:', event.detail);

      // Combine with existing items or add new ones
      const updatedItems = [...orderDetails.items];

      event.detail.forEach(newItem => {
        const existingItemIndex = updatedItems.findIndex(
          item => item.name === newItem.name
        );

        if (existingItemIndex >= 0) {
          // Update existing item quantity
          updatedItems[existingItemIndex].quantity += newItem.quantity;
        } else {
          // Add new item
          updatedItems.push(newItem);
        }
      });

      const formattedData = prepOrderDetails(updatedItems);
      setOrderDetails(formattedData);
    };

    const handleCallEnded = () => {
      setOrderDetails({
        items: [],
        totalAmount: 0
      });
    };

    window.addEventListener('orderDetailsUpdated', handleOrderUpdate as EventListener);
    window.addEventListener('callEnded', handleCallEnded as EventListener);

    return () => {
      window.removeEventListener('orderDetailsUpdated', handleOrderUpdate as EventListener);
      window.removeEventListener('callEnded', handleCallEnded as EventListener);
    };
  }, []);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const removeItem = (index: number) => {
    const updatedItems = [...orderDetails.items];
    updatedItems.splice(index, 1);
    const formattedData = prepOrderDetails(updatedItems);
    setOrderDetails(formattedData);
  };

  const updateQuantity = (index: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    const updatedItems = [...orderDetails.items];
    updatedItems[index].quantity = newQuantity;
    const formattedData = prepOrderDetails(updatedItems);
    setOrderDetails(formattedData);
  };

  const formatOrderItem = (item: OrderItem, index: number) => (
    <div key={index} className="mb-4 pl-4 border-l-2 border-purple-700 bg-gray-900 bg-opacity-50 p-3 rounded-lg hover:bg-opacity-70 transition-all group">
      <div className="flex justify-between items-start">
        <div className="flex items-start">
          <div className="flex items-center mr-2">
            <button
              className="text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700 h-5 w-5 rounded-l flex items-center justify-center"
              onClick={() => updateQuantity(index, item.quantity - 1)}
            >-</button>
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs h-6 w-6 flex items-center justify-center shadow-md">
              {item.quantity}
            </span>
            <button
              className="text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700 h-5 w-5 rounded-r flex items-center justify-center"
              onClick={() => updateQuantity(index, item.quantity + 1)}
            >+</button>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-medium group-hover:text-purple-300 transition-colors">
              {item.name}
            </span>
            <span className="text-xs text-gray-500 mt-0.5">
              {formatCurrency(item.price)} each
            </span>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-purple-300 font-semibold">{formatCurrency(item.price * item.quantity)}</span>
          <button
            className="text-xs text-red-400 hover:text-red-300 mt-1 flex items-center"
            onClick={() => removeItem(index)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Remove
          </button>
        </div>
      </div>
      {item.specialInstructions && (
        <div className="text-sm text-gray-400 italic mt-2 bg-gray-800 p-2 rounded border-l border-gray-700">
          <span className="text-purple-400 font-medium flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Note:
          </span>
          {item.specialInstructions}
        </div>
      )}
    </div>
  );

  return (
    <div>
      {orderDetails.items.length === 0 ? (
        <div className="text-center py-8 px-4">
          <div className="relative w-24 h-24 mx-auto mb-4">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full opacity-20 animate-pulse"></div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mx-auto text-gray-600 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-purple-400 font-medium mb-2">Your cart is empty</h3>
          <p className="text-gray-400 text-sm mb-6">Start by speaking to our VEMI AI assistant to add items to your cart!</p>
          <div className="border-t border-gray-800 pt-4">
            <div className="flex items-center justify-center text-xs text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Try saying: "Show me some products"
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Order Items */}
          <div className="space-y-3">
            {orderDetails.items.map((item, index) => formatOrderItem(item, index))}
          </div>

          {/* Total */}
          <div className="pt-4 mt-2 border-t border-gray-700">
            <div className="space-y-2 mb-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Subtotal:</span>
                <span className="text-gray-300">{formatCurrency(orderDetails.totalAmount)}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Tax (8%):</span>
                <span className="text-gray-300">{formatCurrency(orderDetails.totalAmount * 0.08)}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Shipping:</span>
                <span className="text-gray-300">{formatCurrency(499)}</span>
              </div>
            </div>
            <div className="flex justify-between items-center bg-gradient-to-r from-purple-900 to-indigo-900 p-3 rounded-lg shadow-inner">
              <span className="text-white font-semibold">Total:</span>
              <span className="text-white font-bold text-lg">{formatCurrency(orderDetails.totalAmount * 1.08 + 499)}</span>
            </div>
            <div className="flex gap-2 mt-4">
              <button className="flex-1 bg-gray-800 text-gray-300 py-2 rounded-lg hover:bg-gray-700 transition-all font-medium border border-gray-700 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Save
              </button>
              <button
                className="flex-[3] bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all font-medium shadow-lg flex items-center justify-center"
                onClick={() => {
                  if (orderDetails.items.length === 0) {
                    alert('Your cart is empty!');
                    return;
                  }
                  alert(`Processing checkout for ${orderDetails.items.length} items. Total: ${formatCurrency(orderDetails.totalAmount * 1.08 + 499)}`);
                  // Here you would typically redirect to a checkout page
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderDetails;