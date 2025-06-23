import { Vehicle, VehicleCategory, ApplicationArea } from './vehicle.types';

// Application areas for commercial vehicles
export const applicationAreas: ApplicationArea[] = [
  {
    id: 'logistics',
    name: 'Logistics & Transportation',
    description: 'Long-haul transportation, inter-city logistics, and cargo movement',
    suitability: 9,
    keyAdvantages: ['High payload capacity', 'Fuel efficiency', 'Driver comfort', 'Reliability'],
    typicalUseCases: ['E-commerce delivery', 'Inter-city cargo', 'Supply chain', 'Express delivery']
  },
  {
    id: 'construction',
    name: 'Construction & Infrastructure',
    description: 'Heavy-duty applications for construction and infrastructure projects',
    suitability: 10,
    keyAdvantages: ['Robust build', 'High torque', 'Off-road capability', 'Heavy payload'],
    typicalUseCases: ['Material transport', 'Concrete mixing', 'Heavy lifting', 'Site operations']
  },
  {
    id: 'mining',
    name: 'Mining Operations',
    description: 'Specialized vehicles for mining and quarrying operations',
    suitability: 8,
    keyAdvantages: ['Extreme durability', 'High GVW', 'Specialized bodies', 'Harsh environment capability'],
    typicalUseCases: ['Coal transport', 'Ore hauling', 'Mining equipment transport', 'Off-road mining']
  },
  {
    id: 'passenger',
    name: 'Passenger Transportation',
    description: 'Public and private passenger transportation services',
    suitability: 9,
    keyAdvantages: ['Passenger comfort', 'Safety features', 'Fuel efficiency', 'Low maintenance'],
    typicalUseCases: ['City bus service', 'School transportation', 'Staff shuttle', 'Tourist coaches']
  },
  {
    id: 'emergency',
    name: 'Emergency Services',
    description: 'Specialized vehicles for emergency and rescue operations',
    suitability: 10,
    keyAdvantages: ['Quick response', 'Specialized equipment', 'Reliability', 'Safety features'],
    typicalUseCases: ['Fire fighting', 'Medical emergency', 'Disaster response', 'Rescue operations']
  },
  {
    id: 'agriculture',
    name: 'Agriculture & Rural',
    description: 'Agricultural and rural transportation needs',
    suitability: 8,
    keyAdvantages: ['Versatility', 'Rural road capability', 'Cost efficiency', 'Easy maintenance'],
    typicalUseCases: ['Farm produce transport', 'Agricultural equipment', 'Rural connectivity', 'Market access']
  }
];

// Comprehensive Tata Commercial Vehicles Data
export const vehiclesData: Vehicle[] = [
  // HEAVY DUTY TRUCKS - Prima Range
  {
    id: 'prima-fl-5530s',
    name: 'Tata Prima FL 5530.S',
    model: 'Prima FL 5530.S',
    year: 2025,
    category: 'trucks' as VehicleCategory,
    subcategory: 'hcv',
    specifications: {
      engine: {
        model: 'Cummins ISBe 6.7',
        displacement: 6700,
        power: 300,
        torque: 1100,
        fuelType: 'diesel',
        emissionStandard: 'BS6',
        cylinders: 6,
        valvesPerCylinder: 4,
        compressionRatio: '17.5:1',
        maxRpm: 2500,
        idlingRpm: 700
      },
      performance: {
        maxSpeed: 80,
        gradeability: 20,
        fuelEfficiency: 3.5,
        acceleration0to60: 40,
        brakingDistance: 60,
        turningRadius: 10.5,
        groundClearance: 250,
        wadingDepth: 400
      },
      dimensions: {
        length: 7000,
        width: 2500,
        height: 3200,
        wheelbase: 3900,
        frontOverhang: 1400,
        rearOverhang: 1700,
        trackWidth: {
          front: 2050,
          rear: 1850
        }
      },
      capacity: {
        grossVehicleWeight: 55000,
        kerbWeight: 9500,
        payloadCapacity: 45500,
        fuelTankCapacity: 365,
        axleLoad: {
          front: 7500,
          rear: 47500
        }
      },
      safety: {
        abs: true,
        ebd: true,
        esp: true,
        airbags: 2,
        seatBelts: 2,
        childSafetyLocks: false,
        immobilizer: true,
        centralLocking: true,
        reverseCamera: true,
        parkingSensors: true,
        hillHoldAssist: true,
        tractionControl: true
      },
      comfort: {
        airConditioning: true,
        powerSteering: true,
        powerWindows: true,
        musicSystem: true,
        bluetoothConnectivity: true,
        usbPorts: 2,
        cupHolders: 2,
        storageCompartments: 4,
        adjustableSeats: true,
        tiltSteeringWheel: true,
        cruiseControl: true,
        digitalCluster: true
      },
      technology: {
        gpsNavigation: true,
        telematicsSystem: true,
        fleetManagement: true,
        diagnosticSystem: true,
        remoteDoorLock: true,
        smartConnectivity: true,
        mobileApp: true,
        voiceCommands: true,
        wirelessCharging: false
      },
      maintenance: {
        serviceInterval: 20000,
        warrantyPeriod: 36,
        warrantyKilometers: 300000,
        oilCapacity: 18,
        coolantCapacity: 25,
        batterySpecification: '24V 150Ah',
        tireSize: '295/80R22.5',
        spareWheelType: 'Steel',
        toolKit: true,
        firstAidKit: true
      },
      transmission: {
        type: 'manual',
        gears: 9,
        clutchType: 'Single plate dry clutch'
      },
      suspension: {
        front: 'Parabolic leaf spring',
        rear: 'Bogey suspension'
      },
      brakes: {
        front: 'Drum with ABS',
        rear: 'Drum with ABS',
        parkingBrake: 'Spring brake'
      },
      steering: {
        type: 'Power assisted',
        turnsLockToLock: 5.5
      },
      wheels: {
        size: '22.5 inch',
        type: 'Steel',
        spareWheel: true
      }
    },
    configuration: {
      bodyType: 'Tractor',
      color: {
        exterior: 'White',
        interior: 'Grey'
      },
      engineVariant: 'Cummins ISBe 6.7 300HP',
      transmissionOption: 'manual',
      driveConfiguration: '6x4',
      additionalFeatures: ['AC', 'Cruise Control', 'Telematics'],
      accessories: ['Tool kit', 'Spare wheel'],
      customizations: {}
    },
    applications: [applicationAreas[0]], // Long haul transport
    media: {
      images: {
        exterior: ['/images/vehicles/prima-fl-5530s-exterior.jpg'],
        interior: ['/images/vehicles/prima-fl-5530s-interior.jpg'],
        engine: ['/images/vehicles/prima-fl-5530s-engine.jpg'],
        features: ['/images/vehicles/prima-fl-5530s-features.jpg']
      },
      videos: {
        overview: '/videos/prima-fl-5530s-overview.mp4'
      },
      documents: {
        brochure: '/docs/prima-fl-5530s-brochure.pdf',
        specifications: '/docs/prima-fl-5530s-specs.pdf'
      }
    },
    pricing: {
      basePrice: 4200000,
      variants: {
        'Prima FL 5530.S': {
          price: 4200000,
          features: ['300 HP Engine', 'ABS', 'Cruise Control']
        }
      },
      financing: {
        emiOptions: [
          { tenure: 48, downPayment: 20, emiAmount: 95000 }
        ],
        loanPartners: ['Tata Motors Finance', 'HDFC Bank']
      },
      insurance: {
        partners: ['Tata AIG', 'HDFC ERGO'],
        estimatedPremium: 120000
      }
    },
    availability: {
      inStock: true,
      deliveryTime: 45,
      locations: ['Mumbai', 'Delhi', 'Chennai']
    },
    ratings: {
      overall: 4.5,
      performance: 4.6,
      fuelEfficiency: 4.0,
      comfort: 4.3,
      reliability: 4.7,
      reviews: 320
    },
    competitors: ['volvo-fh16', 'scania-r-series'],
    isHighlighted: true,
    isFeatured: true,
    launchDate: '2025-01-01'
  },

  {
    id: 'prima-3530k-hrt',
    name: 'Tata Prima 3530.K HRT',
    model: 'Prima 3530.K HRT',
    year: 2025,
    category: 'trucks' as VehicleCategory,
    subcategory: 'hcv',
    specifications: {
      engine: {
        model: 'Cummins ISBe 6.7',
        displacement: 6700,
        power: 300,
        torque: 970,
        fuelType: 'diesel',
        emissionStandard: 'BS6',
        cylinders: 6,
        valvesPerCylinder: 4,
        compressionRatio: '17.3:1',
        maxRpm: 2500,
        idlingRpm: 700
      },
      performance: {
        maxSpeed: 85,
        gradeability: 23,
        fuelEfficiency: 3.8,
        acceleration0to60: 38,
        brakingDistance: 55,
        turningRadius: 9.8,
        groundClearance: 255,
        wadingDepth: 420
      },
      dimensions: {
        length: 6800,
        width: 2490,
        height: 3100,
        wheelbase: 3800,
        frontOverhang: 1350,
        rearOverhang: 1650,
        trackWidth: {
          front: 2040,
          rear: 1840
        }
      },
      capacity: {
        grossVehicleWeight: 35000,
        kerbWeight: 8500,
        payloadCapacity: 26500,
        fuelTankCapacity: 320,
        axleLoad: {
          front: 7000,
          rear: 28000
        }
      },
      safety: {
        abs: true,
        ebd: true,
        esp: true,
        airbags: 1,
        seatBelts: 2,
        childSafetyLocks: false,
        immobilizer: true,
        centralLocking: true,
        reverseCamera: true,
        parkingSensors: true,
        hillHoldAssist: true,
        tractionControl: true
      },
      comfort: {
        airConditioning: true,
        powerSteering: true,
        powerWindows: true,
        musicSystem: true,
        bluetoothConnectivity: true,
        usbPorts: 2,
        cupHolders: 2,
        storageCompartments: 4,
        adjustableSeats: true,
        tiltSteeringWheel: true,
        cruiseControl: true,
        digitalCluster: true
      },
      technology: {
        gpsNavigation: true,
        telematicsSystem: true,
        fleetManagement: true,
        diagnosticSystem: true,
        remoteDoorLock: true,
        smartConnectivity: true,
        mobileApp: true,
        voiceCommands: false,
        wirelessCharging: false
      },
      maintenance: {
        serviceInterval: 20000,
        warrantyPeriod: 36,
        warrantyKilometers: 300000,
        oilCapacity: 17,
        coolantCapacity: 24,
        batterySpecification: '24V 150Ah',
        tireSize: '295/80R22.5',
        spareWheelType: 'Steel',
        toolKit: true,
        firstAidKit: true
      },
      transmission: {
        type: 'manual',
        gears: 9,
        clutchType: 'Single plate dry clutch'
      },
      suspension: {
        front: 'Parabolic leaf spring',
        rear: 'Heavy duty bogie suspension'
      },
      brakes: {
        front: 'Drum with ABS',
        rear: 'Drum with ABS',
        parkingBrake: 'Spring brake'
      },
      steering: {
        type: 'Power assisted',
        turnsLockToLock: 5.2
      },
      wheels: {
        size: '22.5 inch',
        type: 'Steel',
        spareWheel: true
      }
    },
    configuration: {
      bodyType: 'Mining Tipper',
      color: {
        exterior: 'Yellow',
        interior: 'Black'
      },
      engineVariant: 'Cummins ISBe 6.7 300HP',
      transmissionOption: 'manual',
      driveConfiguration: '8x4',
      additionalFeatures: ['Mining specific chassis', 'Rock body', 'Heavy duty suspension'],
      accessories: ['Tool kit', 'Spare wheel', 'Warning triangle'],
      customizations: {
        bodyOptions: ['Standard Rock Body', 'Heavy Duty Rock Body'],
        cabOptions: ['Day Cab', 'Sleeper Cab']
      }
    },
    applications: [applicationAreas[1], applicationAreas[2]], // Construction & Mining
    media: {
      images: {
        exterior: ['/images/vehicles/prima-3530k-hrt-exterior.jpg'],
        interior: ['/images/vehicles/prima-3530k-hrt-interior.jpg'],
        engine: ['/images/vehicles/prima-3530k-hrt-engine.jpg'],
        features: ['/images/vehicles/prima-3530k-hrt-features.jpg']
      },
      videos: {
        overview: '/videos/prima-3530k-hrt-overview.mp4'
      },
      documents: {
        brochure: '/docs/prima-3530k-hrt-brochure.pdf',
        specifications: '/docs/prima-3530k-hrt-specs.pdf'
      }
    },
    pricing: {
      basePrice: 3800000,
      variants: {
        'Prima 3530.K HRT Standard': {
          price: 3800000,
          features: ['300 HP Engine', 'Standard Rock Body', 'Day Cab']
        },
        'Prima 3530.K HRT Premium': {
          price: 4100000,
          features: ['300 HP Engine', 'Heavy Duty Rock Body', 'Sleeper Cab']
        }
      },
      financing: {
        emiOptions: [
          { tenure: 48, downPayment: 20, emiAmount: 88000 },
          { tenure: 60, downPayment: 25, emiAmount: 75000 }
        ],
        loanPartners: ['Tata Motors Finance', 'HDFC Bank', 'SBI']
      },
      insurance: {
        partners: ['Tata AIG', 'HDFC ERGO', 'New India Assurance'],
        estimatedPremium: 110000
      }
    },
    availability: {
      inStock: true,
      deliveryTime: 40,
      locations: ['Mumbai', 'Delhi', 'Kolkata', 'Dhanbad']
    },
    ratings: {
      overall: 4.6,
      performance: 4.7,
      fuelEfficiency: 4.2,
      comfort: 4.4,
      reliability: 4.8,
      reviews: 280
    },
    competitors: ['bharat-benz-3528cm', 'volvo-fm-440'],
    isHighlighted: false,
    isFeatured: true,
    launchDate: '2024-09-15'
  },

  {
    id: 'prima-2830k',
    name: 'Tata Prima 2830.K',
    model: 'Prima 2830.K',
    year: 2025,
    category: 'trucks' as VehicleCategory,
    subcategory: 'hcv',
    specifications: {
      engine: {
        model: 'DICOR 4S',
        displacement: 3783,
        power: 180,
        torque: 700,
        fuelType: 'diesel',
        emissionStandard: 'BS6',
        cylinders: 4,
        valvesPerCylinder: 4,
        compressionRatio: '17.3:1',
        maxRpm: 2500,
        idlingRpm: 700
      },
      performance: {
        maxSpeed: 90,
        gradeability: 25,
        fuelEfficiency: 4.2,
        acceleration0to60: 35,
        brakingDistance: 50,
        turningRadius: 8.5,
        groundClearance: 240,
        wadingDepth: 400
      },
      dimensions: {
        length: 6500,
        width: 2450,
        height: 2900,
        wheelbase: 3600,
        frontOverhang: 1300,
        rearOverhang: 1600,
        trackWidth: {
          front: 2000,
          rear: 1800
        }
      },
      capacity: {
        grossVehicleWeight: 28000,
        kerbWeight: 7500,
        payloadCapacity: 20500,
        fuelTankCapacity: 280,
        axleLoad: {
          front: 6500,
          rear: 21500
        }
      },
      safety: {
        abs: true,
        ebd: true,
        esp: false,
        airbags: 1,
        seatBelts: 2,
        childSafetyLocks: false,
        immobilizer: true,
        centralLocking: true,
        reverseCamera: true,
        parkingSensors: true,
        hillHoldAssist: true,
        tractionControl: false
      },
      comfort: {
        airConditioning: true,
        powerSteering: true,
        powerWindows: true,
        musicSystem: true,
        bluetoothConnectivity: true,
        usbPorts: 2,
        cupHolders: 2,
        storageCompartments: 3,
        adjustableSeats: true,
        tiltSteeringWheel: true,
        cruiseControl: false,
        digitalCluster: true
      },
      technology: {
        gpsNavigation: true,
        telematicsSystem: true,
        fleetManagement: true,
        diagnosticSystem: true,
        remoteDoorLock: false,
        smartConnectivity: true,
        mobileApp: true,
        voiceCommands: false,
        wirelessCharging: false
      },
      maintenance: {
        serviceInterval: 15000,
        warrantyPeriod: 36,
        warrantyKilometers: 300000,
        oilCapacity: 14,
        coolantCapacity: 20,
        batterySpecification: '24V 120Ah',
        tireSize: '255/70R22.5',
        spareWheelType: 'Steel',
        toolKit: true,
        firstAidKit: true
      },
      transmission: {
        type: 'manual',
        gears: 8,
        clutchType: 'Single plate dry clutch'
      },
      suspension: {
        front: 'Semi-elliptical leaf spring',
        rear: 'Semi-elliptical leaf spring'
      },
      brakes: {
        front: 'Disc with ABS',
        rear: 'Drum with ABS',
        parkingBrake: 'Spring brake'
      },
      steering: {
        type: 'Power assisted',
        turnsLockToLock: 5.0
      },
      wheels: {
        size: '22.5 inch',
        type: 'Steel',
        spareWheel: true
      }
    },
    configuration: {
      bodyType: 'Cargo/Container',
      color: {
        exterior: 'Blue',
        interior: 'Grey'
      },
      engineVariant: 'DICOR 4S 180HP',
      transmissionOption: 'manual',
      driveConfiguration: '6x2',
      additionalFeatures: ['AC', 'Digital cluster', 'Telematics'],
      accessories: ['Tool kit', 'Spare wheel'],
      customizations: {}
    },
    applications: [applicationAreas[0]], // Medium haul transport
    media: {
      images: {
        exterior: ['/images/vehicles/prima-2830k-exterior.jpg'],
        interior: ['/images/vehicles/prima-2830k-interior.jpg'],
        engine: ['/images/vehicles/prima-2830k-engine.jpg'],
        features: ['/images/vehicles/prima-2830k-features.jpg']
      },
      videos: {
        overview: '/videos/prima-2830k-overview.mp4'
      },
      documents: {
        brochure: '/docs/prima-2830k-brochure.pdf',
        specifications: '/docs/prima-2830k-specs.pdf'
      }
    },
    pricing: {
      basePrice: 3200000,
      variants: {
        'Prima 2830.K': {
          price: 3200000,
          features: ['180 HP Engine', 'ABS+EBD', 'Digital Cluster']
        }
      },
      financing: {
        emiOptions: [
          { tenure: 48, downPayment: 25, emiAmount: 72000 },
          { tenure: 60, downPayment: 30, emiAmount: 62000 }
        ],
        loanPartners: ['Tata Motors Finance', 'HDFC Bank', 'SBI']
      },
      insurance: {
        partners: ['Tata AIG', 'HDFC ERGO'],
        estimatedPremium: 95000
      }
    },
    availability: {
      inStock: true,
      deliveryTime: 35,
      locations: ['Mumbai', 'Delhi', 'Chennai', 'Pune']
    },
    ratings: {
      overall: 4.3,
      performance: 4.4,
      fuelEfficiency: 4.1,
      comfort: 4.2,
      reliability: 4.5,
      reviews: 195
    },
    competitors: ['ashok-leyland-captain', 'mahindra-blazo'],
    isHighlighted: false,
    isFeatured: false,
    launchDate: '2024-05-20'
  },

  {
    id: 'prima-lx-3125k',
    name: 'Tata Prima LX 3125.K',
    model: 'Prima LX 3125.K',
    year: 2025,
    category: 'trucks' as VehicleCategory,
    subcategory: 'hcv',
    specifications: {
      engine: {
        model: 'Cummins ISBe 6.7',
        displacement: 6700,
        power: 250,
        torque: 950,
        fuelType: 'diesel',
        emissionStandard: 'BS6',
        cylinders: 6,
        valvesPerCylinder: 4,
        compressionRatio: '17.3:1',
        maxRpm: 2500,
        idlingRpm: 700
      },
      performance: {
        maxSpeed: 85,
        gradeability: 22,
        fuelEfficiency: 3.9,
        acceleration0to60: 36,
        brakingDistance: 52,
        turningRadius: 9.2,
        groundClearance: 245,
        wadingDepth: 410
      },
      dimensions: {
        length: 6600,
        width: 2480,
        height: 3050,
        wheelbase: 3700,
        frontOverhang: 1320,
        rearOverhang: 1580,
        trackWidth: {
          front: 2020,
          rear: 1820
        }
      },
      capacity: {
        grossVehicleWeight: 31000,
        kerbWeight: 8000,
        payloadCapacity: 23000,
        fuelTankCapacity: 300,
        axleLoad: {
          front: 6800,
          rear: 24200
        }
      },
      safety: {
        abs: true,
        ebd: true,
        esp: true,
        airbags: 1,
        seatBelts: 2,
        childSafetyLocks: false,
        immobilizer: true,
        centralLocking: true,
        reverseCamera: true,
        parkingSensors: true,
        hillHoldAssist: true,
        tractionControl: true
      },
      comfort: {
        airConditioning: true,
        powerSteering: true,
        powerWindows: true,
        musicSystem: true,
        bluetoothConnectivity: true,
        usbPorts: 2,
        cupHolders: 2,
        storageCompartments: 4,
        adjustableSeats: true,
        tiltSteeringWheel: true,
        cruiseControl: true,
        digitalCluster: true
      },
      technology: {
        gpsNavigation: true,
        telematicsSystem: true,
        fleetManagement: true,
        diagnosticSystem: true,
        remoteDoorLock: true,
        smartConnectivity: true,
        mobileApp: true,
        voiceCommands: false,
        wirelessCharging: false
      },
      maintenance: {
        serviceInterval: 20000,
        warrantyPeriod: 36,
        warrantyKilometers: 300000,
        oilCapacity: 16,
        coolantCapacity: 22,
        batterySpecification: '24V 140Ah',
        tireSize: '285/75R22.5',
        spareWheelType: 'Steel',
        toolKit: true,
        firstAidKit: true
      },
      transmission: {
        type: 'manual',
        gears: 9,
        clutchType: 'Single plate dry clutch'
      },
      suspension: {
        front: 'Parabolic leaf spring',
        rear: 'Heavy duty leaf spring'
      },
      brakes: {
        front: 'Drum with ABS',
        rear: 'Drum with ABS',
        parkingBrake: 'Spring brake'
      },
      steering: {
        type: 'Power assisted',
        turnsLockToLock: 5.1
      },
      wheels: {
        size: '22.5 inch',
        type: 'Steel',
        spareWheel: true
      }
    },
    configuration: {
      bodyType: 'Construction Tipper',
      color: {
        exterior: 'Orange',
        interior: 'Black'
      },
      engineVariant: 'Cummins ISBe 6.7 250HP',
      transmissionOption: 'manual',
      driveConfiguration: '6x4',
      additionalFeatures: ['Construction grade chassis', 'Heavy duty tipper body', 'AC'],
      accessories: ['Tool kit', 'Spare wheel', 'Safety equipment'],
      customizations: {
        bodyOptions: ['Standard Tipper', 'Heavy Duty Tipper'],
        cabOptions: ['Day Cab', 'Crew Cab']
      }
    },
    applications: [applicationAreas[1]], // Construction
    media: {
      images: {
        exterior: ['/images/vehicles/prima-lx-3125k-exterior.jpg'],
        interior: ['/images/vehicles/prima-lx-3125k-interior.jpg'],
        engine: ['/images/vehicles/prima-lx-3125k-engine.jpg'],
        features: ['/images/vehicles/prima-lx-3125k-features.jpg']
      },
      videos: {
        overview: '/videos/prima-lx-3125k-overview.mp4'
      },
      documents: {
        brochure: '/docs/prima-lx-3125k-brochure.pdf',
        specifications: '/docs/prima-lx-3125k-specs.pdf'
      }
    },
    pricing: {
      basePrice: 3600000,
      variants: {
        'Prima LX 3125.K Standard': {
          price: 3600000,
          features: ['250 HP Engine', 'Standard Tipper Body', 'Day Cab']
        },
        'Prima LX 3125.K Heavy Duty': {
          price: 3850000,
          features: ['250 HP Engine', 'Heavy Duty Tipper Body', 'Crew Cab']
        }
      },
      financing: {
        emiOptions: [
          { tenure: 48, downPayment: 25, emiAmount: 82000 },
          { tenure: 60, downPayment: 30, emiAmount: 70000 }
        ],
        loanPartners: ['Tata Motors Finance', 'HDFC Bank', 'SBI']
      },
      insurance: {
        partners: ['Tata AIG', 'HDFC ERGO', 'Bajaj Allianz'],
        estimatedPremium: 105000
      }
    },
    availability: {
      inStock: true,
      deliveryTime: 38,
      locations: ['Mumbai', 'Delhi', 'Chennai', 'Pune', 'Kolkata']
    },
    ratings: {
      overall: 4.4,
      performance: 4.5,
      fuelEfficiency: 4.0,
      comfort: 4.3,
      reliability: 4.6,
      reviews: 220
    },
    competitors: ['volvo-fm-370', 'bharat-benz-2528c'],
    isHighlighted: false,
    isFeatured: true,
    launchDate: '2024-07-10'
  },

  {
    id: 'prima-e55s-hydrogen',
    name: 'Tata Prima E.55S (Hydrogen)',
    model: 'Prima E.55S (Hydrogen)',
    year: 2025,
    category: 'trucks' as VehicleCategory,
    subcategory: 'hcv',
    specifications: {
      engine: {
        model: 'Hydrogen Fuel Cell',
        displacement: 0, // Electric/Hydrogen
        power: 630,
        torque: 2200,
        fuelType: 'electric',
        emissionStandard: 'Zero Emission',
        cylinders: 0, // Fuel cell
        valvesPerCylinder: 0,
        compressionRatio: 'N/A',
        maxRpm: 0, // Electric motor
        idlingRpm: 0
      },
      performance: {
        maxSpeed: 90,
        gradeability: 25,
        fuelEfficiency: 8.5, // kg H2/100km
        acceleration0to60: 28,
        brakingDistance: 58,
        turningRadius: 10.8,
        groundClearance: 260,
        wadingDepth: 450
      },
      dimensions: {
        length: 7200,
        width: 2520,
        height: 3300,
        wheelbase: 4000,
        frontOverhang: 1450,
        rearOverhang: 1750,
        trackWidth: {
          front: 2080,
          rear: 1880
        }
      },
      capacity: {
        grossVehicleWeight: 55000,
        kerbWeight: 12000,
        payloadCapacity: 43000,
        fuelTankCapacity: 45, // kg H2
        axleLoad: {
          front: 8000,
          rear: 47000
        }
      },
      safety: {
        abs: true,
        ebd: true,
        esp: true,
        airbags: 2,
        seatBelts: 2,
        childSafetyLocks: false,
        immobilizer: true,
        centralLocking: true,
        reverseCamera: true,
        parkingSensors: true,
        hillHoldAssist: true,
        tractionControl: true
      },
      comfort: {
        airConditioning: true,
        powerSteering: true,
        powerWindows: true,
        musicSystem: true,
        bluetoothConnectivity: true,
        usbPorts: 4,
        cupHolders: 2,
        storageCompartments: 6,
        adjustableSeats: true,
        tiltSteeringWheel: true,
        cruiseControl: true,
        digitalCluster: true
      },
      technology: {
        gpsNavigation: true,
        telematicsSystem: true,
        fleetManagement: true,
        diagnosticSystem: true,
        remoteDoorLock: true,
        smartConnectivity: true,
        mobileApp: true,
        voiceCommands: true,
        wirelessCharging: true
      },
      maintenance: {
        serviceInterval: 25000,
        warrantyPeriod: 60,
        warrantyKilometers: 500000,
        oilCapacity: 0, // Electric
        coolantCapacity: 30,
        batterySpecification: '600V Lithium-ion',
        tireSize: '315/80R22.5',
        spareWheelType: 'Steel',
        toolKit: true,
        firstAidKit: true
      },
      transmission: {
        type: 'automatic',
        gears: 1, // Direct drive
        clutchType: 'N/A'
      },
      suspension: {
        front: 'Air suspension',
        rear: 'Air suspension'
      },
      brakes: {
        front: 'Disc with regenerative braking',
        rear: 'Disc with regenerative braking',
        parkingBrake: 'Electric parking brake'
      },
      steering: {
        type: 'Electric power assisted',
        turnsLockToLock: 4.5
      },
      wheels: {
        size: '22.5 inch',
        type: 'Alloy',
        spareWheel: true
      }
    },
    configuration: {
      bodyType: 'Hydrogen Fuel Cell Tractor',
      color: {
        exterior: 'Green',
        interior: 'Eco-friendly materials'
      },
      engineVariant: 'Hydrogen Fuel Cell 630HP',
      transmissionOption: 'automatic',
      driveConfiguration: '6x4',
      additionalFeatures: ['Zero emissions', 'Advanced regenerative braking', 'Smart energy management'],
      accessories: ['Advanced tool kit', 'Emergency equipment', 'Hydrogen safety kit'],
      customizations: {
        fuelCellOptions: ['Standard Range', 'Extended Range'],
        bodyOptions: ['Tractor', 'Rigid']
      }
    },
    applications: [applicationAreas[0], applicationAreas[2]], // Heavy haul/Mining
    media: {
      images: {
        exterior: ['/images/vehicles/prima-e55s-hydrogen-exterior.jpg'],
        interior: ['/images/vehicles/prima-e55s-hydrogen-interior.jpg'],
        engine: ['/images/vehicles/prima-e55s-hydrogen-fuelcell.jpg'],
        features: ['/images/vehicles/prima-e55s-hydrogen-features.jpg']
      },      videos: {
        overview: '/videos/prima-e55s-hydrogen-overview.mp4',
        features: '/videos/prima-e55s-hydrogen-tech.mp4'
      },
      documents: {
        brochure: '/docs/prima-e55s-hydrogen-brochure.pdf',
        specifications: '/docs/prima-e55s-hydrogen-specs.pdf'
      }
    },
    pricing: {
      basePrice: 8500000,
      variants: {
        'Prima E.55S Standard Range': {
          price: 8500000,
          features: ['630 HP Fuel Cell', 'Standard Range', 'Zero Emissions']
        },
        'Prima E.55S Extended Range': {
          price: 9200000,
          features: ['630 HP Fuel Cell', 'Extended Range', 'Advanced Features']
        }
      },
      financing: {
        emiOptions: [
          { tenure: 60, downPayment: 30, emiAmount: 155000 },
          { tenure: 72, downPayment: 35, emiAmount: 140000 }
        ],
        loanPartners: ['Tata Motors Finance', 'HDFC Bank', 'Green Finance Partners']
      },
      insurance: {
        partners: ['Tata AIG', 'HDFC ERGO', 'Specialized Green Vehicle Insurance'],
        estimatedPremium: 250000
      }
    },
    availability: {
      inStock: false,
      deliveryTime: 180,
      locations: ['Mumbai', 'Delhi', 'Pune'] // Limited launch markets
    },
    ratings: {
      overall: 4.8,
      performance: 4.9,
      fuelEfficiency: 4.7,
      comfort: 4.6,
      reliability: 4.5,
      reviews: 45 // New technology, limited reviews
    },
    competitors: ['volvo-fm-electric', 'mercedes-eactros'],
    isHighlighted: true,
    isFeatured: true,
    launchDate: '2025-06-01'
  },

  // M&HCV CARGO TRUCKS
  {
    id: 'signa-3718k',
    name: 'Tata Signa 3718.K',
    model: 'Signa 3718.K',
    year: 2025,
    category: 'trucks' as VehicleCategory,
    subcategory: 'hcv',
    specifications: {
      engine: {
        model: 'DICOR 4S',
        displacement: 3783,
        power: 180,
        torque: 700,
        fuelType: 'diesel',
        emissionStandard: 'BS6',
        cylinders: 4,
        valvesPerCylinder: 4,
        compressionRatio: '17.3:1',
        maxRpm: 2500,
        idlingRpm: 700
      },
      performance: {
        maxSpeed: 88,
        gradeability: 26,
        fuelEfficiency: 4.0,
        acceleration0to60: 40,
        brakingDistance: 55,
        turningRadius: 9.5,
        groundClearance: 250,
        wadingDepth: 420
      },
      dimensions: {
        length: 7200,
        width: 2500,
        height: 3100,
        wheelbase: 4000,
        frontOverhang: 1400,
        rearOverhang: 1800,
        trackWidth: {
          front: 2040,
          rear: 1840
        }
      },
      capacity: {
        grossVehicleWeight: 37000,
        kerbWeight: 9000,
        payloadCapacity: 28000,
        fuelTankCapacity: 350,
        axleLoad: {
          front: 7500,
          rear: 29500
        }
      },
      safety: {
        abs: true,
        ebd: true,
        esp: false,
        airbags: 1,
        seatBelts: 2,
        childSafetyLocks: false,
        immobilizer: true,
        centralLocking: true,
        reverseCamera: true,
        parkingSensors: true,
        hillHoldAssist: true,
        tractionControl: false
      },
      comfort: {
        airConditioning: true,
        powerSteering: true,
        powerWindows: true,
        musicSystem: true,
        bluetoothConnectivity: true,
        usbPorts: 2,
        cupHolders: 2,
        storageCompartments: 4,
        adjustableSeats: true,
        tiltSteeringWheel: true,
        cruiseControl: false,
        digitalCluster: true
      },
      technology: {
        gpsNavigation: true,
        telematicsSystem: true,
        fleetManagement: true,
        diagnosticSystem: true,
        remoteDoorLock: false,
        smartConnectivity: true,
        mobileApp: true,
        voiceCommands: false,
        wirelessCharging: false
      },
      maintenance: {
        serviceInterval: 15000,
        warrantyPeriod: 36,
        warrantyKilometers: 300000,
        oilCapacity: 15,
        coolantCapacity: 22,
        batterySpecification: '24V 130Ah',
        tireSize: '285/75R22.5',
        spareWheelType: 'Steel',
        toolKit: true,
        firstAidKit: true
      },
      transmission: {
        type: 'manual',
        gears: 8,
        clutchType: 'Single plate dry clutch'
      },
      suspension: {
        front: 'Semi-elliptical leaf spring',
        rear: 'Heavy duty leaf spring'
      },
      brakes: {
        front: 'Disc with ABS',
        rear: 'Drum with ABS',
        parkingBrake: 'Spring brake'
      },
      steering: {
        type: 'Power assisted',
        turnsLockToLock: 5.3
      },
      wheels: {
        size: '22.5 inch',
        type: 'Steel',
        spareWheel: true
      }
    },
    configuration: {
      bodyType: 'Tipper/Construction',
      color: {
        exterior: 'Yellow',
        interior: 'Black'
      },
      engineVariant: 'DICOR 4S 180HP',
      transmissionOption: 'manual',
      driveConfiguration: '8x4',
      additionalFeatures: ['Heavy duty chassis', 'Construction grade tipper body', 'AC'],
      accessories: ['Tool kit', 'Spare wheel', 'Safety triangle'],
      customizations: {
        bodyOptions: ['Standard Tipper', 'Mining Tipper'],
        cabOptions: ['Day Cab', 'Crew Cab']
      }
    },
    applications: [applicationAreas[1], applicationAreas[2]], // Construction/Mining
    media: {
      images: {
        exterior: ['/images/vehicles/signa-3718k-exterior.jpg'],
        interior: ['/images/vehicles/signa-3718k-interior.jpg'],
        engine: ['/images/vehicles/signa-3718k-engine.jpg'],
        features: ['/images/vehicles/signa-3718k-features.jpg']
      },
      videos: {
        overview: '/videos/signa-3718k-overview.mp4'
      },
      documents: {
        brochure: '/docs/signa-3718k-brochure.pdf',
        specifications: '/docs/signa-3718k-specs.pdf'
      }
    },
    pricing: {
      basePrice: 3900000,
      variants: {
        'Signa 3718.K Standard': {
          price: 3900000,
          features: ['180 HP Engine', 'Standard Tipper', 'Day Cab']
        },
        'Signa 3718.K Mining': {
          price: 4200000,
          features: ['180 HP Engine', 'Mining Grade Tipper', 'Crew Cab']
        }
      },
      financing: {
        emiOptions: [
          { tenure: 48, downPayment: 25, emiAmount: 89000 },
          { tenure: 60, downPayment: 30, emiAmount: 76000 }
        ],
        loanPartners: ['Tata Motors Finance', 'HDFC Bank', 'SBI']
      },
      insurance: {
        partners: ['Tata AIG', 'HDFC ERGO', 'Bajaj Allianz'],
        estimatedPremium: 115000
      }
    },
    availability: {
      inStock: true,
      deliveryTime: 42,
      locations: ['Mumbai', 'Delhi', 'Kolkata', 'Chennai', 'Ahmedabad']
    },
    ratings: {
      overall: 4.5,
      performance: 4.6,
      fuelEfficiency: 4.1,
      comfort: 4.3,
      reliability: 4.7,
      reviews: 310
    },
    competitors: ['ashok-leyland-captain', 'bharat-benz-3528c'],
    isHighlighted: false,
    isFeatured: true,
    launchDate: '2024-04-15'
  },

  {
    id: 'lpk-3118',
    name: 'Tata LPK 3118',
    model: 'LPK 3118',
    year: 2025,
    category: 'trucks' as VehicleCategory,
    subcategory: 'hcv',
    specifications: {
      engine: {
        model: 'DICOR 4S',
        displacement: 3783,
        power: 180,
        torque: 700,
        fuelType: 'diesel',
        emissionStandard: 'BS6',
        cylinders: 4,
        valvesPerCylinder: 4,
        compressionRatio: '17.3:1',
        maxRpm: 2500,
        idlingRpm: 700
      },
      performance: {
        maxSpeed: 85,
        gradeability: 28,
        fuelEfficiency: 4.3,
        acceleration0to60: 38,
        brakingDistance: 52,
        turningRadius: 8.8,
        groundClearance: 245,
        wadingDepth: 400
      },
      dimensions: {
        length: 6800,
        width: 2450,
        height: 2950,
        wheelbase: 3800,
        frontOverhang: 1350,
        rearOverhang: 1650,
        trackWidth: {
          front: 2000,
          rear: 1800
        }
      },
      capacity: {
        grossVehicleWeight: 31000,
        kerbWeight: 7800,
        payloadCapacity: 23200,
        fuelTankCapacity: 300,
        axleLoad: {
          front: 7000,
          rear: 24000
        }
      },
      safety: {
        abs: true,
        ebd: true,
        esp: false,
        airbags: 1,
        seatBelts: 2,
        childSafetyLocks: false,
        immobilizer: true,
        centralLocking: true,
        reverseCamera: true,
        parkingSensors: true,
        hillHoldAssist: true,
        tractionControl: false
      },
      comfort: {
        airConditioning: true,
        powerSteering: true,
        powerWindows: true,
        musicSystem: true,
        bluetoothConnectivity: true,
        usbPorts: 2,
        cupHolders: 2,
        storageCompartments: 3,
        adjustableSeats: true,
        tiltSteeringWheel: true,
        cruiseControl: false,
        digitalCluster: true
      },
      technology: {
        gpsNavigation: true,
        telematicsSystem: true,
        fleetManagement: true,
        diagnosticSystem: true,
        remoteDoorLock: false,
        smartConnectivity: true,
        mobileApp: true,
        voiceCommands: false,
        wirelessCharging: false
      },
      maintenance: {
        serviceInterval: 15000,
        warrantyPeriod: 36,
        warrantyKilometers: 300000,
        oilCapacity: 14,
        coolantCapacity: 20,
        batterySpecification: '24V 120Ah',
        tireSize: '255/70R22.5',
        spareWheelType: 'Steel',
        toolKit: true,
        firstAidKit: true
      },
      transmission: {
        type: 'manual',
        gears: 8,
        clutchType: 'Single plate dry clutch'
      },
      suspension: {
        front: 'Semi-elliptical leaf spring',
        rear: 'Heavy duty leaf spring'
      },
      brakes: {
        front: 'Disc with ABS',
        rear: 'Drum with ABS',
        parkingBrake: 'Spring brake'
      },
      steering: {
        type: 'Power assisted',
        turnsLockToLock: 5.0
      },
      wheels: {
        size: '22.5 inch',
        type: 'Steel',
        spareWheel: true
      }
    },
    configuration: {
      bodyType: 'Tipper/Construction',
      color: {
        exterior: 'Orange',
        interior: 'Black'
      },
      engineVariant: 'DICOR 4S 180HP',
      transmissionOption: 'manual',
      driveConfiguration: '6x4',
      additionalFeatures: ['Construction grade chassis', 'Heavy duty tipper', 'AC'],
      accessories: ['Tool kit', 'Spare wheel', 'Warning equipment'],
      customizations: {
        bodyOptions: ['Standard Tipper', 'Heavy Duty Tipper'],
        cabOptions: ['Day Cab', 'Crew Cab']
      }
    },
    applications: [applicationAreas[1]], // Tipper/Construction
    media: {
      images: {
        exterior: ['/images/vehicles/lpk-3118-exterior.jpg'],
        interior: ['/images/vehicles/lpk-3118-interior.jpg'],
        engine: ['/images/vehicles/lpk-3118-engine.jpg'],
        features: ['/images/vehicles/lpk-3118-features.jpg']
      },
      videos: {
        overview: '/videos/lpk-3118-overview.mp4'
      },
      documents: {
        brochure: '/docs/lpk-3118-brochure.pdf',
        specifications: '/docs/lpk-3118-specs.pdf'
      }
    },
    pricing: {
      basePrice: 3400000,
      variants: {
        'LPK 3118': {
          price: 3400000,
          features: ['180 HP Engine', 'Tipper Body', 'ABS+EBD']
        }
      },
      financing: {
        emiOptions: [
          { tenure: 48, downPayment: 25, emiAmount: 77000 },
          { tenure: 60, downPayment: 30, emiAmount: 66000 }
        ],
        loanPartners: ['Tata Motors Finance', 'HDFC Bank', 'SBI']
      },
      insurance: {
        partners: ['Tata AIG', 'HDFC ERGO'],
        estimatedPremium: 100000
      }
    },
    availability: {
      inStock: true,
      deliveryTime: 35,
      locations: ['Mumbai', 'Delhi', 'Chennai', 'Pune', 'Kolkata']
    },
    ratings: {
      overall: 4.4,
      performance: 4.5,
      fuelEfficiency: 4.2,
      comfort: 4.2,
      reliability: 4.6,
      reviews: 275
    },
    competitors: ['ashok-leyland-captain', 'mahindra-blazo'],
    isHighlighted: false,
    isFeatured: false,
    launchDate: '2024-03-10'
  },

  // M&HCV CARGO TRUCKS - Deep Mining
  {
    id: 'prima-lx-3130k',
    name: 'Tata Prima LX 3130.K',
    model: 'Prima LX 3130.K',
    year: 2025,
    category: 'trucks' as VehicleCategory,
    subcategory: 'hcv',
    specifications: {
      engine: {
        model: 'Cummins ISBe 6.7',
        displacement: 6700,
        power: 300,
        torque: 1100,
        fuelType: 'diesel',
        emissionStandard: 'BS6',
        cylinders: 6,
        valvesPerCylinder: 4,
        compressionRatio: '17.3:1',
        maxRpm: 2500,
        idlingRpm: 700
      },
      performance: {
        maxSpeed: 80,
        gradeability: 30,
        fuelEfficiency: 3.2,
        acceleration0to60: 45,
        brakingDistance: 60,
        turningRadius: 10.0,
        groundClearance: 270,
        wadingDepth: 500
      },
      dimensions: {
        length: 6900,
        width: 2520,
        height: 3200,
        wheelbase: 3850,
        frontOverhang: 1400,
        rearOverhang: 1650,
        trackWidth: {
          front: 2060,
          rear: 1860
        }
      },
      capacity: {
        grossVehicleWeight: 31000,
        kerbWeight: 8200,
        payloadCapacity: 22800,
        fuelTankCapacity: 330,
        axleLoad: {
          front: 7200,
          rear: 23800
        }
      },
      safety: {
        abs: true,
        ebd: true,
        esp: true,
        airbags: 2,
        seatBelts: 2,
        childSafetyLocks: false,
        immobilizer: true,
        centralLocking: true,
        reverseCamera: true,
        parkingSensors: true,
        hillHoldAssist: true,
        tractionControl: true
      },
      comfort: {
        airConditioning: true,
        powerSteering: true,
        powerWindows: true,
        musicSystem: true,
        bluetoothConnectivity: true,
        usbPorts: 2,
        cupHolders: 2,
        storageCompartments: 4,
        adjustableSeats: true,
        tiltSteeringWheel: true,
        cruiseControl: true,
        digitalCluster: true
      },
      technology: {
        gpsNavigation: true,
        telematicsSystem: true,
        fleetManagement: true,
        diagnosticSystem: true,
        remoteDoorLock: true,
        smartConnectivity: true,
        mobileApp: true,
        voiceCommands: false,
        wirelessCharging: false
      },
      maintenance: {
        serviceInterval: 20000,
        warrantyPeriod: 36,
        warrantyKilometers: 300000,
        oilCapacity: 18,
        coolantCapacity: 25,
        batterySpecification: '24V 150Ah',
        tireSize: '315/80R22.5',
        spareWheelType: 'Steel',
        toolKit: true,
        firstAidKit: true
      },
      transmission: {
        type: 'manual',
        gears: 9,
        clutchType: 'Single plate dry clutch'
      },
      suspension: {
        front: 'Heavy duty parabolic leaf spring',
        rear: 'Mining grade bogie suspension'
      },
      brakes: {
        front: 'Drum with ABS',
        rear: 'Drum with ABS',
        parkingBrake: 'Spring brake'
      },
      steering: {
        type: 'Power assisted',
        turnsLockToLock: 5.5
      },
      wheels: {
        size: '22.5 inch',
        type: 'Steel',
        spareWheel: true
      }
    },
    configuration: {
      bodyType: 'Deep Mining Tipper',
      color: {
        exterior: 'Mining Yellow',
        interior: 'Heavy Duty Black'
      },
      engineVariant: 'Cummins ISBe 6.7 300HP',
      transmissionOption: 'manual',
      driveConfiguration: '6x4',
      additionalFeatures: ['Mining specific chassis', 'Extra heavy duty body', 'Dust protection system'],
      accessories: ['Mining tool kit', 'Safety equipment', 'Dust masks'],
      customizations: {
        bodyOptions: ['Standard Mining Body', 'Extra Heavy Duty Mining Body'],
        protectionOptions: ['Dust Protection', 'Extreme Duty Protection']
      }
    },
    applications: [applicationAreas[2]], // Deep mining
    media: {
      images: {
        exterior: ['/images/vehicles/prima-lx-3130k-exterior.jpg'],
        interior: ['/images/vehicles/prima-lx-3130k-interior.jpg'],
        engine: ['/images/vehicles/prima-lx-3130k-engine.jpg'],
        features: ['/images/vehicles/prima-lx-3130k-features.jpg']
      },
      videos: {
        overview: '/videos/prima-lx-3130k-overview.mp4'
      },
      documents: {
        brochure: '/docs/prima-lx-3130k-brochure.pdf',
        specifications: '/docs/prima-lx-3130k-specs.pdf'
      }
    },
    pricing: {
      basePrice: 4100000,
      variants: {
        'Prima LX 3130.K Standard': {
          price: 4100000,
          features: ['300 HP Engine', 'Standard Mining Body', 'Basic Protection']
        },
        'Prima LX 3130.K Heavy Duty': {
          price: 4450000,
          features: ['300 HP Engine', 'Extra Heavy Duty Body', 'Enhanced Protection']
        }
      },
      financing: {
        emiOptions: [
          { tenure: 48, downPayment: 25, emiAmount: 94000 },
          { tenure: 60, downPayment: 30, emiAmount: 80000 }
        ],
        loanPartners: ['Tata Motors Finance', 'HDFC Bank', 'Mining Finance Specialists']
      },
      insurance: {
        partners: ['Tata AIG', 'HDFC ERGO', 'Mining Insurance Specialists'],
        estimatedPremium: 125000
      }
    },
    availability: {
      inStock: true,
      deliveryTime: 50,
      locations: ['Mumbai', 'Delhi', 'Kolkata', 'Dhanbad', 'Ranchi']
    },
    ratings: {
      overall: 4.7,
      performance: 4.8,
      fuelEfficiency: 3.9,
      comfort: 4.5,
      reliability: 4.9,
      reviews: 185
    },
    competitors: ['volvo-fm-mining', 'caterpillar-797'],
    isHighlighted: false,
    isFeatured: true,
    launchDate: '2024-08-20'
  },

  {
    id: 'prima-lx-3123-tts',
    name: 'Tata Prima LX 3123.TTS',
    model: 'Prima LX 3123.TTS',
    year: 2025,
    category: 'trucks' as VehicleCategory,
    subcategory: 'hcv',
    specifications: {
      engine: {
        model: 'Cummins ISBe 6.7',
        displacement: 6700,
        power: 308,
        torque: 1150,
        fuelType: 'diesel',
        emissionStandard: 'BS6',
        cylinders: 6,
        valvesPerCylinder: 4,
        compressionRatio: '17.3:1',
        maxRpm: 2500,
        idlingRpm: 700
      },
      performance: {
        maxSpeed: 90,
        gradeability: 22,
        fuelEfficiency: 3.8,
        acceleration0to60: 32,
        brakingDistance: 55,
        turningRadius: 9.5,
        groundClearance: 250,
        wadingDepth: 420
      },
      dimensions: {
        length: 6750,
        width: 2480,
        height: 3050,
        wheelbase: 3750,
        frontOverhang: 1350,
        rearOverhang: 1650,
        trackWidth: {
          front: 2040,
          rear: 1840
        }
      },
      capacity: {
        grossVehicleWeight: 31000,
        kerbWeight: 8300,
        payloadCapacity: 22700,
        fuelTankCapacity: 320,
        axleLoad: {
          front: 7100,
          rear: 23900
        }
      },
      safety: {
        abs: true,
        ebd: true,
        esp: true,
        airbags: 2,
        seatBelts: 2,
        childSafetyLocks: false,
        immobilizer: true,
        centralLocking: true,
        reverseCamera: true,
        parkingSensors: true,
        hillHoldAssist: true,
        tractionControl: true
      },
      comfort: {
        airConditioning: true,
        powerSteering: true,
        powerWindows: true,
        musicSystem: true,
        bluetoothConnectivity: true,
        usbPorts: 2,
        cupHolders: 2,
        storageCompartments: 4,
        adjustableSeats: true,
        tiltSteeringWheel: true,
        cruiseControl: true,
        digitalCluster: true
      },
      technology: {
        gpsNavigation: true,
        telematicsSystem: true,
        fleetManagement: true,
        diagnosticSystem: true,
        remoteDoorLock: true,
        smartConnectivity: true,
        mobileApp: true,
        voiceCommands: false,
        wirelessCharging: false
      },
      maintenance: {
        serviceInterval: 20000,
        warrantyPeriod: 36,
        warrantyKilometers: 300000,
        oilCapacity: 17,
        coolantCapacity: 24,
        batterySpecification: '24V 150Ah',
        tireSize: '295/80R22.5',
        spareWheelType: 'Steel',
        toolKit: true,
        firstAidKit: true
      },
      transmission: {
        type: 'manual',
        gears: 9,
        clutchType: 'Single plate dry clutch'
      },
      suspension: {
        front: 'Parabolic leaf spring',
        rear: 'Transport grade bogie suspension'
      },
      brakes: {
        front: 'Drum with ABS',
        rear: 'Drum with ABS',
        parkingBrake: 'Spring brake'
      },
      steering: {
        type: 'Power assisted',
        turnsLockToLock: 5.2
      },
      wheels: {
        size: '22.5 inch',
        type: 'Steel',
        spareWheel: true
      }
    },
    configuration: {
      bodyType: 'Transport/Logistics',
      color: {
        exterior: 'Blue',
        interior: 'Grey'
      },
      engineVariant: 'Cummins ISBe 6.7 308HP',
      transmissionOption: 'manual',
      driveConfiguration: '6x4',
      additionalFeatures: ['Transport optimized chassis', 'Logistics body', 'Fleet management system'],
      accessories: ['Tool kit', 'GPS tracker', 'Safety equipment'],
      customizations: {
        bodyOptions: ['Standard Cargo', 'Container Ready', 'Refrigerated'],
        techOptions: ['Basic Telematics', 'Advanced Fleet Management']
      }
    },
    applications: [applicationAreas[0]], // Transport/Logistics
    media: {
      images: {
        exterior: ['/images/vehicles/prima-lx-3123-tts-exterior.jpg'],
        interior: ['/images/vehicles/prima-lx-3123-tts-interior.jpg'],
        engine: ['/images/vehicles/prima-lx-3123-tts-engine.jpg'],
        features: ['/images/vehicles/prima-lx-3123-tts-features.jpg']
      },
      videos: {
        overview: '/videos/prima-lx-3123-tts-overview.mp4'
      },
      documents: {
        brochure: '/docs/prima-lx-3123-tts-brochure.pdf',
        specifications: '/docs/prima-lx-3123-tts-specs.pdf'
      }
    },
    pricing: {
      basePrice: 3950000,
      variants: {
        'Prima LX 3123.TTS Standard': {
          price: 3950000,
          features: ['308 HP Engine', 'Standard Cargo Body', 'Basic Telematics']
        },
        'Prima LX 3123.TTS Advanced': {
          price: 4250000,
          features: ['308 HP Engine', 'Container Ready', 'Advanced Fleet Management']
        }
      },
      financing: {
        emiOptions: [
          { tenure: 48, downPayment: 25, emiAmount: 90000 },
          { tenure: 60, downPayment: 30, emiAmount: 77000 }
        ],
        loanPartners: ['Tata Motors Finance', 'HDFC Bank', 'SBI', 'Transport Finance']
      },
      insurance: {
        partners: ['Tata AIG', 'HDFC ERGO', 'Commercial Vehicle Insurance'],
        estimatedPremium: 118000
      }
    },
    availability: {
      inStock: true,
      deliveryTime: 45,
      locations: ['Mumbai', 'Delhi', 'Chennai', 'Pune', 'Kolkata', 'Bangalore']
    },
    ratings: {
      overall: 4.5,
      performance: 4.6,
      fuelEfficiency: 4.3,
      comfort: 4.4,
      reliability: 4.7,
      reviews: 265
    },
    competitors: ['volvo-fm-400', 'bharat-benz-3128'],
    isHighlighted: false,
    isFeatured: true,
    launchDate: '2024-06-15'
  },

  // LPT TRUCK SERIES
  {
    id: 'lpt-1512',
    name: 'Tata LPT 1512',
    model: 'LPT 1512',
    year: 2025,
    category: 'trucks' as VehicleCategory,
    subcategory: 'mcv',
    specifications: {
      engine: {
        model: 'DICOR 4S',
        displacement: 3783,
        power: 167,
        torque: 650,
        fuelType: 'diesel',
        emissionStandard: 'BS6',
        cylinders: 4,
        valvesPerCylinder: 4,
        compressionRatio: '17.3:1',
        maxRpm: 2500,
        idlingRpm: 700
      },
      performance: {
        maxSpeed: 95,
        gradeability: 28,
        fuelEfficiency: 6.8,
        acceleration0to60: 30,
        brakingDistance: 48,
        turningRadius: 7.8,
        groundClearance: 220,
        wadingDepth: 380
      },
      dimensions: {
        length: 7500,
        width: 2300,
        height: 2800,
        wheelbase: 4200,
        frontOverhang: 1400,
        rearOverhang: 1900,
        trackWidth: {
          front: 1920,
          rear: 1720
        }
      },
      capacity: {
        grossVehicleWeight: 16020,
        kerbWeight: 5200,
        payloadCapacity: 10820,
        fuelTankCapacity: 150,
        axleLoad: {
          front: 5500,
          rear: 10520
        }
      },
      safety: {
        abs: true,
        ebd: true,
        esp: false,
        airbags: 1,
        seatBelts: 3,
        childSafetyLocks: false,
        immobilizer: true,
        centralLocking: true,
        reverseCamera: true,
        parkingSensors: true,
        hillHoldAssist: true,
        tractionControl: false
      },
      comfort: {
        airConditioning: true,
        powerSteering: true,
        powerWindows: true,
        musicSystem: true,
        bluetoothConnectivity: true,
        usbPorts: 2,
        cupHolders: 2,
        storageCompartments: 4,
        adjustableSeats: true,
        tiltSteeringWheel: true,
        cruiseControl: false,
        digitalCluster: true
      },
      technology: {
        gpsNavigation: true,
        telematicsSystem: true,
        fleetManagement: true,
        diagnosticSystem: true,
        remoteDoorLock: false,
        smartConnectivity: true,
        mobileApp: true,
        voiceCommands: false,
        wirelessCharging: false
      },
      maintenance: {
        serviceInterval: 15000,
        warrantyPeriod: 36,
        warrantyKilometers: 200000,
        oilCapacity: 12,
        coolantCapacity: 18,
        batterySpecification: '12V 120Ah',
        tireSize: '215/75R17.5',
        spareWheelType: 'Steel',
        toolKit: true,
        firstAidKit: true
      },
      transmission: {
        type: 'manual',
        gears: 6,
        clutchType: 'Single plate dry clutch'
      },
      suspension: {
        front: 'Semi-elliptical leaf spring',
        rear: 'Semi-elliptical leaf spring'
      },
      brakes: {
        front: 'Disc with ABS',
        rear: 'Drum with ABS',
        parkingBrake: 'Hand brake'
      },
      steering: {
        type: 'Power assisted',
        turnsLockToLock: 4.8
      },
      wheels: {
        size: '17.5 inch',
        type: 'Steel',
        spareWheel: true
      }
    },
    configuration: {
      bodyType: 'Cargo/Container',
      color: {
        exterior: 'White',
        interior: 'Grey'
      },
      engineVariant: 'DICOR 4S 167HP',
      transmissionOption: 'manual',
      driveConfiguration: '4x2',
      additionalFeatures: ['AC', 'Digital cluster', 'Fleet management'],
      accessories: ['Tool kit', 'Spare wheel', 'Cargo net'],
      customizations: {}
    },
    applications: [applicationAreas[0]], // Medium haul cargo
    media: {
      images: {
        exterior: ['/images/vehicles/lpt-1512-exterior.jpg'],
        interior: ['/images/vehicles/lpt-1512-interior.jpg'],
        engine: ['/images/vehicles/lpt-1512-engine.jpg'],
        features: ['/images/vehicles/lpt-1512-features.jpg']
      },
      videos: {
        overview: '/videos/lpt-1512-overview.mp4'
      },
      documents: {
        brochure: '/docs/lpt-1512-brochure.pdf',
        specifications: '/docs/lpt-1512-specs.pdf'
      }
    },
    pricing: {
      basePrice: 2250000,
      variants: {
        'LPT 1512': {
          price: 2250000,
          features: ['167 HP Engine', 'Cargo Body', 'ABS+EBD', 'AC']
        }
      },
      financing: {
        emiOptions: [
          { tenure: 48, downPayment: 25, emiAmount: 51000 },
          { tenure: 60, downPayment: 30, emiAmount: 44000 }
        ],
        loanPartners: ['Tata Motors Finance', 'HDFC Bank', 'SBI']
      },
      insurance: {
        partners: ['Tata AIG', 'HDFC ERGO'],
        estimatedPremium: 68000
      }
    },
    availability: {
      inStock: true,
      deliveryTime: 30,
      locations: ['Mumbai', 'Delhi', 'Chennai', 'Pune', 'Kolkata', 'Ahmedabad']
    },
    ratings: {
      overall: 4.3,
      performance: 4.4,
      fuelEfficiency: 4.2,
      comfort: 4.1,
      reliability: 4.5,
      reviews: 420
    },
    competitors: ['ashok-leyland-partner', 'mahindra-furio'],
    isHighlighted: false,
    isFeatured: true,
    launchDate: '2024-02-10'
  },

  {
    id: 'lpt-710',
    name: 'Tata LPT 710',
    model: 'LPT 710',
    year: 2025,
    category: 'trucks' as VehicleCategory,
    subcategory: 'lcv',
    specifications: {
      engine: {
        model: 'DICOR 2.2',
        displacement: 2179,
        power: 105,
        torque: 250,
        fuelType: 'diesel',
        emissionStandard: 'BS6',
        cylinders: 4,
        valvesPerCylinder: 4,
        compressionRatio: '17.5:1',
        maxRpm: 3200,
        idlingRpm: 750
      },
      performance: {
        maxSpeed: 90,
        gradeability: 32,
        fuelEfficiency: 12.5,
        acceleration0to60: 28,
        brakingDistance: 42,
        turningRadius: 6.2,
        groundClearance: 195,
        wadingDepth: 350
      },
      dimensions: {
        length: 5200,
        width: 1900,
        height: 2350,
        wheelbase: 2900,
        frontOverhang: 1150,
        rearOverhang: 1150,
        trackWidth: {
          front: 1600,
          rear: 1600
        }
      },
      capacity: {
        grossVehicleWeight: 7490,
        kerbWeight: 2890,
        payloadCapacity: 4600,
        fuelTankCapacity: 90,
        axleLoad: {
          front: 2500,
          rear: 4990
        }
      },
      safety: {
        abs: true,
        ebd: false,
        esp: false,
        airbags: 1,
        seatBelts: 3,
        childSafetyLocks: false,
        immobilizer: true,
        centralLocking: true,
        reverseCamera: false,
        parkingSensors: false,
        hillHoldAssist: false,
        tractionControl: false
      },
      comfort: {
        airConditioning: true,
        powerSteering: true,
        powerWindows: false,
        musicSystem: true,
        bluetoothConnectivity: true,
        usbPorts: 1,
        cupHolders: 2,
        storageCompartments: 3,
        adjustableSeats: true,
        tiltSteeringWheel: false,
        cruiseControl: false,
        digitalCluster: false
      },
      technology: {
        gpsNavigation: false,
        telematicsSystem: false,
        fleetManagement: false,
        diagnosticSystem: true,
        remoteDoorLock: false,
        smartConnectivity: false,
        mobileApp: false,
        voiceCommands: false,
        wirelessCharging: false
      },
      maintenance: {
        serviceInterval: 10000,
        warrantyPeriod: 24,
        warrantyKilometers: 150000,
        oilCapacity: 8,
        coolantCapacity: 12,
        batterySpecification: '12V 100Ah',
        tireSize: '185R14',
        spareWheelType: 'Steel',
        toolKit: true,
        firstAidKit: false
      },
      transmission: {
        type: 'manual',
        gears: 5,
        clutchType: 'Single plate dry clutch'
      },
      suspension: {
        front: 'Independent coil spring',
        rear: 'Leaf spring'
      },
      brakes: {
        front: 'Disc with ABS',
        rear: 'Drum',
        parkingBrake: 'Hand brake'
      },
      steering: {
        type: 'Power assisted',
        turnsLockToLock: 4.5
      },
      wheels: {
        size: '14 inch',
        type: 'Steel',
        spareWheel: true
      }
    },
    configuration: {
      bodyType: 'Light Cargo',
      color: {
        exterior: 'White',
        interior: 'Black'
      },
      engineVariant: 'DICOR 2.2 105HP',
      transmissionOption: 'manual',
      driveConfiguration: '4x2',
      additionalFeatures: ['AC', 'Power steering', 'Music system'],
      accessories: ['Tool kit', 'Spare wheel'],
      customizations: {}
    },
    applications: [applicationAreas[0], applicationAreas[5]], // Light cargo transport
    media: {
      images: {
        exterior: ['/images/vehicles/lpt-710-exterior.jpg'],
        interior: ['/images/vehicles/lpt-710-interior.jpg'],
        engine: ['/images/vehicles/lpt-710-engine.jpg'],
        features: ['/images/vehicles/lpt-710-features.jpg']
      },
      videos: {
        overview: '/videos/lpt-710-overview.mp4'
      },
      documents: {
        brochure: '/docs/lpt-710-brochure.pdf',
        specifications: '/docs/lpt-710-specs.pdf'
      }
    },
    pricing: {
      basePrice: 1250000,
      variants: {
        'LPT 710': {
          price: 1250000,
          features: ['105 HP Engine', 'Cargo Body', 'ABS', 'AC']
        }
      },
      financing: {
        emiOptions: [
          { tenure: 48, downPayment: 25, emiAmount: 28500 },
          { tenure: 60, downPayment: 30, emiAmount: 24500 }
        ],
        loanPartners: ['Tata Motors Finance', 'HDFC Bank', 'SBI']
      },
      insurance: {
        partners: ['Tata AIG', 'HDFC ERGO'],
        estimatedPremium: 38000
      }
    },
    availability: {
      inStock: true,
      deliveryTime: 20,
      locations: ['Mumbai', 'Delhi', 'Chennai', 'Pune', 'Kolkata', 'Ahmedabad', 'Hyderabad']
    },
    ratings: {
      overall: 4.1,
      performance: 4.0,
      fuelEfficiency: 4.3,
      comfort: 3.9,
      reliability: 4.2,
      reviews: 650
    },
    competitors: ['mahindra-bolero-pickup', 'force-traveller'],
    isHighlighted: false,
    isFeatured: false,
    launchDate: '2023-12-05'
  },

  {
    id: 'lpt-1109g',
    name: 'Tata LPT 1109G',
    model: 'LPT 1109G',
    year: 2025,
    category: 'trucks' as VehicleCategory,
    subcategory: 'mcv',
    specifications: {
      engine: {
        model: 'DICOR 3.8',
        displacement: 3783,
        power: 150,
        torque: 500,
        fuelType: 'diesel',
        emissionStandard: 'BS6',
        cylinders: 4,
        valvesPerCylinder: 4,
        compressionRatio: '17.3:1',
        maxRpm: 2500,
        idlingRpm: 700
      },
      performance: {
        maxSpeed: 90,
        gradeability: 30,
        fuelEfficiency: 8.2,
        acceleration0to60: 32,
        brakingDistance: 45,
        turningRadius: 7.2,
        groundClearance: 210,
        wadingDepth: 370
      },
      dimensions: {
        length: 6500,
        width: 2100,
        height: 2600,
        wheelbase: 3600,
        frontOverhang: 1300,
        rearOverhang: 1600,
        trackWidth: {
          front: 1800,
          rear: 1650
        }
      },
      capacity: {
        grossVehicleWeight: 11449,
        kerbWeight: 3849,
        payloadCapacity: 7600,
        fuelTankCapacity: 120,
        axleLoad: {
          front: 3800,
          rear: 7649
        }
      },
      safety: {
        abs: true,
        ebd: true,
        esp: false,
        airbags: 1,
        seatBelts: 3,
        childSafetyLocks: false,
        immobilizer: true,
        centralLocking: true,
        reverseCamera: true,
        parkingSensors: true,
        hillHoldAssist: true,
        tractionControl: false
      },
      comfort: {
        airConditioning: true,
        powerSteering: true,
        powerWindows: true,
        musicSystem: true,
        bluetoothConnectivity: true,
        usbPorts: 2,
        cupHolders: 2,
        storageCompartments: 3,
        adjustableSeats: true,
        tiltSteeringWheel: true,
        cruiseControl: false,
        digitalCluster: true
      },
      technology: {
        gpsNavigation: true,
        telematicsSystem: true,
        fleetManagement: true,
        diagnosticSystem: true,
        remoteDoorLock: false,
        smartConnectivity: true,
        mobileApp: true,
        voiceCommands: false,
        wirelessCharging: false
      },
      maintenance: {
        serviceInterval: 12000,
        warrantyPeriod: 36,
        warrantyKilometers: 180000,
        oilCapacity: 10,
        coolantCapacity: 15,
        batterySpecification: '12V 110Ah',
        tireSize: '215/75R17.5',
        spareWheelType: 'Steel',
        toolKit: true,
        firstAidKit: true
      },
      transmission: {
        type: 'manual',
        gears: 6,
        clutchType: 'Single plate dry clutch'
      },
      suspension: {
        front: 'Semi-elliptical leaf spring',
        rear: 'Semi-elliptical leaf spring'
      },
      brakes: {
        front: 'Disc with ABS',
        rear: 'Drum with ABS',
        parkingBrake: 'Hand brake'
      },
      steering: {
        type: 'Power assisted',
        turnsLockToLock: 4.8
      },
      wheels: {
        size: '17.5 inch',
        type: 'Steel',
        spareWheel: true
      }
    },
    configuration: {
      bodyType: 'Intermediate Cargo',
      color: {
        exterior: 'Blue',
        interior: 'Grey'
      },
      engineVariant: 'DICOR 3.8 150HP',
      transmissionOption: 'manual',
      driveConfiguration: '4x2',
      additionalFeatures: ['AC', 'Digital cluster', 'Telematics'],
      accessories: ['Tool kit', 'Spare wheel', 'Cargo restraints'],
      customizations: {}
    },
    applications: [applicationAreas[0]], // Intermediate cargo
    media: {
      images: {
        exterior: ['/images/vehicles/lpt-1109g-exterior.jpg'],
        interior: ['/images/vehicles/lpt-1109g-interior.jpg'],
        engine: ['/images/vehicles/lpt-1109g-engine.jpg'],
        features: ['/images/vehicles/lpt-1109g-features.jpg']
      },
      videos: {
        overview: '/videos/lpt-1109g-overview.mp4'
      },
      documents: {
        brochure: '/docs/lpt-1109g-brochure.pdf',
        specifications: '/docs/lpt-1109g-specs.pdf'
      }
    },
    pricing: {
      basePrice: 1750000,
      variants: {
        'LPT 1109G': {
          price: 1750000,
          features: ['150 HP Engine', 'Intermediate Cargo Body', 'ABS+EBD', 'AC']
        }
      },
      financing: {
        emiOptions: [
          { tenure: 48, downPayment: 25, emiAmount: 40000 },
          { tenure: 60, downPayment: 30, emiAmount: 34000 }
        ],
        loanPartners: ['Tata Motors Finance', 'HDFC Bank', 'SBI']
      },
      insurance: {
        partners: ['Tata AIG', 'HDFC ERGO'],
        estimatedPremium: 52000
      }
    },
    availability: {
      inStock: true,
      deliveryTime: 25,
      locations: ['Mumbai', 'Delhi', 'Chennai', 'Pune', 'Kolkata', 'Ahmedabad']
    },
    ratings: {
      overall: 4.2,
      performance: 4.3,
      fuelEfficiency: 4.1,
      comfort: 4.0,
      reliability: 4.4,
      reviews: 380
    },
    competitors: ['ashok-leyland-partner', 'mahindra-furio'],
    isHighlighted: false,
    isFeatured: false,
    launchDate: '2024-01-20'
  },

  {
    id: 'lpt-1212',
    name: 'Tata LPT 1212',
    model: 'LPT 1212',
    year: 2025,
    category: 'trucks' as VehicleCategory,
    subcategory: 'mcv',
    specifications: {
      engine: {
        model: 'DICOR 3.8',
        displacement: 3783,
        power: 170,
        torque: 600,
        fuelType: 'diesel',
        emissionStandard: 'BS6',
        cylinders: 4,
        valvesPerCylinder: 4,
        compressionRatio: '17.3:1',
        maxRpm: 2500,
        idlingRpm: 700
      },
      performance: {
        maxSpeed: 92,
        gradeability: 28,
        fuelEfficiency: 7.8,
        acceleration0to60: 30,
        brakingDistance: 46,
        turningRadius: 7.5,
        groundClearance: 215,
        wadingDepth: 380
      },
      dimensions: {
        length: 6800,
        width: 2150,
        height: 2650,
        wheelbase: 3800,
        frontOverhang: 1350,
        rearOverhang: 1650,
        trackWidth: {
          front: 1850,
          rear: 1700
        }
      },
      capacity: {
        grossVehicleWeight: 11990,
        kerbWeight: 4090,
        payloadCapacity: 7900,
        fuelTankCapacity: 130,
        axleLoad: {
          front: 4000,
          rear: 7990
        }
      },
      safety: {
        abs: true,
        ebd: true,
        esp: false,
        airbags: 1,
        seatBelts: 3,
        childSafetyLocks: false,
        immobilizer: true,
        centralLocking: true,
        reverseCamera: true,
        parkingSensors: true,
        hillHoldAssist: true,
        tractionControl: false
      },
      comfort: {
        airConditioning: true,
        powerSteering: true,
        powerWindows: true,
        musicSystem: true,
        bluetoothConnectivity: true,
        usbPorts: 2,
        cupHolders: 2,
        storageCompartments: 4,
        adjustableSeats: true,
        tiltSteeringWheel: true,
        cruiseControl: false,
        digitalCluster: true
      },
      technology: {
        gpsNavigation: true,
        telematicsSystem: true,
        fleetManagement: true,
        diagnosticSystem: true,
        remoteDoorLock: false,
        smartConnectivity: true,
        mobileApp: true,
        voiceCommands: false,
        wirelessCharging: false
      },
      maintenance: {
        serviceInterval: 12000,
        warrantyPeriod: 36,
        warrantyKilometers: 200000,
        oilCapacity: 11,
        coolantCapacity: 16,
        batterySpecification: '12V 120Ah',
        tireSize: '215/75R17.5',
        spareWheelType: 'Steel',
        toolKit: true,
        firstAidKit: true
      },
      transmission: {
        type: 'manual',
        gears: 6,
        clutchType: 'Single plate dry clutch'
      },
      suspension: {
        front: 'Semi-elliptical leaf spring',
        rear: 'Semi-elliptical leaf spring'
      },
      brakes: {
        front: 'Disc with ABS',
        rear: 'Drum with ABS',
        parkingBrake: 'Hand brake'
      },
      steering: {
        type: 'Power assisted',
        turnsLockToLock: 4.9
      },
      wheels: {
        size: '17.5 inch',
        type: 'Steel',
        spareWheel: true
      }
    },
    configuration: {
      bodyType: 'Medium Cargo',
      color: {
        exterior: 'White',
        interior: 'Grey'
      },
      engineVariant: 'DICOR 3.8 170HP',
      transmissionOption: 'manual',
      driveConfiguration: '4x2',
      additionalFeatures: ['AC', 'Digital cluster', 'Fleet management'],
      accessories: ['Tool kit', 'Spare wheel', 'Load restraints'],
      customizations: {}
    },
    applications: [applicationAreas[0]], // Medium cargo
    media: {
      images: {
        exterior: ['/images/vehicles/lpt-1212-exterior.jpg'],
        interior: ['/images/vehicles/lpt-1212-interior.jpg'],
        engine: ['/images/vehicles/lpt-1212-engine.jpg'],
        features: ['/images/vehicles/lpt-1212-features.jpg']
      },
      videos: {
        overview: '/videos/lpt-1212-overview.mp4'
      },
      documents: {
        brochure: '/docs/lpt-1212-brochure.pdf',
        specifications: '/docs/lpt-1212-specs.pdf'
      }
    },
    pricing: {
      basePrice: 1950000,
      variants: {
        'LPT 1212': {
          price: 1950000,
          features: ['170 HP Engine', 'Medium Cargo Body', 'ABS+EBD', 'AC']
        }
      },
      financing: {
        emiOptions: [
          { tenure: 48, downPayment: 25, emiAmount: 44500 },
          { tenure: 60, downPayment: 30, emiAmount: 38000 }
        ],
        loanPartners: ['Tata Motors Finance', 'HDFC Bank', 'SBI']
      },
      insurance: {
        partners: ['Tata AIG', 'HDFC ERGO'],
        estimatedPremium: 58000
      }
    },
    availability: {
      inStock: true,
      deliveryTime: 28,
      locations: ['Mumbai', 'Delhi', 'Chennai', 'Pune', 'Kolkata', 'Ahmedabad']
    },
    ratings: {
      overall: 4.3,
      performance: 4.4,
      fuelEfficiency: 4.0,
      comfort: 4.2,
      reliability: 4.5,
      reviews: 340
    },
    competitors: ['ashok-leyland-partner', 'mahindra-furio'],
    isHighlighted: false,
    isFeatured: true,
    launchDate: '2024-02-28'
  },

  {
    id: 'lpt-4225-cowl',
    name: 'Tata LPT 4225 Cowl',
    model: 'LPT 4225 Cowl',
    year: 2025,
    category: 'trucks' as VehicleCategory,
    subcategory: 'hcv',
    specifications: {
      engine: {
        model: 'DICOR 6S',
        displacement: 5883,
        power: 240,
        torque: 900,
        fuelType: 'diesel',
        emissionStandard: 'BS6',
        cylinders: 6,
        valvesPerCylinder: 4,
        compressionRatio: '17.0:1',
        maxRpm: 2200,
        idlingRpm: 650
      },
      performance: {
        maxSpeed: 85,
        gradeability: 25,
        fuelEfficiency: 4.2,
        acceleration0to60: 45,
        brakingDistance: 65,
        turningRadius: 11.5,
        groundClearance: 260,
        wadingDepth: 500
      },
      dimensions: {
        length: 10500,
        width: 2500,
        height: 3000,
        wheelbase: 5800,
        frontOverhang: 1500,
        rearOverhang: 3200,
        trackWidth: {
          front: 2040,
          rear: 1860
        }
      },
      capacity: {
        grossVehicleWeight: 42000,
        kerbWeight: 12000,
        payloadCapacity: 30000,
        fuelTankCapacity: 400,
        axleLoad: {
          front: 8000,
          rear: 34000
        }
      },
      safety: {
        abs: true,
        ebd: true,
        esp: true,
        airbags: 2,
        seatBelts: 3,
        childSafetyLocks: false,
        immobilizer: true,
        centralLocking: true,
        reverseCamera: true,
        parkingSensors: true,
        hillHoldAssist: true,
        tractionControl: true
      },
      comfort: {
        airConditioning: true,
        powerSteering: true,
        powerWindows: true,
        musicSystem: true,
        bluetoothConnectivity: true,
        usbPorts: 2,
        cupHolders: 2,
        storageCompartments: 6,
        adjustableSeats: true,
        tiltSteeringWheel: true,
        cruiseControl: true,
        digitalCluster: true
      },
      technology: {
        gpsNavigation: true,
        telematicsSystem: true,
        fleetManagement: true,
        diagnosticSystem: true,
        remoteDoorLock: true,
        smartConnectivity: true,
        mobileApp: true,
        voiceCommands: false,
        wirelessCharging: false
      },
      maintenance: {
        serviceInterval: 20000,
        warrantyPeriod: 48,
        warrantyKilometers: 400000,
        oilCapacity: 20,
        coolantCapacity: 28,
        batterySpecification: '24V 150Ah',
        tireSize: '295/80R22.5',
        spareWheelType: 'Steel',
        toolKit: true,
        firstAidKit: true
      },
      transmission: {
        type: 'manual',
        gears: 8,
        clutchType: 'Single plate dry clutch'
      },
      suspension: {
        front: 'Semi-elliptical leaf spring',
        rear: 'Bogie suspension'
      },
      brakes: {
        front: 'Disc with ABS',
        rear: 'Disc with ABS',
        parkingBrake: 'Spring brake'
      },
      steering: {
        type: 'Power assisted',
        turnsLockToLock: 6.5
      },
      wheels: {
        size: '22.5 inch',
        type: 'Steel',
        spareWheel: true
      }
    },
    configuration: {
      bodyType: 'Cowl/Bus Chassis',
      color: {
        exterior: 'White',
        interior: 'Grey'
      },
      engineVariant: 'DICOR 6S 240HP',
      transmissionOption: 'manual',
      driveConfiguration: '8x2',
      additionalFeatures: ['Heavy cargo capability', 'Bus chassis ready', 'Advanced suspension'],
      accessories: ['Heavy duty tool kit', 'Spare wheel', 'Safety equipment'],
      customizations: {
        bodyOptions: ['Bus Body', 'Cargo Body', 'Specialized Body'],
        wheelbaseOptions: ['Standard', 'Extended']
      }
    },
    applications: [applicationAreas[0], applicationAreas[3]], // Heavy cargo & Passenger
    media: {
      images: {
        exterior: ['/images/vehicles/lpt-4225-cowl-exterior.jpg'],
        interior: ['/images/vehicles/lpt-4225-cowl-interior.jpg'],
        engine: ['/images/vehicles/lpt-4225-cowl-engine.jpg'],
        features: ['/images/vehicles/lpt-4225-cowl-features.jpg']
      },
      videos: {
        overview: '/videos/lpt-4225-cowl-overview.mp4'
      },
      documents: {
        brochure: '/docs/lpt-4225-cowl-brochure.pdf',
        specifications: '/docs/lpt-4225-cowl-specs.pdf'
      }
    },
    pricing: {
      basePrice: 4800000,
      variants: {
        'LPT 4225 Cowl Standard': {
          price: 4800000,
          features: ['240 HP Engine', 'Standard Wheelbase', 'Heavy Duty Chassis']
        },
        'LPT 4225 Cowl Extended': {
          price: 5100000,
          features: ['240 HP Engine', 'Extended Wheelbase', 'Premium Features']
        }
      },
      financing: {
        emiOptions: [
          { tenure: 60, downPayment: 25, emiAmount: 102000 },
          { tenure: 72, downPayment: 30, emiAmount: 90000 }
        ],
        loanPartners: ['Tata Motors Finance', 'HDFC Bank', 'SBI', 'Bus Finance']
      },
      insurance: {
        partners: ['Tata AIG', 'HDFC ERGO', 'Commercial Vehicle Insurance'],
        estimatedPremium: 185000
      }
    },
    availability: {
      inStock: false,
      deliveryTime: 90,
      locations: ['Mumbai', 'Delhi', 'Chennai', 'Pune']
    },
    ratings: {
      overall: 4.4,
      performance: 4.5,
      fuelEfficiency: 4.0,
      comfort: 4.3,
      reliability: 4.6,
      reviews: 155
    },
    competitors: ['ashok-leyland-lynx', 'volvo-8400'],
    isHighlighted: false,
    isFeatured: true,
    launchDate: '2024-10-15'
  },

  // ULTRA RANGE LCV - Ultra T.11
  {
    id: 'ultra-t11',
    name: 'Tata Ultra T.11',
    model: 'Ultra T.11',
    year: 2025,
    category: 'trucks' as VehicleCategory,
    subcategory: 'mcv',
    specifications: {
      engine: {
        model: 'DICOR 3.8',
        displacement: 3783,
        power: 145,
        torque: 500,
        fuelType: 'diesel',
        emissionStandard: 'BS6',
        cylinders: 4,
        valvesPerCylinder: 4,
        compressionRatio: '17.3:1',
        maxRpm: 2500,
        idlingRpm: 700
      },
      performance: {
        maxSpeed: 90,
        gradeability: 30,
        fuelEfficiency: 8.8,
        acceleration0to60: 32,
        brakingDistance: 44,
        turningRadius: 7.0,
        groundClearance: 205,
        wadingDepth: 370
      },
      dimensions: {
        length: 6200,
        width: 2100,
        height: 2550,
        wheelbase: 3500,
        frontOverhang: 1250,
        rearOverhang: 1450,
        trackWidth: {
          front: 1800,
          rear: 1650
        }
      },
      capacity: {
        grossVehicleWeight: 11280,
        kerbWeight: 3780,
        payloadCapacity: 7500,
        fuelTankCapacity: 115,
        axleLoad: {
          front: 3700,
          rear: 7580
        }
      },
      safety: {
        abs: true,
        ebd: true,
        esp: false,
        airbags: 1,
        seatBelts: 3,
        childSafetyLocks: false,
        immobilizer: true,
        centralLocking: true,
        reverseCamera: true,
        parkingSensors: true,
        hillHoldAssist: true,
        tractionControl: false
      },
      comfort: {
        airConditioning: true,
        powerSteering: true,
        powerWindows: true,
        musicSystem: true,
        bluetoothConnectivity: true,
        usbPorts: 2,
        cupHolders: 2,
        storageCompartments: 3,
        adjustableSeats: true,
        tiltSteeringWheel: true,
        cruiseControl: false,
        digitalCluster: true
      },
      technology: {
        gpsNavigation: true,
        telematicsSystem: true,
        fleetManagement: true,
        diagnosticSystem: true,
        remoteDoorLock: false,
        smartConnectivity: true,
        mobileApp: true,
        voiceCommands: false,
        wirelessCharging: false
      },
      maintenance: {
        serviceInterval: 12000,
        warrantyPeriod: 36,
        warrantyKilometers: 180000,
        oilCapacity: 10,
        coolantCapacity: 15,
        batterySpecification: '12V 110Ah',
        tireSize: '215/75R17.5',
        spareWheelType: 'Steel',
        toolKit: true,
        firstAidKit: true
      },
      transmission: {
        type: 'manual',
        gears: 6,
        clutchType: 'Single plate dry clutch'
      },
      suspension: {
        front: 'Semi-elliptical leaf spring',
        rear: 'Semi-elliptical leaf spring'
      },
      brakes: {
        front: 'Disc with ABS',
        rear: 'Drum with ABS',
        parkingBrake: 'Hand brake'
      },
      steering: {
        type: 'Power assisted',
        turnsLockToLock: 4.7
      },
      wheels: {
        size: '17.5 inch',
        type: 'Steel',
        spareWheel: true
      }
    },
    configuration: {
      bodyType: 'Medium Cargo',
      color: {
        exterior: 'Blue',
        interior: 'Grey'
      },
      engineVariant: 'DICOR 3.8 145HP',
      transmissionOption: 'manual',
      driveConfiguration: '4x2',
      additionalFeatures: ['AC', 'Digital cluster', 'Telematics'],
      accessories: ['Tool kit', 'Spare wheel', 'Cargo restraints'],
      customizations: {}
    },
    applications: [applicationAreas[0]], // Medium cargo
    media: {
      images: {
        exterior: ['/images/vehicles/ultra-t11-exterior.jpg'],
        interior: ['/images/vehicles/ultra-t11-interior.jpg'],
        engine: ['/images/vehicles/ultra-t11-engine.jpg'],
        features: ['/images/vehicles/ultra-t11-features.jpg']
      },
      videos: {
        overview: '/videos/ultra-t11-overview.mp4'
      },
      documents: {
        brochure: '/docs/ultra-t11-brochure.pdf',
        specifications: '/docs/ultra-t11-specs.pdf'
      }
    },
    pricing: {
      basePrice: 1650000,
      variants: {
        'Ultra T.11': {
          price: 1650000,
          features: ['145 HP Engine', 'Medium Cargo Body', 'ABS+EBD', 'AC']
        }
      },
      financing: {
        emiOptions: [
          { tenure: 48, downPayment: 25, emiAmount: 37500 },
          { tenure: 60, downPayment: 30, emiAmount: 32000 }
        ],
        loanPartners: ['Tata Motors Finance', 'HDFC Bank', 'SBI']
      },
      insurance: {
        partners: ['Tata AIG', 'HDFC ERGO'],
        estimatedPremium: 49000
      }
    },
    availability: {
      inStock: true,
      deliveryTime: 25,
      locations: ['Mumbai', 'Delhi', 'Chennai', 'Pune', 'Kolkata', 'Ahmedabad']
    },
    ratings: {
      overall: 4.2,
      performance: 4.3,
      fuelEfficiency: 4.1,
      comfort: 4.0,
      reliability: 4.4,
      reviews: 365
    },
    competitors: ['ashok-leyland-partner', 'mahindra-furio'],
    isHighlighted: false,
    isFeatured: false,
    launchDate: '2024-01-05'
  },

  // SMALL COMMERCIAL - Ace Series
  {
    id: 'ace-ht',
    name: 'Tata Ace HT',
    model: 'Ace HT',
    year: 2025,
    category: 'trucks' as VehicleCategory,
    subcategory: 'lcv',
    specifications: {
      engine: {
        model: 'DICOR CR4',
        displacement: 1405,
        power: 16,
        torque: 38,
        fuelType: 'diesel',
        emissionStandard: 'BS6',
        cylinders: 4,
        valvesPerCylinder: 2,
        compressionRatio: '18.0:1',
        maxRpm: 4000,
        idlingRpm: 800
      },
      performance: {
        maxSpeed: 65,
        gradeability: 30,
        fuelEfficiency: 22.0,
        acceleration0to60: 40,
        brakingDistance: 38,
        turningRadius: 4.2,
        groundClearance: 180,
        wadingDepth: 300
      },
      dimensions: {
        length: 3350,
        width: 1475,
        height: 1800,
        wheelbase: 1900,
        frontOverhang: 725,
        rearOverhang: 725,
        trackWidth: {
          front: 1285,
          rear: 1285
        }
      },
      capacity: {
        grossVehicleWeight: 1600,
        kerbWeight: 850,
        payloadCapacity: 750,
        fuelTankCapacity: 35,
        cargoVolume: 2.5,
        axleLoad: {
          front: 600,
          rear: 1000
        }
      },
      safety: {
        abs: false,
        ebd: false,
        esp: false,
        airbags: 0,
        seatBelts: 2,
        childSafetyLocks: false,
        immobilizer: true,
        centralLocking: false,
        reverseCamera: false,
        parkingSensors: false,
        hillHoldAssist: false,
        tractionControl: false
      },
      comfort: {
        airConditioning: false,
        powerSteering: true,
        powerWindows: false,
        musicSystem: false,
        bluetoothConnectivity: false,
        usbPorts: 0,
        cupHolders: 1,
        storageCompartments: 2,
        adjustableSeats: true,
        tiltSteeringWheel: false,
        cruiseControl: false,
        digitalCluster: false
      },
      technology: {
        gpsNavigation: false,
        telematicsSystem: false,
        fleetManagement: false,
        diagnosticSystem: true,
        remoteDoorLock: false,
        smartConnectivity: false,
        mobileApp: false,
        voiceCommands: false,
        wirelessCharging: false
      },
      maintenance: {
        serviceInterval: 10000,
        warrantyPeriod: 24,
        warrantyKilometers: 100000,
        oilCapacity: 5.5,
        coolantCapacity: 6.5,
        batterySpecification: '12V 65Ah',
        tireSize: '155R12',
        spareWheelType: 'Steel',
        toolKit: true,
        firstAidKit: false
      },
      transmission: {
        type: 'manual',
        gears: 5,
        clutchType: 'Single plate dry clutch'
      },
      suspension: {
        front: 'Independent coil spring',
        rear: 'Leaf spring with shock absorber'
      },
      brakes: {
        front: 'Disc',
        rear: 'Drum',
        parkingBrake: 'Hand brake'
      },
      steering: {
        type: 'Power assisted',
        turnsLockToLock: 4.2
      },
      wheels: {
        size: '12 inch',
        type: 'Steel',
        spareWheel: true
      }
    },
    configuration: {
      bodyType: 'Mini Cargo',
      color: {
        exterior: 'White',
        interior: 'Black'
      },
      engineVariant: 'DICOR CR4 16HP',
      transmissionOption: 'manual',
      driveConfiguration: '4x2',
      additionalFeatures: ['Power steering', 'Rural road capability'],
      accessories: ['Tool kit', 'Spare wheel', 'Tarpaulin'],
      customizations: {}
    },
    applications: [applicationAreas[5]], // Mini cargo/Rural
    media: {
      images: {
        exterior: ['/images/vehicles/ace-ht-exterior.jpg'],
        interior: ['/images/vehicles/ace-ht-interior.jpg'],
        engine: ['/images/vehicles/ace-ht-engine.jpg'],
        features: ['/images/vehicles/ace-ht-features.jpg']
      },
      videos: {
        overview: '/videos/ace-ht-overview.mp4'
      },
      documents: {
        brochure: '/docs/ace-ht-brochure.pdf',
        specifications: '/docs/ace-ht-specs.pdf'
      }
    },
    pricing: {
      basePrice: 525000,
      variants: {
        'Ace HT': {
          price: 525000,
          features: ['16 HP Engine', 'Power Steering', '750kg Payload']
        }
      },
      financing: {
        emiOptions: [
          { tenure: 36, downPayment: 20, emiAmount: 15500 },
          { tenure: 48, downPayment: 25, emiAmount: 12800 }
        ],
        loanPartners: ['Tata Motors Finance', 'Regional Banks', 'Microfinance']
      },
      insurance: {
        partners: ['Tata AIG', 'HDFC ERGO', 'Rural Insurance'],
        estimatedPremium: 20000
      }
    },
    availability: {
      inStock: true,
      deliveryTime: 10,
      locations: ['All Major Cities', 'Rural Dealerships', 'Tier 2/3 Cities']
    },
    ratings: {
      overall: 4.0,
      performance: 3.8,
      fuelEfficiency: 4.4,
      comfort: 3.6,
      reliability: 4.3,
      reviews: 1850
    },
    competitors: ['mahindra-jeeto', 'piaggio-porter'],
    isHighlighted: false,
    isFeatured: true,
    launchDate: '2023-07-15'
  }
];

// Helper functions for data access
export const getVehiclesByCategory = (category: VehicleCategory): Vehicle[] => {
  return vehiclesData.filter(vehicle => vehicle.category === category);
};

export const getVehiclesBySubcategory = (category: VehicleCategory, subcategory: string): Vehicle[] => {
  return vehiclesData.filter(vehicle => 
 
    vehicle.category === category && vehicle.subcategory === subcategory
  );
};

export const getFeaturedVehicles = (): Vehicle[] => {
  return vehiclesData.filter(vehicle => vehicle.isFeatured);
};

export const getVehicleById = (id: string): Vehicle | undefined => {
  return vehiclesData.find(vehicle => vehicle.id === id);
};

export const searchVehicles = (query: string): Vehicle[] => {
  const lowercaseQuery = query.toLowerCase();
  return vehiclesData.filter(vehicle => 
    vehicle.name.toLowerCase().includes(lowercaseQuery) ||
    vehicle.model.toLowerCase().includes(lowercaseQuery) ||
    vehicle.applications.some(app => app.name.toLowerCase().includes(lowercaseQuery))
  );
};
