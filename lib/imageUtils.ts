// Utility functions for handling product images

// Function to get image URLs for different product categories
export const getUnsplashImage = (category: string, type: string, productName: string): string => {
  // Use placeholder.com for reliable placeholder images
  const colors: {[key: string]: string} = {
    ecommerce: 'blue',
    restaurant: 'yellow',
    grocery: 'green',
    medical: 'red'
  };

  const color = colors[category] || 'purple';

  // Create a mapping of product types to icons
  const iconMap: {[key: string]: {[key: string]: string}} = {
    ecommerce: {
      electronics: '📱',
      clothing: '👕',
      home: '🏠'
    },
    restaurant: {
      donut: '🍩',
      drink: '☕',
      main: '🍽️'
    },
    grocery: {
      produce: '🥦',
      dairy: '🥛',
      bakery: '🍞'
    },
    medical: {
      medications: '💊',
      equipment: '🩺',
      firstaid: '🩹'
    }
  };

  // Get the icon based on category and type
  let icon = '';

  if (iconMap[category] && iconMap[category][type]) {
    icon = iconMap[category][type];
  } else {
    // Default icons if specific category/type not found
    const defaultIcons = {
      ecommerce: '🛒',
      restaurant: '🍔',
      grocery: '🛒',
      medical: '⚕️'
    };

    icon = defaultIcons[category as keyof typeof defaultIcons] || '🛒';
  }

  // Include the icon in the text

  // Use placeholder.com with the category color and product name
  return `https://via.placeholder.com/400x300/${color}/white?text=${encodeURIComponent(icon + ' ' + productName)}`;

  // Old implementation with source.unsplash.com - keeping for reference
  /*
  const baseUrl = 'https://source.unsplash.com/featured/?';
  let query = '';

  switch (category) {
    case 'ecommerce':
      switch (type) {
        case 'electronics':
          if (productName.toLowerCase().includes('smartphone')) return `${baseUrl}smartphone,phone`;
          if (productName.toLowerCase().includes('laptop')) return `${baseUrl}laptop,computer`;
          if (productName.toLowerCase().includes('earbuds')) return `${baseUrl}earbuds,headphones`;
          return `${baseUrl}${type},${productName.split(' ')[0]}`;

        case 'clothing':
          if (productName.toLowerCase().includes('t-shirt')) return `${baseUrl}tshirt,fashion`;
          if (productName.toLowerCase().includes('jeans')) return `${baseUrl}jeans,denim`;
          if (productName.toLowerCase().includes('sneakers')) return `${baseUrl}sneakers,shoes`;
          return `${baseUrl}${type},${productName.split(' ')[0]}`;

        case 'home':
          if (productName.toLowerCase().includes('pillow')) return `${baseUrl}pillow,cushion`;
          if (productName.toLowerCase().includes('bedding')) return `${baseUrl}bedding,bed`;
          if (productName.toLowerCase().includes('lamp')) return `${baseUrl}lamp,lighting`;
          return `${baseUrl}${type},${productName.split(' ')[0]}`;

        default:
          return `${baseUrl}${category},${type}`;
      }

    case 'restaurant':
      switch (type) {
        case 'donut':
          if (productName.toLowerCase().includes('chocolate')) return `${baseUrl}chocolate,donut`;
          if (productName.toLowerCase().includes('strawberry')) return `${baseUrl}strawberry,donut`;
          if (productName.toLowerCase().includes('blueberry')) return `${baseUrl}blueberry,donut`;
          if (productName.toLowerCase().includes('lemon')) return `${baseUrl}lemon,donut`;
          if (productName.toLowerCase().includes('raspberry')) return `${baseUrl}raspberry,donut`;
          if (productName.toLowerCase().includes('pumpkin')) return `${baseUrl}pumpkin,donut`;
          if (productName.toLowerCase().includes('holes')) return `${baseUrl}donut,holes`;
          return `${baseUrl}donut,pastry`;

        case 'drink':
          if (productName.toLowerCase().includes('coffee')) return `${baseUrl}coffee,cup`;
          if (productName.toLowerCase().includes('latte')) return `${baseUrl}latte,coffee`;
          if (productName.toLowerCase().includes('cappuccino')) return `${baseUrl}cappuccino,coffee`;
          if (productName.toLowerCase().includes('macchiato')) return `${baseUrl}macchiato,coffee`;
          return `${baseUrl}${type},beverage`;

        case 'main':
          if (productName.toLowerCase().includes('sandwich')) return `${baseUrl}sandwich,breakfast`;
          if (productName.toLowerCase().includes('avocado')) return `${baseUrl}avocado,toast`;
          if (productName.toLowerCase().includes('bagel')) return `${baseUrl}bagel,cream,cheese`;
          return `${baseUrl}${type},food`;

        default:
          return `${baseUrl}food,${type}`;
      }

    case 'grocery':
      switch (type) {
        case 'produce':
          if (productName.toLowerCase().includes('banana')) return `${baseUrl}banana,fruit`;
          if (productName.toLowerCase().includes('avocado')) return `${baseUrl}avocado,fruit`;
          if (productName.toLowerCase().includes('spinach')) return `${baseUrl}spinach,vegetable`;
          return `${baseUrl}${type},vegetable`;

        case 'dairy':
          if (productName.toLowerCase().includes('milk')) return `${baseUrl}milk,dairy`;
          if (productName.toLowerCase().includes('egg')) return `${baseUrl}eggs,dairy`;
          if (productName.toLowerCase().includes('cheese')) return `${baseUrl}cheese,dairy`;
          return `${baseUrl}${type},dairy`;

        case 'bakery':
          if (productName.toLowerCase().includes('bread')) return `${baseUrl}bread,sourdough`;
          if (productName.toLowerCase().includes('croissant')) return `${baseUrl}croissant,pastry`;
          if (productName.toLowerCase().includes('cookie')) return `${baseUrl}cookie,chocolate`;
          return `${baseUrl}${type},baked`;

        default:
          return `${baseUrl}grocery,${type}`;
      }

    case 'medical':
      switch (type) {
        case 'medications':
          if (productName.toLowerCase().includes('pain')) return `${baseUrl}medicine,pill`;
          if (productName.toLowerCase().includes('allergy')) return `${baseUrl}allergy,medicine`;
          if (productName.toLowerCase().includes('cold')) return `${baseUrl}cold,medicine`;
          return `${baseUrl}${type},medicine`;

        case 'equipment':
          if (productName.toLowerCase().includes('thermometer')) return `${baseUrl}thermometer,medical`;
          if (productName.toLowerCase().includes('blood pressure')) return `${baseUrl}blood,pressure,monitor`;
          if (productName.toLowerCase().includes('oximeter')) return `${baseUrl}pulse,oximeter`;
          return `${baseUrl}${type},medical`;

        case 'firstaid':
          if (productName.toLowerCase().includes('kit')) return `${baseUrl}first,aid,kit`;
          if (productName.toLowerCase().includes('bandage')) return `${baseUrl}bandage,medical`;
          if (productName.toLowerCase().includes('wipe')) return `${baseUrl}antiseptic,wipe`;
          return `${baseUrl}${type},medical`;

        default:
          return `${baseUrl}medical,${type}`;
      }

    default:
      return `${baseUrl}${category},${productName.split(' ')[0]}`;
  }
  */
};

// Function to add a random parameter to force new image loading
export const getRandomImageUrl = (url: string): string => {
  // Add a cache-busting parameter
  return `${url}&_=${Math.floor(Math.random() * 1000)}`;
};
