// Core vehicle types for Tata Commercial Vehicles platform

export type VehicleCategory = 'trucks' | 'buses' | 'construction' | 'specialty';
export type TruckSubcategory = 'lcv' | 'mcv' | 'hcv' | 'mav';
export type BusSubcategory = 'city' | 'school' | 'luxury' | 'staff';
export type ConstructionSubcategory = 'tippers' | 'mixers' | 'cranes' | 'specialized';
export type SpecialtySubcategory = 'fire' | 'ambulance' | 'mobile_workshop' | 'defense';

export type FuelType = 'diesel' | 'cng' | 'electric' | 'hybrid';
export type TransmissionType = 'manual' | 'automatic' | 'amt' | 'cvt';
export type DriveType = '4x2' | '4x4' | '6x2' | '6x4' | '8x2' | '8x4' | '10x2' | '10x4';

export interface EngineSpecifications {
  model: string;
  displacement: number; // in cc
  power: number; // in HP
  torque: number; // in Nm
  fuelType: FuelType;
  emissionStandard: string; // BS6, Euro 6, etc.
  cylinders: number;
  valvesPerCylinder: number;
  compressionRatio: string;
  maxRpm: number;
  idlingRpm: number;
}

export interface PerformanceSpecifications {
  maxSpeed: number; // km/h
  gradeability: number; // percentage
  fuelEfficiency: number; // km/l or km/kg for CNG
  acceleration0to60: number; // seconds
  brakingDistance: number; // meters from 60km/h
  turningRadius: number; // meters
  groundClearance: number; // mm
  wadingDepth: number; // mm
}

export interface DimensionSpecifications {
  length: number; // mm
  width: number; // mm
  height: number; // mm
  wheelbase: number; // mm
  frontOverhang: number; // mm
  rearOverhang: number; // mm
  trackWidth: {
    front: number; // mm
    rear: number; // mm
  };
}

export interface CapacitySpecifications {
  grossVehicleWeight: number; // kg
  kerbWeight: number; // kg
  payloadCapacity: number; // kg
  fuelTankCapacity: number; // liters
  passengerCapacity?: number; // for buses
  cargoVolume?: number; // cubic meters
  towingCapacity?: number; // kg
  axleLoad: {
    front: number; // kg
    rear: number; // kg
  };
}

export interface SafetyFeatures {
  abs: boolean;
  ebd: boolean;
  esp: boolean;
  airbags: number;
  seatBelts: number;
  childSafetyLocks: boolean;
  immobilizer: boolean;
  centralLocking: boolean;
  crashTestRating?: string;
  reverseCamera: boolean;
  parkingSensors: boolean;
  hillHoldAssist: boolean;
  tractionControl: boolean;
}

export interface ComfortFeatures {
  airConditioning: boolean;
  powerSteering: boolean;
  powerWindows: boolean;
  musicSystem: boolean;
  bluetoothConnectivity: boolean;
  usbPorts: number;
  cupHolders: number;
  storageCompartments: number;
  adjustableSeats: boolean;
  tiltSteeringWheel: boolean;
  cruiseControl: boolean;
  digitalCluster: boolean;
}

export interface TechnologyFeatures {
  touchscreenSize?: number; // inches
  gpsNavigation: boolean;
  telematicsSystem: boolean;
  fleetManagement: boolean;
  diagnosticSystem: boolean;
  remoteDoorLock: boolean;
  smartConnectivity: boolean;
  mobileApp: boolean;
  voiceCommands: boolean;
  wirelessCharging: boolean;
}

export interface MaintenanceInfo {
  serviceInterval: number; // km or months
  warrantyPeriod: number; // months
  warrantyKilometers: number;
  oilCapacity: number; // liters
  coolantCapacity: number; // liters
  batterySpecification: string;
  tireSize: string;
  spareWheelType: string;
  toolKit: boolean;
  firstAidKit: boolean;
}

export interface VehicleSpecifications {
  engine: EngineSpecifications;
  performance: PerformanceSpecifications;
  dimensions: DimensionSpecifications;
  capacity: CapacitySpecifications;
  safety: SafetyFeatures;
  comfort: ComfortFeatures;
  technology: TechnologyFeatures;
  maintenance: MaintenanceInfo;
  transmission: {
    type: TransmissionType;
    gears: number;
    clutchType?: string;
  };
  suspension: {
    front: string;
    rear: string;
  };
  brakes: {
    front: string;
    rear: string;
    parkingBrake: string;
  };
  steering: {
    type: string;
    turnsLockToLock: number;
  };
  wheels: {
    size: string;
    type: string;
    spareWheel: boolean;
  };
}

export interface ApplicationArea {
  id: string;
  name: string;
  description: string;
  suitability: number; // 1-10 rating
  keyAdvantages: string[];
  typicalUseCases: string[];
  recommendedConfiguration?: Partial<VehicleConfiguration>;
}

export interface VehicleConfiguration {
  bodyType: string;
  color: {
    exterior: string;
    interior: string;
  };
  engineVariant: string;
  transmissionOption: TransmissionType;
  driveConfiguration: DriveType;
  additionalFeatures: string[];
  accessories: string[];
  customizations: {
    [key: string]: any;
  };
}

export interface VehicleMedia {
  images: {
    exterior: string[];
    interior: string[];
    engine: string[];
    features: string[];
  };
  videos: {
    overview?: string;
    testDrive?: string;
    features?: string;
  };
  documents: {
    brochure?: string;
    specifications?: string;
    userManual?: string;
  };
  virtual360?: {
    exterior: string;
    interior: string;
  };
}

export interface PricingInfo {
  basePrice: number;
  variants: {
    [key: string]: {
      price: number;
      features: string[];
    };
  };
  financing: {
    emiOptions: {
      tenure: number; // months
      downPayment: number; // percentage
      emiAmount: number;
    }[];
    loanPartners: string[];
  };
  insurance: {
    partners: string[];
    estimatedPremium: number;
  };
  offers?: {
    title: string;
    description: string;
    validTill: string;
    discount: number;
  }[];
}

export interface Vehicle {
  id: string;
  name: string;
  model: string;
  year: number;
  category: VehicleCategory;
  subcategory: string;
  specifications: VehicleSpecifications;
  configuration: VehicleConfiguration;
  applications: ApplicationArea[];
  media: VehicleMedia;
  pricing: PricingInfo;
  availability: {
    inStock: boolean;
    deliveryTime: number; // days
    locations: string[];
  };
  ratings: {
    overall: number;
    performance: number;
    fuelEfficiency: number;
    comfort: number;
    reliability: number;
    reviews: number;
  };
  competitors: string[]; // Vehicle IDs of competing models
  isHighlighted: boolean; // For UI highlighting
  isFeatured: boolean;
  launchDate: string;
  discontinuedDate?: string;
}

export interface VehicleFilter {
  category?: VehicleCategory[];
  subcategory?: string[];
  priceRange?: {
    min: number;
    max: number;
  };
  fuelType?: FuelType[];
  payloadRange?: {
    min: number;
    max: number;
  };
  applications?: string[];
  features?: string[];
  availability?: boolean;
}

export interface VehicleComparison {
  vehicles: Vehicle[];
  comparisonPoints: {
    specifications: boolean;
    pricing: boolean;
    features: boolean;
    performance: boolean;
  };
}

export interface RecommendationCriteria {
  application: string;
  budgetRange: {
    min: number;
    max: number;
  };
  requiredPayload: number;
  preferredFuelType?: FuelType;
  mustHaveFeatures: string[];
  routeType: 'city' | 'highway' | 'mixed' | 'offroad';
  operatingHours: number; // hours per day
  maintenancePriority: 'low_cost' | 'reliability' | 'performance';
}

export interface VehicleRecommendation {
  vehicle: Vehicle;
  matchScore: number; // 0-100
  reasons: string[];
  configuration: Partial<VehicleConfiguration>;
  estimatedTco: number; // Total Cost of Ownership
}

// Utility types for UI components
export interface VehicleDisplayProps {
  vehicles: Vehicle[];
  activeCategory: VehicleCategory;
  activeSubcategory: string;
  filter?: VehicleFilter;
  onVehicleSelect: (vehicle: Vehicle) => void;
  onCategoryChange: (category: VehicleCategory, subcategory?: string) => void;
}

export interface VehicleConfiguratorProps {
  vehicle: Vehicle;
  onConfigurationChange: (config: Partial<VehicleConfiguration>) => void;
  availableOptions: {
    bodyTypes: string[];
    colors: string[];
    engines: string[];
    transmissions: TransmissionType[];
    accessories: string[];
  };
}

export interface SpecificationDisplayProps {
  specifications: VehicleSpecifications;
  compact?: boolean;
  sections?: ('engine' | 'performance' | 'dimensions' | 'capacity' | 'safety' | 'comfort' | 'technology')[];
}