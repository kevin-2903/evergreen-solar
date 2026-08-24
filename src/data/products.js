import { images } from './images';

// ============================================================================
// PRODUCT CATALOG — Editable placeholder data
// ============================================================================
// Replace these placeholder products with actual Evergreen Solar products.
// Each product supports: image, gallery, category, brand, name, specs, price,
// availability, warranty, description, and technical details.
//
// To add a product: copy an object below, change the fields, and give it a
// unique `id`. The website will automatically show it in the catalogue.
// ============================================================================

export const productCategories = [
  'All',
  'Solar Panels',
  'Inverters',
  'Batteries',
  'Mounting',
  'Accessories',
];

export const products = [
  // --- SOLAR PANELS ---
  {
    id: 'panel-550w-mono-perc',
    category: 'Solar Panels',
    brand: 'Evergreen',
    name: '550W Mono PERC Solar Panel',
    image: images.panelDetail,
    gallery: [images.panelDetail, images.panelCell, images.panelRooftop, images.panelClose],
    wattage: '550W',
    efficiency: '21.5%',
    warranty: '25 Years',
    price: 16500,
    available: true,
    description:
      'High-efficiency monocrystalline PERC solar panel with excellent low-light performance and anti-reflective coating for maximum energy yield.',
    specs: [
      { label: 'Rated Power', value: '550W' },
      { label: 'Cell Type', value: 'Monocrystalline PERC' },
      { label: 'Efficiency', value: '21.5%' },
      { label: 'Warranty', value: '12 yr product / 25 yr performance' },
      { label: 'Dimensions', value: '2278 × 1134 × 35 mm' },
      { label: 'Weight', value: '27.5 kg' },
    ],
    features: ['Half-cut cell technology', 'PID resistance', 'Salt mist & ammonia certified', 'IP68 junction box'],
  },
  {
    id: 'panel-450w-mono',
    category: 'Solar Panels',
    brand: 'Evergreen',
    name: '450W Mono Half-Cut Solar Panel',
    image: images.panelCell,
    gallery: [images.panelCell, images.panelDetail, images.panelArray],
    wattage: '450W',
    efficiency: '20.3%',
    warranty: '25 Years',
    price: 13500,
    available: true,
    description:
      'Compact monocrystalline panel with half-cut cell design for reduced resistance and improved shading tolerance.',
    specs: [
      { label: 'Rated Power', value: '450W' },
      { label: 'Cell Type', value: 'Monocrystalline Half-Cut' },
      { label: 'Efficiency', value: '20.3%' },
      { label: 'Warranty', value: '12 yr product / 25 yr performance' },
      { label: 'Dimensions', value: '2094 × 1038 × 35 mm' },
      { label: 'Weight', value: '23.0 kg' },
    ],
    features: ['Half-cut cell technology', 'Better shading response', 'Low temperature coefficient', 'High snow load capacity'],
  },
  {
    id: 'panel-540w-bifacial',
    category: 'Solar Panels',
    brand: 'Evergreen',
    name: '540W Bifacial Dual Glass Panel',
    image: images.panelArray,
    gallery: [images.panelArray, images.panelSky, images.panelDetail],
    wattage: '540W',
    efficiency: '21.0%',
    warranty: '30 Years',
    price: 19500,
    available: true,
    description:
      'Bifacial dual-glass module that captures sunlight from both sides, increasing total energy generation by up to 30% in reflective environments.',
    specs: [
      { label: 'Rated Power', value: '540W (+30% bifacial gain)' },
      { label: 'Cell Type', value: 'Bifacial Monocrystalline' },
      { label: 'Efficiency', value: '21.0%' },
      { label: 'Warranty', value: '15 yr product / 30 yr performance' },
      { label: 'Glass', value: 'Dual 2.0mm tempered' },
      { label: 'Weight', value: '28.5 kg' },
    ],
    features: ['Bifacial energy gain', 'Dual-glass weatherproof', '30-year performance warranty', 'Anti-LeTID technology'],
  },

  // --- INVERTERS ---
  {
    id: 'inverter-5kw-hybrid',
    category: 'Inverters',
    brand: 'Evergreen',
    name: '5kW Hybrid Solar Inverter',
    image: images.inverterInstall,
    gallery: [images.inverterInstall, images.inverterDetail, images.inverterTech],
    wattage: '5kW',
    efficiency: '97.5%',
    warranty: '5 Years',
    price: 42000,
    available: true,
    description:
      'Smart hybrid inverter with built-in MPPT charge controller, supporting both grid-tied and battery backup operation modes.',
    specs: [
      { label: 'Rated Power', value: '5kW / 5000VA' },
      { label: 'Type', value: 'Hybrid (On/Off-Grid)' },
      { label: 'Efficiency', value: '97.5%' },
      { label: 'MPPT', value: 'Dual MPPT tracking' },
      { label: 'Battery', value: '48V Li-ion / Lead-acid' },
      { label: 'Warranty', value: '5 Years' },
    ],
    features: ['Wi-Fi monitoring included', 'Dual MPPT', 'Touchscreen LCD display', 'Auto-restart on AC recovery'],
  },
  {
    id: 'inverter-3kw-ongrid',
    category: 'Inverters',
    brand: 'Evergreen',
    name: '3kW On-Grid String Inverter',
    image: images.inverterDetail,
    gallery: [images.inverterDetail, images.inverterInstall],
    wattage: '3kW',
    efficiency: '98.0%',
    warranty: '5 Years',
    price: 22000,
    available: true,
    description:
      'Lightweight grid-tied string inverter designed for residential rooftop systems, with built-in DC and AC disconnects.',
    specs: [
      { label: 'Rated Power', value: '3kW / 3000W' },
      { label: 'Type', value: 'On-Grid (Grid-Tied)' },
      { label: 'Efficiency', value: '98.0%' },
      { label: 'MPPT', value: 'Single MPPT, 2 strings' },
      { label: 'Communication', value: 'Wi-Fi + RS485' },
      { label: 'Warranty', value: '5 Years' },
    ],
    features: ['Net metering compatible', 'Compact wall-mount design', 'IP65 weatherproof', 'Mobile app monitoring'],
  },
  {
    id: 'inverter-10kw-offgrid',
    category: 'Inverters',
    brand: 'Evergreen',
    name: '10kW Off-Grid Solar Inverter',
    image: images.inverterTech,
    gallery: [images.inverterTech, images.inverterInstall, images.inverterDetail],
    wattage: '10kW',
    efficiency: '96.0%',
    warranty: '5 Years',
    price: 78000,
    available: false,
    description:
      'High-capacity off-grid inverter for standalone solar systems, supporting heavy loads and large battery banks.',
    specs: [
      { label: 'Rated Power', value: '10kW / 10000VA' },
      { label: 'Type', value: 'Off-Grid (Stand-alone)' },
      { label: 'Efficiency', value: '96.0%' },
      { label: 'Battery', value: '48V, up to 16 units' },
      { label: 'Output', value: 'Pure Sine Wave' },
      { label: 'Warranty', value: '5 Years' },
    ],
    features: ['Pure sine wave output', 'Supports large battery banks', 'Generator auto-start', 'Surge capacity 200%'],
  },

  // --- BATTERIES ---
  {
    id: 'battery-5kwh-lifepo4',
    category: 'Batteries',
    brand: 'Evergreen',
    name: '5kWh LiFePO₄ Solar Battery',
    image: images.batteryInstall,
    gallery: [images.batteryInstall, images.batteryBank],
    wattage: '5kWh',
    efficiency: '95%',
    warranty: '5 Years',
    price: 65000,
    available: true,
    description:
      'Modular lithium iron phosphate battery with intelligent BMS for safe, long-lasting solar energy storage.',
    specs: [
      { label: 'Capacity', value: '5kWh / 100Ah' },
      { label: 'Chemistry', value: 'LiFePO₄ (LFP)' },
      { label: 'Voltage', value: '48V / 51.2V nominal' },
      { label: 'Cycle Life', value: '6000+ cycles at 80% DoD' },
      { label: 'Communication', value: 'CAN / RS485' },
      { label: 'Warranty', value: '5 Years' },
    ],
    features: ['Modular stackable design', 'Intelligent BMS protection', '6000+ deep cycles', 'Wall/floor mountable'],
  },
  {
    id: 'battery-10kwh-lifepo4',
    category: 'Batteries',
    brand: 'Evergreen',
    name: '10kWh LiFePO₄ Solar Battery',
    image: images.batteryBank,
    gallery: [images.batteryBank, images.batteryInstall],
    wattage: '10kWh',
    efficiency: '95%',
    warranty: '5 Years',
    price: 120000,
    available: true,
    description:
      'High-capacity LFP battery system for larger homes and commercial backup, expandable up to 30kWh.',
    specs: [
      { label: 'Capacity', value: '10kWh / 200Ah' },
      { label: 'Chemistry', value: 'LiFePO₄ (LFP)' },
      { label: 'Voltage', value: '48V / 51.2V nominal' },
      { label: 'Cycle Life', value: '6000+ cycles at 80% DoD' },
      { label: 'Expandable', value: 'Up to 30kWh (6 modules)' },
      { label: 'Warranty', value: '5 Years' },
    ],
    features: ['Expandable up to 30kWh', 'Smart BMS with app monitoring', 'IP55 rated enclosure', 'Floor standing design'],
  },

  // --- MOUNTING ---
  {
    id: 'mount-roof-aluminum',
    category: 'Mounting',
    brand: 'Evergreen',
    name: 'Aluminium Rooftop Mounting Structure',
    image: images.mountingAerial,
    gallery: [images.mountingAerial, images.mountingStructure, images.mountingField],
    wattage: '—',
    efficiency: '—',
    warranty: '10 Years',
    price: 8000,
    available: true,
    description:
      'Anodised aluminium mounting structure for rooftop solar installations, compatible with all standard panel sizes.',
    specs: [
      { label: 'Material', value: 'Anodised Aluminium AL6005-T5' },
      { label: 'Roof Type', value: 'RCC / Metal / Tile' },
      { label: 'Tilt Angle', value: '5° – 45° adjustable' },
      { label: 'Wind Load', value: 'Up to 60 m/s' },
      { label: 'Corrosion', value: 'Salt mist certified' },
      { label: 'Warranty', value: '10 Years' },
    ],
    features: ['Adjustable tilt angles', 'Anodised anti-corrosion', 'Pre-assembled for fast install', 'Universal panel compatibility'],
  },
  {
    id: 'mount-ground-steel',
    category: 'Mounting',
    brand: 'Evergreen',
    name: 'Hot-Dip Galvanised Ground Mount',
    image: images.mountingField,
    gallery: [images.mountingField, images.mountingAerial],
    wattage: '—',
    efficiency: '—',
    warranty: '15 Years',
    price: 25000,
    available: true,
    description:
      'Heavy-duty ground-mount structure for open-area solar installations, engineered for industrial-scale arrays.',
    specs: [
      { label: 'Material', value: 'Hot-dip galvanised steel' },
      { label: 'Foundation', value: 'Concrete / Ramming / Screw pile' },
      { label: 'Tilt Angle', value: '0° – 45° fixed/seasonal' },
      { label: 'Wind Load', value: 'Up to 55 m/s' },
      { label: 'Capacity', value: 'Up to 100kW per array' },
      { label: 'Warranty', value: '15 Years' },
    ],
    features: ['Industrial-grade steel', 'Multiple foundation options', 'Seasonal tilt adjustment', 'Modular expansion ready'],
  },

  // --- ACCESSORIES ---
  {
    id: 'acc-mppt-controller-60a',
    category: 'Accessories',
    brand: 'Evergreen',
    name: '60A MPPT Solar Charge Controller',
    image: images.inverterDetail,
    gallery: [images.inverterDetail],
    wattage: '60A',
    efficiency: '99%',
    warranty: '3 Years',
    price: 8500,
    available: true,
    description:
      'Maximum power point tracking charge controller for off-grid systems, optimising energy harvest from solar panels.',
    specs: [
      { label: 'Max Current', value: '60A' },
      { label: 'System Voltage', value: '12V / 24V / 48V auto' },
      { label: 'Tracking Efficiency', value: '99%' },
      { label: 'Display', value: 'LCD screen' },
      { label: 'Protection', value: 'Overcharge / Short circuit / Reverse polarity' },
      { label: 'Warranty', value: '3 Years' },
    ],
    features: ['Auto system voltage detection', 'LCD display + data logging', 'Multiple protection modes', 'RS485 communication'],
  },
  {
    id: 'acc-dc-cable-4sq',
    category: 'Accessories',
    brand: 'Evergreen',
    name: 'Solar DC Cable 4 sq mm (100m)',
    image: images.mountingStructure,
    gallery: [images.mountingStructure],
    wattage: '—',
    efficiency: '—',
    warranty: '—',
    price: 4500,
    available: true,
    description:
      'TÜV-certified solar DC cable for interconnecting panels and inverters, UV and weather resistant for outdoor use.',
    specs: [
      { label: 'Cross-section', value: '4 sq mm' },
      { label: 'Length', value: '100 metres' },
      { label: 'Voltage', value: '1500V DC' },
      { label: 'Certification', value: 'TÜV / IEC 62930' },
      { label: 'Temperature', value: '-40°C to +90°C' },
      { label: 'Insulation', value: 'XLPO double wall' },
    ],
    features: ['TÜV certified', 'UV & ozone resistant', '1500V DC rated', 'Halogen-free insulation'],
  },
  {
    id: 'acc-surge-protector',
    category: 'Accessories',
    brand: 'Evergreen',
    name: 'DC Surge Protector 1000V',
    image: images.inverterTech,
    gallery: [images.inverterTech],
    wattage: '—',
    efficiency: '—',
    warranty: '2 Years',
    price: 3200,
    available: false,
    description:
      'Type 2 DC surge protection device for safeguarding solar inverters and panels against lightning and voltage surges.',
    specs: [
      { label: 'Type', value: 'Type 2 SPD' },
      { label: 'Max Voltage', value: '1000V DC' },
      { label: 'Discharge Current', value: '20kA (8/20μs)' },
      { label: 'Mounting', value: 'DIN rail 35mm' },
      { label: 'Indicator', value: 'Visual fault indicator' },
      { label: 'Warranty', value: '2 Years' },
    ],
    features: ['DIN rail mountable', 'Visual fault indicator', 'Replaceable cartridge', 'IP20 protection class'],
  },
];

// Helper to get a product by id
export function getProductById(id) {
  return products.find((p) => p.id === id);
}

// Helper to get related products (same category, excluding current)
export function getRelatedProducts(product, limit = 4) {
  if (!product) return [];
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}

// Helper to format price in INR
export function formatPrice(price) {
  return `₹${price.toLocaleString('en-IN')}`;
}
