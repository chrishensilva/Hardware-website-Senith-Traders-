// K D Senith Traders PVT LTD — Product Catalog Data

export const categories = [
  { id: 'all', label: 'All Products' },
  { id: 'manhole', label: 'Cast Iron Manhole & Gully Cover' },
  { id: 'parking', label: 'Parking Safety Equipments' },
  { id: 'safety', label: 'Safety Equipments' },
];

export const products = [

  // ============================================================
  // CAST IRON MANHOLE & GULLY COVER  (8 products)
  // ============================================================

  {
    id: 2, sku: 'MH-CI-002', name: 'BMC Gully Covers', category: 'manhole', inStock: true, featured: false, image: '2.webp',
    specs: [
      { sizeMm: '300×300×30', sizeInches: '12"×12"×1¼"', loadingCapacity: '12.5 Tons', en124Standard: 'B125' },
      { sizeMm: '400×400×30', sizeInches: '16"×16"×1½"', loadingCapacity: '12.5 Tons', en124Standard: 'B125' },
      { sizeMm: '500×500×40', sizeInches: '20"×20"×1½"', loadingCapacity: '12.5 Tons', en124Standard: 'B125' },
      { sizeMm: '300×500×40', sizeInches: '12"×20"×1½"', loadingCapacity: '20.0 Tons', en124Standard: 'B200' },
      { sizeMm: '400×500×40', sizeInches: '16"×20"×1½"', loadingCapacity: '20.0 Tons', en124Standard: 'B200' },
      { sizeMm: '400×600×40', sizeInches: '16"×24"×1½"', loadingCapacity: '20.0 Tons', en124Standard: 'B200' },
    ],
  },
  {
    id: 5, sku: 'MH-GC-005', name: 'SMC Square Manhole Cover', category: 'manhole', inStock: true, featured: false, image: '5.webp',
    specs: [
      { sizeMm: '300×300×20', sizeInches: '12"×12"×¾"', loadingCapacity: '1.5 Tons', en124Standard: 'A15' },
      { sizeMm: '400×400×20', sizeInches: '16"×16"×¾"', loadingCapacity: '1.5 Tons', en124Standard: 'A15' },
      { sizeMm: '450×450×20', sizeInches: '18"×18"×¼"', loadingCapacity: '1.5 Tons', en124Standard: 'A15' },
      { sizeMm: '600×600×40', sizeInches: '24"×24" (Without Handle)', loadingCapacity: '12.5 Tons', en124Standard: 'B125' },
      { sizeMm: '600×600×40', sizeInches: '24"×24" (With Handle)', loadingCapacity: '12.5 Tons', en124Standard: 'B125' },
    ],
  },
  {
    id: 6, sku: 'MH-CI-006', name: 'SMC Rectangle Manhole Cover', category: 'manhole', inStock: true, featured: false, image: '6.webp',
    specs: [
      { sizeMm: '600×450×20', sizeInches: '24"×18"×¼"', loadingCapacity: '1.5 Tons', en124Standard: 'A15' },
    ],
  },

  // ============================================================
  // PARKING SAFETY EQUIPMENTS  (18 products from Excel)
  // ============================================================

  {
    id: 9,
    sku: 'PK-001',
    name: 'Plastic Speed Hump With Reflective HY-SPP350R',
    category: 'parking',
    inStock: true,
    featured: true,
    image: 'extracted_row_4.webp',
    specs: [
      { label: 'Size', value: '500×350×40 mm' },
      { label: 'Weight', value: '4.3 kg/m' },
      { label: 'Reflective', value: '12 pcs/m' },
      { label: 'Material', value: 'Modified plastic' },
      { label: 'Packing', value: '6 pcs/woven bag' }
    ]
  },
  {
    id: 10,
    sku: 'PK-002',
    name: 'Speed Hump End Piece (350R End)',
    category: 'parking',
    inStock: true,
    featured: false,
    image: 'extracted_row_5.webp',
    specs: [
      { label: 'Size', value: '⌀350 mm' },
      { label: 'Packing', value: '30 pcs/woven bag' }
    ]
  },
  {
    id: 11,
    sku: 'PK-003',
    name: 'Plastic Speed Hump With Reflective HY-SPP250R',
    category: 'parking',
    inStock: true,
    featured: false,
    image: 'extracted_row_6.webp',
    specs: [
      { label: 'Size', value: '250×350×50 mm' },
      { label: 'Weight', value: '5.4 kg/m' },
      { label: 'Material', value: 'Modified plastic' },
      { label: 'Packing', value: '10 pcs/woven' }
    ]
  },
  {
    id: 12,
    sku: 'PK-004',
    name: 'Rubber Speed Hump With Reflective HY-SPR350R',
    category: 'parking',
    inStock: true,
    featured: false,
    image: 'extracted_row_7.webp',
    specs: [
      { label: 'Size', value: '500×350×50 mm' },
      { label: 'Weight', value: '12.5 kg/m' },
      { label: 'Material', value: 'Rubber' },
      { label: 'Packing', value: '4 pcs/woven' }
    ]
  },
  {
    id: 13,
    sku: 'PK-005',
    name: 'Rubber Speed Hump End',
    category: 'parking',
    inStock: true,
    featured: false,
    image: 'extracted_row_8.webp',
    specs: [
      { label: 'Size', value: '⌀350 mm' },
      { label: 'Weight', value: '1.5 kg' },
      { label: 'Packing', value: '20 pcs/woven bag' }
    ]
  },
  {
    id: 14,
    sku: 'PK-006',
    name: 'Wall protector',
    category: 'parking',
    inStock: true,
    featured: false,
    image: 'extracted_row_9.webp',
    specs: [
      { label: 'Size', value: '1000 × 160 × 50 mm' },
      { label: 'Weight', value: '4.5 kg' },
      { label: 'Material', value: 'Rubber' },
      { label: 'Packing', value: '4 pcs/woven bag' }
    ]
  },
  {
    id: 15,
    sku: 'PK-007',
    name: 'Corner Guard',
    category: 'parking',
    inStock: true,
    featured: false,
    image: 'extracted_row_10.webp',
    specs: [
      { label: 'Size', value: '1200 mm (also available 1000 mm)' },
      { label: 'Weight', value: '2 kg' },
      { label: 'Material', value: 'Rubber' },
      { label: 'Packing', value: '15/woven bag' }
    ]
  },
  {
    id: 16,
    sku: 'PK-008',
    name: 'Rubber wheel stopper',
    category: 'parking',
    inStock: true,
    featured: false,
    image: 'extracted_row_11.webp',
    specs: [
      { label: 'Size', value: '550 × 150 × 100 mm' },
      { label: 'Weight', value: '4 kg/pc' },
      { label: 'Packing', value: '6 pcs/woven bag' }
    ]
  },
  {
    id: 17,
    sku: 'PK-009',
    name: 'Rubber Corner Guard- Round DH-128',
    category: 'parking',
    inStock: true,
    featured: false,
    image: 'extracted_row_12.webp',
    specs: [
      { label: 'Material', value: 'Rubber' }
    ]
  },
  {
    id: 18,
    sku: 'PK-010',
    name: 'Plastic Chain',
    category: 'parking',
    inStock: true,
    featured: false,
    image: 'extracted_row_13.webp',
    specs: [
      { label: 'Size', value: '8 mm' },
      { label: 'Color', value: 'Red/White, Black/Yellow' },
      { label: 'Length', value: '25 meters/pp bag' }
    ]
  },
  {
    id: 19,
    sku: 'PK-011',
    name: 'Retractable Topper',
    category: 'parking',
    inStock: true,
    featured: false,
    image: 'extracted_row_14.webp',
    specs: [
      { label: 'Length', value: '2 meters' },
      { label: 'Color', value: 'White & Red' },
      { label: 'Material', value: 'PP & ABS' },
      { label: 'Packing', value: '16 pcs/ctn' }
    ]
  },
  {
    id: 20,
    sku: 'PK-012',
    name: 'Water Barricade',
    category: 'parking',
    inStock: true,
    featured: false,
    image: 'extracted_row_15.webp',
    specs: [
      { label: 'Size', value: '1800 × 900 × 900 mm' },
      { label: 'Weight', value: '30 kg' }
    ]
  },
  {
    id: 21,
    sku: 'PK-013',
    name: 'Life Buoy',
    category: 'parking',
    inStock: true,
    featured: false,
    image: 'extracted_row_16.webp',
    specs: [
      { label: 'Outer Diameter', value: '72 cm' },
      { label: 'Inner Diameter', value: '44 cm' },
      { label: 'Thickness', value: '10.5 cm' },
      { label: 'Buoyancy', value: 'More than 14.50 kg' },
      { label: 'Weight', value: 'More than 2.5 kg' },
      { label: 'Material', value: 'High Density Polyethylene (outside), hard PU (inside)' }
    ]
  },
  {
    id: 22,
    sku: 'PK-014',
    name: 'Life Saving Tube',
    category: 'parking',
    inStock: true,
    featured: false,
    image: 'extracted_row_17.webp',
    specs: [
      { label: 'Size', value: '104cm × 14.5cm × 7cm' },
      { label: 'Accessories', value: '153cm webbing with brass fastener, 1.5 yard cotton rope, straps' }
    ]
  },
  {
    id: 23,
    sku: 'PK-015',
    name: 'Rescue Can',
    category: 'parking',
    inStock: true,
    featured: false,
    image: 'extracted_row_18.webp',
    specs: [
      { label: 'Material', value: 'Super Polyethylene Rubber' },
      { label: 'Buoyancy', value: '> 140 N' },
      { label: 'Size', value: '70cm × 24cm × 14.5cm' },
      { label: 'Weight', value: '1.1 kg' }
    ]
  },
  {
    id: 24,
    sku: 'PK-016',
    name: 'Throw Bag',
    category: 'parking',
    inStock: true,
    featured: false,
    image: 'extracted_row_19.webp',
    specs: [
      { label: 'Rope type', value: '9 mm 32-Strand PP Braided Floating Rope' },
      { label: 'Length', value: '20 Meters' }
    ]
  },
  {
    id: 25,
    sku: 'PK-017',
    name: 'Arpico Barricade - Small',
    category: 'parking',
    inStock: true,
    featured: false,
    image: 'extracted_row_20.webp',
    specs: [
      { label: 'Size', value: '930mm × 765mm × 450mm' }
    ]
  },
  {
    id: 26,
    sku: 'PK-018',
    name: 'Arpico Barricade - Large',
    category: 'parking',
    inStock: true,
    featured: false,
    image: 'extracted_row_21.webp',
    specs: [
      { label: 'Size', value: '2000mm × 1000mm × 500mm' }
    ]
  },
  {
    id: 27,
    sku: 'PK-019',
    name: 'Convex Traffic Mirror',
    category: 'parking',
    inStock: true,
    featured: false,
    image: 'IMG-20260714-WA0000.jpg',
    specs: [
      { label: 'Material', value: 'Acrylic (Shatterproof) & ABS Plastic' },
      { label: 'Color', value: 'Orange' },
      { label: 'Size', value: '450mm, 600mm, 800mm, 1000mm' },
      { label: 'Type', value: 'Indoor / Outdoor' }
    ]
  },
  {
    id: 28,
    sku: 'PK-020',
    name: 'Traffic Pole Flexible Guide Post',
    category: 'parking',
    inStock: true,
    featured: false,
    image: 'IMG-20260714-WA0001.jpg',
    specs: [
      { label: 'Height', value: '750 mm' },
      { label: 'Material', value: 'PU (Polyurethane)' },
      { label: 'Color', value: 'Orange with Yellow Reflective Stripes' },
      { label: 'Weight', value: 'Approx. 1.2 kg' }
    ]
  },
  {
    id: 29,
    sku: 'PK-021',
    name: 'Plastic Speed Hump',
    category: 'parking',
    inStock: true,
    featured: false,
    image: 'IMG-20260714-WA0002.jpg',
    specs: [
      { label: 'Material', value: 'High Quality Plastic' },
      { label: 'Color', value: 'Yellow & Black' },
      { label: 'Dimensions', value: 'Middle: 350×250×50 mm, End: 250×175×50 mm' },
      { label: 'Height', value: '50 mm' }
    ]
  },
  {
    id: 30,
    sku: 'PK-022',
    name: 'Rubber Wheel Chock',
    category: 'parking',
    inStock: true,
    featured: false,
    image: 'IMG-20260714-WA0003.jpg',
    specs: [
      { label: 'Material', value: 'Heavy Duty Rubber' },
      { label: 'Color', value: 'Black with Yellow Stripes' },
      { label: 'Dimensions', value: '250 × 150 × 190 mm (10" × 6" × 7.3")' },
      { label: 'Weight', value: 'Approx. 3.1 kg (6.8 lbs)' }
    ]
  },
  {
    id: 31,
    sku: 'PK-023',
    name: 'Rubber Cable Protector',
    category: 'parking',
    inStock: true,
    featured: false,
    image: 'IMG-20260714-WA0004.jpg',
    specs: [
      { label: 'Material', value: 'Heavy Duty Rubber' },
      { label: 'Color', value: 'Black Base with Yellow Lid' },
      { label: 'Dimensions', value: '1000 × 250 × 45 mm' },
      { label: 'Weight', value: 'Approx. 7.5 kg' },
      { label: 'Type', value: 'Multiple cable channels (3 × 3 cm each)' }
    ]
  },
  {
    id: 32,
    sku: 'PK-024',
    name: 'Wall Protector (Heavy Duty)',
    category: 'parking',
    inStock: true,
    featured: false,
    image: 'IMG-20260714-WA0005.jpg',
    specs: [
      { label: 'Material', value: 'High Quality Natural Rubber' },
      { label: 'Color', value: 'Black with Yellow Reflective Strip' },
      { label: 'Dimensions', value: '1000 × 160 × 50 mm' },
      { label: 'Weight', value: 'Approx. 6.5 kg' }
    ]
  },
  {
    id: 33,
    sku: 'PK-025',
    name: 'Road Safety Rubber Wall Bumper',
    category: 'parking',
    inStock: true,
    featured: false,
    image: 'IMG-20260714-WA0006.jpg',
    specs: [
      { label: 'Material', value: 'Rubber' },
      { label: 'Color', value: 'Black Base with Yellow Reflective Sheets' },
      { label: 'Dimensions', value: '550 × 150 × 100 mm' },
      { label: 'Weight', value: '7.5 kg' }
    ]
  },
  {
    id: 34,
    sku: 'PK-026',
    name: 'Rubber Wheel Stopper (Compact)',
    category: 'parking',
    inStock: true,
    featured: false,
    image: 'IMG-20260714-WA0007.jpg',
    specs: [
      { label: 'Material', value: 'Recycled Rubber & Plastic' },
      { label: 'Color', value: 'Black with Yellow Reflective Strips' },
      { label: 'Dimensions', value: '480 × 150 × 100 mm' },
      { label: 'Weight', value: '2.5 kg' }
    ]
  },
  {
    id: 35,
    sku: 'PK-027',
    name: 'Rubber Corner Guard (Heavy Duty)',
    category: 'parking',
    inStock: true,
    featured: false,
    image: 'IMG-20260714-WA0008.jpg',
    specs: [
      { label: 'Material', value: 'High-quality Natural / Synthetic Rubber (NR/SBR)' },
      { label: 'Color', value: 'Black with Yellow Reflective Markings' },
      { label: 'Dimensions', value: '1200 mm Length, 75–100 mm Width, 8–12 mm Thickness' }
    ]
  },
  {
    id: 36,
    sku: 'PK-028',
    name: 'Rubber Speed Reducer',
    category: 'parking',
    inStock: true,
    featured: false,
    image: 'IMG-20260714-WA0009.jpg',
    specs: [
      { label: 'Material', value: 'Rubber' },
      { label: 'Color', value: 'Black / Yellow' },
      { label: 'Dimensions', value: '1000 × 350 × 50 mm' },
      { label: 'Reflective', value: 'Trapezoidal Reflector' }
    ]
  },

  // ============================================================
  // SAFETY EQUIPMENTS — from Senith_Lights_Mirrors + Senith_Safety_Products_2025
  // ============================================================

  // --- Lights & Mirrors (Senith_Lights_Mirrors.xlsx) ---
  {
    id: 100, sku: 'LM-001', name: 'Car/Truck Emergency Beacon Light', category: 'safety', inStock: true, featured: true, image: 'LM_r4.webp',
    specs: [{ label: 'Model', value: 'AB-1150' }, { label: 'Color', value: 'Red & Yellow' }, { label: 'Diameter', value: '11.5 cm' }, { label: 'Power', value: 'DC 12V' }]
  },
  {
    id: 101, sku: 'LM-002', name: 'Aviation Light (AC)', category: 'safety', inStock: true, featured: false, image: 'LM_r5.webp',
    specs: [{ label: 'Model', value: 'ST-SAL003(AC)' }, { label: 'Color', value: 'Red' }, { label: 'Size', value: 'H 26.5cm × D 14cm' }, { label: 'Visual Distance', value: '5 km' }]
  },
  {
    id: 102, sku: 'LM-003', name: 'Aviation Light (Solar)', category: 'safety', inStock: true, featured: false, image: 'LM_r6.webp',
    specs: [{ label: 'Model', value: 'ST-SAL003' }, { label: 'Color', value: 'Red' }, { label: 'Size', value: 'H 26.5cm × D 14cm' }, { label: 'Solar Panel', value: '4.8V 630mA, 3W' }, { label: 'Visual Distance', value: '5 km' }]
  },
  {
    id: 103, sku: 'LM-004', name: 'GO/STOP LED Paddle', category: 'safety', inStock: true, featured: false, image: 'LM_r7.webp',
    specs: [{ label: 'Model', value: 'WL-A21-002' }, { label: 'STOP', value: '9 LED (Red)' }, { label: 'GO', value: '7 LED (Green)' }]
  },
  {
    id: 104, sku: 'LM-005', name: 'Vehicle Inspection Mirror', category: 'safety', inStock: true, featured: false, image: 'LM_r8.webp',
    specs: [{ label: 'Diameter', value: '20 × 24 cm' }, { label: 'Handle', value: '85 cm / 130 cm (extended)' }]
  },
  {
    id: 105, sku: 'LM-006', name: 'Arrow Warning LED Light (Large)', category: 'safety', inStock: true, featured: false, image: 'LM_r9.webp',
    specs: [{ label: 'Size', value: 'Large' }, { label: 'Dimensions', value: '125 × 64 cm' }, { label: 'LEDs', value: 'Arrow 4 (44 LED)' }]
  },
  {
    id: 106, sku: 'LM-007', name: 'Arrow Warning LED Light (Small)', category: 'safety', inStock: true, featured: false, image: 'LM_r10.webp',
    specs: [{ label: 'Size', value: 'Small' }, { label: 'Dimensions', value: '48 × 28 cm' }, { label: 'LEDs', value: 'Arrow 4 (28 LED)' }]
  },
  {
    id: 107, sku: 'LM-008', name: 'LED Traffic Cone Cover', category: 'safety', inStock: true, featured: false, image: 'LM_r11.webp',
    specs: [{ label: 'Upper LEDs', value: '11' }, { label: 'Lower LEDs', value: '13' }]
  },

  // --- Reflective Jackets & Vests (Senith_Safety_Products_2025.xlsx) ---
  {
    id: 200, sku: 'SP-001', name: 'Reflective Safety Jacket — LA 2002 (4 Pocket, Zip)', category: 'safety', inStock: true, featured: false, image: 'SP_r5.webp',
    specs: [{ label: 'Model', value: 'LA 2002' }, { label: 'Pockets', value: '4 Pocket with Zip' }]
  },
  {
    id: 201, sku: 'SP-002', name: 'Reflective Safety Jacket — LA 2006 (4 Line)', category: 'safety', inStock: true, featured: false, image: 'SP_r6.webp',
    specs: [{ label: 'Model', value: 'LA 2006' }, { label: 'Style', value: '4 Line Reflective' }]
  },
  {
    id: 202, sku: 'SP-003', name: 'Reflective Safety Jacket — LA 2005 (2 Line)', category: 'safety', inStock: true, featured: false, image: 'SP_r7.webp',
    specs: [{ label: 'Model', value: 'LA 2005' }, { label: 'Style', value: '2 Line Reflective' }]
  },
  {
    id: 203, sku: 'SP-004', name: 'Polyester Net Safety Jacket — LA 2042', category: 'safety', inStock: true, featured: false, image: 'SP_r10.webp',
    specs: [{ label: 'Model', value: 'LA 2042' }, { label: 'Material', value: 'Polyester Net' }]
  },
  {
    id: 204, sku: 'SP-005', name: 'Reflective Safety Jacket — LA 2015 (Yellow/Orange 2 Line)', category: 'safety', inStock: true, featured: false, image: 'SP_r11.webp',
    specs: [{ label: 'Model', value: 'LA 2015' }, { label: 'Color', value: 'Yellow / Orange' }, { label: 'Style', value: '2 Line Reflective' }]
  },
  {
    id: 205, sku: 'SP-006', name: 'Reflective Safety Vest', category: 'safety', inStock: true, featured: false, image: 'SP_r12.webp',
    specs: [{ label: 'Type', value: 'Reflective Vest' }]
  },
  {
    id: 206, sku: 'SP-007', name: 'Rain Coat Full Kit', category: 'safety', inStock: true, featured: false, image: 'SP_r13.webp',
    specs: [{ label: 'Type', value: 'Full Rain Coat Kit (Jacket + Trousers)' }]
  },
  {
    id: 207, sku: 'SP-008', name: 'EXIT Sign', category: 'safety', inStock: true, featured: false, image: 'SP_r16.webp',
    specs: [{ label: 'Type', value: 'LED EXIT Sign' }]
  },

  // --- Gloves ---
  {
    id: 208, sku: 'SP-009', name: 'Gloves — Single Dot Coating (Black)', category: 'safety', inStock: true, featured: false, image: 'SP_r18.webp',
    specs: [{ label: 'Coating', value: 'Single Dot' }, { label: 'Color', value: 'Black' }]
  },
  {
    id: 209, sku: 'SP-010', name: 'Gloves — Orange Rubber Coating', category: 'safety', inStock: true, featured: false, image: 'SP_r20.webp',
    specs: [{ label: 'Coating', value: 'Orange Rubber' }]
  },

  // --- Masks & Respiratory ---
  {
    id: 210, sku: 'SP-011', name: 'Oxypura Face Mask', category: 'safety', inStock: true, featured: false, image: 'SP_r22.webp',
    specs: [{ label: 'Brand', value: 'Oxypura' }, { label: 'Type', value: 'Disposable Face Mask' }]
  },
  {
    id: 211, sku: 'SP-012', name: 'Chemical Respirator', category: 'safety', inStock: true, featured: false, image: 'SP_r23.webp',
    specs: [{ label: 'Type', value: 'Half-Face Chemical Respirator' }]
  },

  // --- Eye Protection ---
  {
    id: 212, sku: 'SP-013', name: 'Safety Goggles (Transparent)', category: 'safety', inStock: true, featured: false, image: 'SP_r25.webp',
    specs: [{ label: 'Lens', value: 'Transparent' }, { label: 'Type', value: 'Safety Goggles' }]
  },

  // --- Boots & Shoes ---
  {
    id: 213, sku: 'SP-014', name: 'Gum Boot — Panther (Black, Size 44)', category: 'safety', inStock: true, featured: false, image: 'SP_r27.webp',
    specs: [{ label: 'Brand', value: 'Panther' }, { label: 'Color', value: 'Black' }, { label: 'Size', value: '44' }]
  },
  {
    id: 214, sku: 'SP-015', name: 'Yellow Gum Boot', category: 'safety', inStock: true, featured: false, image: 'SP_r28.webp',
    specs: [{ label: 'Color', value: 'Yellow' }, { label: 'Type', value: 'Gum Boot' }]
  },
  {
    id: 215, sku: 'SP-016', name: 'Safety Shoes — Miller', category: 'safety', inStock: true, featured: false, image: 'SP_r29.webp',
    specs: [{ label: 'Brand', value: 'Miller' }, { label: 'Type', value: 'Safety Shoes' }]
  },

  // --- Helmets ---
  {
    id: 216, sku: 'SP-017', name: 'Safety Helmet — JPI Yellow (NE 397:2012)', category: 'safety', inStock: true, featured: false, image: 'SP_r31.webp',
    specs: [{ label: 'Brand', value: 'JPI' }, { label: 'Color', value: 'Yellow' }, { label: 'Standard', value: 'NE 397:2012' }]
  },
  {
    id: 217, sku: 'SP-018', name: 'Safety Helmet (White)', category: 'safety', inStock: true, featured: false, image: 'SP_r33.webp',
    specs: [{ label: 'Color', value: 'White' }, { label: 'Type', value: 'Safety Helmet' }]
  },

  // --- Convex Mirrors ---
  {
    id: 218, sku: 'SP-019', name: "Convex Mirror Outdoor — 450mm (18\")", category: 'safety', inStock: true, featured: false, image: 'SP_r35.webp',
    specs: [{ label: 'Diameter', value: "450 mm (18\")" }, { label: 'Use', value: 'Outdoor' }]
  },
  {
    id: 219, sku: 'SP-020', name: "Convex Mirror Outdoor — 600mm (24\")", category: 'safety', inStock: true, featured: false, image: 'SP_r36.webp',
    specs: [{ label: 'Diameter', value: "600 mm (24\")" }, { label: 'Use', value: 'Outdoor' }]
  },
  {
    id: 220, sku: 'SP-021', name: "Convex Mirror Outdoor — 800mm (30\")", category: 'safety', inStock: true, featured: false, image: 'SP_r37.webp',
    specs: [{ label: 'Diameter', value: "800 mm (30\")" }, { label: 'Use', value: 'Outdoor' }]
  },
  {
    id: 221, sku: 'SP-022', name: 'Convex Mirror Outdoor — 1000mm', category: 'safety', inStock: true, featured: false, image: 'SP_r38.webp',
    specs: [{ label: 'Diameter', value: '1000 mm' }, { label: 'Use', value: 'Outdoor' }]
  },
  {
    id: 222, sku: 'SP-023', name: 'Vehicle Inspection Mirror (20×24cm)', category: 'safety', inStock: true, featured: false, image: 'SP_r39.webp',
    specs: [{ label: 'Diameter', value: '20 × 24 cm' }, { label: 'Handle', value: 'Up to 130 cm extended' }]
  },
  {
    id: 223, sku: 'SP-024', name: 'Acrylic Full Dome Mirror — 600mm', category: 'safety', inStock: true, featured: false, image: 'SP_r40.webp',
    specs: [{ label: 'Diameter', value: '600 mm' }, { label: 'Type', value: 'Acrylic Full Dome' }]
  },

  // --- Traffic Cones & Bollards ---
  {
    id: 224, sku: 'SP-025', name: 'Traffic Cone PVC 2-Line 750mm', category: 'safety', inStock: true, featured: false, image: 'SP_r42.webp',
    specs: [{ label: 'Material', value: 'PVC' }, { label: 'Height', value: '750 mm' }, { label: 'Reflective', value: '2 Line' }]
  },
  {
    id: 225, sku: 'SP-026', name: 'Traffic Cone Big Foot PVC 2-Line 750mm (4.3kg)', category: 'safety', inStock: true, featured: false, image: 'SP_r43.webp',
    specs: [{ label: 'Material', value: 'PVC' }, { label: 'Height', value: '750 mm' }, { label: 'Weight', value: '4.3 kg' }, { label: 'Base', value: 'Big Foot' }]
  },
  {
    id: 226, sku: 'SP-027', name: 'TPU Flexible Bollard Post Red — 1000mm', category: 'safety', inStock: true, featured: false, image: 'SP_r45.webp',
    specs: [{ label: 'Material', value: 'TPU Flexible' }, { label: 'Color', value: 'Red' }, { label: 'Height', value: '1000 mm' }]
  },
  {
    id: 227, sku: 'SP-028', name: 'TPU Flexible Bollard Post Red — 750mm', category: 'safety', inStock: true, featured: false, image: 'SP_r46.webp',
    specs: [{ label: 'Material', value: 'TPU Flexible' }, { label: 'Color', value: 'Red' }, { label: 'Height', value: '750 mm' }]
  },

  // --- Warning Tape & Hazard Triangles ---
  {
    id: 228, sku: 'SP-029', name: 'Barricade Tape 1kg', category: 'safety', inStock: true, featured: false, image: 'SP_r48.webp',
    specs: [{ label: 'Weight', value: '1 kg' }, { label: 'Type', value: 'Barricade Tape' }]
  },
  {
    id: 229, sku: 'SP-030', name: 'Warning Tape — Red & White', category: 'safety', inStock: true, featured: false, image: 'SP_r49.webp',
    specs: [{ label: 'Color', value: 'Red & White' }, { label: 'Type', value: 'Warning Tape' }]
  },
  {
    id: 230, sku: 'SP-031', name: 'Hazard Triangle Floor Stand (Red)', category: 'safety', inStock: true, featured: false, image: 'SP_r50.webp',
    specs: [{ label: 'Color', value: 'Red' }, { label: 'Type', value: 'Floor Stand Triangle' }]
  },
  {
    id: 231, sku: 'SP-032', name: 'Hazard Triangle Floor Stand with Cloth (Red)', category: 'safety', inStock: true, featured: false, image: 'SP_r51.webp',
    specs: [{ label: 'Color', value: 'Red' }, { label: 'Includes', value: 'Reflective Cloth' }]
  },

  // --- Road Studs ---
  {
    id: 232, sku: 'SP-033', name: 'Aluminum Road Stud', category: 'safety', inStock: true, featured: false, image: 'SP_r53.webp',
    specs: [{ label: 'Material', value: 'Aluminum' }, { label: 'Type', value: 'Road Stud' }]
  },
  {
    id: 233, sku: 'SP-034', name: '3M Road Stud', category: 'safety', inStock: true, featured: false, image: 'SP_r54.webp',
    specs: [{ label: 'Brand', value: '3M' }, { label: 'Type', value: 'Road Stud' }]
  },
  {
    id: 234, sku: 'SP-035', name: 'Solar Road Stud', category: 'safety', inStock: true, featured: false, image: 'SP_r55.webp',
    specs: [{ label: 'Power', value: 'Solar LED' }, { label: 'Type', value: 'Road Stud' }]
  },

  // --- Metal Detectors ---
  {
    id: 235, sku: 'SP-036', name: 'Hand Held Metal Detector — MD-3003BI', category: 'safety', inStock: true, featured: false, image: 'SP_r57.webp',
    specs: [{ label: 'Model', value: 'MD-3003BI (Super Scanner)' }, { label: 'Type', value: 'Hand Held' }]
  },
  {
    id: 236, sku: 'SP-037', name: 'Hand Held Metal Detector — GP-3003BI', category: 'safety', inStock: true, featured: false, image: 'SP_r58.webp',
    specs: [{ label: 'Model', value: 'GP-3003BI' }, { label: 'Type', value: 'Hand Held' }]
  },
  {
    id: 237, sku: 'SP-038', name: 'Metal Detector — GC-1002', category: 'safety', inStock: true, featured: false, image: 'SP_r59.webp',
    specs: [{ label: 'Model', value: 'GC-1002' }]
  },

  // --- Ratchet Straps ---
  {
    id: 238, sku: 'SP-039', name: 'Ratchet Strap — 10m', category: 'safety', inStock: true, featured: false, image: 'SP_r61.webp',
    specs: [{ label: 'Length', value: '10 m' }, { label: 'Type', value: 'Ratchet Strap' }]
  },
  {
    id: 239, sku: 'SP-040', name: 'Ratchet Strap — 12m', category: 'safety', inStock: true, featured: false, image: 'SP_r62.webp',
    specs: [{ label: 'Length', value: '12 m' }, { label: 'Type', value: 'Ratchet Strap' }]
  },
  {
    id: 240, sku: 'SP-041', name: 'Ratchet Strap — 15m', category: 'safety', inStock: true, featured: false, image: 'SP_r63.webp',
    specs: [{ label: 'Length', value: '15 m' }, { label: 'Type', value: 'Ratchet Strap' }]
  },

  // --- Safety Belts & Harnesses ---
  {
    id: 241, sku: 'SP-042', name: 'Safety Belt (Normal)', category: 'safety', inStock: true, featured: false, image: 'SP_r65.webp',
    specs: [{ label: 'Type', value: 'Normal Safety Belt' }, { label: 'Pack', value: 'Small Box' }]
  },
  {
    id: 242, sku: 'SP-043', name: 'Safety Harness — Orange (Yellow Box)', category: 'safety', inStock: true, featured: false, image: 'SP_r66.webp',
    specs: [{ label: 'Color', value: 'Orange' }, { label: 'Pack', value: 'Yellow Box' }, { label: 'Type', value: 'Full Body Harness' }]
  },

  // --- Wet Floor Sign ---
  {
    id: 243, sku: 'SP-044', name: 'Wet Floor Sign', category: 'safety', inStock: true, featured: false, image: 'SP_r68.webp',
    specs: [{ label: 'Type', value: 'Wet Floor Caution Sign' }, { label: 'Shape', value: 'A-Frame' }]
  },

  // ============================================================
  // PARKING SAFETY — New Products (July 2026)
  // ============================================================

  {
    id: 245,
    sku: 'PK-019',
    name: 'Convex Traffic Mirror',
    category: 'parking',
    inStock: true,
    featured: false,
    image: 'new/WhatsApp Image 2026-07-14 at 15.41.20.jpeg',
    description: 'Wide-angle convex traffic mirror designed to improve safety and visibility in blind spots and high-risk areas. Ideal for roads, parking areas, driveways, factories, warehouses and sharp bends.',
    specs: [
      { label: 'Material', value: 'Acrylic (Shatterproof)' },
      { label: 'Frame', value: 'ABS Plastic' },
      { label: 'Color', value: 'Orange' },
      { label: 'Mounting', value: 'Wall / Pole Mounting' },
      { label: 'Available Sizes', value: '450mm, 600mm, 800mm, 1000mm' },
    ]
  },
  {
    id: 246,
    sku: 'PK-020',
    name: 'Traffic Pole Flexible Guide Post — 750mm',
    category: 'parking',
    inStock: true,
    featured: false,
    image: 'new/WhatsApp Image 2026-07-14 at 15.41.20 (1).jpeg',
    description: 'Flexible PU guide post with bright reflective bands for high visibility. Impact resistant and returns to original shape after impact. Suitable for traffic control, parking areas, and road divisions.',
    specs: [
      { label: 'Height', value: '750 mm' },
      { label: 'Material', value: 'PU (Polyurethane)' },
      { label: 'Color', value: 'Orange with Yellow Reflective Stripes' },
      { label: 'Base Diameter', value: '200 mm' },
      { label: 'Weight', value: 'Approx. 1.2 kg' },
      { label: 'Reflective Bands', value: '3 Yellow Reflective Stripes' },
    ]
  },
  {
    id: 247,
    sku: 'PK-021',
    name: 'Plastic Speed Hump (Yellow & Black)',
    category: 'parking',
    inStock: true,
    featured: false,
    image: 'new/WhatsApp Image 2026-07-14 at 15.41.21.jpeg',
    description: 'High visibility plastic speed hump designed to reduce vehicle speed and enhance safety in parking areas, roadways, factories, and residential zones.',
    specs: [
      { label: 'Material', value: 'High Quality Plastic' },
      { label: 'Color', value: 'Yellow & Black' },
      { label: 'Middle Section Size', value: '350 × 250 × 50 mm' },
      { label: 'End Section Size', value: '250 × 175 × 50 mm' },
      { label: 'Fixing', value: 'Bolt Fixed' },
    ]
  },
  {
    id: 248,
    sku: 'PK-022',
    name: 'Rubber Wheel Chock — Heavy Duty',
    category: 'parking',
    inStock: true,
    featured: false,
    image: 'new/WhatsApp Image 2026-07-14 at 15.41.21 (1).jpeg',
    description: 'Heavy duty rubber wheel chock designed to securely stop vehicles from rolling. Features a non-slip design with high visibility yellow stripes. Ideal for parking lots, garages, loading docks, and industrial areas.',
    specs: [
      { label: 'Material', value: 'Heavy Duty Rubber' },
      { label: 'Color', value: 'Black with Yellow Stripes' },
      { label: 'Size (L×W×H)', value: '25cm × 15cm × 19cm (10″×6″×7.3″)' },
      { label: 'Weight', value: 'Approx. 3.1 kg (6.8 lbs)' },
    ]
  },
  {
    id: 249,
    sku: 'PK-023',
    name: 'Rubber Cable Protector',
    category: 'parking',
    inStock: true,
    featured: false,
    image: 'new/WhatsApp Image 2026-07-14 at 15.41.21 (2).jpeg',
    description: 'Heavy duty rubber cable protector designed to protect cables and wires from vehicle traffic and reduce the risk of tripping. Ideal for roads, construction sites, events and industrial areas.',
    specs: [
      { label: 'Material', value: 'Heavy Duty Rubber' },
      { label: 'Color', value: 'Black Base with Yellow Lid' },
      { label: 'Size (L×W×H)', value: '100cm × 25cm × 4.5cm' },
      { label: 'Channel Size', value: '3cm × 3cm (Each Channel)' },
      { label: 'Weight', value: 'Approx. 7.5 kg' },
      { label: 'Load Capacity', value: 'Up to 10 Tons' },
    ]
  },
  {
    id: 250,
    sku: 'PK-024',
    name: 'Wall Protector — 1000×160×50mm',
    category: 'parking',
    inStock: true,
    featured: false,
    image: 'new/WhatsApp Image 2026-07-14 at 15.41.22.jpeg',
    description: 'Rubber wall protector designed to protect walls, columns and corners from impacts caused by vehicles and equipment in parking areas, warehouses, factories and loading bays.',
    specs: [
      { label: 'Material', value: 'High Quality Natural Rubber' },
      { label: 'Size (L×H×W)', value: '1000mm × 160mm × 50mm' },
      { label: 'Color', value: 'Black with Yellow Reflective Strip' },
      { label: 'Weight', value: 'Approx. 6.5 kg' },
      { label: 'Installation', value: 'Wall Mounted with Anchor Bolts' },
    ]
  },
  {
    id: 251,
    sku: 'PK-025',
    name: 'Rubber Wall Bumper / Corner Protector — FZT-D550B',
    category: 'parking',
    inStock: true,
    featured: false,
    image: 'new/WhatsApp Image 2026-07-14 at 15.41.22 (1).jpeg',
    description: 'High-impact resistance natural rubber wall bumper finished in bright black with reflective yellow. Minimizes damage when vehicles hit the wall. Versatile protection for car parks, warehouses, and industrial environments.',
    specs: [
      { label: 'Model', value: 'FZT-D550B' },
      { label: 'Material', value: 'Rubber' },
      { label: 'Size (L×W×H)', value: '550mm × 150mm × 100mm' },
      { label: 'Color', value: 'Black with Yellow Reflective Sheets' },
      { label: 'Weight', value: '7.5 kg/PC' },
    ]
  },
  {
    id: 252,
    sku: 'PK-026',
    name: 'Rubber Wheel Stopper — 480×150×100mm',
    category: 'parking',
    inStock: true,
    featured: false,
    image: 'new/WhatsApp Image 2026-07-14 at 15.41.22 (2).jpeg',
    description: 'High strength natural rubber wheel stopper with anti-skid design and yellow reflective strips.Prevents vehicle collision and helps define correct parking position.',
    specs: [
      { label: 'Size (L×W×H)', value: '480mm × 150mm × 100mm' },
      { label: 'Material', value: 'Recycled Rubber & Plastic' },
      { label: 'Color', value: 'Black with Yellow Stripes' },
      { label: 'Weight', value: '2.5 kg (Each)' },
    ]
  },
  {
    id: 253,
    sku: 'PK-027',
    name: 'Rubber Corner Guard — 1200mm',
    category: 'parking',
    inStock: true,
    featured: false,
    image: 'new/WhatsApp Image 2026-07-14 at 15.41.23.jpeg',
    description: 'Extra-long 1200mm rubber corner guard with high-visibility yellow reflective strips. Protects vehicles and building corners from collision damage. Shock absorbing, durable, and maintenance-free.',
    specs: [
      { label: 'Material', value: 'Natural Rubber / SBR Blend' },
      { label: 'Length', value: '1200 mm (1.2 m)' },
      { label: 'Width (each side)', value: '75–100 mm' },
      { label: 'Thickness', value: '8–12 mm' },
      { label: 'Corner Angle', value: '90° (pillar & wall edge protection)' },
      { label: 'Color', value: 'Black with Yellow Reflective Markings' },
    ]
  },
  {
    id: 254,
    sku: 'PK-028',
    name: 'Rubber Speed Reducer / Speed Breaker — 1000×350×50mm',
    category: 'parking',
    inStock: true,
    featured: false,
    image: 'new/WhatsApp Image 2026-07-14 at 15.41.23 (1).jpeg',
    description: 'Commercial-grade thermoplastic rubber speed bump with trapezoidal reflector. Strong load capacity of 440,000 lbs. Non-slip surface texture, flexibly spliceable for different road lengths.',
    specs: [
      { label: 'Size (L×W×H)', value: '1000mm × 350mm × 50mm' },
      { label: 'Material', value: 'Thermoplastic Rubber' },
      { label: 'Color', value: 'Black / Yellow' },
      { label: 'Load Capacity', value: '440,000 lbs (200 Tons)' },
      { label: 'Reflector', value: 'Trapezoidal Reflector' },
    ]
  },

  // --- Rubber Speed Hump ---
  {
    id: 244,
    sku: 'SP-045',
    name: 'Rubber Speed Hump — Code 809',
    category: 'parking',
    inStock: true,
    featured: false,
    image: 'Senith_Rubber_Speed_Hump.webp',
    description: 'Rubber Speed Bump made of high-quality rubber materials, featuring high durability and strength with excellent resistance to wear and pressure, ensuring a long service life. It has a visible and clear design with eye-catching colors, making it effective in various environmental conditions. Designed to reduce vehicle speed in areas that require speed reduction, helping to improve road safety.',
    specs: [
      { label: 'Size', value: '1000 × 325 × 50 mm' },
      { label: 'Weight', value: '10 kg' },
      { label: 'Material', value: 'Rubber' },
      { label: 'Attachments', value: 'Includes 8 screws for installation' }
    ]
  },
];

export const getFeaturedProducts = () => products.filter(p => p.featured);
export const getProductsByCategory = (cat) =>
  cat === 'all' ? products : products.filter(p => p.category === cat);
