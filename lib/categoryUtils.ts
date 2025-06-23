// Utility functions for handling vehicle category switching

/**
 * Maps subcategory names to their internal representation
 * This helps handle cases where the AI might use different terms than our internal types
 */
const subcategoryMap: Record<string, Record<string, string>> = {
  trucks: {
    'lcv': 'lcv',
    'light': 'lcv',
    'light commercial': 'lcv',
    'small': 'lcv',
    'ace': 'lcv',
    'ultra': 'lcv',

    'mcv': 'mcv',
    'medium': 'mcv',
    'medium commercial': 'mcv',
    'lpt': 'mcv',

    'hcv': 'hcv',
    'heavy': 'hcv',
    'heavy commercial': 'hcv',
    'prima': 'hcv',
    'signa': 'hcv',

    'mav': 'mav',
    'multi-axle': 'mav',
    'multi axle': 'mav'
  },
  buses: {
    'city': 'city',
    'city bus': 'city',
    'urban': 'city',
    'starbus': 'city',

    'school': 'school',
    'school bus': 'school',
    'student': 'school',

    'luxury': 'luxury',
    'coach': 'luxury',
    'intercity': 'luxury',
    'highway': 'luxury',

    'staff': 'staff',
    'employee': 'staff',
    'shuttle': 'staff'
  },
  construction: {
    'tippers': 'tippers',
    'tipper': 'tippers',
    'dumper': 'tippers',
    'dump truck': 'tippers',

    'mixers': 'mixers',
    'mixer': 'mixers',
    'concrete': 'mixers',
    'transit mixer': 'mixers',

    'cranes': 'cranes',
    'crane': 'cranes',
    'lifting': 'cranes',

    'specialized': 'specialized',
    'special': 'specialized',
    'custom': 'specialized'
  },
  specialty: {
    'fire': 'fire',
    'firefighting': 'fire',
    'fire fighting': 'fire',
    'emergency': 'fire',

    'ambulance': 'ambulance',
    'medical': 'ambulance',
    'health': 'ambulance',

    'mobile_workshop': 'mobile_workshop',
    'workshop': 'mobile_workshop',
    'service': 'mobile_workshop',

    'defense': 'defense',
    'military': 'defense',
    'government': 'defense'
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
  // Check for truck-related terms
  if (
    normalizedInput.includes('truck') ||
    normalizedInput.includes('trucks') ||
    normalizedInput.includes('cargo') ||
    normalizedInput.includes('goods') ||
    normalizedInput.includes('delivery') ||
    normalizedInput.includes('logistics') ||
    normalizedInput.includes('transport') ||
    normalizedInput.includes('prima') ||
    normalizedInput.includes('signa') ||
    normalizedInput.includes('ultra') ||
    normalizedInput.includes('ace') ||
    normalizedInput.includes('lpt') ||
    normalizedInput.includes('lcv') ||
    normalizedInput.includes('mcv') ||
    normalizedInput.includes('hcv')
  ) {
    category = 'trucks';

    // Check for truck subcategories using our mapping
    for (const [key, value] of Object.entries(subcategoryMap['trucks'])) {
      if (normalizedInput.includes(key)) {
        subcategory = value;
        break;
      }
    }
  }

  // Check for bus-related terms
  if (
    normalizedInput.includes('bus') ||
    normalizedInput.includes('buses') ||
    normalizedInput.includes('passenger') ||
    normalizedInput.includes('passengers') ||
    normalizedInput.includes('city bus') ||
    normalizedInput.includes('school bus') ||
    normalizedInput.includes('staff') ||
    normalizedInput.includes('employee') ||
    normalizedInput.includes('starbus') ||
    normalizedInput.includes('coach') ||
    normalizedInput.includes('luxury')
  ) {
    category = 'buses';

    // Check for bus subcategories using our mapping
    for (const [key, value] of Object.entries(subcategoryMap['buses'])) {
      if (normalizedInput.includes(key)) {
        subcategory = value;
        break;
      }
    }
  }

  // Check for construction-related terms
  if (
    normalizedInput.includes('construction') ||
    normalizedInput.includes('tipper') ||
    normalizedInput.includes('tippers') ||
    normalizedInput.includes('mixer') ||
    normalizedInput.includes('mixers') ||
    normalizedInput.includes('crane') ||
    normalizedInput.includes('cranes') ||
    normalizedInput.includes('dumper') ||
    normalizedInput.includes('concrete') ||
    normalizedInput.includes('building') ||
    normalizedInput.includes('excavation') ||
    normalizedInput.includes('mining')
  ) {
    category = 'construction';

    // Check for construction subcategories using our mapping
    for (const [key, value] of Object.entries(subcategoryMap['construction'])) {
      if (normalizedInput.includes(key)) {
        subcategory = value;
        break;
      }
    }
  }

  // Check for specialty vehicle terms
  if (
    normalizedInput.includes('specialty') ||
    normalizedInput.includes('special') ||
    normalizedInput.includes('fire') ||
    normalizedInput.includes('ambulance') ||
    normalizedInput.includes('emergency') ||
    normalizedInput.includes('defense') ||
    normalizedInput.includes('military') ||
    normalizedInput.includes('workshop') ||
    normalizedInput.includes('mobile workshop') ||
    normalizedInput.includes('service vehicle')
  ) {
    category = 'specialty';

    // Check for specialty subcategories using our mapping
    for (const [key, value] of Object.entries(subcategoryMap['specialty'])) {
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
