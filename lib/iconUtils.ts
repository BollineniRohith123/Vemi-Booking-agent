// Utility functions for handling product icons

// Function to get icon for different product categories
export const getCategoryIcon = (category: string, type: string, productName: string): string => {
  // Create a mapping of specific product names to icons
  const specificProductIcons: {[key: string]: string} = {
    // Restaurant - Donuts
    'pumpkin spice iced doughnut': '🍩',
    'pumpkin spice cake doughnut': '🎃',
    'old fashioned doughnut': '🍩',
    'chocolate iced doughnut': '🍫',
    'chocolate iced doughnut with sprinkles': '🍩',
    'raspberry filled doughnut': '🍓',
    'blueberry cake doughnut': '🫐',
    'strawberry iced doughnut with sprinkles': '🍓',
    'lemon filled doughnut': '🍋',
    'doughnut holes': '🍩',

    // Restaurant - Drinks
    'pumpkin spice coffee': '☕',
    'pumpkin spice latte': '🎃',
    'regular brewed coffee': '☕',
    'decaf brewed coffee': '☕',
    'latte': '☕',
    'cappuccino': '☕',
    'caramel macchiato': '🍮',

    // Restaurant - Main Dishes
    'breakfast sandwich': '🥪',
    'avocado toast': '🥑',
    'bagel with cream cheese': '🥯',

    // Ecommerce - Electronics
    'smartphone': '📱',
    'laptop': '💻',
    'wireless earbuds': '🎧',

    // Ecommerce - Clothing
    't-shirt': '👕',
    'jeans': '👖',
    'sneakers': '👟',

    // Ecommerce - Home Goods
    'throw pillow': '🛋️',
    'bedding set': '🛏️',
    'table lamp': '💡',

    // Grocery - Produce
    'organic bananas': '🍌',
    'avocados (3 pack)': '🥑',
    'spinach (10oz)': '🥬',

    // Grocery - Dairy
    'milk (1 gallon)': '🥛',
    'eggs (dozen)': '🥚',
    'cheddar cheese (8oz)': '🧀',

    // Grocery - Bakery
    'sourdough bread': '🍞',
    'croissants (4 pack)': '🥐',
    'chocolate chip cookies': '🍪',

    // Medical - Medications
    'pain reliever': '💊',
    'allergy medicine': '💊',
    'cold & flu relief': '🤧',

    // Medical - Equipment
    'digital thermometer': '🌡️',
    'blood pressure monitor': '💓',
    'pulse oximeter': '📊',

    // Medical - First Aid
    'first aid kit': '🩹',
    'bandages (100 count)': '🩹',
    'antiseptic wipes': '🧼'
  };

  // Create a mapping of product types to icons with multiple options
  const categoryTypeIcons: {[key: string]: {[key: string]: string[]}} = {
    ecommerce: {
      electronics: ['📱', '💻', '🎧', '⌚', '📷', '🖥️', '🎮', '📺', '🔋', '🖨️'],
      clothing: ['👕', '👖', '👗', '👔', '👚', '👟', '👠', '🧢', '🧣', '🧦'],
      home: ['🏠', '🛋️', '🛏️', '🪑', '🚪', '🪟', '🛁', '🚿', '🧸', '🕰️']
    },
    restaurant: {
      donut: ['🍩', '🍪', '🧁', '🍰', '🎂', '🥮', '🥯', '🥞', '🧇', '🍫'],
      drink: ['☕', '🍵', '🥤', '🧃', '🍹', '🍸', '🥛', '🧉', '🍷', '🍺'],
      main: ['🍽️', '🍕', '🍔', '🌮', '🌯', '🍣', '🍜', '🍝', '🥗', '🍲']
    },
    grocery: {
      produce: ['🥦', '🥬', '🍎', '🍌', '🍇', '🥕', '🌽', '🥑', '🍉', '🍓'],
      dairy: ['🥛', '🧀', '🍦', '🧈', '🥚', '🍨', '🧁', '🥄', '🍶', '🥣'],
      bakery: ['🍞', '🥖', '🥐', '🥨', '🥯', '🧇', '🥞', '🥮', '🎂', '🍰']
    },
    medical: {
      medications: ['💊', '💉', '🧪', '🧫', '🧬', '🩸', '💉', '🧴', '🧼', '🧽'],
      equipment: ['🩺', '🩹', '🩼', '🦯', '🦮', '🦽', '🦼', '🔬', '🔭', '⚕️'],
      firstaid: ['🩹', '🩺', '🧬', '🧪', '🧫', '🧴', '🧼', '🧽', '🩸', '⚕️']
    }
  };

  // Create a mapping of keywords to icons
  const keywordIcons: {[key: string]: string} = {
    // Food items
    'donut': '🍩',
    'doughnut': '🍩',
    'coffee': '☕',
    'latte': '☕',
    'cappuccino': '☕',
    'macchiato': '☕',
    'chocolate': '🍫',
    'strawberry': '🍓',
    'raspberry': '🍓',
    'blueberry': '🫐',
    'lemon': '🍋',
    'pumpkin': '🎃',
    'spice': '🌶️',
    'cake': '🍰',
    'bagel': '🥯',
    'toast': '🍞',
    'sandwich': '🥪',
    'avocado': '🥑',
    'cream': '🍦',
    'cheese': '🧀',

    // Electronics
    'phone': '📱',
    'smartphone': '📱',
    'laptop': '💻',
    'computer': '💻',
    'earbuds': '🎧',
    'headphones': '🎧',
    'camera': '📷',
    'watch': '⌚',

    // Clothing
    'shirt': '👕',
    't-shirt': '👕',
    'jeans': '👖',
    'pants': '👖',
    'shoes': '👟',
    'sneakers': '👟',
    'hat': '🧢',
    'scarf': '🧣',
    'socks': '🧦',

    // Home goods
    'pillow': '🛋️',
    'bed': '🛏️',
    'lamp': '💡',
    'chair': '🪑',
    'table': '🪑',
    'sofa': '🛋️',
    'couch': '🛋️',

    // Grocery
    'banana': '🍌',
    'apple': '🍎',
    'spinach': '🥬',
    'milk': '🥛',
    'eggs': '🥚',
    'bread': '🍞',
    'croissant': '🥐',
    'cookie': '🍪',

    // Medical
    'pain': '💊',
    'medicine': '💊',
    'allergy': '🤧',
    'cold': '🤧',
    'flu': '🤧',
    'thermometer': '🌡️',
    'blood': '💓',
    'pressure': '📊',
    'bandage': '🩹',
    'first aid': '🩹',
    'antiseptic': '🧼'
  };

  // Get the icon based on category and type
  let icon = '';

  // First check if we have a specific icon for this exact product
  const normalizedProductName = productName.toLowerCase();
  if (specificProductIcons[normalizedProductName]) {
    icon = specificProductIcons[normalizedProductName];
  } else {
    // Check if the product name contains any of our keywords
    for (const [keyword, keywordIcon] of Object.entries(keywordIcons)) {
      if (normalizedProductName.includes(keyword)) {
        icon = keywordIcon;
        break;
      }
    }

    // If no keyword match, fall back to category/type
    if (!icon && categoryTypeIcons[category] && categoryTypeIcons[category][type]) {
      // Get a deterministic but seemingly random icon based on the product name
      const iconArray = categoryTypeIcons[category][type];
      const nameHash = productName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
      const iconIndex = nameHash % iconArray.length;
      icon = iconArray[iconIndex];
    }

    // Final fallback to default icons
    if (!icon) {
      const defaultIcons = {
        ecommerce: '🛒',
        restaurant: '🍔',
        grocery: '🛒',
        medical: '⚕️'
      };

      icon = defaultIcons[category as keyof typeof defaultIcons] || '🛒';
    }
  }

  return icon;
};

// Function to get background color based on category
export const getCategoryColor = (category: string): string => {
  const colorMap: {[key: string]: string} = {
    ecommerce: '#3b82f6', // blue-500
    restaurant: '#f59e0b', // amber-500
    grocery: '#10b981',   // emerald-500
    medical: '#ef4444'    // red-500
  };

  return colorMap[category] || '#6366f1'; // indigo-500 as default
};

// Function to get text color based on category
export const getCategoryTextColor = (category: string): string => {
  return 'white'; // All categories use white text
};

// Function to generate a product icon card
export const getProductIconCard = (category: string, type: string, productName: string): string => {
  const icon = getCategoryIcon(category, type, productName);
  const bgColor = getCategoryColor(category);

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
      <rect width="400" height="300" fill="${bgColor}" />
      <text x="200" y="150" font-family="Arial" font-size="100" text-anchor="middle" dominant-baseline="middle" fill="white">${icon}</text>
      <text x="200" y="220" font-family="Arial" font-size="24" text-anchor="middle" dominant-baseline="middle" fill="white">${productName.length > 20 ? productName.substring(0, 20) + '...' : productName}</text>
    </svg>`
  )}`;
};
