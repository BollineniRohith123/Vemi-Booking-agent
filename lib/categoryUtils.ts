// Utility functions for handling category switching

/**
 * Maps subcategory names to their internal representation
 * This helps handle cases where the AI might use different terms than our internal types
 */
const subcategoryMap: Record<string, Record<string, string>> = {
  ecommerce: {
    'electronics': 'electronics',
    'electronic': 'electronics',
    'devices': 'electronics',
    'gadgets': 'electronics',
    'tech': 'electronics',
    'technology': 'electronics',

    'clothing': 'clothing',
    'clothes': 'clothing',
    'fashion': 'clothing',
    'apparel': 'clothing',
    'wear': 'clothing',

    'home': 'home',
    'home goods': 'home',
    'homegoods': 'home',
    'home items': 'home',
    'furniture': 'home',
    'decor': 'home',
    'decoration': 'home',
    'household': 'home'
  },
  restaurant: {
    'donut': 'donut',
    'donuts': 'donut',
    'doughnut': 'donut',
    'doughnuts': 'donut',
    'pastry': 'donut',
    'pastries': 'donut',

    'drink': 'drink',
    'drinks': 'drink',
    'beverage': 'drink',
    'beverages': 'drink',
    'coffee': 'drink',

    'main': 'main',
    'main dish': 'main',
    'main dishes': 'main',
    'food': 'main',
    'meal': 'main',
    'meals': 'main',
    'sandwich': 'main',
    'sandwiches': 'main'
  },
  grocery: {
    'produce': 'produce',
    'fruits': 'produce',
    'vegetables': 'produce',
    'fruit': 'produce',
    'vegetable': 'produce',
    'fresh': 'produce',

    'dairy': 'dairy',
    'milk': 'dairy',
    'cheese': 'dairy',
    'yogurt': 'dairy',
    'eggs': 'dairy',

    'bakery': 'bakery',
    'bread': 'bakery',
    'baked': 'bakery',
    'baked goods': 'bakery',
    'pastry': 'bakery',
    'pastries': 'bakery'
  },
  medical: {
    'medications': 'medications',
    'medication': 'medications',
    'medicine': 'medications',
    'medicines': 'medications',
    'drugs': 'medications',
    'drug': 'medications',
    'pharmacy': 'medications',

    'equipment': 'equipment',
    'devices': 'equipment',
    'device': 'equipment',
    'monitor': 'equipment',
    'monitors': 'equipment',

    'firstaid': 'firstaid',
    'first aid': 'firstaid',
    'first-aid': 'firstaid',
    'bandages': 'firstaid',
    'bandage': 'firstaid',
    'kit': 'firstaid'
  }
};

/**
 * Normalizes a subcategory name to match our internal types
 */
const normalizeSubcategory = (category: string, subcategory?: string): string | undefined => {
  if (!subcategory) return undefined;

  const normalizedCategory = category.toLowerCase();
  const normalizedSubcategory = subcategory.toLowerCase();

  // Check if we have a mapping for this category
  if (subcategoryMap[normalizedCategory]) {
    // Return the mapped subcategory or the original if no mapping exists
    return subcategoryMap[normalizedCategory][normalizedSubcategory] ||
           // Try to find a partial match
           Object.keys(subcategoryMap[normalizedCategory]).find(key =>
             normalizedSubcategory.includes(key) || key.includes(normalizedSubcategory)
           ) ?
           subcategoryMap[normalizedCategory][Object.keys(subcategoryMap[normalizedCategory]).find(key =>
             normalizedSubcategory.includes(key) || key.includes(normalizedSubcategory)
           ) as string] :
           subcategory;
  }

  return subcategory;
};

/**
 * Switches the active category in the UI
 * @param category The category to switch to ('ecommerce', 'restaurant', 'grocery', 'medical')
 * @param subcategory Optional subcategory to switch to
 */
export const switchCategory = (category: string, subcategory?: string): void => {
  // Normalize the subcategory name to match our internal types
  const normalizedSubcategory = normalizeSubcategory(category, subcategory);

  console.log(`Switching to category: ${category}, normalized subcategory: ${normalizedSubcategory}`);

  // Create and dispatch a custom event to switch categories
  const event = new CustomEvent('categorySwitch', {
    detail: {
      category,
      subcategory: normalizedSubcategory
    }
  });

  window.dispatchEvent(event);
};

/**
 * Maps user input to a specific category and subcategory
 * @param input The user's input text
 * @returns An object with the matched category and subcategory (if any)
 */
export const getCategoryFromInput = (input: string): { category: string | null; subcategory: string | null } => {
  const normalizedInput = input.toLowerCase();
  let category: string | null = null;
  let subcategory: string | null = null;

  // Check for ecommerce-related terms
  if (
    normalizedInput.includes('ecommerce') ||
    normalizedInput.includes('shop') ||
    normalizedInput.includes('buy') ||
    normalizedInput.includes('purchase') ||
    normalizedInput.includes('electronics') ||
    normalizedInput.includes('clothing') ||
    normalizedInput.includes('fashion') ||
    normalizedInput.includes('home goods') ||
    normalizedInput.includes('furniture') ||
    normalizedInput.includes('appliance')
  ) {
    category = 'ecommerce';

    // Check for ecommerce subcategories using our mapping
    for (const [key, value] of Object.entries(subcategoryMap['ecommerce'])) {
      if (normalizedInput.includes(key)) {
        subcategory = value;
        break;
      }
    }
  }

  // Check for restaurant-related terms
  if (
    normalizedInput.includes('restaurant') ||
    normalizedInput.includes('food') ||
    normalizedInput.includes('meal') ||
    normalizedInput.includes('eat') ||
    normalizedInput.includes('hungry') ||
    normalizedInput.includes('donut') ||
    normalizedInput.includes('doughnut') ||
    normalizedInput.includes('coffee') ||
    normalizedInput.includes('drink') ||
    normalizedInput.includes('breakfast') ||
    normalizedInput.includes('lunch') ||
    normalizedInput.includes('dinner')
  ) {
    category = 'restaurant';

    // Check for restaurant subcategories using our mapping
    for (const [key, value] of Object.entries(subcategoryMap['restaurant'])) {
      if (normalizedInput.includes(key)) {
        subcategory = value;
        break;
      }
    }
  }

  // Check for grocery-related terms
  if (
    normalizedInput.includes('grocery') ||
    normalizedInput.includes('groceries') ||
    normalizedInput.includes('produce') ||
    normalizedInput.includes('fruit') ||
    normalizedInput.includes('vegetable') ||
    normalizedInput.includes('dairy') ||
    normalizedInput.includes('milk') ||
    normalizedInput.includes('bread') ||
    normalizedInput.includes('bakery') ||
    normalizedInput.includes('meat')
  ) {
    category = 'grocery';

    // Check for grocery subcategories using our mapping
    for (const [key, value] of Object.entries(subcategoryMap['grocery'])) {
      if (normalizedInput.includes(key)) {
        subcategory = value;
        break;
      }
    }
  }

  // Check for medical-related terms
  if (
    normalizedInput.includes('medical') ||
    normalizedInput.includes('medicine') ||
    normalizedInput.includes('health') ||
    normalizedInput.includes('healthcare') ||
    normalizedInput.includes('pharmacy') ||
    normalizedInput.includes('drug') ||
    normalizedInput.includes('prescription') ||
    normalizedInput.includes('first aid') ||
    normalizedInput.includes('bandage') ||
    normalizedInput.includes('pain') ||
    normalizedInput.includes('relief')
  ) {
    category = 'medical';

    // Check for medical subcategories using our mapping
    for (const [key, value] of Object.entries(subcategoryMap['medical'])) {
      if (normalizedInput.includes(key)) {
        subcategory = value;
        break;
      }
    }
  }

  return { category, subcategory };
};

/**
 * Automatically detects category/subcategory from user input and switches if found
 * @param input The user's input text
 * @returns True if a category was detected and switched, false otherwise
 */
export const autoSwitchCategoryFromInput = (input: string): boolean => {
  const { category, subcategory } = getCategoryFromInput(input);

  if (category) {
    console.log(`Auto-detected category: ${category}, subcategory: ${subcategory || 'none'} from input: "${input}"`);
    // Switch to the detected category and subcategory
    switchCategory(category, subcategory || undefined);
    return true;
  }

  return false;
};
