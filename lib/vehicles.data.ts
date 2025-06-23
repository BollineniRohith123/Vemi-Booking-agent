import { VehicleCategory } from './vehicle.types';

export interface SimpleVehicle {
  name: string;
  model: string;
  category: VehicleCategory;
  subcategory: string;
  isHighlighted: boolean;
  specifications: {
    capacity: {
      grossVehicleWeight: number;
    };
    engine: {
      power: number;
    };
  };
  pricing: {
    basePrice: number;
  };
}

export const vehiclesData: SimpleVehicle[] = [
  // HEAVY DUTY TRUCKS (Prima Series) - Premium Long Haul
  {
    name: 'Tata Prima 5.9L Heavy Duty Truck (32 Ton)',
    model: 'Prima 5.9L Heavy Duty (32T)',
    category: 'trucks',
    subcategory: 'hcv',
    isHighlighted: false,
    specifications: {
      capacity: { grossVehicleWeight: 32000 },
      engine: { power: 530 }
    },
    pricing: { basePrice: 4500000 }
  },
  {
    name: 'Tata Prima 4.5L Heavy Duty Truck (35 Ton)',
    model: 'Prima 4.5L Heavy Duty (35T)', 
    category: 'trucks',
    subcategory: 'hcv',
    isHighlighted: false,
    specifications: {
      capacity: { grossVehicleWeight: 35000 },
      engine: { power: 300 }
    },
    pricing: { basePrice: 4200000 }
  },
  {
    name: 'Tata Prima 3.8L Premium Truck (31 Ton)',
    model: 'Prima 3.8L Premium (31T)',
    category: 'trucks',
    subcategory: 'hcv',
    isHighlighted: false,
    specifications: {
      capacity: { grossVehicleWeight: 31000 },
      engine: { power: 250 }
    },
    pricing: { basePrice: 3600000 }
  },

  // MEDIUM & HEAVY COMMERCIAL VEHICLES (M&HCV)
  {
    name: 'Tata Signa 3.8L Multi-Axle Truck (37 Ton)',
    model: 'Signa 3.8L Multi-Axle (37T)',
    category: 'trucks',
    subcategory: 'mcv',
    isHighlighted: false,
    specifications: {
      capacity: { grossVehicleWeight: 37000 },
      engine: { power: 180 }
    },
    pricing: { basePrice: 3200000 }
  },
  {
    name: 'Tata LPK 3.8L Cargo Truck (31 Ton)',
    model: 'LPK 3.8L Cargo (31T)',
    category: 'trucks',
    subcategory: 'mcv',
    isHighlighted: false,
    specifications: {
      capacity: { grossVehicleWeight: 31000 },
      engine: { power: 180 }
    },
    pricing: { basePrice: 2850000 }
  },

  // LIGHT & MEDIUM TRUCKS (LPT Series)
  {
    name: 'Tata LPT 3.8L Medium Truck (15 Ton)',
    model: 'LPT 3.8L Medium (15T)',
    category: 'trucks',
    subcategory: 'lcv',
    isHighlighted: false,
    specifications: {
      capacity: { grossVehicleWeight: 15000 },
      engine: { power: 120 }
    },
    pricing: { basePrice: 1850000 }
  },
  {
    name: 'Tata LPT 2.2L City Truck (7.5 Ton)',
    model: 'LPT 2.2L City (7.5T)',
    category: 'trucks',
    subcategory: 'lcv',
    isHighlighted: false,
    specifications: {
      capacity: { grossVehicleWeight: 7500 },
      engine: { power: 102 }
    },
    pricing: { basePrice: 1250000 }
  },
  {
    name: 'Tata LPT 2.2L CNG Truck (11 Ton)',
    model: 'LPT 2.2L CNG (11T)',
    category: 'trucks',
    subcategory: 'lcv',
    isHighlighted: false,
    specifications: {
      capacity: { grossVehicleWeight: 11000 },
      engine: { power: 140 }
    },
    pricing: { basePrice: 1475000 }
  },
  {
    name: 'Tata LPT 3.8L Medium Truck (12 Ton)',
    model: 'LPT 3.8L Medium (12T)',
    category: 'trucks',
    subcategory: 'lcv',
    isHighlighted: false,
    specifications: {
      capacity: { grossVehicleWeight: 12000 },
      engine: { power: 120 }
    },
    pricing: { basePrice: 1625000 }
  },

  // LIGHT COMMERCIAL VEHICLES (Ultra Series)
  {
    name: 'Tata Ultra 2.2L City Delivery Truck (7.5 Ton)',
    model: 'Ultra 2.2L City Delivery (7.5T)',
    category: 'trucks',
    subcategory: 'lcv',
    isHighlighted: false,
    specifications: {
      capacity: { grossVehicleWeight: 7500 },
      engine: { power: 140 }
    },
    pricing: { basePrice: 875000 }
  },
  {
    name: 'Tata Ace 1.5 Ton Mini Truck',
    model: 'Ace 1.5T Mini Truck',
    category: 'trucks',
    subcategory: 'lcv',
    isHighlighted: false,
    specifications: {
      capacity: { grossVehicleWeight: 1500 },
      engine: { power: 85 }
    },
    pricing: { basePrice: 650000 }
  },
  {
    name: 'Tata Ace Gold 1.5 Ton Mini Truck',
    model: 'Ace Gold 1.5T Mini',
    category: 'trucks',
    subcategory: 'lcv',
    isHighlighted: false,
    specifications: {
      capacity: { grossVehicleWeight: 1500 },
      engine: { power: 70 }
    },
    pricing: { basePrice: 725000 }
  },
  {
    name: 'Tata Intra 1 Ton Pickup Truck',
    model: 'Intra 1T Pickup',
    category: 'trucks',
    subcategory: 'lcv',
    isHighlighted: false,
    specifications: {
      capacity: { grossVehicleWeight: 1000 },
      engine: { power: 70 }
    },
    pricing: { basePrice: 585000 }
  },

  // PASSENGER BUSES (StarBus Series)
  {
    name: 'Tata StarBus City Bus (52 Seater)',
    model: 'StarBus City (52 Seater)',
    category: 'buses',
    subcategory: 'city',
    isHighlighted: false,
    specifications: {
      capacity: { grossVehicleWeight: 16500 },
      engine: { power: 140 }
    },
    pricing: { basePrice: 2850000 }
  },
  {
    name: 'Tata StarBus Intercity Bus (41 Seater)',
    model: 'StarBus Intercity (41 Seater)',
    category: 'buses',
    subcategory: 'city',
    isHighlighted: false,
    specifications: {
      capacity: { grossVehicleWeight: 14500 },
      engine: { power: 125 }
    },
    pricing: { basePrice: 2575000 }
  },
  {
    name: 'Tata StarBus AC Luxury Coach (45 Seater)',
    model: 'StarBus AC Luxury (45 Seater)',
    category: 'buses',
    subcategory: 'luxury',
    isHighlighted: false,
    specifications: {
      capacity: { grossVehicleWeight: 15500 },
      engine: { power: 150 }
    },
    pricing: { basePrice: 3200000 }
  },
  {
    name: 'Tata StarBus Hybrid Bus (40 Seater)',
    model: 'StarBus Hybrid (40 Seater)',
    category: 'buses',
    subcategory: 'luxury',
    isHighlighted: false,
    specifications: {
      capacity: { grossVehicleWeight: 14000 },
      engine: { power: 120 }
    },
    pricing: { basePrice: 4200000 }
  },
  {
    name: 'Tata School Bus (35 Seater)',
    model: 'School Bus (35 Seater)',
    category: 'buses',
    subcategory: 'school',
    isHighlighted: false,
    specifications: {
      capacity: { grossVehicleWeight: 12000 },
      engine: { power: 100 }
    },
    pricing: { basePrice: 1850000 }
  },
  {
    name: 'Tata Winger Staff Bus (13 Seater)',
    model: 'Winger Staff (13 Seater)',
    category: 'buses',
    subcategory: 'staff',
    isHighlighted: false,
    specifications: {
      capacity: { grossVehicleWeight: 3500 },
      engine: { power: 85 }
    },
    pricing: { basePrice: 1275000 }
  },

  // CONSTRUCTION & MINING VEHICLES
  {
    name: 'Tata Prima 5.9L Tipper Truck (31 Ton)',
    model: 'Prima 5.9L Tipper (31T)',
    category: 'construction',
    subcategory: 'tippers',
    isHighlighted: false,
    specifications: {
      capacity: { grossVehicleWeight: 31000 },
      engine: { power: 230 }
    },
    pricing: { basePrice: 3850000 }
  },
  {
    name: 'Tata LPT 3.8L Tipper Truck (25 Ton)',
    model: 'LPT 3.8L Tipper (25T)',
    category: 'construction',
    subcategory: 'tippers',
    isHighlighted: false,
    specifications: {
      capacity: { grossVehicleWeight: 25000 },
      engine: { power: 180 }
    },
    pricing: { basePrice: 2275000 }
  },
  {
    name: 'Tata LPT 3.8L Medium Tipper (16 Ton)',
    model: 'LPT 3.8L Medium Tipper (16T)',
    category: 'construction',
    subcategory: 'tippers',
    isHighlighted: false,
    specifications: {
      capacity: { grossVehicleWeight: 16000 },
      engine: { power: 130 }
    },
    pricing: { basePrice: 1925000 }
  },
  {
    name: 'Tata Signa 5.9L Concrete Mixer (28 Ton)',
    model: 'Signa 5.9L Concrete Mixer (28T)',
    category: 'construction',
    subcategory: 'mixers',
    isHighlighted: false,
    specifications: {
      capacity: { grossVehicleWeight: 28000 },
      engine: { power: 200 }
    },
    pricing: { basePrice: 4250000 }
  },
  {
    name: 'Tata LPT 2.2L Water Tanker (11 Ton)',
    model: 'LPT 2.2L Water Tanker (11T)',
    category: 'construction',
    subcategory: 'specialized',
    isHighlighted: false,
    specifications: {
      capacity: { grossVehicleWeight: 11000 },
      engine: { power: 140 }
    },
    pricing: { basePrice: 1675000 }
  },
  {
    name: 'Tata Prima 7.2L Crane Carrier (49 Ton)',
    model: 'Prima 7.2L Crane (49T)',
    category: 'construction',
    subcategory: 'cranes',
    isHighlighted: false,
    specifications: {
      capacity: { grossVehicleWeight: 49000 },
      engine: { power: 350 }
    },
    pricing: { basePrice: 6500000 }
  },
  {
    name: 'Tata LPT 3.8L Equipment Carrier (15 Ton)',
    model: 'LPT 3.8L Equipment Carrier (15T)',
    category: 'construction',
    subcategory: 'specialized',
    isHighlighted: false,
    specifications: {
      capacity: { grossVehicleWeight: 15000 },
      engine: { power: 120 }
    },
    pricing: { basePrice: 2150000 }
  },

  // SPECIALTY VEHICLES (Emergency & Defense)
  {
    name: 'Tata Fire Truck 2.2L (Fire & Rescue)',
    model: 'Fire Truck 2.2L',
    category: 'specialty',
    subcategory: 'fire',
    isHighlighted: false,
    specifications: {
      capacity: { grossVehicleWeight: 12000 },
      engine: { power: 140 }
    },
    pricing: { basePrice: 3500000 }
  },
  {
    name: 'Tata Winger Ambulance (Patient Transport)',
    model: 'Winger Ambulance',
    category: 'specialty',
    subcategory: 'ambulance',
    isHighlighted: false,
    specifications: {
      capacity: { grossVehicleWeight: 3500 },
      engine: { power: 85 }
    },
    pricing: { basePrice: 1850000 }
  },
  {
    name: 'Tata Safari Army Vehicle (All-Terrain)',
    model: 'Safari Army All-Terrain',
    category: 'specialty',
    subcategory: 'defense',
    isHighlighted: false,
    specifications: {
      capacity: { grossVehicleWeight: 2500 },
      engine: { power: 140 }
    },
    pricing: { basePrice: 2500000 }
  },
  {
    name: 'Tata Mobile Workshop 2.2L (Service Van)',
    model: 'Mobile Workshop 2.2L',
    category: 'specialty',
    subcategory: 'mobile_workshop',
    isHighlighted: false,
    specifications: {
      capacity: { grossVehicleWeight: 11000 },
      engine: { power: 140 }
    },
    pricing: { basePrice: 2275000 }
  },
  {
    name: 'Tata Ultra Garbage Truck (Waste Management)',
    model: 'Ultra Garbage Truck',
    category: 'specialty',
    subcategory: 'mobile_workshop',
    isHighlighted: false,
    specifications: {
      capacity: { grossVehicleWeight: 7500 },
      engine: { power: 100 }
    },
    pricing: { basePrice: 1550000 }
  },
  {
    name: 'Tata Mobile Clinic 3.8L (Healthcare Van)',
    model: 'Mobile Clinic 3.8L',
    category: 'specialty',
    subcategory: 'mobile_workshop',
    isHighlighted: false,
    specifications: {
      capacity: { grossVehicleWeight: 12000 },
      engine: { power: 120 }
    },
    pricing: { basePrice: 2800000 }
  }
];

export function getVehiclesByCategory(category: VehicleCategory): SimpleVehicle[] {
  return vehiclesData.filter(vehicle => vehicle.category === category);
}

export function getVehiclesBySubcategory(category: VehicleCategory, subcategory: string): SimpleVehicle[] {
  return vehiclesData.filter(vehicle => 
    vehicle.category === category && vehicle.subcategory === subcategory
  );
}
