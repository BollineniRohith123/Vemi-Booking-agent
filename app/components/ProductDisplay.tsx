'use client';

import React, { useState, useEffect, useRef } from 'react';
import { getCategoryColor, getCategoryIcon } from '@/lib/iconUtils';

interface Product {
  name: string;
  image: string;
  isHighlighted: boolean;
  category: 'ecommerce' | 'restaurant' | 'grocery' | 'medical';
  type: string;
  price: number;
}

const ProductDisplay: React.FC = () => {
  const [activeMainCategory, setActiveMainCategory] = useState<'ecommerce' | 'restaurant' | 'grocery' | 'medical'>('restaurant');
  const [activeSubCategory, setActiveSubCategory] = useState<string>('donut');
  const [products, setProducts] = useState<Product[]>([
    // Restaurant - Donuts
    { name: 'Pumpkin Spice Iced Doughnut', image: '/images/products/pumpkin-iced.svg', isHighlighted: false, category: 'restaurant', type: 'donut', price: 99 },
    { name: 'Pumpkin Spice Cake Doughnut', image: '/images/products/pumpkin-cake.svg', isHighlighted: false, category: 'restaurant', type: 'donut', price: 99 },
    { name: 'Old Fashioned Doughnut', image: '/images/products/old-fashioned.svg', isHighlighted: false, category: 'restaurant', type: 'donut', price: 99 },
    { name: 'Chocolate Iced Doughnut', image: '/images/products/chocolate.svg', isHighlighted: false, category: 'restaurant', type: 'donut', price: 89 },
    { name: 'Chocolate Iced Doughnut with Sprinkles', image: '/images/products/chocolate-sprinkles.svg', isHighlighted: false, category: 'restaurant', type: 'donut', price: 89 },
    { name: 'Raspberry Filled Doughnut', image: '/images/products/raspberry.svg', isHighlighted: false, category: 'restaurant', type: 'donut', price: 89 },
    { name: 'Blueberry Cake Doughnut', image: '/images/products/blueberry.svg', isHighlighted: false, category: 'restaurant', type: 'donut', price: 89 },
    { name: 'Strawberry Iced Doughnut with Sprinkles', image: '/images/products/strawberry.svg', isHighlighted: false, category: 'restaurant', type: 'donut', price: 89 },
    { name: 'Lemon Filled Doughnut', image: '/images/products/lemon.svg', isHighlighted: false, category: 'restaurant', type: 'donut', price: 89 },
    { name: 'Doughnut Holes', image: '/images/products/holes.svg', isHighlighted: false, category: 'restaurant', type: 'donut', price: 299 },
    // Restaurant - Drinks
    { name: 'Pumpkin Spice Coffee', image: '/images/products/pumpkin-coffee.svg', isHighlighted: false, category: 'restaurant', type: 'drink', price: 199 },
    { name: 'Pumpkin Spice Latte', image: '/images/products/pumpkin-latte.svg', isHighlighted: false, category: 'restaurant', type: 'drink', price: 349 },
    { name: 'Regular Brewed Coffee', image: '/images/products/coffee.svg', isHighlighted: false, category: 'restaurant', type: 'drink', price: 149 },
    { name: 'Decaf Brewed Coffee', image: '/images/products/coffee.svg', isHighlighted: false, category: 'restaurant', type: 'drink', price: 149 },
    { name: 'Latte', image: '/images/products/latte.svg', isHighlighted: false, category: 'restaurant', type: 'drink', price: 249 },
    { name: 'Cappuccino', image: '/images/products/cappuccino.svg', isHighlighted: false, category: 'restaurant', type: 'drink', price: 249 },
    { name: 'Caramel Macchiato', image: '/images/products/caramel-macchiato.svg', isHighlighted: false, category: 'restaurant', type: 'drink', price: 249 },
    // Restaurant - Main Dishes
    { name: 'Breakfast Sandwich', image: '/images/products/coffee.svg', isHighlighted: false, category: 'restaurant', type: 'main', price: 449 },
    { name: 'Avocado Toast', image: '/images/products/coffee.svg', isHighlighted: false, category: 'restaurant', type: 'main', price: 499 },
    { name: 'Bagel with Cream Cheese', image: '/images/products/coffee.svg', isHighlighted: false, category: 'restaurant', type: 'main', price: 249 },

    // Ecommerce - Electronics
    { name: 'Smartphone', image: '/images/products/coffee.svg', isHighlighted: false, category: 'ecommerce', type: 'electronics', price: 49999 },
    { name: 'Laptop', image: '/images/products/coffee.svg', isHighlighted: false, category: 'ecommerce', type: 'electronics', price: 89999 },
    { name: 'Wireless Earbuds', image: '/images/products/coffee.svg', isHighlighted: false, category: 'ecommerce', type: 'electronics', price: 9999 },
    // Ecommerce - Clothing
    { name: 'T-Shirt', image: '/images/products/coffee.svg', isHighlighted: false, category: 'ecommerce', type: 'clothing', price: 1499 },
    { name: 'Jeans', image: '/images/products/coffee.svg', isHighlighted: false, category: 'ecommerce', type: 'clothing', price: 3499 },
    { name: 'Sneakers', image: '/images/products/coffee.svg', isHighlighted: false, category: 'ecommerce', type: 'clothing', price: 5999 },
    // Ecommerce - Home Goods
    { name: 'Throw Pillow', image: '/images/products/coffee.svg', isHighlighted: false, category: 'ecommerce', type: 'home', price: 1999 },
    { name: 'Bedding Set', image: '/images/products/coffee.svg', isHighlighted: false, category: 'ecommerce', type: 'home', price: 6999 },
    { name: 'Table Lamp', image: '/images/products/coffee.svg', isHighlighted: false, category: 'ecommerce', type: 'home', price: 2999 },

    // Grocery - Produce
    { name: 'Organic Bananas', image: '/images/products/coffee.svg', isHighlighted: false, category: 'grocery', type: 'produce', price: 79 },
    { name: 'Avocados (3 pack)', image: '/images/products/coffee.svg', isHighlighted: false, category: 'grocery', type: 'produce', price: 399 },
    { name: 'Spinach (10oz)', image: '/images/products/coffee.svg', isHighlighted: false, category: 'grocery', type: 'produce', price: 249 },
    // Grocery - Dairy
    { name: 'Milk (1 liter)', image: '/images/products/coffee.svg', isHighlighted: false, category: 'grocery', type: 'dairy', price: 299 },
    { name: 'Eggs (dozen)', image: '/images/products/coffee.svg', isHighlighted: false, category: 'grocery', type: 'dairy', price: 349 },
    { name: 'Cheddar Cheese (8oz)', image: '/images/products/coffee.svg', isHighlighted: false, category: 'grocery', type: 'dairy', price: 299 },
    // Grocery - Bakery
    { name: 'Sourdough Bread', image: '/images/products/coffee.svg', isHighlighted: false, category: 'grocery', type: 'bakery', price: 399 },
    { name: 'Croissants (4 pack)', image: '/images/products/coffee.svg', isHighlighted: false, category: 'grocery', type: 'bakery', price: 449 },
    { name: 'Chocolate Chip Cookies', image: '/images/products/coffee.svg', isHighlighted: false, category: 'grocery', type: 'bakery', price: 299 },

    // Medical - Medications
    { name: 'Pain Reliever', image: '/images/products/coffee.svg', isHighlighted: false, category: 'medical', type: 'medications', price: 699 },
    { name: 'Allergy Medicine', image: '/images/products/coffee.svg', isHighlighted: false, category: 'medical', type: 'medications', price: 999 },
    { name: 'Cold & Flu Relief', image: '/images/products/coffee.svg', isHighlighted: false, category: 'medical', type: 'medications', price: 799 },
    // Medical - Equipment
    { name: 'Digital Thermometer', image: '/images/products/coffee.svg', isHighlighted: false, category: 'medical', type: 'equipment', price: 1499 },
    { name: 'Blood Pressure Monitor', image: '/images/products/coffee.svg', isHighlighted: false, category: 'medical', type: 'equipment', price: 3999 },
    { name: 'Pulse Oximeter', image: '/images/products/coffee.svg', isHighlighted: false, category: 'medical', type: 'equipment', price: 2499 },
    // Medical - First Aid
    { name: 'First Aid Kit', image: '/images/products/coffee.svg', isHighlighted: false, category: 'medical', type: 'firstaid', price: 1999 },
    { name: 'Bandages (100 count)', image: '/images/products/coffee.svg', isHighlighted: false, category: 'medical', type: 'firstaid', price: 599 },
    { name: 'Antiseptic Wipes', image: '/images/products/coffee.svg', isHighlighted: false, category: 'medical', type: 'firstaid', price: 499 }
  ]);

  // State for showing category change notification
  const [categoryChangeMessage, setCategoryChangeMessage] = useState<string>('');
  const categoryMessageTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleProductHighlight = (event: CustomEvent<{ productName: string; action: 'show' | 'hide' }>) => {
      const { productName, action } = event.detail;

      // Find the product and switch category if needed
      const product = products.find(p => p.name.toLowerCase() === productName.toLowerCase());
      if (product && action === 'show') {
        setActiveMainCategory(product.category);
        setActiveSubCategory(product.type);
      }

      setProducts(prevProducts =>
        prevProducts.map(product => ({
          ...product,
          isHighlighted: product.name.toLowerCase() === productName.toLowerCase() ? action === 'show' : false
        }))
      );
    };

    // Handle category switch events
    const handleCategorySwitch = (event: CustomEvent<{ category: string; subcategory?: string }>) => {
      const { category, subcategory } = event.detail;
      const validCategory = category as 'ecommerce' | 'restaurant' | 'grocery' | 'medical';

      console.log(`Category switch event received: category=${category}, subcategory=${subcategory || 'none'}`);

      // Only switch if it's a valid category
      if (['ecommerce', 'restaurant', 'grocery', 'medical'].includes(validCategory)) {
        setActiveMainCategory(validCategory);

        // Show notification message
        const categoryNames = {
          ecommerce: 'Ecommerce',
          restaurant: 'Restaurant',
          grocery: 'Grocery',
          medical: 'Medical'
        };

        // Get valid subcategories for this category
        const validSubcategories = Array.from(new Set(
          products
            .filter(p => p.category === validCategory)
            .map(p => p.type)
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

    window.addEventListener('productHighlight', handleProductHighlight as EventListener);
    window.addEventListener('categorySwitch', handleCategorySwitch as EventListener);

    return () => {
      window.removeEventListener('productHighlight', handleProductHighlight as EventListener);
      window.removeEventListener('categorySwitch', handleCategorySwitch as EventListener);

      // Clear timeout on unmount
      if (categoryMessageTimeoutRef.current) {
        clearTimeout(categoryMessageTimeoutRef.current);
      }
    };
  }, [products]);

  // Helper function to get tag color based on category
  const getTagColor = (category: string) => {
    switch(category) {
      case 'ecommerce':
        return 'bg-blue-600 text-white';
      case 'restaurant':
        return 'bg-yellow-600 text-white';
      case 'grocery':
        return 'bg-green-600 text-white';
      case 'medical':
        return 'bg-red-600 text-white';
      default:
        return 'bg-gray-600 text-white';
    }
  };

  // Helper function to get icon for product
  const getProductIcon = (category: string, type: string, name: string) => {
    return getCategoryIcon(category, type, name);
  };

  // Get unique subcategories for the active main category
  const subcategories = Array.from(new Set(
    products
      .filter(product => product.category === activeMainCategory)
      .map(product => product.type)
  ));

  // If the current subcategory doesn't belong to the active main category, set it to the first available subcategory
  useEffect(() => {
    if (!subcategories.includes(activeSubCategory) && subcategories.length > 0) {
      setActiveSubCategory(subcategories[0]);
    }
  }, [activeMainCategory, subcategories, activeSubCategory]);

  const filteredProducts = products.filter(
    product => product.category === activeMainCategory && product.type === activeSubCategory
  );

  return (
    <div>
      {/* Category change notification */}
      {categoryChangeMessage && (
        <div className="mb-4 p-3 bg-purple-900 bg-opacity-70 rounded-lg border border-purple-500 shadow-lg transition-all duration-300 animate-fadeIn">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-white text-sm">{categoryChangeMessage}</p>
          </div>
        </div>
      )}
      {/* Menu Header */}
      <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
        Browse Categories
      </h2>

      {/* Main Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 pb-2 border-b border-gray-700">
        <button
          onClick={() => setActiveMainCategory('ecommerce')}
          className={`px-6 py-3 text-sm font-medium rounded-lg transition-all shadow-md flex items-center ${
            activeMainCategory === 'ecommerce'
              ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white transform scale-105'
              : 'text-blue-300 hover:text-white bg-gray-800 hover:bg-gray-700'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          Ecommerce
        </button>
        <button
          onClick={() => setActiveMainCategory('restaurant')}
          className={`px-6 py-3 text-sm font-medium rounded-lg transition-all shadow-md flex items-center ${
            activeMainCategory === 'restaurant'
              ? 'bg-gradient-to-r from-yellow-500 to-yellow-700 text-white transform scale-105'
              : 'text-yellow-300 hover:text-white bg-gray-800 hover:bg-gray-700'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a4 4 0 00-4-4H8.8M12 8l-4 4m4-4l4 4m-4-4v13" />
          </svg>
          Restaurant
        </button>
        <button
          onClick={() => setActiveMainCategory('grocery')}
          className={`px-6 py-3 text-sm font-medium rounded-lg transition-all shadow-md flex items-center ${
            activeMainCategory === 'grocery'
              ? 'bg-gradient-to-r from-green-600 to-green-800 text-white transform scale-105'
              : 'text-green-300 hover:text-white bg-gray-800 hover:bg-gray-700'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Grocery
        </button>
        <button
          onClick={() => setActiveMainCategory('medical')}
          className={`px-6 py-3 text-sm font-medium rounded-lg transition-all shadow-md flex items-center ${
            activeMainCategory === 'medical'
              ? 'bg-gradient-to-r from-red-600 to-red-800 text-white transform scale-105'
              : 'text-red-300 hover:text-white bg-gray-800 hover:bg-gray-700'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          Medical
        </button>
      </div>

      {/* Subcategory Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 pb-2 border-b border-gray-700">
        <span className="text-sm text-gray-400 mr-2 self-center">Subcategories:</span>
        {subcategories.map((subcategory) => (
          <button
            key={subcategory}
            onClick={() => setActiveSubCategory(subcategory)}
            className={`px-4 py-2 text-xs font-medium rounded-full transition-all ${
              activeSubCategory === subcategory
                ? activeMainCategory === 'ecommerce' ? 'bg-blue-600 text-white shadow-md' :
                  activeMainCategory === 'restaurant' ? 'bg-yellow-600 text-white shadow-md' :
                  activeMainCategory === 'grocery' ? 'bg-green-600 text-white shadow-md' :
                  'bg-red-600 text-white shadow-md'
                : 'text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700 border border-gray-700'
            }`}
          >
            {subcategory.charAt(0).toUpperCase() + subcategory.slice(1)}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {filteredProducts.map((product, index) => (
          <div
            key={index}
            className={`relative transition-all duration-300 ease-in-out transform ${
              product.isHighlighted
                ? activeMainCategory === 'ecommerce' ? 'scale-110 z-10 ring-4 ring-blue-500 shadow-xl bg-gray-900' :
                  activeMainCategory === 'restaurant' ? 'scale-110 z-10 ring-4 ring-yellow-500 shadow-xl bg-gray-900' :
                  activeMainCategory === 'grocery' ? 'scale-110 z-10 ring-4 ring-green-500 shadow-xl bg-gray-900' :
                  'scale-110 z-10 ring-4 ring-red-500 shadow-xl bg-gray-900'
                : 'scale-100 hover:scale-105 hover:shadow-lg'
            }`}
          >
            <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-800 group hover:border-purple-800 transition-colors">
              <div className="absolute top-2 right-2 z-10">
                <span className={`text-xs font-bold px-2 py-1 rounded-full ${getTagColor(product.category)}`}>
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </span>
              </div>
              <div className="relative h-48 w-full overflow-hidden group-hover:opacity-90 transition-opacity">
                <div
                  className={`absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br bg-pattern-${product.category}`}
                  style={{
                    backgroundImage: `linear-gradient(to bottom right, ${getCategoryColor(product.category)}aa, ${getCategoryColor(product.category)}ff)`,
                    boxShadow: 'inset 0 0 20px rgba(0,0,0,0.2)'
                  }}
                >
                  <div className="absolute inset-0 opacity-20"></div>
                  <div className="relative z-10 flex flex-col items-center justify-center h-full w-full p-4">
                    <div className="bg-black bg-opacity-20 rounded-full p-4 mb-3 shadow-lg">
                      <span className="text-6xl icon-float drop-shadow-lg">
                        {getProductIcon(product.category, product.type, product.name)}
                      </span>
                    </div>
                    <div className="bg-black bg-opacity-30 rounded-lg px-3 py-1.5 max-w-full">
                      <span className="text-white text-sm text-center font-medium line-clamp-2">
                        {product.name}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-sm font-medium text-white mb-1 group-hover:text-purple-300 transition-colors line-clamp-2 h-10">
                  {product.name}
                </h3>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                    ₹{product.price.toLocaleString('en-IN')}
                  </p>
                  <div className="flex space-x-1">
                    <span className="text-yellow-400">★★★★</span><span className="text-gray-600">★</span>
                  </div>
                </div>                <button
                  className="mt-3 w-full bg-gray-800 hover:bg-blue-700 text-gray-300 hover:text-white text-xs py-2 px-3 rounded-lg transition-all border border-gray-700 hover:border-blue-500 flex items-center justify-center group-hover:shadow-lg"
                  onClick={() => {
                    // Dispatch a custom event for vehicle inquiry
                    const vehicleInquiry = {
                      vehicleName: product.name,
                      inquiryType: 'specifications' as const,
                      applicationRequirement: 'General inquiry',
                      businessRequirements: 'Product interest from display'
                    };

                    // Create a new event with the vehicle inquiry
                    const event = new CustomEvent('vehicleInquiryUpdated', {
                      detail: [vehicleInquiry]
                    });
                    window.dispatchEvent(event);

                    // Show a notification
                    alert(`Added ${product.name} to inquiry list!`);
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Add to Inquiry
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDisplay;
