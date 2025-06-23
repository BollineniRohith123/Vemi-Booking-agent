'use client';

import React, { useState, useEffect, useRef } from 'react';
import { VehicleCategory } from '@/lib/vehicle.types';
import { vehiclesData, getVehiclesByCategory, getVehiclesBySubcategory, type SimpleVehicle } from '@/lib/vehicles.data';

const VehicleDisplay: React.FC = () => {
  const [activeMainCategory, setActiveMainCategory] = useState<VehicleCategory>('trucks');
  const [activeSubCategory, setActiveSubCategory] = useState<string>('lcv');
  const [vehicles, setVehicles] = useState<SimpleVehicle[]>(vehiclesData);
  
  // State for showing category change notification
  const [categoryChangeMessage, setCategoryChangeMessage] = useState<string>('');
  const categoryMessageTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleVehicleHighlight = (event: CustomEvent<{ vehicleName: string; action: 'show' | 'hide' }>) => {
      const { vehicleName, action } = event.detail;

      // Find the vehicle and switch category if needed
      const vehicle = vehicles.find(v => v.name.toLowerCase() === vehicleName.toLowerCase());
      if (vehicle && action === 'show') {
        setActiveMainCategory(vehicle.category);
        setActiveSubCategory(vehicle.subcategory);
      }

      setVehicles(prevVehicles =>
        prevVehicles.map(vehicle => ({
          ...vehicle,
          isHighlighted: vehicle.name.toLowerCase() === vehicleName.toLowerCase() ? action === 'show' : false
        }))
      );
    };

    // Handle category switch events
    const handleCategorySwitch = (event: CustomEvent<{ category: string; subcategory?: string }>) => {
      const { category, subcategory } = event.detail;
      const validCategory = category as VehicleCategory;

      console.log(`Category switch event received: category=${category}, subcategory=${subcategory || 'none'}`);

      // Only switch if it's a valid category
      if (['trucks', 'buses', 'construction', 'specialty'].includes(validCategory)) {
        setActiveMainCategory(validCategory);

        // Show notification message
        const categoryNames = {
          trucks: 'Trucks',
          buses: 'Buses', 
          construction: 'Construction',
          specialty: 'Specialty'
        };

        // Get valid subcategories for this category
        const validSubcategories = Array.from(new Set(
          vehicles
            .filter(v => v.category === validCategory)
            .map(v => v.subcategory)
        ));

        console.log(`Valid subcategories for ${validCategory}:`, validSubcategories);

        // If subcategory is provided, try to switch to it
        if (subcategory) {
          console.log(`Attempting to switch to subcategory: ${subcategory}`);

          if (validSubcategories.includes(subcategory)) {
            console.log(`Subcategory ${subcategory} is valid, switching...`);
            setActiveSubCategory(subcategory);
            setCategoryChangeMessage(`Switched to ${categoryNames[validCategory]} (${subcategory}) category. How can I help you?`);
          } else {
            console.log(`Subcategory ${subcategory} not found in valid subcategories. Checking for similar subcategories...`);

            // Try to find a similar subcategory
            const similarSubcategory = validSubcategories.find(s =>
              s.includes(subcategory) || subcategory.includes(s)
            );

            if (similarSubcategory) {
              console.log(`Found similar subcategory: ${similarSubcategory}, switching...`);
              setActiveSubCategory(similarSubcategory);
              setCategoryChangeMessage(`Switched to ${categoryNames[validCategory]} (${similarSubcategory}) category. How can I help you?`);
            } else if (validSubcategories.length > 0) {
              // Default to first subcategory if no match found
              console.log(`No similar subcategory found, defaulting to first subcategory: ${validSubcategories[0]}`);
              setActiveSubCategory(validSubcategories[0]);
              setCategoryChangeMessage(`Switched to ${categoryNames[validCategory]} category. How can I help you?`);
            } else {
              setCategoryChangeMessage(`Switched to ${categoryNames[validCategory]} category. How can I help you?`);
            }
          }
        } else {
          // No subcategory provided, just switch to the main category
          if (validSubcategories.length > 0) {
            console.log(`No subcategory provided, defaulting to first subcategory: ${validSubcategories[0]}`);
            setActiveSubCategory(validSubcategories[0]);
          }
          setCategoryChangeMessage(`Switched to ${categoryNames[validCategory]} category. How can I help you?`);
        }

        // Clear previous timeout if exists
        if (categoryMessageTimeoutRef.current) {
          clearTimeout(categoryMessageTimeoutRef.current);
        }

        // Set timeout to clear message after 5 seconds
        categoryMessageTimeoutRef.current = setTimeout(() => {
          setCategoryChangeMessage('');
        }, 5000);
      } else {
        console.error(`Invalid category: ${category}`);
      }
    };

    window.addEventListener('vehicleHighlight', handleVehicleHighlight as EventListener);
    window.addEventListener('categorySwitch', handleCategorySwitch as EventListener);

    return () => {
      window.removeEventListener('vehicleHighlight', handleVehicleHighlight as EventListener);
      window.removeEventListener('categorySwitch', handleCategorySwitch as EventListener);

      // Clear timeout on unmount
      if (categoryMessageTimeoutRef.current) {
        clearTimeout(categoryMessageTimeoutRef.current);
      }
    };
  }, [vehicles]);

  // Helper function to get tag color based on category
  const getTagColor = (category: VehicleCategory) => {
    switch(category) {
      case 'trucks':
        return 'bg-blue-600 text-white';
      case 'buses':
        return 'bg-green-600 text-white';
      case 'construction':
        return 'bg-orange-600 text-white';
      case 'specialty':
        return 'bg-red-600 text-white';
      default:
        return 'bg-gray-600 text-white';
    }
  };

  // Helper function to get vehicle icon
  const getVehicleIcon = (category: VehicleCategory, subcategory: string) => {
    const iconMap = {
      trucks: {
        lcv: '🚚',
        mcv: '🚛',
        hcv: '🚜',
        mav: '🚛'
      },
      buses: {
        city: '🚌',
        school: '🚌',
        luxury: '🚍',
        staff: '🚐'
      },
      construction: {
        tippers: '🚚',
        mixers: '🚛',
        cranes: '🏗️',
        specialized: '🚧'
      },
      specialty: {
        fire: '🚒',
        ambulance: '🚑',
        mobile_workshop: '🔧',
        defense: '🚐'
      }
    };
    
    return iconMap[category]?.[subcategory as keyof typeof iconMap[typeof category]] || '🚛';
  };

  // Get unique subcategories for the active main category
  const subcategories = Array.from(new Set(
    vehicles
      .filter(vehicle => vehicle.category === activeMainCategory)
      .map(vehicle => vehicle.subcategory)
  ));

  // If the current subcategory doesn't belong to the active main category, set it to the first available subcategory
  useEffect(() => {
    if (!subcategories.includes(activeSubCategory) && subcategories.length > 0) {
      setActiveSubCategory(subcategories[0]);
    }
  }, [activeMainCategory, subcategories, activeSubCategory]);

  const filteredVehicles = vehicles.filter(
    vehicle => vehicle.category === activeMainCategory && vehicle.subcategory === activeSubCategory
  );

  return (
    <div>
      {/* Category change notification */}
      {categoryChangeMessage && (
        <div className="mb-4 p-3 bg-blue-900 bg-opacity-70 rounded-lg border border-blue-500 shadow-lg transition-all duration-300 animate-fadeIn">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-white text-sm">{categoryChangeMessage}</p>
          </div>
        </div>
      )}

      {/* Vehicle Showcase Header */}
      <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
        Commercial Vehicle Showcase
      </h2>

      {/* Main Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 pb-2 border-b border-gray-700">
        <button
          onClick={() => setActiveMainCategory('trucks')}
          className={`px-6 py-3 text-sm font-medium rounded-lg transition-all shadow-md flex items-center ${
            activeMainCategory === 'trucks'
              ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white transform scale-105'
              : 'text-blue-300 hover:text-white bg-gray-800 hover:bg-gray-700'
          }`}
        >
          <span className="mr-1">🚛</span>
          Trucks
        </button>
        <button
          onClick={() => setActiveMainCategory('buses')}
          className={`px-6 py-3 text-sm font-medium rounded-lg transition-all shadow-md flex items-center ${
            activeMainCategory === 'buses'
              ? 'bg-gradient-to-r from-green-600 to-green-800 text-white transform scale-105'
              : 'text-green-300 hover:text-white bg-gray-800 hover:bg-gray-700'
          }`}
        >
          <span className="mr-1">🚌</span>
          Buses
        </button>
        <button
          onClick={() => setActiveMainCategory('construction')}
          className={`px-6 py-3 text-sm font-medium rounded-lg transition-all shadow-md flex items-center ${
            activeMainCategory === 'construction'
              ? 'bg-gradient-to-r from-orange-600 to-orange-800 text-white transform scale-105'
              : 'text-orange-300 hover:text-white bg-gray-800 hover:bg-gray-700'
          }`}
        >
          <span className="mr-1">🏗️</span>
          Construction
        </button>
        <button
          onClick={() => setActiveMainCategory('specialty')}
          className={`px-6 py-3 text-sm font-medium rounded-lg transition-all shadow-md flex items-center ${
            activeMainCategory === 'specialty'
              ? 'bg-gradient-to-r from-red-600 to-red-800 text-white transform scale-105'
              : 'text-red-300 hover:text-white bg-gray-800 hover:bg-gray-700'
          }`}
        >
          <span className="mr-1">🚒</span>
          Specialty
        </button>
      </div>

      {/* Subcategory Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 pb-2 border-b border-gray-700">
        <span className="text-sm text-gray-400 mr-2 self-center">Vehicle Types:</span>
        {subcategories.map((subcategory) => (
          <button
            key={subcategory}
            onClick={() => setActiveSubCategory(subcategory)}
            className={`px-4 py-2 text-xs font-medium rounded-full transition-all ${
              activeSubCategory === subcategory
                ? activeMainCategory === 'trucks' ? 'bg-blue-600 text-white shadow-md' :
                  activeMainCategory === 'buses' ? 'bg-green-600 text-white shadow-md' :
                  activeMainCategory === 'construction' ? 'bg-orange-600 text-white shadow-md' :
                  'bg-red-600 text-white shadow-md'
                : 'text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700 border border-gray-700'
            }`}
          >
            {subcategory.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Vehicles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {filteredVehicles.map((vehicle, index) => (
          <div
            key={index}
            className={`relative transition-all duration-300 ease-in-out transform ${
              vehicle.isHighlighted
                ? activeMainCategory === 'trucks' ? 'scale-110 z-10 ring-4 ring-blue-500 shadow-xl bg-gray-900' :
                  activeMainCategory === 'buses' ? 'scale-110 z-10 ring-4 ring-green-500 shadow-xl bg-gray-900' :
                  activeMainCategory === 'construction' ? 'scale-110 z-10 ring-4 ring-orange-500 shadow-xl bg-gray-900' :
                  'scale-110 z-10 ring-4 ring-red-500 shadow-xl bg-gray-900'
                : 'scale-100 hover:scale-105 hover:shadow-lg'
            }`}
          >
            <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-800 group hover:border-blue-800 transition-colors">
              <div className="absolute top-2 right-2 z-10">
                <span className={`text-xs font-bold px-2 py-1 rounded-full ${getTagColor(vehicle.category)}`}>
                  {vehicle.category.charAt(0).toUpperCase() + vehicle.category.slice(1)}
                </span>
              </div>
              <div className="relative h-48 w-full overflow-hidden group-hover:opacity-90 transition-opacity">
                <div
                  className={`absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br`}
                  style={{
                    backgroundImage: `linear-gradient(to bottom right, ${
                      vehicle.category === 'trucks' ? '#1e40af' :
                      vehicle.category === 'buses' ? '#059669' :
                      vehicle.category === 'construction' ? '#ea580c' : '#dc2626'
                    }aa, ${
                      vehicle.category === 'trucks' ? '#1e40af' :
                      vehicle.category === 'buses' ? '#059669' :
                      vehicle.category === 'construction' ? '#ea580c' : '#dc2626'
                    }ff)`,
                    boxShadow: 'inset 0 0 20px rgba(0,0,0,0.2)'
                  }}
                >
                  <div className="absolute inset-0 opacity-20"></div>
                  <div className="relative z-10 flex flex-col items-center justify-center h-full w-full p-4">
                    <div className="bg-black bg-opacity-20 rounded-full p-4 mb-3 shadow-lg">
                      <span className="text-6xl icon-float drop-shadow-lg">
                        {getVehicleIcon(vehicle.category, vehicle.subcategory)}
                      </span>
                    </div>
                    <div className="bg-black bg-opacity-30 rounded-lg px-3 py-1.5 max-w-full">
                      <span className="text-white text-sm text-center font-medium line-clamp-2">
                        {vehicle.name}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-sm font-medium text-white mb-1 group-hover:text-blue-300 transition-colors line-clamp-2 h-10">
                  {vehicle.name}
                </h3>
                <div className="text-xs text-gray-400 mb-2">
                  <span>GVW: {vehicle.specifications.capacity.grossVehicleWeight/1000}T</span> | 
                  <span> {vehicle.specifications.engine.power}HP</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
                    ₹{(vehicle.pricing.basePrice/100000).toFixed(1)}L
                  </p>
                  <div className="flex space-x-1">
                    <span className="text-yellow-400">★★★★</span><span className="text-gray-600">★</span>
                  </div>
                </div>
                <button
                  className="mt-3 w-full bg-gray-800 hover:bg-blue-700 text-gray-300 hover:text-white text-xs py-2 px-3 rounded-lg transition-all border border-gray-700 hover:border-blue-500 flex items-center justify-center group-hover:shadow-lg"
                  onClick={() => {
                    // Dispatch a custom event to add item to inquiry
                    const inquiryItem = {
                      vehicleName: vehicle.name,
                      applicationRequirement: 'General inquiry',
                      inquiryType: 'specifications',
                      businessRequirements: 'Need more information'
                    };

                    // Create a new event with the current inquiry items
                    const event = new CustomEvent('inquiryDetailsUpdated', {
                      detail: [inquiryItem]
                    });
                    window.dispatchEvent(event);

                    // Show a notification
                    alert(`Added ${vehicle.name} to inquiry list!`);
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Request Quote
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleDisplay;