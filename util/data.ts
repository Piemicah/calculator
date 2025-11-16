import images from "../constants/images";

const data = [
  { name: "default", img: images.defaultTheme },
  { name: "theme1", img: images.theme1 },
  { name: "theme2", img: images.theme2 },
  { name: "classic", img: images.classic },
];

export default data;

export const geometry = [
  { name: "Cylinder", img: images.cylinder },
  { name: "Cone", img: images.cone },
  { name: "sphere", img: images.sphere },
  { name: "triangle", img: images.triangle },
];

export const mechanics = [
  { name: "Straight Line Motion", img: images.straight_motion },
  { name: "Period of simple pendulum", img: images.pendulum },
  { name: "Projectile Motion", img: images.projectile },
];

export const scientificConstants = [
  {
    name: "Electron mass",
    label: "9.1093837015 × 10⁻³¹ kg",
    value: "9.1093837015\\times 10^{-31}",
    symbol: "mₑ",
  },
  {
    name: "Proton mass",
    label: "1.67262192369 × 10⁻²⁷ kg",
    value: "1.67262192369\\times 10^{-27}",
    symbol: "mₚ",
  },
  {
    name: "Neutron mass",
    label: "1.67492749804 × 10⁻²⁷ kg",
    value: "1.67492749804\\times 10^{-27}",
    symbol: "mₙ",
  },
  {
    name: "Muon mass",
    label: "1.67262189821 × 10⁻²⁷ kg",
    value: "1.67262189821\\times 10^{-27}",
    symbol: "mµ",
  },
  {
    name: "Bohr radius",
    label: "5.291772106712 × 10⁻¹¹",
    value: "1.67262189821\\times 10^{-11}",
    symbol: "a0",
  },
  {
    name: "Speed of light in vacuum",
    label: "2.99792458 × 10⁸ m/s",
    value: "2.99792458\\times 10^{8}",
    symbol: "c",
  },
  {
    name: "Gravitational constant",
    label: "6.67430 × 10⁻¹¹ m³/kg·s²",
    value: "6.67430\\times 10^{-11}",
    symbol: "G",
  },
  {
    name: "Planck constant",
    label: "6.62607015 × 10⁻³⁴ J·s",
    value: "6.62607015\\times 10^{-34}",
    symbol: "h",
  },
  {
    name: "Reduced Planck constant",
    label: "1.054571817 × 10⁻³⁴ J·s",
    value: "1.054571817\\times 10^{-34}",
    symbol: "ħ", // h-bar
  },
  {
    name: "Elementary charge",
    label: "1.602176634 × 10⁻¹⁹ C",
    value: "1.602176634\\times 10^{-19}",
    symbol: "e",
  },
  {
    name: "Avogadro's number",
    label: "6.02214076 × 10²³ mol⁻¹",
    value: "6.02214076\\times 10^{23}",
    symbol: "Nₐ",
  },
  {
    name: "Boltzmann constant",
    label: "1.380649 × 10⁻²³ J/K",
    value: "1.380649\\times 10^{-23}",
    symbol: "kᴮ",
  },
  {
    name: "Gas constant",
    label: "8.314462618 J/mol·K",
    value: "8.314462618",
    symbol: "R",
  },
  {
    name: "Stefan–Boltzmann constant",
    label: "5.670374419 × 10⁻⁸ W/m²·K⁴",
    value: "5.670374419\\times 10^{-8}",
    symbol: "σ",
  },
  {
    name: "Wien’s displacement constant",
    label: "2.897771955 × 10⁻³ m·K",
    value: "2.897771955\\times 10^{-3}",
    symbol: "b",
  },
  {
    name: "Vacuum permittivity",
    label: "8.8541878128 × 10⁻¹² F/m",
    value: "8.8541878128\\times 10^{-12}",
    symbol: "ε₀",
  },
  {
    name: "Vacuum permeability",
    label: "1.25663706212 × 10⁻⁶ N/A²",
    value: "1.25663706212\\times 10^{-6}",
    symbol: "μ₀",
  },
  {
    name: "Coulomb’s constant",
    label: "8.9875517923 × 10⁹ N·m²/C²",
    value: "8.9875517923\\times 10^{9}",
    symbol: "kₑ",
  },
  {
    name: "Fine-structure constant",
    label: "7.2973525693 × 10⁻³ (dimensionless)",
    value: "7.2973525693\\times 10^{-3}",
    symbol: "α",
  },
  {
    name: "Rydberg constant",
    label: "1.0973731568160 × 10⁷ m⁻¹",
    value: "1.0973731568160\\times 10^{7}",
    symbol: "R∞",
  },
  {
    name: "Electron volt",
    label: "1.602176634 × 10⁻¹⁹ J",
    value: "1.602176634\\times 10^{-19}",
    symbol: "eV",
  },
  {
    name: "Acceleration due to gravity",
    label: "9.80665 m/s²",
    value: "9.80665",
    symbol: "g",
  },
  {
    name: "Astronomical unit",
    label: "1.495978707 × 10¹¹ m",
    value: "1.495978707\\times 10^{11}",
    symbol: "au",
  },
  {
    name: "Earth’s mass",
    label: "5.9722 × 10²⁴ kg",
    value: "5.9722\\times 10^{24}",
    symbol: "M⊕",
  },
  {
    name: "Earth’s mean radius",
    label: "6.371 × 10⁶ m",
    value: "6.371\\times 10^{6}",
    symbol: "R⊕",
  },
  {
    name: "Solar mass",
    label: "1.98847 × 10³⁰ kg",
    value: "1.98847\\times 10^{30}",
    symbol: "M☉",
  },
  {
    name: "Solar luminosity",
    label: "3.828 × 10²⁶ W",
    value: "3.828\\times 10^{26}",
    symbol: "L☉",
  },
  {
    name: "Planck length",
    label: "1.616255 × 10⁻³⁵ m",
    value: "1.616255\\times 10^{-35}",
    symbol: "lₚ",
  },
  {
    name: "Planck time",
    label: "5.391247 × 10⁻⁴⁴ s",
    value: "5.391247\\times 10^{-44}",
    symbol: "tₚ",
  },
  {
    name: "Planck temperature",
    label: "1.416784 × 10³² K",
    value: "1.416784\\times 10^{32}",
    symbol: "Tₚ",
  },
  {
    name: "Charge-to-mass ratio of electron",
    label: "1.758820024 × 10¹¹ C/kg",
    value: "1.758820024\\times 10^{11}",
    symbol: "e/mₑ",
  },
  {
    name: "Charge-to-mass ratio of proton",
    label: "9.57883314 × 10⁷ C/kg",
    value: "9.57883314\\times 10^{7}",
    symbol: "e/mₚ",
  },
  {
    name: "Bohr magneton",
    label: "9.2740100783 × 10⁻²⁴ J/T",
    value: "9.2740100783\\times 10^{-24}",
    symbol: "μ_B",
  },
  {
    name: "Nuclear magneton",
    label: "5.0507837461 × 10⁻²⁷ J/T",
    value: "5.0507837461\\times 10^{-27}",
    symbol: "μ_N",
  },
];

export const conversions = [
  // 🟦 LENGTH
  { label: "in►cm", value: "2.54" },
  { label: "cm►in", value: "0.3937007874" },
  { label: "ft►m", value: "0.3048" },
  { label: "m►ft", value: "3.280839895" },
  { label: "yd►m", value: "0.9144" },
  { label: "m►yd", value: "1.0936132983" },
  { label: "mi►km", value: "1.609344" },
  { label: "km►mi", value: "0.6213711922" },
  { label: "mm►in", value: "0.0393700787" },
  { label: "in►mm", value: "25.4" },
  { label: "cm►m", value: "0.01" },
  { label: "m►cm", value: "100" },
  { label: "km►m", value: "1000" },
  { label: "m►km", value: "0.001" },

  // 🟩 AREA
  { label: "m²►ft²", value: "10.7639104167" },
  { label: "ft²►m²", value: "0.09290304" },
  { label: "cm²►in²", value: "0.15500031" },
  { label: "in²►cm²", value: "6.4516" },
  { label: "km²►mi²", value: "0.3861021585" },
  { label: "mi²►km²", value: "2.5899881103" },
  { label: "acre►m²", value: "4046.8564224" },
  { label: "m²►acre", value: "0.0002471054" },
  { label: "hectare►m²", value: "10000" },
  { label: "m²►hectare", value: "0.0001" },

  // 🟨 VOLUME
  { label: "L►mL", value: "1000" },
  { label: "mL►L", value: "0.001" },
  { label: "L►gal(US)", value: "0.2641720524" },
  { label: "gal(US)►L", value: "3.785411784" },
  { label: "L►qt(US)", value: "1.05668821" },
  { label: "qt(US)►L", value: "0.946352946" },
  { label: "L►fl oz(US)", value: "33.8140227" },
  { label: "fl oz(US)►L", value: "0.0295735296" },
  { label: "m³►L", value: "1000" },
  { label: "L►m³", value: "0.001" },

  // 🟥 MASS / WEIGHT
  { label: "kg►g", value: "1000" },
  { label: "g►kg", value: "0.001" },
  { label: "kg►lb", value: "2.2046226218" },
  { label: "lb►kg", value: "0.45359237" },
  { label: "g►oz", value: "0.0352739619" },
  { label: "oz►g", value: "28.349523125" },
  { label: "ton(US)►kg", value: "907.18474" },
  { label: "kg►ton(US)", value: "0.0011023113" },
  { label: "tonne►kg", value: "1000" },
  { label: "kg►tonne", value: "0.001" },

  // 🟧 SPEED
  { label: "m/s►km/h", value: "3.6" },
  { label: "km/h►m/s", value: "0.277777778" },
  { label: "m/s►mph", value: "2.23693629" },
  { label: "mph►m/s", value: "0.44704" },
  { label: "km/h►mph", value: "0.6213711922" },
  { label: "mph►km/h", value: "1.609344" },

  // 🟪 PRESSURE
  { label: "Pa►kPa", value: "0.001" },
  { label: "kPa►Pa", value: "1000" },
  { label: "kPa►bar", value: "0.01" },
  { label: "bar►kPa", value: "100" },
  { label: "bar►psi", value: "14.5037738" },
  { label: "psi►bar", value: "0.0689475729" },
  { label: "atm►kPa", value: "101.325" },
  { label: "kPa►atm", value: "0.0098692327" },

  // 🟫 ENERGY
  { label: "J►kJ", value: "0.001" },
  { label: "kJ►J", value: "1000" },
  { label: "J►cal", value: "0.2390057361" },
  { label: "cal►J", value: "4.184" },
  { label: "kcal►kJ", value: "4.184" },
  { label: "kJ►kcal", value: "0.2390057361" },
  { label: "Wh►J", value: "3600" },
  { label: "J►Wh", value: "0.0002777778" },
  { label: "kWh►MJ", value: "3.6" },
  { label: "MJ►kWh", value: "0.277777778" },

  // 🟦 DATA STORAGE
  { label: "bit►byte", value: "0.125" },
  { label: "byte►bit", value: "8" },
  { label: "KB►byte", value: "1024" },
  { label: "byte►KB", value: "0.0009765625" },
  { label: "MB►KB", value: "1024" },
  { label: "KB►MB", value: "0.0009765625" },
  { label: "GB►MB", value: "1024" },
  { label: "MB►GB", value: "0.0009765625" },
  { label: "TB►GB", value: "1024" },
  { label: "GB►TB", value: "0.0009765625" },
];

export const conversionRates = [
  // Dimension
  {
    heading: "Dimension",
    data: [
      { title: "Length", subtitle: "Mile,Meter,Foot", img: images.length },
      {
        title: "Area",
        subtitle: "Hectare,square Meter,square Foot",
        img: images.area,
      },
      {
        title: "Volume",
        subtitle: "Barrel,Liter,Fluid Ounce",
        img: images.volume,
      },
    ],
  },

  // Useful
  {
    heading: "Useful",
    data: [
      {
        title: "Currency",
        subtitle: "US Dollar,Euro,British Pound",
        img: images.currency,
      },
      {
        title: "Fuel Consumption",
        subtitle: "Litres per 100km,Liters per 100 Miles",
        img: images.fuel,
      },
      { title: "Time", subtitle: "Day,Hour,Minute,Second", img: images.clock },
    ],
  },

  // Mechanics
  {
    heading: "Mechanics",
    data: [
      {
        title: "Pressure",
        subtitle: "Atmosphere,Bar,Pascal",
        img: images.pressure,
      },
      {
        title: "Weight",
        subtitle: "Kilogram,Pounds,Ounce",
        img: images.weight,
      },
      {
        title: "Force",
        subtitle: "Newton,Kilogram-force,Pound-force",
        img: images.force,
      },
      {
        title: "Torque",
        subtitle: "Newton Meter,Meter-Kilogram Force",
        img: images.torque,
      },
    ],
  },

  // Motion
  {
    heading: "Motion",
    data: [
      {
        title: "Speed",
        subtitle: "Miles per hour, Kilometer per hour",
        img: images.speed,
      },
      {
        title: "Acceleration",
        subtitle: "Meter per hour per second,gravity",
        img: images.acceleration,
      },
      {
        title: "Angular speed",
        subtitle: "Revolution per hour, radian per hour",
        img: images.angular_speed,
      },
      {
        title: "Flow Rate",
        subtitle: "Liters per minute, Gallons per minute",
        img: images.flow_rate,
      },
      {
        title: "Frequency",
        subtitle: "Hertz, MegaHertz, GigaHertz",
        img: images.frequency,
      },
    ],
  },

  // chemistry
  {
    heading: "Chemistry",
    data: [
      {
        title: "Density",
        subtitle: "Kilogram per liter, Ounce per gallon",
        img: images.density,
      },
      {
        title: "Dynamic viscosity",
        subtitle: "Pascal second, Poise",
        img: images.viscosity,
      },
      {
        title: "Kinematic viscosity",
        subtitle: "Square meter per second",
        img: images.viscosity,
      },
    ],
  },

  // Computing
  {
    heading: "Computing",
    data: [
      {
        title: "Data storage",
        subtitle: "Bit,Byte,Kilobyte,Megabyte",
        img: images.database,
      },
      {
        title: "Data transfer",
        subtitle: "Kilobyte per second, Megabyte per second",
        img: images.data_transfer,
      },
    ],
  },

  // Energy
  {
    heading: "Energy",
    data: [
      {
        title: "Energy",
        subtitle: "Joule, Calorie, BTU",
        img: images.energy,
      },
      {
        title: "Power",
        subtitle: "Kilowatt, Horsepower, Calories per second",
        img: images.power,
      },
      {
        title: "Temperature",
        subtitle: "Celcius, Fahrenheit, Kelvin",
        img: images.temperature,
      },
    ],
  },

  // Energy
  {
    heading: "Electricity",
    data: [
      {
        title: "Electric Charge",
        subtitle: "Coulomb, Ampere-hour, Faraday",
        img: images.electric_charge,
      },
      {
        title: "Electric Current",
        subtitle: "Ampere, Milliampere, Microampere",
        img: images.electric_current,
      },
      {
        title: "Electrical Resistance",
        subtitle: "Ohm, Volt per ampere",
        img: images.electric_resistance,
      },
      {
        title: "Electric Capacitance",
        subtitle: "Farad, MilliFarad",
        img: images.electric_capacitance,
      },
    ],
  },

  // Photometry
  {
    heading: "Photometry",
    data: [
      {
        title: "Luminance",
        subtitle: "Candela per square meter, Lambert",
        img: images.luminance,
      },
      {
        title: "Illuminance",
        subtitle: "Lumen per square meter, Lux, Phot",
        img: images.luminance,
      },
    ],
  },

  // Radioactivity
  {
    heading: "Radioactivity",
    data: [
      {
        title: "Radiation",
        subtitle: "Gray, Rad, Sievert",
        img: images.radiation,
      },
      {
        title: "Radioactivity",
        subtitle: "Becquerel, Curie, Rutherford",
        img: images.radiatioactivity,
      },
    ],
  },

  // Magnetism
  {
    heading: "Magnetism",
    data: [
      {
        title: "Magnetic field",
        subtitle: "Tesla, Gamma, Gauss",
        img: images.magnet,
      },
    ],
  },

  // Mathematics
  {
    heading: "Mathematics",
    data: [
      {
        title: "Angle",
        subtitle: "Degree, Radian",
        img: images.angle,
      },
      {
        title: "Astronomy",
        subtitle: "Astronomical unit, Light Year",
        img: images.astronomy,
      },
    ],
  },
  {
    heading: "Other",
    data: [
      {
        title: "Typography",
        subtitle: "Point, Pica",
        img: images.typography,
      },
    ],
  },
];

export const conversionFactors = [
  // ---------- LENGTH ----------
  {
    title: "Length",
    data: [
      { name: "Kilometer", notation: "km", rate: 1000 },
      { name: "Hectometer", notation: "hm", rate: 100 },
      { name: "Decameter", notation: "dam", rate: 10 },
      { name: "Meter", notation: "m", rate: 1 },
      { name: "Decimeter", notation: "dm", rate: 0.1 },
      { name: "Centimeter", notation: "cm", rate: 0.01 },
      { name: "Millimeter", notation: "mm", rate: 0.001 },
      { name: "Micrometer", notation: "µm", rate: 1e-6 },
      { name: "Nanometer", notation: "nm", rate: 1e-9 },
      { name: "Angstrom", notation: "Å", rate: 1e-10 },
      { name: "Picometer", notation: "pm", rate: 1e-12 },
      { name: "Femtometer", notation: "fm", rate: 1e-15 },
      { name: "Inch", notation: "in", rate: 0.0254 },
      { name: "Foot", notation: "ft", rate: 0.3048 },
      { name: "Yard", notation: "yd", rate: 0.9144 },
      { name: "Mile", notation: "mi", rate: 1609.344 },
      { name: "Nautical Mile", notation: "nmi", rate: 1852 },
      { name: "Rod", notation: "rd", rate: 5.0292 },
      { name: "Chain", notation: "ch", rate: 20.1168 },
      { name: "Furlong", notation: "fur", rate: 201.168 },
    ],
  },

  // ---------- AREA ----------
  {
    title: "Area",
    data: [
      // SI Units
      { name: "Square meter", notation: "m²", rate: 1 },
      { name: "Square kilometer", notation: "km²", rate: 1e6 },
      { name: "Square decimeter", notation: "dm²", rate: 0.01 },
      { name: "Square centimeter", notation: "cm²", rate: 1e-4 },
      { name: "Square millimeter", notation: "mm²", rate: 1e-6 },
      { name: "Square micrometer", notation: "µm²", rate: 1e-12 },
      { name: "Square nanometer", notation: "nm²", rate: 1e-18 },
      { name: "Are", notation: "a", rate: 100 },
      { name: "Decare", notation: "daa", rate: 1000 },
      { name: "Hectare", notation: "ha", rate: 10000 },

      // Imperial / US Customary Units
      { name: "Square inch", notation: "in²", rate: 0.00064516 },
      { name: "Square foot", notation: "ft²", rate: 0.092903 },
      { name: "Square yard", notation: "yd²", rate: 0.836127 },
      { name: "Square mile", notation: "mi²", rate: 2.589988e6 },
      { name: "Acre", notation: "ac", rate: 4046.8564224 },
      { name: "Rood", notation: "ro", rate: 1011.7141056 },
      { name: "Township", notation: "twp", rate: 9.323994e7 },

      // Agricultural / Survey Units
      { name: "Barn", notation: "b", rate: 1e-28 },

      { name: "Square chain", notation: "ch²", rate: 404.68564224 },
      { name: "Square rod (perch/pole)", notation: "rd²", rate: 25.29285264 },

      // Asian Traditional Units
      { name: "Tsubo", notation: "tsubo", rate: 3.305785 },
      { name: "Pyeong", notation: "평", rate: 3.305785 },
      { name: "Rai", notation: "rai", rate: 1600 },
      { name: "Are (Japanese Tan)", notation: "tan", rate: 991.736 },
      { name: "Mu (Chinese)", notation: "mu", rate: 666.6667 },
      { name: "Hao (Chinese)", notation: "hao", rate: 6.666667 },
      { name: "Gongfen (Chinese)", notation: "gongfen", rate: 0.01 },

      // Miscellaneous / Specialized
      { name: "Circular mil", notation: "cmil", rate: 5.067075e-10 },
      { name: "Square mil", notation: "mil²", rate: 6.4516e-10 },

      { name: "Square angstrom", notation: "Å²", rate: 1e-20 },
      { name: "Square furlong", notation: "fur²", rate: 40468.564224 },
    ],
  },

  // ---------- VOLUME ----------
  {
    title: "Volume",
    data: [
      // --- Metric (SI) ---
      { name: "Cubic Meter", notation: "m³", rate: 1 },
      { name: "Cubic Decimeter", notation: "dm³", rate: 1e-3 },
      { name: "Cubic Centimeter", notation: "cm³", rate: 1e-6 },
      { name: "Cubic Millimeter", notation: "mm³", rate: 1e-9 },
      { name: "Liter", notation: "L", rate: 0.001 },
      { name: "Deciliter", notation: "dL", rate: 0.0001 },
      { name: "Centiliter", notation: "cL", rate: 0.00001 },
      { name: "Milliliter", notation: "mL", rate: 1e-6 },
      { name: "Microliter", notation: "µL", rate: 1e-9 },
      { name: "Cubic Kilometer", notation: "km³", rate: 1e9 },

      // --- Imperial / US Customary ---
      { name: "Cubic Inch", notation: "in³", rate: 1.6387064e-5 },
      { name: "Cubic Foot", notation: "ft³", rate: 0.028316846592 },
      { name: "Cubic Yard", notation: "yd³", rate: 0.764554857984 },

      // --- UK (Imperial) Volumes ---
      {
        name: "Imperial Fluid Ounce",
        notation: "fl oz (UK)",
        rate: 2.84130625e-5,
      },
      { name: "Imperial Gill", notation: "gi (UK)", rate: 0.0001420653125 },
      { name: "Imperial Pint", notation: "pt (UK)", rate: 0.00056826125 },
      { name: "Imperial Quart", notation: "qt (UK)", rate: 0.0011365225 },
      { name: "Imperial Gallon", notation: "gal (UK)", rate: 0.00454609 },
      { name: "Imperial Barrel", notation: "bbl (UK)", rate: 0.16365924 },
      { name: "Imperial Bushel", notation: "bu (UK)", rate: 0.03636872 },

      // --- US Customary Volumes ---
      { name: "US Fluid Ounce", notation: "fl oz (US)", rate: 2.95735296e-5 },
      { name: "US Gill", notation: "gi (US)", rate: 0.00011829411825 },
      {
        name: "US Pint (Liquid)",
        notation: "pt (US liq)",
        rate: 0.000473176473,
      },
      {
        name: "US Quart (Liquid)",
        notation: "qt (US liq)",
        rate: 0.000946352946,
      },
      {
        name: "US Gallon (Liquid)",
        notation: "gal (US liq)",
        rate: 0.003785411784,
      },
      {
        name: "US Pint (Dry)",
        notation: "pt (US dry)",
        rate: 0.0005506104713575,
      },
      {
        name: "US Quart (Dry)",
        notation: "qt (US dry)",
        rate: 0.001101220942715,
      },
      {
        name: "US Gallon (Dry)",
        notation: "gal (US dry)",
        rate: 0.00440488377086,
      },
      {
        name: "US Barrel (Petroleum)",
        notation: "bbl (US)",
        rate: 0.158987294928,
      },
      { name: "US Bushel", notation: "bu (US)", rate: 0.03523907 },

      // --- Common / Domestic ---
      { name: "Cup (Metric)", notation: "cup (metric)", rate: 0.00025 },
      { name: "Cup (US)", notation: "cup (US)", rate: 0.0002365882365 },
      { name: "Cup (UK)", notation: "cup (UK)", rate: 0.000284130625 },
      { name: "Tablespoon (Metric)", notation: "tbsp (metric)", rate: 1.5e-5 },
      { name: "Tablespoon (US)", notation: "tbsp (US)", rate: 1.47867648e-5 },
      { name: "Tablespoon (UK)", notation: "tbsp (UK)", rate: 1.77582e-5 },
      { name: "Teaspoon (Metric)", notation: "tsp (metric)", rate: 5e-6 },
      { name: "Teaspoon (US)", notation: "tsp (US)", rate: 4.92892159e-6 },
      { name: "Teaspoon (UK)", notation: "tsp (UK)", rate: 5.91939e-6 },
      { name: "Dessertspoon (UK)", notation: "dsp (UK)", rate: 1.183878125e-5 },
      { name: "Drop", notation: "drop", rate: 5e-8 },
      { name: "Bucket", notation: "bucket", rate: 0.018 }, // ~18 L bucket average
      { name: "Barrel (Beer)", notation: "bbl (beer)", rate: 0.1173477658 }, // US beer barrel (31 gal)

      // --- Scientific / Special ---
      { name: "Cubic Mile", notation: "mi³", rate: 4.168181825e9 },
    ],
  },

  // ---------- TIME ----------
  {
    title: "Time",
    data: [
      // --- SI Base Unit ---
      { name: "Second", notation: "s", rate: 1 }, // Base SI unit

      // --- Submultiples ---
      { name: "Millisecond", notation: "ms", rate: 1e-3 },
      { name: "Microsecond", notation: "µs", rate: 1e-6 },
      { name: "Nanosecond", notation: "ns", rate: 1e-9 },
      { name: "Picosecond", notation: "ps", rate: 1e-12 },
      { name: "Femtosecond", notation: "fs", rate: 1e-15 },
      { name: "Attosecond", notation: "as", rate: 1e-18 },
      { name: "Zeptosecond", notation: "zs", rate: 1e-21 },
      { name: "Yoctosecond", notation: "ys", rate: 1e-24 },

      // --- Multiples ---
      { name: "Minute", notation: "min", rate: 60 },
      { name: "Hour", notation: "h", rate: 3600 },
      { name: "Day", notation: "d", rate: 86400 },
      { name: "Week", notation: "wk", rate: 604800 },
      { name: "Fortnight", notation: "fn", rate: 1209600 },
      { name: "Month (mean)", notation: "mo", rate: 2.629746e6 }, // ≈30.44 days
      { name: "Year (Julian)", notation: "a", rate: 3.15576e7 }, // 365.25 days
      { name: "Year (Gregorian)", notation: "yr", rate: 3.1556952e7 }, // 365.2425 days
      { name: "Decade", notation: "dec", rate: 3.1556952e8 },
      { name: "Century", notation: "c", rate: 3.1556952e9 },
      { name: "Millennium", notation: "ky", rate: 3.1556952e10 },

      // --- Astronomical Time Units ---
      { name: "Julian Year", notation: "a_J", rate: 3.15576e7 },
      { name: "Sidereal Day", notation: "d_sid", rate: 86164.0905 },
      { name: "Sidereal Year", notation: "a_sid", rate: 3.155815e7 },
      { name: "Tropical Year", notation: "a_trop", rate: 3.1556926e7 },
      { name: "Lunar Month (Synodic)", notation: "lun_mo", rate: 2.55144e6 }, // ≈29.53 days
      { name: "Galactic Year", notation: "GalYr", rate: 7.884e15 }, // ≈230 million years
      { name: "Planck Time", notation: "tₚ", rate: 5.391247e-44 },

      // --- Specialized and Practical Units ---
      { name: "Shake", notation: "shake", rate: 1e-8 }, // Used in nuclear physics
      { name: "Jiffy (physics)", notation: "jiffy", rate: 3e-24 }, // Light travels 1 fm
      { name: "Moment (historical)", notation: "moment", rate: 90 }, // ≈90 seconds
      { name: "Watch (historical)", notation: "watch", rate: 10800 }, // ≈3 hours
      { name: "Quarter-hour", notation: "qtrh", rate: 900 },
      { name: "Half-hour", notation: "hh", rate: 1800 },
      { name: "Business day (average)", notation: "bd", rate: 28800 }, // 8 hours

      // --- Geophysical & Historical ---
      { name: "Solar Day", notation: "sol_d", rate: 86400 },
      { name: "Martian Sol", notation: "sol", rate: 88775.244 },
      { name: "Sidereal Month", notation: "sid_mo", rate: 2.3606e6 }, // ≈27.32 days
      { name: "Eon", notation: "Eon", rate: 3.1556952e16 }, // ≈1 billion years
      { name: "Epoch", notation: "epoch", rate: 3.1556952e13 }, // ≈1 million years
      { name: "Age", notation: "age", rate: 3.1556952e10 }, // ≈1 thousand years

      // --- Computing and Common Units ---
      { name: "Frame (at 60 FPS)", notation: "frame_60", rate: 1 / 60 },
      { name: "Frame (at 30 FPS)", notation: "frame_30", rate: 1 / 30 },
      { name: "CPU Cycle (1 GHz)", notation: "cycle_1GHz", rate: 1e-9 },
      { name: "CPU Cycle (3 GHz)", notation: "cycle_3GHz", rate: 3.333e-10 },
      { name: "Tick (common software)", notation: "tick", rate: 0.015625 }, // e.g., 64 ticks per second
    ],
  },

  // ---------- PRESSURE ----------
  {
    title: "Pressure",
    data: [
      // SI and Metric
      { name: "Pascal", notation: "Pa", rate: 1 },
      { name: "Kilopascal", notation: "kPa", rate: 1000 },
      { name: "Hectopascal", notation: "hPa", rate: 100 },
      { name: "Megapascal", notation: "MPa", rate: 1e6 },
      { name: "Gigapascal", notation: "GPa", rate: 1e9 },
      { name: "Bar", notation: "bar", rate: 1e5 },
      { name: "Millibar", notation: "mbar", rate: 100 },
      { name: "Microbar", notation: "µbar", rate: 0.1 },
      { name: "Barye", notation: "Ba", rate: 0.1 }, // cgs unit: 1 Ba = 0.1 Pa
      { name: "Newton per square meter", notation: "N/m²", rate: 1 },
      { name: "Kilonewton per square meter", notation: "kN/m²", rate: 1000 },

      // Atmospheric Units
      { name: "Standard atmosphere", notation: "atm", rate: 101325 },
      { name: "Technical atmosphere", notation: "at", rate: 98066.5 },
      { name: "Torr", notation: "Torr", rate: 133.322368 },
      { name: "Millimeter of mercury", notation: "mmHg", rate: 133.322368 },
      { name: "Centimeter of mercury", notation: "cmHg", rate: 1333.22368 },
      { name: "Inch of mercury", notation: "inHg", rate: 3386.38816 },
      { name: "Millimeter of water", notation: "mmH₂O", rate: 9.80665 },
      { name: "Centimeter of water", notation: "cmH₂O", rate: 98.0665 },
      { name: "Inch of water", notation: "inH₂O", rate: 249.08891 },

      // Imperial / Engineering
      { name: "Pound per square inch", notation: "psi", rate: 6894.757293 },
      { name: "Pound per square foot", notation: "psf", rate: 47.880258 },
      {
        name: "Ton per square inch (long)",
        notation: "tonf/in²",
        rate: 154442519,
      },
      {
        name: "Ton per square foot (long)",
        notation: "tonf/ft²",
        rate: 107251.78,
      },
      { name: "Kip per square inch", notation: "ksi", rate: 6.894757e6 },

      // Energy / Density Related
      { name: "Joule per cubic meter", notation: "J/m³", rate: 1 }, // identical to Pa
      { name: "Dyne per square centimeter", notation: "dyn/cm²", rate: 0.1 },
      {
        name: "Kilogram-force per square centimeter",
        notation: "kgf/cm²",
        rate: 98066.5,
      },
      {
        name: "Kilogram-force per square meter",
        notation: "kgf/m²",
        rate: 9.80665,
      },
      {
        name: "Gram-force per square millimeter",
        notation: "gf/mm²",
        rate: 9806.65,
      },

      // Specialized / Scientific
      { name: "Megabar", notation: "Mbar", rate: 1e11 },
      { name: "Kilobar", notation: "kbar", rate: 1e8 },
      { name: "Gigabar", notation: "Gbar", rate: 1e14 },

      { name: "Pascal second per meter", notation: "Pa·s/m", rate: 1 }, // for fluid systems
    ],
  },

  // ---------- WEIGHT (MASS) ----------
  {
    title: "Weight",
    data: [
      // --- SI Base ---
      { name: "Kilogram", notation: "kg", rate: 1 }, // base unit

      // --- Metric multiples ---
      { name: "Tonne (Metric Ton)", notation: "t", rate: 1000 },
      { name: "Gram", notation: "g", rate: 0.001 },
      { name: "Milligram", notation: "mg", rate: 1e-6 },
      { name: "Microgram", notation: "µg", rate: 1e-9 },
      { name: "Nanogram", notation: "ng", rate: 1e-12 },
      { name: "Picogram", notation: "pg", rate: 1e-15 },
      { name: "Megagram", notation: "Mg", rate: 1000 },
      { name: "Centigram", notation: "cg", rate: 1e-5 },
      { name: "Decigram", notation: "dg", rate: 1e-4 },
      { name: "Hectogram", notation: "hg", rate: 0.1 },
      { name: "Decagram", notation: "dag", rate: 0.01 },

      // --- Imperial / US Customary ---
      { name: "Pound", notation: "lb", rate: 0.45359237 },
      { name: "Ounce", notation: "oz", rate: 0.028349523125 },
      { name: "Stone", notation: "st", rate: 6.35029318 },
      { name: "Hundredweight (US)", notation: "cwt (US)", rate: 45.359237 },
      { name: "Hundredweight (UK)", notation: "cwt (UK)", rate: 50.80234544 },
      { name: "Ton (US Short Ton)", notation: "ton (US)", rate: 907.18474 },
      { name: "Ton (UK Long Ton)", notation: "ton (UK)", rate: 1016.0469088 },
      { name: "Grain", notation: "gr", rate: 0.00006479891 },
      { name: "Dram", notation: "dr", rate: 0.0017718451953125 },
      { name: "Slug", notation: "slug", rate: 14.593902937206 },
      { name: "Poundal-mass", notation: "pdlm", rate: 0.0140867196 },

      // --- Troy / Apothecaries (used in precious metals, medicine) ---
      { name: "Troy Ounce", notation: "oz t", rate: 0.0311034768 },
      { name: "Troy Pound", notation: "lb t", rate: 0.3732417216 },
      { name: "Pennyweight", notation: "dwt", rate: 0.00155517384 },
      { name: "Grain (Troy)", notation: "gr t", rate: 0.00006479891 }, // same as standard grain
      { name: "Carat (Metric)", notation: "ct", rate: 0.0002 },
      { name: "Scruple", notation: "s", rate: 0.0012959782 },

      // --- Scientific / Specialized ---
      { name: "Atomic Mass Unit", notation: "u", rate: 1.6605390666e-27 },
      { name: "Planck Mass", notation: "mₚ", rate: 2.176434e-8 },
      { name: "Electronvolt per c²", notation: "eV/c²", rate: 1.78266192e-36 },
      { name: "Solar Mass", notation: "M☉", rate: 1.98847e30 },
      { name: "Earth Mass", notation: "M⊕", rate: 5.9722e24 },
      { name: "Lunar Mass", notation: "M☾", rate: 7.34767309e22 },
      { name: "Jupiter Mass", notation: "M♃", rate: 1.89813e27 },

      // --- Industry / Engineering ---
      { name: "Short Ton (US)", notation: "short ton", rate: 907.18474 },
      { name: "Long Ton (UK)", notation: "long ton", rate: 1016.0469088 },
      { name: "Tonne-force Equivalent Mass", notation: "tfm", rate: 1000 },
      { name: "Kilopound", notation: "klb", rate: 453.59237 },
      { name: "Megatonne", notation: "Mt", rate: 1e9 },
      { name: "Kilotonne", notation: "kt", rate: 1e6 },
      { name: "Microtonne", notation: "µt", rate: 1e-3 },
    ],
  },

  // ---------- FORCE ----------
  {
    title: "Force",
    data: [
      // --- SI Base ---
      { name: "Newton", notation: "N", rate: 1 }, // base unit

      // --- Metric multiples ---
      { name: "Kilonewton", notation: "kN", rate: 1e3 },
      { name: "Meganewton", notation: "MN", rate: 1e6 },
      { name: "Giganewton", notation: "GN", rate: 1e9 },
      { name: "Millinewton", notation: "mN", rate: 1e-3 },
      { name: "Micronewton", notation: "µN", rate: 1e-6 },
      { name: "Nanonewton", notation: "nN", rate: 1e-9 },
      { name: "Piconewton", notation: "pN", rate: 1e-12 },

      // --- CGS system ---
      { name: "Dyne", notation: "dyn", rate: 1e-5 },
      { name: "Kilodyne", notation: "kdyn", rate: 1e-2 },
      { name: "Megadyne", notation: "Mdyn", rate: 10 },
      { name: "Gram-force", notation: "gf", rate: 0.00980665 },
      { name: "Kilogram-force", notation: "kgf", rate: 9.80665 },
      { name: "Ton-force (metric)", notation: "tf", rate: 9806.65 },

      // --- Imperial / US customary ---
      { name: "Pound-force", notation: "lbf", rate: 4.4482216152605 },
      { name: "Ounce-force", notation: "ozf", rate: 0.27801385095378125 },
      {
        name: "Ton-force (short, US)",
        notation: "tonf (US)",
        rate: 8896.443230521,
      },
      {
        name: "Ton-force (long, UK)",
        notation: "tonf (UK)",
        rate: 9964.01641818352,
      },
      { name: "Poundal", notation: "pdl", rate: 0.138255 },
      { name: "Slug-force", notation: "slugf", rate: 143.048 },

      // --- Other engineering / legacy units ---
      { name: "Kip-force", notation: "kip", rate: 4448.2216152605 }, // 1000 lbf
      { name: "Sthène", notation: "sn", rate: 1000 }, // deprecated metric tonne-force equivalent
      {
        name: "Poundal-force per Square Inch",
        notation: "pdl/in²",
        rate: 0.138255,
      },
      { name: "Ton-force (refrigeration)", notation: "TRf", rate: 3.51685e3 }, // for HVAC (approx.)
      { name: "Joule per Meter", notation: "J/m", rate: 1 }, // identical dimensional equivalent to N

      // --- Atomic / microscopic scales ---
      { name: "Atomic Unit of Force", notation: "Eh/a₀", rate: 8.23872206e-8 },
    ],
  },

  // ---------- TORQUE ----------
  {
    title: "Torque",
    data: [
      // --- SI Base ---
      { name: "Newton Meter", notation: "N·m", rate: 1 }, // base unit

      // --- Metric multiples ---
      { name: "Kilonewton Meter", notation: "kN·m", rate: 1e3 },
      { name: "Meganewton Meter", notation: "MN·m", rate: 1e6 },
      { name: "Millinewton Meter", notation: "mN·m", rate: 1e-3 },
      { name: "Micronewton Meter", notation: "µN·m", rate: 1e-6 },
      { name: "Newton Centimeter", notation: "N·cm", rate: 0.01 },
      { name: "Newton Millimeter", notation: "N·mm", rate: 0.001 },
      { name: "Kilogram-force Meter", notation: "kgf·m", rate: 9.80665 },
      {
        name: "Kilogram-force Centimeter",
        notation: "kgf·cm",
        rate: 0.0980665,
      },
      { name: "Gram-force Centimeter", notation: "gf·cm", rate: 0.0000980665 },
      { name: "Tonne-force Meter", notation: "tf·m", rate: 9806.65 },

      // --- Imperial / US customary ---
      { name: "Pound-force Foot", notation: "lbf·ft", rate: 1.3558179483314 },
      {
        name: "Pound-force Inch",
        notation: "lbf·in",
        rate: 0.1129848290276167,
      },
      {
        name: "Ounce-force Inch",
        notation: "ozf·in",
        rate: 0.0070615518333333,
      },
      {
        name: "Ton-force Foot (short ton, US)",
        notation: "tonf·ft (US)",
        rate: 12031.088,
      },
      {
        name: "Ton-force Foot (long ton, UK)",
        notation: "tonf·ft (UK)",
        rate: 13561.218857,
      },
      { name: "Kip-foot", notation: "kip·ft", rate: 1355.8179483314 },
      { name: "Kip-inch", notation: "kip·in", rate: 112.9848290276167 },
      { name: "Poundal Foot", notation: "pdl·ft", rate: 0.04214011 },

      // --- Engineering / specialized units ---
      { name: "Dyne Centimeter", notation: "dyn·cm", rate: 1e-7 },
      { name: "Dyne Meter", notation: "dyn·m", rate: 1e-5 },
      { name: "Gram-force Meter", notation: "gf·m", rate: 0.00980665 },
      { name: "Kilopond Meter", notation: "kp·m", rate: 9.80665 }, // same as kgf·m
      { name: "Joule per Radian", notation: "J/rad", rate: 1 }, // identical to N·m dimensionally
      { name: "Planck Torque", notation: "ħ·c", rate: 1.054571817e-34 }, // theoretical physics reference

      // --- Automotive / industry notation (same as others) ---
      { name: "Pound-foot", notation: "lb·ft", rate: 1.3558179483314 }, // same as lbf·ft
      { name: "Pound-inch", notation: "lb·in", rate: 0.1129848290276167 }, // same as lbf·in
    ],
  },

  // ---------- SPEED ----------
  {
    title: "Speed",
    data: [
      // SI and Metric
      { name: "Meter per second", notation: "m/s", rate: 1 },
      { name: "Kilometer per second", notation: "km/s", rate: 1000 },
      { name: "Kilometer per hour", notation: "km/h", rate: 1000 / 3600 },
      { name: "Centimeter per second", notation: "cm/s", rate: 0.01 },
      { name: "Millimeter per second", notation: "mm/s", rate: 0.001 },

      // Imperial
      { name: "Mile per hour", notation: "mi/h", rate: 0.44704 },
      { name: "Foot per second", notation: "ft/s", rate: 0.3048 },
      { name: "Inch per second", notation: "in/s", rate: 0.0254 },
      { name: "Yard per second", notation: "yd/s", rate: 0.9144 },
      { name: "Mile per second", notation: "mi/s", rate: 1609.344 },

      // Nautical & Aeronautical
      { name: "Knot", notation: "kn", rate: 0.514444 },
      { name: "Nautical mile per hour", notation: "nmi/h", rate: 0.514444 },
      { name: "Nautical mile per second", notation: "nmi/s", rate: 1852 },
      { name: "Mach (speed of sound)", notation: "Mach", rate: 340.29 }, // at sea level
      { name: "Speed of light", notation: "c", rate: 299792458 },

      // Other / Specialized
      { name: "Millimeter per minute", notation: "mm/min", rate: 1.66667e-5 },
      { name: "Meter per minute", notation: "m/min", rate: 1 / 60 },
      { name: "Kilometer per minute", notation: "km/min", rate: 1000 / 60 },
      { name: "Foot per minute", notation: "ft/min", rate: 0.00508 },
      { name: "Inch per minute", notation: "in/min", rate: 0.000423333 },
      { name: "Knot per second", notation: "kn/s", rate: 0.514444 },
      { name: "Knot per minute", notation: "kn/min", rate: 0.00857407 },
      { name: "Kilometer per day", notation: "km/day", rate: 1000 / 86400 },
      { name: "Mile per day", notation: "mi/day", rate: 1609.344 / 86400 },
    ],
  },

  // ---------- ACCELERATION ----------
  {
    title: "Acceleration",
    data: [
      // SI Base Units
      { name: "Meter per second squared", notation: "m/s²", rate: 1 },
      { name: "Kilometer per second squared", notation: "km/s²", rate: 1000 },
      { name: "Centimeter per second squared", notation: "cm/s²", rate: 0.01 },
      { name: "Millimeter per second squared", notation: "mm/s²", rate: 0.001 },
      { name: "Micrometer per second squared", notation: "µm/s²", rate: 1e-6 },

      // Gravitational Units
      { name: "Standard gravity", notation: "g₀", rate: 9.80665 },
      { name: "Gal (Galileo)", notation: "Gal", rate: 0.01 }, // 1 Gal = 1 cm/s²
      { name: "Milligal", notation: "mGal", rate: 1e-5 },
      { name: "Microgal", notation: "µGal", rate: 1e-8 },

      // Imperial Units
      { name: "Foot per second squared", notation: "ft/s²", rate: 0.3048 },
      { name: "Inch per second squared", notation: "in/s²", rate: 0.0254 },
      { name: "Yard per second squared", notation: "yd/s²", rate: 0.9144 },
      { name: "Mile per hour per second", notation: "mi/h·s", rate: 0.44704 },
      {
        name: "Mile per hour squared",
        notation: "mi/h²",
        rate: 0.44704 / 3600,
      },

      // Rotational / Derived Units
      { name: "Radian per second squared", notation: "rad/s²", rate: 1 },
      {
        name: "Degree per second squared",
        notation: "°/s²",
        rate: Math.PI / 180,
      },
      {
        name: "Revolution per second squared",
        notation: "rev/s²",
        rate: 2 * Math.PI,
      },

      // Specialized / Scientific
      { name: "Galileo (cgs)", notation: "Gal", rate: 0.01 },
      { name: "Milligalileo", notation: "mGal", rate: 1e-5 },
      { name: "Microgravity unit", notation: "µg", rate: 9.80665e-6 },
      { name: "Nano-galileo", notation: "nGal", rate: 1e-11 },
    ],
  },

  // ---------- ANGULAR SPEED ----------
  {
    title: "Angular speed",
    data: [
      // SI Base Units
      { name: "Radian per second", notation: "rad/s", rate: 1 },
      { name: "Radian per minute", notation: "rad/min", rate: 1 / 60 },
      { name: "Radian per hour", notation: "rad/h", rate: 1 / 3600 },

      // Degrees
      { name: "Degree per second", notation: "°/s", rate: Math.PI / 180 },
      {
        name: "Degree per minute",
        notation: "°/min",
        rate: Math.PI / 180 / 60,
      },
      { name: "Degree per hour", notation: "°/h", rate: Math.PI / 180 / 3600 },

      // Revolutions
      { name: "Revolution per second", notation: "rev/s", rate: 2 * Math.PI },
      {
        name: "Revolution per minute",
        notation: "rev/min",
        rate: (2 * Math.PI) / 60,
      }, // RPM
      {
        name: "Revolution per hour",
        notation: "rev/h",
        rate: (2 * Math.PI) / 3600,
      },
      {
        name: "Revolution per day",
        notation: "rev/day",
        rate: (2 * Math.PI) / 86400,
      },

      // Cycles / Frequency-related
      { name: "Cycle per second", notation: "cps", rate: 2 * Math.PI }, // same as rev/s
      { name: "Hertz (cycle per second)", notation: "Hz", rate: 2 * Math.PI },
      { name: "Kilohertz", notation: "kHz", rate: 2000 * Math.PI },
      { name: "Megahertz", notation: "MHz", rate: 2e6 * Math.PI },

      // Gradians
      { name: "Gradian per second", notation: "gon/s", rate: Math.PI / 200 },
      {
        name: "Gradian per minute",
        notation: "gon/min",
        rate: Math.PI / 200 / 60,
      },
      {
        name: "Gradian per hour",
        notation: "gon/h",
        rate: Math.PI / 200 / 3600,
      },

      // Rotational speed (common engineering)
      {
        name: "Revolution per minute (RPM)",
        notation: "RPM",
        rate: (2 * Math.PI) / 60,
      },
      {
        name: "Revolution per second (RPS)",
        notation: "RPS",
        rate: 2 * Math.PI,
      },
      { name: "Degree per second", notation: "deg/s", rate: Math.PI / 180 },
      {
        name: "Degree per minute",
        notation: "deg/min",
        rate: Math.PI / 180 / 60,
      },

      // Specialized / Astronomical
      { name: "Arcminute per second", notation: "′/s", rate: Math.PI / 10800 },
      { name: "Arcsecond per second", notation: "″/s", rate: Math.PI / 648000 },
      { name: "Turn per second", notation: "turn/s", rate: 2 * Math.PI },
      {
        name: "Turn per minute",
        notation: "turn/min",
        rate: (2 * Math.PI) / 60,
      },
      { name: "Turn per hour", notation: "turn/h", rate: (2 * Math.PI) / 3600 },
    ],
  },

  // ---------- FLOW RATE ----------
  {
    title: "Flow Rate",
    data: [
      // --- SI (Metric) Base Units ---
      { name: "Cubic Meter per Second", notation: "m³/s", rate: 1 },
      { name: "Cubic Meter per Minute", notation: "m³/min", rate: 1 / 60 },
      { name: "Cubic Meter per Hour", notation: "m³/h", rate: 1 / 3600 },
      { name: "Cubic Meter per Day", notation: "m³/day", rate: 1 / 86400 },

      // --- Smaller Metric Units ---
      { name: "Liter per Second", notation: "L/s", rate: 0.001 },
      { name: "Liter per Minute", notation: "L/min", rate: 0.001 / 60 },
      { name: "Liter per Hour", notation: "L/h", rate: 0.001 / 3600 },
      { name: "Milliliter per Second", notation: "mL/s", rate: 1e-6 },
      { name: "Milliliter per Minute", notation: "mL/min", rate: 1e-6 / 60 },
      { name: "Cubic Centimeter per Second", notation: "cm³/s", rate: 1e-6 },
      {
        name: "Cubic Centimeter per Minute",
        notation: "cm³/min",
        rate: 1e-6 / 60,
      },

      // --- Larger Metric Units ---
      { name: "Cubic Decimeter per Second", notation: "dm³/s", rate: 1e-3 },
      { name: "Cubic Kilometer per Second", notation: "km³/s", rate: 1e9 },
      { name: "Cubic Kilometer per Hour", notation: "km³/h", rate: 1e9 / 3600 },

      // --- Imperial / US Customary (Volumetric) ---
      { name: "Cubic Inch per Second", notation: "in³/s", rate: 1.6387064e-5 },
      {
        name: "Cubic Inch per Minute",
        notation: "in³/min",
        rate: 1.6387064e-5 / 60,
      },
      {
        name: "Cubic Foot per Second",
        notation: "ft³/s",
        rate: 0.028316846592,
      },
      {
        name: "Cubic Foot per Minute",
        notation: "ft³/min",
        rate: 0.028316846592 / 60,
      },
      {
        name: "Cubic Foot per Hour",
        notation: "ft³/h",
        rate: 0.028316846592 / 3600,
      },
      {
        name: "Cubic Yard per Second",
        notation: "yd³/s",
        rate: 0.764554857984,
      },
      {
        name: "Cubic Yard per Minute",
        notation: "yd³/min",
        rate: 0.764554857984 / 60,
      },
      {
        name: "Cubic Yard per Hour",
        notation: "yd³/h",
        rate: 0.764554857984 / 3600,
      },

      // --- Gallons (US and Imperial) ---
      {
        name: "US Gallon per Second",
        notation: "gal (US)/s",
        rate: 0.003785411784,
      },
      {
        name: "US Gallon per Minute",
        notation: "gal (US)/min",
        rate: 0.003785411784 / 60,
      },
      {
        name: "US Gallon per Hour",
        notation: "gal (US)/h",
        rate: 0.003785411784 / 3600,
      },
      {
        name: "Imperial Gallon per Second",
        notation: "gal (UK)/s",
        rate: 0.00454609,
      },
      {
        name: "Imperial Gallon per Minute",
        notation: "gal (UK)/min",
        rate: 0.00454609 / 60,
      },
      {
        name: "Imperial Gallon per Hour",
        notation: "gal (UK)/h",
        rate: 0.00454609 / 3600,
      },

      // --- Barrels (Oil & Industrial) ---
      {
        name: "Barrel (US) per Second",
        notation: "bbl (US)/s",
        rate: 0.158987294928,
      },
      {
        name: "Barrel (US) per Minute",
        notation: "bbl (US)/min",
        rate: 0.158987294928 / 60,
      },
      {
        name: "Barrel (US) per Hour",
        notation: "bbl (US)/h",
        rate: 0.158987294928 / 3600,
      },
      {
        name: "Barrel (US) per Day",
        notation: "bbl (US)/day",
        rate: 0.158987294928 / 86400,
      },
      {
        name: "Barrel (UK) per Day",
        notation: "bbl (UK)/day",
        rate: 0.16365924 / 86400,
      },

      // --- Engineering / Scientific ---
      { name: "Cubic Millimeter per Second", notation: "mm³/s", rate: 1e-9 },
      {
        name: "Cubic Millimeter per Minute",
        notation: "mm³/min",
        rate: 1e-9 / 60,
      },
      {
        name: "Cubic Meter per Year",
        notation: "m³/yr",
        rate: 1 / (365 * 24 * 3600),
      },
      {
        name: "Cubic Foot per Day",
        notation: "ft³/day",
        rate: 0.028316846592 / 86400,
      },

      // --- Mass Flow Units (for reference) ---
      {
        name: "Kilogram per Second",
        notation: "kg/s",
        rate: "depends_on_density",
      },
      { name: "Gram per Second", notation: "g/s", rate: "depends_on_density" },
      { name: "Ton per Hour", notation: "t/h", rate: "depends_on_density" },
      {
        name: "Pound per Second",
        notation: "lb/s",
        rate: "depends_on_density",
      },
      { name: "Pound per Hour", notation: "lb/h", rate: "depends_on_density" },

      // --- Specialized / Common Industrial ---
      {
        name: "Standard Cubic Meter per Hour",
        notation: "Sm³/h",
        rate: 1 / 3600,
      }, // same as m³/h at STP
      {
        name: "Standard Cubic Foot per Minute",
        notation: "SCFM",
        rate: 0.028316846592 / 60,
      },
      { name: "Standard Liter per Minute", notation: "SLM", rate: 0.001 / 60 },
    ],
  },

  // ---------- FREQUENCY ----------
  {
    title: "Frequency",
    data: [
      // SI Base Units
      { name: "Hertz", notation: "Hz", rate: 1 }, // base unit: cycles per second
      { name: "Kilohertz", notation: "kHz", rate: 1e3 },
      { name: "Megahertz", notation: "MHz", rate: 1e6 },
      { name: "Gigahertz", notation: "GHz", rate: 1e9 },
      { name: "Terahertz", notation: "THz", rate: 1e12 },
      { name: "Petahertz", notation: "PHz", rate: 1e15 },

      // Submultiples
      { name: "Millihertz", notation: "mHz", rate: 1e-3 },
      { name: "Microhertz", notation: "µHz", rate: 1e-6 },
      { name: "Nanohertz", notation: "nHz", rate: 1e-9 },
      { name: "Picohertz", notation: "pHz", rate: 1e-12 },
      { name: "Femtohertz", notation: "fHz", rate: 1e-15 },

      // Time-based equivalents
      { name: "Cycle per second", notation: "cps", rate: 1 }, // 1 cps = 1 Hz
      { name: "Revolution per second", notation: "rev/s", rate: 1 },
      { name: "Revolution per minute", notation: "rev/min", rate: 1 / 60 }, // RPM
      { name: "Revolution per hour", notation: "rev/h", rate: 1 / 3600 },
      { name: "Cycle per minute", notation: "cpm", rate: 1 / 60 },
      { name: "Cycle per hour", notation: "cph", rate: 1 / 3600 },
      { name: "Cycle per day", notation: "cpd", rate: 1 / 86400 },

      // Angular frequency (radians per second)
      { name: "Radian per second", notation: "rad/s", rate: 1 / (2 * Math.PI) },
      {
        name: "Degree per second",
        notation: "°/s",
        rate: 1 / ((360 * Math.PI) / 180),
      }, // ≈ 1 / 360
      { name: "Turn per second", notation: "turn/s", rate: 1 },

      // Wave-related / Astronomical
      { name: "Waves per second", notation: "wave/s", rate: 1 },
      {
        name: "Waves per meter (wavenumber)",
        notation: "m⁻¹",
        rate: 299792458,
      }, // for light, c = fλ
      { name: "Per day", notation: "d⁻¹", rate: 1 / 86400 },
      { name: "Per hour", notation: "h⁻¹", rate: 1 / 3600 },
      { name: "Per minute", notation: "min⁻¹", rate: 1 / 60 },
      { name: "Per year", notation: "yr⁻¹", rate: 1 / (365.25 * 86400) },

      // Radio & Sound-related
      { name: "Beats per second", notation: "bps", rate: 1 }, // same as Hz
      { name: "Beats per minute", notation: "BPM", rate: 1 / 60 },
      { name: "Line frequency (50 Hz)", notation: "LF50", rate: 50 },
      { name: "Line frequency (60 Hz)", notation: "LF60", rate: 60 },

      // Specialized / Scientific
      {
        name: "Atomic transition frequency (Cesium)",
        notation: "fCs",
        rate: 9.19263177e9,
      },
      { name: "Planck frequency", notation: "fP", rate: 1.85487e43 },
      { name: "Rydberg frequency", notation: "fR", rate: 3.28984196e15 },
    ],
  },

  // ---------- DENSITY ----------
  {
    title: "Density",
    data: [
      // --- SI Base ---
      { name: "Kilogram per Cubic Meter", notation: "kg/m³", rate: 1 }, // base unit

      // --- Common Metric Units ---
      { name: "Gram per Cubic Centimeter", notation: "g/cm³", rate: 1000 },
      { name: "Gram per Cubic Meter", notation: "g/m³", rate: 0.001 },
      { name: "Gram per Cubic Millimeter", notation: "g/mm³", rate: 1e6 },
      { name: "Milligram per Cubic Meter", notation: "mg/m³", rate: 1e-6 },
      { name: "Milligram per Cubic Centimeter", notation: "mg/cm³", rate: 1 },
      { name: "Gram per Liter", notation: "g/L", rate: 1 },
      { name: "Kilogram per Liter", notation: "kg/L", rate: 1000 },
      { name: "Milligram per Liter", notation: "mg/L", rate: 0.001 },
      { name: "Microgram per Liter", notation: "µg/L", rate: 1e-6 },
      { name: "Microgram per Cubic Meter", notation: "µg/m³", rate: 1e-9 },

      // --- CGS Units ---
      { name: "Gram per Cubic Decimeter", notation: "g/dm³", rate: 1 },
      { name: "Gram per Milliliter", notation: "g/mL", rate: 1000 },
      { name: "Milligram per Milliliter", notation: "mg/mL", rate: 1 },
      { name: "Tonne per Cubic Meter", notation: "t/m³", rate: 1000 },

      // --- Imperial / US Customary ---
      {
        name: "Pound per Cubic Foot",
        notation: "lb/ft³",
        rate: 16.01846337396,
      },
      {
        name: "Pound per Cubic Inch",
        notation: "lb/in³",
        rate: 27679.904710191,
      },
      {
        name: "Pound per Gallon (US)",
        notation: "lb/gal(US)",
        rate: 119.82642731684,
      },
      {
        name: "Pound per Gallon (UK)",
        notation: "lb/gal(UK)",
        rate: 99.7763726634,
      },
      {
        name: "Ounce per Cubic Inch",
        notation: "oz/in³",
        rate: 1729.994044387,
      },
      {
        name: "Ounce per Gallon (US)",
        notation: "oz/gal(US)",
        rate: 7.489151707,
      },
      { name: "Slug per Cubic Foot", notation: "slug/ft³", rate: 515.3788184 },

      // --- Engineering / Petroleum ---
      { name: "API Gravity", notation: "°API", rate: 1 }, // non-linear scale, formula-based
      { name: "Specific Gravity (Water=1)", notation: "SG", rate: 1000 }, // dimensionless → kg/m³ reference
      { name: "Kilogram per Cubic Decimeter", notation: "kg/dm³", rate: 1000 },

      // --- Rare / Specialized ---
      { name: "Tonne per Cubic Centimeter", notation: "t/cm³", rate: 1e9 },
      { name: "Tonne per Cubic Millimeter", notation: "t/mm³", rate: 1e12 },
      { name: "Grain per Cubic Inch", notation: "gr/in³", rate: 252.8926466 },
    ],
  },

  // ---------- ENERGY ----------
  {
    title: "Energy",
    data: [
      // --- SI Base Units ---
      { name: "Joule", notation: "J", rate: 1 },
      { name: "Kilojoule", notation: "kJ", rate: 1e3 },
      { name: "Megajoule", notation: "MJ", rate: 1e6 },
      { name: "Gigajoule", notation: "GJ", rate: 1e9 },
      { name: "Terajoule", notation: "TJ", rate: 1e12 },
      { name: "Petajoule", notation: "PJ", rate: 1e15 },
      { name: "Millijoule", notation: "mJ", rate: 1e-3 },
      { name: "Microjoule", notation: "µJ", rate: 1e-6 },
      { name: "Nanojoule", notation: "nJ", rate: 1e-9 },

      // --- Watt-hour system (Electrical / Practical) ---
      { name: "Watt second", notation: "W·s", rate: 1 },
      { name: "Watt hour", notation: "W·h", rate: 3600 },
      { name: "Kilowatt hour", notation: "kW·h", rate: 3.6e6 },
      { name: "Megawatt hour", notation: "MW·h", rate: 3.6e9 },
      { name: "Gigawatt hour", notation: "GW·h", rate: 3.6e12 },
      { name: "Electronvolt", notation: "eV", rate: 1.602176634e-19 },
      { name: "Kiloelectronvolt", notation: "keV", rate: 1.602176634e-16 },
      { name: "Megaelectronvolt", notation: "MeV", rate: 1.602176634e-13 },
      { name: "Gigaelectronvolt", notation: "GeV", rate: 1.602176634e-10 },
      { name: "Teraelectronvolt", notation: "TeV", rate: 1.602176634e-7 },

      // --- Calorie / Heat-related Units ---
      { name: "Calorie (thermochemical)", notation: "cal", rate: 4.184 },
      { name: "Kilocalorie (thermochemical)", notation: "kcal", rate: 4184 },
      { name: "Calorie (15°C)", notation: "cal15", rate: 4.1855 },
      { name: "Calorie (IT)", notation: "calIT", rate: 4.1868 },
      { name: "Gram calorie", notation: "gcal", rate: 4.184 },
      { name: "Kilogram calorie", notation: "kgcal", rate: 4184 },

      // --- Mechanical / Imperial ---
      { name: "Foot-pound force", notation: "ft·lbf", rate: 1.355817948 },
      { name: "Inch-pound force", notation: "in·lbf", rate: 0.112984829 },
      { name: "Foot-poundal", notation: "ft·pdl", rate: 0.04214011 },
      {
        name: "British thermal unit (mean)",
        notation: "BTUmean",
        rate: 1055.87,
      },
      { name: "British thermal unit (IT)", notation: "BTUit", rate: 1055.056 },
      { name: "British thermal unit (th)", notation: "BTUth", rate: 1054.35 },
      { name: "Therm (US)", notation: "thm(US)", rate: 1.05506e8 },
      { name: "Therm (UK)", notation: "thm(UK)", rate: 1.05505585262e8 },
      { name: "Horsepower hour", notation: "hp·h", rate: 2.6845195377e6 },
      { name: "Ton of TNT", notation: "tTNT", rate: 4.184e9 },
      { name: "Kiloton of TNT", notation: "ktTNT", rate: 4.184e12 },
      { name: "Megaton of TNT", notation: "MtTNT", rate: 4.184e15 },

      // --- Gas / Chemical Energy Units ---
      { name: "Erg", notation: "erg", rate: 1e-7 },
      { name: "Dyne·centimeter", notation: "dyn·cm", rate: 1e-7 },
      { name: "Thermochemical calorie", notation: "cal(th)", rate: 4.184 },
      {
        name: "International Table calorie",
        notation: "cal(IT)",
        rate: 4.1868,
      },
      { name: "Langley", notation: "Ly", rate: 41840 }, // 1 cal/cm²

      // --- Atomic / Quantum Physics ---
      { name: "Hartree energy", notation: "Eh", rate: 4.3597447222071e-18 },
      { name: "Rydberg energy", notation: "Ry", rate: 2.17987236110355e-18 },
      { name: "Planck energy", notation: "Ep", rate: 1.9561e9 }, // J
      {
        name: "Atomic mass unit energy equivalent",
        notation: "u·c²",
        rate: 1.4924180856e-10,
      },
      { name: "Electronvolt per molecule", notation: "eV/mol", rate: 96.485e3 }, // via Avogadro constant

      // --- Miscellaneous / Practical Energy ---
      { name: "Newton meter", notation: "N·m", rate: 1 },
      { name: "Kilonewton meter", notation: "kN·m", rate: 1000 },
      {
        name: "Mega electronvolt per nucleon",
        notation: "MeV/u",
        rate: 1.602176634e-13,
      },
      { name: "Litre·atmosphere", notation: "L·atm", rate: 101.325 },
      { name: "Cubic meter·atmosphere", notation: "m³·atm", rate: 101325 },
    ],
  },

  // ---------- POWER ----------
  {
    title: "Power",
    data: [
      // --- SI Units ---
      { name: "Watt", notation: "W", rate: 1 },
      { name: "Kilowatt", notation: "kW", rate: 1e3 },
      { name: "Megawatt", notation: "MW", rate: 1e6 },
      { name: "Gigawatt", notation: "GW", rate: 1e9 },
      { name: "Terawatt", notation: "TW", rate: 1e12 },
      { name: "Milliwatt", notation: "mW", rate: 1e-3 },
      { name: "Microwatt", notation: "µW", rate: 1e-6 },
      { name: "Nanowatt", notation: "nW", rate: 1e-9 },
      { name: "Picowatt", notation: "pW", rate: 1e-12 },

      // --- Derived / Common Engineering Units ---
      { name: "Joule per second", notation: "J/s", rate: 1 },
      { name: "Newton meter per second", notation: "N·m/s", rate: 1 },
      { name: "Volt ampere", notation: "VA", rate: 1 }, // apparent power
      { name: "Kilovolt ampere", notation: "kVA", rate: 1e3 },
      { name: "Megavolt ampere", notation: "MVA", rate: 1e6 },
      { name: "Gigavolt ampere", notation: "GVA", rate: 1e9 },
      { name: "Watt reactive", notation: "var", rate: 1 }, // reactive power
      { name: "Kilovar", notation: "kvar", rate: 1e3 },
      { name: "Megavar", notation: "Mvar", rate: 1e6 },

      // --- Horsepower Variants ---
      { name: "Horsepower (mechanical)", notation: "hp", rate: 745.699872 },
      { name: "Horsepower (metric)", notation: "hp(M)", rate: 735.49875 },
      { name: "Horsepower (electric)", notation: "hp(E)", rate: 746 },
      { name: "Horsepower (boiler)", notation: "hp(boiler)", rate: 9809.5 },
      { name: "Horsepower (water)", notation: "hp(water)", rate: 746.043 },
      { name: "Horsepower (UK)", notation: "hp(UK)", rate: 745.7 },
      { name: "Pferdestärke (PS)", notation: "PS", rate: 735.49875 },

      // --- Imperial and Mechanical Units ---
      {
        name: "Foot-pound force per second",
        notation: "ft·lbf/s",
        rate: 1.355817948,
      },
      {
        name: "Foot-pound force per minute",
        notation: "ft·lbf/min",
        rate: 0.0225969658,
      },
      {
        name: "Inch-pound force per second",
        notation: "in·lbf/s",
        rate: 0.112984829,
      },
      { name: "BTU per hour", notation: "BTU/h", rate: 0.29307107 },
      { name: "BTU per minute", notation: "BTU/min", rate: 17.5842642 },
      { name: "BTU per second", notation: "BTU/s", rate: 1055.05585 },
      { name: "Ton of refrigeration (IT)", notation: "TR", rate: 3516.85284 }, // 12,000 BTU/h
      { name: "Kilocalorie per second", notation: "kcal/s", rate: 4184 },
      { name: "Kilocalorie per hour", notation: "kcal/h", rate: 1.16222222 },
      { name: "Calorie per second", notation: "cal/s", rate: 4.184 },
      { name: "Calorie per minute", notation: "cal/min", rate: 0.0697333 },
      { name: "Erg per second", notation: "erg/s", rate: 1e-7 },

      // --- Electrical Power (Real/Reactive/Apparent) ---
      { name: "Volt ampere reactive", notation: "var", rate: 1 },
      { name: "Kilovolt ampere reactive", notation: "kvar", rate: 1e3 },
      { name: "Megavolt ampere reactive", notation: "Mvar", rate: 1e6 },
      { name: "Gigavolt ampere reactive", notation: "Gvar", rate: 1e9 },

      // --- Radiation / Heat Flux Context ---
      { name: "Lumen per steradian per second", notation: "lm/sr·s", rate: 1 }, // not direct power, but optical equivalent
      { name: "Watt per square meter", notation: "W/m²", rate: 1 }, // irradiance
      { name: "Kilowatt per square meter", notation: "kW/m²", rate: 1e3 },
      { name: "Milliwatt per square centimeter", notation: "mW/cm²", rate: 10 },

      // --- Miscellaneous & Obsolete Units ---
      { name: "Planck power", notation: "Pₚ", rate: 3.62831e52 },
      { name: "Dyne·centimeter per second", notation: "dyn·cm/s", rate: 1e-7 },
      { name: "Cheval vapeur", notation: "CV", rate: 735.49875 }, // French metric horsepower
    ],
  },

  // ---------- TEMPERATURE ----------
  {
    title: "Temperature",
    data: [
      {
        name: "Celsius",
        notation: "°C",
        rate: 1,
      },
      {
        name: "Kelvin",
        notation: "K",
        rate: 1,
      },
      {
        name: "Fahrenheit",
        notation: "°F",
        rate: 1,
      },
      {
        name: "Rankine",
        notation: "°R",
        rate: 5 / 9,
      },
      { name: "Newton", notation: "°N", rate: 100 / 33 },
    ],
  },

  // ---------- ANGLE ----------
  {
    title: "Angle",
    data: [
      // --- SI Base Unit ---
      { name: "Radian", notation: "rad", rate: 1 },

      // --- Degrees, Minutes, Seconds ---
      { name: "Degree", notation: "°", rate: Math.PI / 180 }, // ≈ 0.01745329252 rad
      { name: "Arcminute", notation: "′", rate: Math.PI / (180 * 60) }, // ≈ 0.00029088821 rad
      { name: "Arcsecond", notation: "″", rate: Math.PI / (180 * 3600) }, // ≈ 4.84813681e-6 rad

      // --- Gradians / Gon ---
      { name: "Gradian", notation: "gon", rate: Math.PI / 200 }, // 1 gon = 0.9°

      // --- Revolutions & Rotations ---
      { name: "Revolution", notation: "rev", rate: 2 * Math.PI },
      { name: "Rotation", notation: "rot", rate: 2 * Math.PI },
      { name: "Turn", notation: "turn", rate: 2 * Math.PI },
      { name: "Circle", notation: "circle", rate: 2 * Math.PI },
      { name: "Quadrant", notation: "quad", rate: Math.PI / 2 },
      { name: "Sextant", notation: "sext", rate: Math.PI / 3 },
      { name: "Octant", notation: "oct", rate: Math.PI / 4 },
      { name: "Right Angle", notation: "right angle", rate: Math.PI / 2 },

      // --- Military / Navigational ---
      {
        name: "Mil (NATO)",
        notation: "mil (NATO)",
        rate: (2 * Math.PI) / 6400,
      }, // 6400 mils = 1 rev
      {
        name: "Mil (Soviet)",
        notation: "mil (Soviet)",
        rate: (2 * Math.PI) / 6000,
      },
      {
        name: "Mil (Sweden)",
        notation: "mil (Sweden)",
        rate: (2 * Math.PI) / 6300,
      },

      // --- Astronomical / Geodesic ---
      { name: "Hour Angle", notation: "h", rate: Math.PI / 12 }, // 1 hour = 15°
      { name: "Minute of Time", notation: "min t", rate: Math.PI / (12 * 60) },
      { name: "Second of Time", notation: "s t", rate: Math.PI / (12 * 3600) },

      // --- Binary / Engineering ---
      { name: "Binary Radian", notation: "brad", rate: (2 * Math.PI) / 256 }, // used in old computers
      { name: "Milliradian", notation: "mrad", rate: 1e-3 },
      { name: "Microradian", notation: "µrad", rate: 1e-6 },
      { name: "Nanoradian", notation: "nrad", rate: 1e-9 },
    ],
  },

  // ---------- LUMINANCE ----------
  {
    title: "Luminance",
    data: [
      // --- SI Base Unit ---
      { name: "Candela per square meter", notation: "cd/m²", rate: 1 }, // SI unit

      // --- Metric Submultiples ---
      { name: "Candela per square centimeter", notation: "cd/cm²", rate: 1e4 },
      { name: "Candela per square millimeter", notation: "cd/mm²", rate: 1e6 },
      {
        name: "Candela per square foot",
        notation: "cd/ft²",
        rate: 10.7639104167,
      },
      { name: "Candela per square inch", notation: "cd/in²", rate: 1550.0031 },

      // --- Nits and Submultiples ---
      { name: "Nit", notation: "nt", rate: 1 }, // same as cd/m²
      { name: "Millinit", notation: "mnt", rate: 1e-3 },
      { name: "Micronit", notation: "µnt", rate: 1e-6 },

      // --- Older Photometric Units ---
      { name: "Lambert", notation: "L", rate: 3183.09886183 }, // 1 L = 1/π cd/cm²
      { name: "Millilambert", notation: "mL", rate: 3.18309886183 },
      { name: "Foot-lambert", notation: "fL", rate: 3.4262590996 }, // 1 fL = 1/π cd/ft²

      // --- Apostilbs and Stilbs ---
      { name: "Apostilb", notation: "asb", rate: 0.31830988618379 }, // 1 asb = 1/π cd/m²
      { name: "Stilb", notation: "sb", rate: 1e4 }, // 1 sb = 10⁴ cd/m²
      { name: "Millistilb", notation: "msb", rate: 10 },
      { name: "Microstilb", notation: "µsb", rate: 0.01 },

      // --- Skot and Bril (Low-light Units) ---
      { name: "Skot", notation: "sk", rate: 0.001 }, // 1 sk = 1e-3 cd/m²
      { name: "Bril", notation: "bril", rate: 1e-8 }, // 1 bril = 1e-8 cd/m²

      // --- Non-SI Astronomical and Visual Brightness ---
      { name: "Lambert per steradian", notation: "L/sr", rate: 1 },
      {
        name: "Candela per steradian per square meter",
        notation: "cd/sr·m²",
        rate: 1,
      },
      { name: "Candle per square foot", notation: "c/ft²", rate: 10.76391 },
      { name: "Candle per square inch", notation: "c/in²", rate: 1550.0031 },

      // --- Obsolete / Special-purpose Units ---
      { name: "Candle per square meter", notation: "c/m²", rate: 1 }, // synonym of cd/m²
      { name: "Candle per square centimeter", notation: "c/cm²", rate: 1e4 },
      { name: "Bougie per square meter", notation: "B/m²", rate: 1 }, // old French candela
    ],
  },

  // ---------- ILLUMINANCE ----------
  {
    title: "Illuminance",
    data: [
      // --- SI Base Unit ---
      { name: "Lux", notation: "lx", rate: 1 }, // SI unit, 1 lx = 1 lm/m²

      // --- Metric Submultiples ---
      { name: "Kilolux", notation: "klx", rate: 1e3 },
      { name: "Megalux", notation: "Mlx", rate: 1e6 },
      { name: "Millilux", notation: "mlx", rate: 1e-3 },
      { name: "Microlux", notation: "µlx", rate: 1e-6 },
      { name: "Nanolux", notation: "nlx", rate: 1e-9 },

      // --- Photometric (CGS) Units ---
      { name: "Phot", notation: "ph", rate: 1e4 }, // 1 ph = 10⁴ lx
      { name: "Milliphot", notation: "mph", rate: 10 },
      { name: "Centiphot", notation: "cph", rate: 100 },
      { name: "Deciphot", notation: "dph", rate: 1000 },
      { name: "Microphot", notation: "µph", rate: 0.01 },

      // --- Imperial / US Customary ---
      { name: "Foot-candle", notation: "fc", rate: 10.7639104167 }, // 1 fc = 10.76391 lx
      { name: "Candle per square foot", notation: "c/ft²", rate: 10.76391 },
      { name: "Candle per square inch", notation: "c/in²", rate: 1550.0031 },
      { name: "Lumen per square foot", notation: "lm/ft²", rate: 10.76391 },
      { name: "Lumen per square inch", notation: "lm/in²", rate: 1550.0031 },

      // --- Astronomical / Extremely Low-Light Units ---
      { name: "Nox", notation: "nx", rate: 0.001 }, // 1 nx = 10⁻³ lx
      { name: "Skot", notation: "sk", rate: 0.001 }, // dark-adapted vision equivalent
      { name: "Bril", notation: "bril", rate: 1e-8 }, // 1 bril = 10⁻⁸ lx
      { name: "Millinix", notation: "mnx", rate: 1e-6 },
      { name: "Micronox", notation: "µnx", rate: 1e-9 },

      // --- Daylight / Practical Context ---
      { name: "Lumen per square meter", notation: "lm/m²", rate: 1 }, // synonym of lux
      { name: "Lumen per square centimeter", notation: "lm/cm²", rate: 1e4 },
      { name: "Lumen per square millimeter", notation: "lm/mm²", rate: 1e6 },
      { name: "Kilolumen per square meter", notation: "klm/m²", rate: 1e3 },

      // --- Obsolete and Regional Units ---
      { name: "Meter-candle", notation: "m·c", rate: 1 }, // old term for lux
      {
        name: "Lumen per steradian per square meter",
        notation: "lm/sr·m²",
        rate: 1,
      }, // equivalent to cd/m²
      { name: "Bougie per square meter", notation: "B/m²", rate: 1 }, // old French for cd/m²
      {
        name: "Lumen per square foot (International)",
        notation: "lm/ft²(Int)",
        rate: 10.764,
      },
      { name: "Candle per square yard", notation: "c/yd²", rate: 1.196 },
    ],
  },

  // ---------- RADIATION ----------
  {
    title: "Radiation",
    data: [
      // --- Radioactivity (Source Emission Rate) ---
      { name: "Becquerel", notation: "Bq", rate: 1 }, // Base SI unit
      { name: "Curie", notation: "Ci", rate: 3.7e10 },
      { name: "Millicurie", notation: "mCi", rate: 3.7e7 },
      { name: "Microcurie", notation: "µCi", rate: 3.7e4 },
      { name: "Disintegrations per second", notation: "dps", rate: 1 },
      { name: "Disintegrations per minute", notation: "dpm", rate: 1 / 60 },

      // --- Absorbed Dose (Energy Absorbed by Matter) ---
      { name: "Gray", notation: "Gy", rate: 1 }, // Base SI unit
      { name: "Milligray", notation: "mGy", rate: 1e-3 },
      { name: "Microgray", notation: "µGy", rate: 1e-6 },
      { name: "Rad", notation: "rad", rate: 0.01 },
      { name: "Erg per gram", notation: "erg/g", rate: 1e-4 },

      // --- Dose Equivalent (Biological Effect of Radiation) ---
      { name: "Sievert", notation: "Sv", rate: 1 }, // Base SI unit
      { name: "Millisievert", notation: "mSv", rate: 1e-3 },
      { name: "Microsievert", notation: "µSv", rate: 1e-6 },
      { name: "Rem", notation: "rem", rate: 0.01 },
      { name: "Millirem", notation: "mrem", rate: 1e-5 },

      // --- Exposure (Ionization in Air) ---
      { name: "Coulomb per kilogram", notation: "C/kg", rate: 1 }, // SI unit
      { name: "Millicoulomb per kilogram", notation: "mC/kg", rate: 1e-3 },
      { name: "Microcoulomb per kilogram", notation: "µC/kg", rate: 1e-6 },
      { name: "Roentgen", notation: "R", rate: 2.58e-4 }, // 1 R = 2.58×10⁻⁴ C/kg

      // --- Flux (Flow of Radiation) ---
      { name: "Gray per second", notation: "Gy/s", rate: 1 },
      { name: "Gray per hour", notation: "Gy/h", rate: 1 / 3600 },
      { name: "Sievert per second", notation: "Sv/s", rate: 1 },
      { name: "Sievert per hour", notation: "Sv/h", rate: 1 / 3600 },
      { name: "Rem per hour", notation: "rem/h", rate: 0.01 / 3600 },
      { name: "Röntgen per hour", notation: "R/h", rate: 2.58e-4 / 3600 },

      // --- Neutron Flux Density ---
      {
        name: "Neutrons per square meter per second",
        notation: "n/m²·s",
        rate: 1,
      },
      {
        name: "Neutrons per square centimeter per second",
        notation: "n/cm²·s",
        rate: 1e4,
      },

      // --- Derived and Practical Units ---
      { name: "Dose rate (µSv/h)", notation: "µSv/h", rate: 1e-6 / 3600 },
      { name: "Effective dose (person-sievert)", notation: "p-Sv", rate: 1 },
      { name: "Exposure rate constant", notation: "Γ", rate: 1 }, // used in nuclear safety
    ],
  },

  // ---------- RADIOACTIVITY ----------
  {
    title: "Radioactivity",
    data: [
      // --- SI Base Units ---
      { name: "Becquerel", notation: "Bq", rate: 1 }, // 1 disintegration per second
      { name: "Kilobecquerel", notation: "kBq", rate: 1e3 },
      { name: "Megabecquerel", notation: "MBq", rate: 1e6 },
      { name: "Gigabecquerel", notation: "GBq", rate: 1e9 },
      { name: "Terabecquerel", notation: "TBq", rate: 1e12 },
      { name: "Petabecquerel", notation: "PBq", rate: 1e15 },

      // --- Traditional / Non-SI Units ---
      { name: "Curie", notation: "Ci", rate: 3.7e10 }, // 3.7×10¹⁰ Bq
      { name: "Millicurie", notation: "mCi", rate: 3.7e7 },
      { name: "Microcurie", notation: "µCi", rate: 3.7e4 },
      { name: "Nanocurie", notation: "nCi", rate: 37 },
      { name: "Picocurie", notation: "pCi", rate: 0.037 },

      // --- Disintegration-Based Units ---
      { name: "Disintegration per second", notation: "dps", rate: 1 }, // = 1 Bq
      { name: "Disintegration per minute", notation: "dpm", rate: 1 / 60 },
      { name: "Disintegration per hour", notation: "dph", rate: 1 / 3600 },
      { name: "Disintegration per day", notation: "dpd", rate: 1 / 86400 },

      // --- Mass and Volume Activity ---
      { name: "Becquerel per gram", notation: "Bq/g", rate: 1 },
      { name: "Becquerel per kilogram", notation: "Bq/kg", rate: 1 },
      { name: "Becquerel per liter", notation: "Bq/L", rate: 1 },
      { name: "Curie per gram", notation: "Ci/g", rate: 3.7e10 },
      { name: "Curie per liter", notation: "Ci/L", rate: 3.7e10 },
      {
        name: "Disintegration per minute per liter",
        notation: "dpm/L",
        rate: 1 / 60,
      },
      {
        name: "Disintegration per minute per gram",
        notation: "dpm/g",
        rate: 1 / 60,
      },

      // --- Environmental Radioactivity Units ---
      { name: "Picocurie per liter", notation: "pCi/L", rate: 0.037 },
      { name: "Picocurie per cubic meter", notation: "pCi/m³", rate: 0.037 },
      { name: "Becquerel per cubic meter", notation: "Bq/m³", rate: 1 },
      {
        name: "Microbecquerel per cubic meter",
        notation: "µBq/m³",
        rate: 1e-6,
      },

      // --- Surface and Area Activity ---
      { name: "Becquerel per square meter", notation: "Bq/m²", rate: 1 },
      {
        name: "Becquerel per square centimeter",
        notation: "Bq/cm²",
        rate: 1e4,
      },
      {
        name: "Disintegration per second per square meter",
        notation: "dps/m²",
        rate: 1,
      },
      {
        name: "Disintegration per second per square centimeter",
        notation: "dps/cm²",
        rate: 1e4,
      },

      // --- Specific Units Used in Practice ---
      { name: "Activity Concentration (Bq/kg)", notation: "Bq/kg", rate: 1 },
      { name: "Surface Contamination (Bq/cm²)", notation: "Bq/cm²", rate: 1e4 },
      { name: "Radon Concentration (Bq/m³)", notation: "Bq/m³", rate: 1 },
      {
        name: "Radiocarbon Unit (percent modern carbon)",
        notation: "pMC",
        rate: 1,
      }, // dimensionless but widely used
      { name: "Curie per cubic meter", notation: "Ci/m³", rate: 3.7e10 },
      { name: "Becquerel per cubic centimeter", notation: "Bq/cm³", rate: 1e6 },
    ],
  },

  // ---------- MAGNETIC FIELD ----------
  {
    title: "Magnetic field",
    data: [
      // --- SI Units ---
      { name: "Tesla", notation: "T", rate: 1 }, // SI unit: 1 T = 1 Wb/m²
      { name: "Millitesla", notation: "mT", rate: 1e-3 },
      { name: "Microtesla", notation: "µT", rate: 1e-6 },
      { name: "Nanotesla", notation: "nT", rate: 1e-9 },
      { name: "Picotesla", notation: "pT", rate: 1e-12 },
      { name: "Kilotesla", notation: "kT", rate: 1e3 },

      // --- CGS (Gaussian) Units ---
      { name: "Gauss", notation: "G", rate: 1e-4 }, // 1 G = 1e-4 T
      { name: "Milligauss", notation: "mG", rate: 1e-7 },
      { name: "Microgauss", notation: "µG", rate: 1e-10 },
      { name: "Maxwell per square centimeter", notation: "Mx/cm²", rate: 1e-4 }, // 1 Mx/cm² = 1 G
      { name: "Maxwell per square meter", notation: "Mx/m²", rate: 1e-8 }, // 1 Mx/m² = 1e-8 T

      // --- Electromagnetic Engineering Units ---
      { name: "Weber per square meter", notation: "Wb/m²", rate: 1 }, // synonym of Tesla
      { name: "Weber per square centimeter", notation: "Wb/cm²", rate: 1e4 },
      { name: "Line per square inch", notation: "line/in²", rate: 6.4516e-9 }, // old British unit
      { name: "Maxwell per square inch", notation: "Mx/in²", rate: 6.4516e-5 },

      // --- Magnetization & Field Strength Related ---
      { name: "Ampere per meter", notation: "A/m", rate: 1.25663706212e-6 }, // approximate equivalent of 1 T/µ₀
      { name: "Oersted", notation: "Oe", rate: 1e-4 / (4 * Math.PI * 1e-7) }, // ≈ 79.5774715 A/m
      { name: "Gilbert per centimeter", notation: "Gb/cm", rate: 79.5774715 },

      // --- Geophysical and Astronomical Scales ---
      { name: "Gamma", notation: "γ", rate: 1e-9 }, // 1 γ = 1 nT (used in geophysics)
      { name: "Microgamma", notation: "µγ", rate: 1e-12 },
      { name: "Milligamma", notation: "mγ", rate: 1e-6 },

      // --- Practical Contextual Units ---
      { name: "Tesla-second per square meter", notation: "T·s/m²", rate: 1 }, // same as weber/m²
      {
        name: "Ampere-turn per meter",
        notation: "At/m",
        rate: 1.25663706212e-6,
      }, // similar dimensionally to A/m
      { name: "Weber per square inch", notation: "Wb/in²", rate: 1550.0031 },

      // --- Obsolete / Legacy Units ---
      { name: "Line per square centimeter", notation: "line/cm²", rate: 1e-4 },
      { name: "C.G.S. unit (abtesla)", notation: "aT", rate: 1e-5 },
      { name: "Biot per meter", notation: "Bi/m", rate: 1e-5 },
      { name: "Maxwell", notation: "Mx", rate: 1e-8 }, // 1 Mx = 1e-8 Wb
    ],
  },

  // ---------- ASTRONOMICAL DISTANCE ----------
  {
    title: "Astronomy",
    data: [
      // --- SI and Metric Units ---
      { name: "Meter", notation: "m", rate: 1 },
      { name: "Kilometer", notation: "km", rate: 1e3 },
      { name: "Megameter", notation: "Mm", rate: 1e6 },
      { name: "Gigameter", notation: "Gm", rate: 1e9 },
      { name: "Terameter", notation: "Tm", rate: 1e12 },
      { name: "Petameter", notation: "Pm", rate: 1e15 },
      { name: "Exameter", notation: "Em", rate: 1e18 },
      { name: "Centimeter", notation: "cm", rate: 1e-2 },

      // --- Imperial / US Customary Units --
      { name: "League (land)", notation: "lea", rate: 4828.032 },

      // --- Astronomical Units ---
      { name: "Astronomical Unit", notation: "AU", rate: 1.495978707e11 },
      { name: "Light-second", notation: "ls", rate: 2.99792458e8 },
      { name: "Light-minute", notation: "lm", rate: 1.798754748e10 },
      { name: "Light-hour", notation: "lh", rate: 1.0792528488e12 },
      { name: "Light-day", notation: "ld", rate: 2.59020683712e13 },
      { name: "Light-week", notation: "lw", rate: 1.813144785984e14 },
      { name: "Light-year", notation: "ly", rate: 9.4607304725808e15 },
      { name: "Parsec", notation: "pc", rate: 3.08567758149137e16 },
      { name: "Kiloparsec", notation: "kpc", rate: 3.08567758149137e19 },
      { name: "Megaparsec", notation: "Mpc", rate: 3.08567758149137e22 },
      { name: "Gigaparsec", notation: "Gpc", rate: 3.08567758149137e25 },

      // --- Planetary and Orbital Distances ---
      { name: "Earth Radius", notation: "R⊕", rate: 6.371e6 },
      { name: "Earth Diameter", notation: "D⊕", rate: 1.2742e7 },
      { name: "Solar Radius", notation: "R☉", rate: 6.957e8 },
      { name: "Solar Diameter", notation: "D☉", rate: 1.3914e9 },
      { name: "Jupiter Radius", notation: "R♃", rate: 6.9911e7 },
      {
        name: "Lunar Distance (Mean Earth–Moon Distance)",
        notation: "LD",
        rate: 3.844e8,
      },
      { name: "Galactic Unit", notation: "GU", rate: 3.085677581e19 }, // ~1 kiloparsec
      { name: "Interstellar Unit", notation: "ISU", rate: 1e16 }, // rough concept

      // --- Cosmic Scale Units ---
      { name: "Hubble Length", notation: "LH", rate: 1.3e26 }, // ~14 billion light-years
      { name: "Comoving Megaparsec", notation: "cMpc", rate: 3.085677581e22 },
      { name: "Cosmic Light-year", notation: "cly", rate: 9.4607304725808e15 },

      // --- Obsolete and Regional Units ---
      { name: "Fathom", notation: "ftm", rate: 1.8288 },
      { name: "Cable length", notation: "cb", rate: 185.2 },
      { name: "Astronomical mile", notation: "AM", rate: 1.495978707e8 }, // ~distance per 1e-3 AU
    ],
  },

  // ---------- DATA STORAGE ----------
  {
    title: "Data storage",
    data: [
      { name: "Bit", notation: "b", rate: 1 },
      { name: "Byte", notation: "B", rate: 8 },
      { name: "Kilobyte", notation: "KB", rate: 8 * 1024 },
      { name: "Megabyte", notation: "MB", rate: 8 * 1024 ** 2 },
      { name: "Gigabyte", notation: "GB", rate: 8 * 1024 ** 3 },
      { name: "Terabyte", notation: "TB", rate: 8 * 1024 ** 4 },
    ],
  },

  // ---------- DATA TRANSFER RATE ----------
  {
    title: "Data transfer",
    data: [
      { name: "Bit per second", notation: "bps", rate: 1 },
      { name: "Kilobit per second", notation: "Kbps", rate: 1e3 },
      { name: "Megabit per second", notation: "Mbps", rate: 1e6 },
      { name: "Gigabit per second", notation: "Gbps", rate: 1e9 },
      { name: "Byte per second", notation: "Bps", rate: 8 },
      { name: "Megabyte per second", notation: "MBps", rate: 8e6 },
    ],
  },

  // ----------- FUEL CONSUMPTION  --------------
  {
    title: "Fuel Consumption",
    data: [
      // --- Base Unit (Metric) ---
      { name: "Liter per 100 Kilometer", notation: "L/100 km", rate: 1 },

      // --- Metric Alternatives ---
      { name: "Kilometer per Liter", notation: "km/L", rate: 100 }, // (100 / value) to get L/100km
      { name: "Liter per Kilometer", notation: "L/km", rate: 100 }, // Equivalent to 100×L/100 km
      { name: "Milliliter per Kilometer", notation: "mL/km", rate: 0.1 }, // 1 mL/km = 0.1 L/100 km

      // --- US Customary Units ---
      { name: "Mile per Gallon (US)", notation: "mpg (US)", rate: 235.214583 },
      { name: "Mile per Gallon (UK)", notation: "mpg (UK)", rate: 282.480936 },
      {
        name: "Gallon (US) per 100 Miles",
        notation: "gal (US)/100 mi",
        rate: 1 / 2.35214583,
      },
      {
        name: "Gallon (UK) per 100 Miles",
        notation: "gal (UK)/100 mi",
        rate: 1 / 2.82480936,
      },

      // --- Alternative Expressions ---
      {
        name: "Kilometer per Gallon (US)",
        notation: "km/gal (US)",
        rate: 0.425143707,
      },
      {
        name: "Kilometer per Gallon (UK)",
        notation: "km/gal (UK)",
        rate: 0.354006189,
      },
      { name: "Mile per Liter", notation: "mi/L", rate: 62.1371192 },

      // --- Large-Scale / Fleet Efficiency ---
      {
        name: "Cubic Meter per 100 Kilometer",
        notation: "m³/100 km",
        rate: 1000,
      },
      {
        name: "Gallon (US) per Mile",
        notation: "gal (US)/mi",
        rate: 235.214583 / 100,
      },
      {
        name: "Gallon (UK) per Mile",
        notation: "gal (UK)/mi",
        rate: 282.480936 / 100,
      },
    ],
  },

  {
    title: "Typography",
    data: [
      // --- Base Unit ---
      { name: "Point", notation: "pt", rate: 1 }, // 1 pt = 1/72 inch

      // --- Subdivisions ---
      { name: "Half Point", notation: "½ pt", rate: 0.5 },
      { name: "Quarter Point", notation: "¼ pt", rate: 0.25 },

      // --- Picas ---
      { name: "Pica", notation: "pc", rate: 12 }, // 1 pica = 12 points
      { name: "Half Pica", notation: "½ pc", rate: 6 },

      // --- Inches & Metric Equivalents ---
      { name: "Inch", notation: "in", rate: 72 }, // 1 inch = 72 points
      { name: "Millimeter", notation: "mm", rate: 72 / 25.4 }, // ≈ 2.83464567 pt per mm
      { name: "Centimeter", notation: "cm", rate: 72 / 2.54 }, // ≈ 28.3464567 pt per cm },
      { name: "Meter", notation: "m", rate: 72 / 0.0254 }, // ≈ 2834.64567 pt per m

      // --- Screen / Digital Units ---
      { name: "Pixel (96 DPI)", notation: "px (96dpi)", rate: 0.75 }, // 1 px = 0.75 pt at 96dpi
      { name: "Pixel (72 DPI)", notation: "px (72dpi)", rate: 1 }, // 1 px = 1 pt at 72dpi
      { name: "Em", notation: "em", rate: "relative" }, // Relative to current font size
      // { name: "Rem", notation: "rem", rate: "relative" }, // Relative to root font size
      // { name: "Ex", notation: "ex", rate: "relative" }, // Relative to x-height of font
      // { name: "Ch", notation: "ch", rate: "relative" }, // Relative to width of “0” glyph

      // --- Traditional / Historical Typographic Units ---
      { name: "Didot Point", notation: "dd", rate: 1.06582677 }, // 1 dd = 0.376 mm = 1.0658 pt
      { name: "Cicero", notation: "cc", rate: 12.78992124 }, // 1 cc = 12 dd = ~4.512 mm
      { name: "American Point (PostScript)", notation: "pt (PS)", rate: 1 }, // 1/72 in standard
      { name: "ATA Point", notation: "pt (ATA)", rate: 0.996264 }, // 1/72.27 in (old TeX system)

      // --- CSS / Web Typography ---
      { name: "CSS Point", notation: "pt (CSS)", rate: 1 }, // same as PostScript point
      { name: "CSS Pixel", notation: "px", rate: 0.75 }, // standardized at 96dpi baseline
      // { name: "Viewport Width", notation: "vw", rate: "relative" }, // 1% of viewport width
      // { name: "Viewport Height", notation: "vh", rate: "relative" }, // 1% of viewport height
      // { name: "Viewport Minimum", notation: "vmin", rate: "relative" },
      // { name: "Viewport Maximum", notation: "vmax", rate: "relative" },

      // --- Printing / Spacing ---
      { name: "Agate Line", notation: "agate", rate: 5.5 }, // 1 agate ≈ 5.5 pt
      { name: "Line (Lead)", notation: "lead", rate: 2 }, // 2pt lead between lines typical
      { name: "Twip", notation: "twip", rate: 1 / 20 }, // 1 twip = 1/20 point = 1/1440 inch
      { name: "Printer's Point (TeX)", notation: "pt (TeX)", rate: 0.996264 }, // TeX uses 72.27/inch

      // --- Large Display Units ---
      { name: "Foot", notation: "ft", rate: 72 * 12 },
    ],
  },

  // Dynamic Viscosity
  {
    title: "Dynamic viscosity",
    data: [
      // --- SI Base Unit ---
      { name: "Pascal-second", notation: "Pa·s", rate: 1 }, // Base SI unit
      { name: "Kilogram per meter-second", notation: "kg/(m·s)", rate: 1 }, // Equivalent to Pa·s

      // --- Submultiples ---
      { name: "Millipascal-second", notation: "mPa·s", rate: 1e-3 },
      { name: "Micropascal-second", notation: "µPa·s", rate: 1e-6 },
      { name: "Nanopascal-second", notation: "nPa·s", rate: 1e-9 },
      { name: "Centipascal-second", notation: "cPa·s", rate: 1e-2 },

      // --- CGS Units ---
      { name: "Poise", notation: "P", rate: 0.1 }, // 1 P = 0.1 Pa·s
      { name: "Centipoise", notation: "cP", rate: 1e-3 }, // 1 cP = 1 mPa·s = 0.001 Pa·s
      { name: "Millipoise", notation: "mP", rate: 1e-4 },
      { name: "Micropoise", notation: "µP", rate: 1e-7 },

      // --- Imperial / US Customary Units ---
      {
        name: "Pound per foot-second",
        notation: "lb/(ft·s)",
        rate: 1.488164e1,
      }, // ≈14.88164 Pa·s
      { name: "Pound per foot-hour", notation: "lb/(ft·h)", rate: 0.00413379 },
      { name: "Slug per foot-second", notation: "slug/(ft·s)", rate: 47.88026 }, // 1 slug/(ft·s) = 47.88026 Pa·s
      {
        name: "Pound-force second per square inch",
        notation: "lbf·s/in²",
        rate: 6894.75729,
      }, // 1 lbf·s/in² = 6894.76 Pa·s
      {
        name: "Pound-force second per square foot",
        notation: "lbf·s/ft²",
        rate: 47.88026,
      }, // = same as slug/(ft·s)
      { name: "Reyn", notation: "reyn", rate: 6894.757 }, // 1 reyn = 6894.757 Pa·s

      // --- Derived & Alternative Expressions ---
      { name: "Newton-second per square meter", notation: "N·s/m²", rate: 1 },
      {
        name: "Dyne-second per square centimeter",
        notation: "dyn·s/cm²",
        rate: 0.1,
      }, // same as Poise
      { name: "Gram per centimeter-second", notation: "g/(cm·s)", rate: 0.1 }, // same as Poise
      { name: "Kilopoise", notation: "kP", rate: 100 },
      { name: "MegaPoise", notation: "MP", rate: 1e5 },

      // --- Common Reference Values ---
      { name: "Water (20°C)", notation: "H₂O@20°C", rate: 1.002e-3 }, // ~1 cP
      { name: "Air (25°C)", notation: "Air@25°C", rate: 1.849e-5 },
      { name: "Honey (approx.)", notation: "Honey", rate: 2.0 }, // ~2 Pa·s

      // --- Historical and Rare Units ---
      {
        name: "Poundal-second per square foot",
        notation: "pdl·s/ft²",
        rate: 1.488164,
      },
      {
        name: "Kilogram-force second per square meter",
        notation: "kgf·s/m²",
        rate: 9.80665,
      },
      {
        name: "Gram-force second per square centimeter",
        notation: "gf·s/cm²",
        rate: 0.0980665,
      },
    ],
  },

  // Kinematic Viscosity
  {
    title: "Kinematic viscosity",
    data: [
      // --- SI Base Unit ---
      { name: "Square meter per second", notation: "m²/s", rate: 1 }, // Base SI unit

      // --- Submultiples ---
      { name: "Square centimeter per second", notation: "cm²/s", rate: 1e-4 },
      { name: "Square millimeter per second", notation: "mm²/s", rate: 1e-6 },
      { name: "Square micrometer per second", notation: "µm²/s", rate: 1e-12 },
      { name: "Square kilometer per second", notation: "km²/s", rate: 1e6 },

      // --- CGS Units ---
      { name: "Stokes", notation: "St", rate: 1e-4 }, // 1 St = 1 cm²/s = 1e-4 m²/s
      { name: "Centistokes", notation: "cSt", rate: 1e-6 }, // 1 cSt = 1 mm²/s = 1e-6 m²/s
      { name: "Millistokes", notation: "mSt", rate: 1e-7 },
      { name: "Microstokes", notation: "µSt", rate: 1e-10 },
      { name: "Kilostokes", notation: "kSt", rate: 1e-1 },

      // --- Imperial / US Customary Units ---
      { name: "Square foot per second", notation: "ft²/s", rate: 0.09290304 },
      { name: "Square inch per second", notation: "in²/s", rate: 6.4516e-4 },
      { name: "Square foot per hour", notation: "ft²/h", rate: 2.58064e-5 },
      { name: "Square inch per minute", notation: "in²/min", rate: 1.07527e-5 },
      { name: "Square foot per minute", notation: "ft²/min", rate: 1.5484e-3 },

      // --- Derived / Alternative Expressions ---
      { name: "Meter squared per second", notation: "m^2/s", rate: 1 }, // Alternative symbol
      {
        name: "Newton-second per square meter per density",
        notation: "(N·s/m²)/ρ",
        rate: 1,
      }, // Conceptual form
      { name: "Centimeter squared per second", notation: "cm^2/s", rate: 1e-4 },
      { name: "Millimeter squared per second", notation: "mm^2/s", rate: 1e-6 },

      // --- Reference Fluids (approximate) ---
      { name: "Water (20°C)", notation: "H₂O@20°C", rate: 1.004e-6 }, // ≈1.004 cSt
      { name: "Air (25°C)", notation: "Air@25°C", rate: 1.5e-5 },
      { name: "Mercury (25°C)", notation: "Hg@25°C", rate: 1.12e-7 },
      { name: "Olive oil (20°C)", notation: "Oil@20°C", rate: 8.4e-5 },

      // --- Practical Engineering Units ---
      {
        name: "Square millimeter per second (equivalent to centistoke)",
        notation: "mm²/s (cSt)",
        rate: 1e-6,
      },
      {
        name: "Square centimeter per second (equivalent to stoke)",
        notation: "cm²/s (St)",
        rate: 1e-4,
      },
      { name: "Square foot per second", notation: "ft²/s", rate: 0.09290304 },
      { name: "Square inch per second", notation: "in²/s", rate: 6.4516e-4 },

      // --- Historical / Rare Units ---
      { name: "Reyn per density", notation: "reyn/ρ", rate: 6.894757e3 }, // Conceptually (Pa·s)/ρ
      {
        name: "Pound per foot-second per density",
        notation: "(lb/(ft·s))/ρ",
        rate: 1.488164e1,
      },
    ],
  },

  // Electric Charge
  {
    title: "Electric Charge",
    data: [
      // --- SI Base Unit ---
      { name: "Coulomb", notation: "C", rate: 1 }, // Base SI unit: 1 C = 1 A·s

      // --- Submultiples ---
      { name: "Millicoulomb", notation: "mC", rate: 1e-3 },
      { name: "Microcoulomb", notation: "µC", rate: 1e-6 },
      { name: "Nanocoulomb", notation: "nC", rate: 1e-9 },
      { name: "Picocoulomb", notation: "pC", rate: 1e-12 },
      { name: "FemtoCoulomb", notation: "fC", rate: 1e-15 },
      { name: "Kilocoulomb", notation: "kC", rate: 1e3 },
      { name: "Megacoulomb", notation: "MC", rate: 1e6 },

      // --- CGS / Gaussian / EMU / ESU Units ---
      {
        name: "Statcoulomb (ESU of charge)",
        notation: "statC",
        rate: 3.33564e-10,
      }, // 1 statC = 3.33564×10⁻¹⁰ C
      { name: "Franklin", notation: "Fr", rate: 3.33564e-10 }, // Equivalent to statC
      { name: "Abcoulomb (EMU of charge)", notation: "abC", rate: 10 }, // 1 abC = 10 C

      // --- Atomic / Fundamental Units ---
      { name: "Elementary charge", notation: "e", rate: 1.602176634e-19 }, // Charge of 1 proton/electron
      { name: "Faraday (chemical charge)", notation: "F", rate: 96485.33212 }, // 1 mol e⁻ = 96485.33212 C
      { name: "Mole of electrons", notation: "mol·e⁻", rate: 96485.33212 },
      {
        name: "Atomic unit of charge",
        notation: "a.u. (charge)",
        rate: 1.602176634e-19,
      },

      // --- Practical / Engineering Units ---
      { name: "Ampere-second", notation: "A·s", rate: 1 },
      { name: "Ampere-hour", notation: "A·h", rate: 3600 },
      { name: "Milliampere-hour", notation: "mA·h", rate: 3.6 },
      { name: "Microampere-hour", notation: "µA·h", rate: 3.6e-3 },
      { name: "Kiloampere-hour", notation: "kA·h", rate: 3.6e6 },

      // --- Alternative Derived Units ---
      {
        name: "Faraday constant (1 mol e⁻)",
        notation: "F/mol",
        rate: 96485.33212,
      },
      { name: "Coulomb per second (Ampere)", notation: "C/s", rate: 1 }, // Conceptual equivalent to current * time

      // --- Historical / Obsolete Units ---
      {
        name: "Jar (old capacitor charge unit)",
        notation: "jar",
        rate: 1.11e-8,
      }, // Historical (based on Leyden jar)
      { name: "ESU charge", notation: "esu", rate: 3.33564e-10 },
      { name: "EMU charge", notation: "emu", rate: 10 },
      { name: "Franklin (Fr)", notation: "Fr", rate: 3.33564e-10 },

      // --- Reference / Conceptual ---
      {
        name: "Charge of one electron",
        notation: "−e",
        rate: -1.602176634e-19,
      },
      { name: "Charge of one proton", notation: "+e", rate: 1.602176634e-19 },
      {
        name: "Charge of one mole of electrons",
        notation: "Nₐ·e",
        rate: 96485.33212,
      },

      // --- Multiples in electrochemistry ---
      { name: "Decacoulomb", notation: "daC", rate: 10 },
      { name: "Hectocoulomb", notation: "hC", rate: 100 },
      { name: "Megacoulomb", notation: "MC", rate: 1e6 },
      { name: "Gigacoulomb", notation: "GC", rate: 1e9 },
    ],
  },

  // Electric Current
  {
    title: "Electric Current",
    data: [
      // --- SI Base Unit ---
      { name: "Ampere", notation: "A", rate: 1 }, // Base SI unit

      // --- Submultiples ---
      { name: "Milliampere", notation: "mA", rate: 1e-3 },
      { name: "Microampere", notation: "µA", rate: 1e-6 },
      { name: "Nanoampere", notation: "nA", rate: 1e-9 },
      { name: "Picoampere", notation: "pA", rate: 1e-12 },
      { name: "Femtoampere", notation: "fA", rate: 1e-15 },
      { name: "Kiloampere", notation: "kA", rate: 1e3 },
      { name: "Megaampere", notation: "MA", rate: 1e6 },
      { name: "Gigaampere", notation: "GA", rate: 1e9 },

      // --- CGS Electromagnetic Units (EMU) ---
      { name: "Abampere", notation: "abA", rate: 10 }, // 1 abA = 10 A
      { name: "Biot", notation: "Bi", rate: 10 }, // 1 Bi = 10 A (same as abampere)

      // --- CGS Electrostatic Units (ESU) ---
      { name: "Statampere", notation: "statA", rate: 3.33564e-10 }, // 1 statA = 3.33564×10⁻¹⁰ A

      // --- Derived / Conceptual Units ---
      { name: "Coulomb per second", notation: "C/s", rate: 1 },
      { name: "Ampere per square meter", notation: "A/m²", rate: 1 }, // Current density concept
      { name: "Ampere-turn", notation: "A·turn", rate: 1 }, // Magnetic field winding measure
      { name: "Ampere per meter", notation: "A/m", rate: 1 }, // Magnetic field strength (H)
      {
        name: "Statcoulomb per second",
        notation: "statC/s",
        rate: 3.33564e-10,
      },

      // --- Electrical and Plasma Physics Units ---
      {
        name: "Elementary charges per second",
        notation: "e/s",
        rate: 1.602176634e-19,
      },
      { name: "Faraday per second", notation: "F/s", rate: 96485.33212 },
      { name: "Planck current", notation: "I_P", rate: 3.4789e25 }, // Theoretical natural unit of current

      // --- Engineering / Application Units ---
      { name: "Ampere RMS", notation: "A_rms", rate: 1 }, // Used for AC circuits
      { name: "Peak Ampere", notation: "A_peak", rate: 1.4142 }, // For sinusoidal current
      { name: "Ampere-hour per second", notation: "A·h/s", rate: 3600 },
      { name: "Coulomb per second", notation: "C/s", rate: 1 },

      // --- Historical / Obsolete Units ---
      { name: "Millistatampere", notation: "mstatA", rate: 3.33564e-13 },
      { name: "Statampere (CGS esu)", notation: "esu·s⁻¹", rate: 3.33564e-10 },
      { name: "Ampère (old French spelling)", notation: "amp", rate: 1 },
      { name: "Biot", notation: "Bi", rate: 10 },

      // --- Practical / Laboratory Reference Values ---
      {
        name: "Current of 1 electron per second",
        notation: "e/s",
        rate: 1.602176634e-19,
      },
      { name: "Microampere-hour per second", notation: "µA·h/s", rate: 3.6e-3 },
      { name: "Milliampere-hour per second", notation: "mA·h/s", rate: 3.6 },

      // --- Additional Multiples ---
      { name: "Deciampere", notation: "dA", rate: 0.1 },
      { name: "Decaampere", notation: "daA", rate: 10 },
      { name: "Hectoampere", notation: "hA", rate: 100 },
      { name: "Teraampere", notation: "TA", rate: 1e12 },
      { name: "Petaampere", notation: "PA", rate: 1e15 },
    ],
  },

  // Electric Resistance
  {
    title: "Electrical Resistance",
    data: [
      // --- SI Base Unit ---
      { name: "Ohm", notation: "Ω", rate: 1 }, // Base SI unit: 1 Ω = 1 V/A

      // --- Submultiples ---
      { name: "Milliohm", notation: "mΩ", rate: 1e-3 },
      { name: "Microohm", notation: "µΩ", rate: 1e-6 },
      { name: "Nanoohm", notation: "nΩ", rate: 1e-9 },
      { name: "Picoohm", notation: "pΩ", rate: 1e-12 },
      { name: "Femtoohm", notation: "fΩ", rate: 1e-15 },
      { name: "Kiloohm", notation: "kΩ", rate: 1e3 },
      { name: "Megaohm", notation: "MΩ", rate: 1e6 },
      { name: "Gigaohm", notation: "GΩ", rate: 1e9 },
      { name: "Teraohm", notation: "TΩ", rate: 1e12 },
      { name: "Petaohm", notation: "PΩ", rate: 1e15 },

      // --- Derived / Equivalent Expressions ---
      { name: "Volt per Ampere", notation: "V/A", rate: 1 },
      { name: "Joule-second per Coulomb squared", notation: "J·s/C²", rate: 1 },
      { name: "Weber per Coulomb per second", notation: "Wb/(C·s)", rate: 1 },

      // --- CGS (EMU / ESU) Units ---
      { name: "Abohm (EMU of resistance)", notation: "abΩ", rate: 1e-9 }, // 1 abΩ = 10⁻⁹ Ω
      {
        name: "Statohm (ESU of resistance)",
        notation: "statΩ",
        rate: 8.98755e11,
      }, // 1 statΩ ≈ 8.98755×10¹¹ Ω

      // --- Practical / Engineering Units ---
      { name: "Ohm per meter", notation: "Ω/m", rate: 1 }, // Resistivity per unit length
      { name: "Ohm per square", notation: "Ω/□", rate: 1 }, // Sheet resistance
      { name: "Megaohm per meter", notation: "MΩ/m", rate: 1e6 },
      { name: "Kiloohm per meter", notation: "kΩ/m", rate: 1e3 },

      // --- Reference / Common Nominal Values ---
      { name: "Resistor 1/4W (10Ω)", notation: "10Ω", rate: 10 },
      { name: "Resistor 1kΩ", notation: "1kΩ", rate: 1e3 },
      { name: "Resistor 10kΩ", notation: "10kΩ", rate: 1e4 },
      { name: "Resistor 1MΩ", notation: "1MΩ", rate: 1e6 },

      // --- Material-based Units ---
      { name: "Ohm-meter (Resistivity)", notation: "Ω·m", rate: 1 },
      { name: "Microohm-centimeter", notation: "µΩ·cm", rate: 1e-8 },
      { name: "Ohm-centimeter", notation: "Ω·cm", rate: 0.01 },
      { name: "Ohm-inch", notation: "Ω·in", rate: 0.0254 },
      { name: "Microohm-meter", notation: "µΩ·m", rate: 1e-6 },
      { name: "Nanoohm-meter", notation: "nΩ·m", rate: 1e-9 },

      // --- Derived / Related Concepts ---
      { name: "Siemens inverse", notation: "1/S", rate: 1 }, // 1 Ω = 1 / S (reciprocal of conductance)
      { name: "Mho", notation: "℧", rate: 1 }, // Obsolete symbol for 1/Ω
      { name: "Reciprocal Siemens", notation: "S⁻¹", rate: 1 },

      // --- Historical / Obsolete Units ---
      { name: "Abohm", notation: "abΩ", rate: 1e-9 },
      { name: "Statohm", notation: "statΩ", rate: 8.98755e11 },
      { name: "Siemens (reciprocal of Ohm)", notation: "S", rate: 1 },
      { name: "Mho (obsolete reciprocal symbol)", notation: "℧", rate: 1 },
      {
        name: "International Ohm (1881 standard)",
        notation: "Ω_int",
        rate: 1.00049,
      },
      { name: "Legal Ohm (1908)", notation: "Ω_legal", rate: 1.00049 },
      { name: "Practical Ohm (1860s)", notation: "Ω_practical", rate: 1.011 },

      // --- High-Resistance and Low-Resistance Units ---
      { name: "Millisiemens inverse", notation: "mS⁻¹", rate: 1e3 },
      { name: "Microsiemens inverse", notation: "µS⁻¹", rate: 1e6 },
      { name: "Kilosiemens inverse", notation: "kS⁻¹", rate: 1e-3 },

      // --- Theoretical / Natural Units ---
      { name: "Planck resistance", notation: "R_P", rate: 29.9792458e3 }, // ~29.98 kΩ
      { name: "Quantum of resistance", notation: "R_K", rate: 25812.80745 }, // Von Klitzing constant
      {
        name: "Half quantum of resistance",
        notation: "R_K/2",
        rate: 12906.403725,
      },
      {
        name: "Triple quantum of resistance",
        notation: "R_K/3",
        rate: 8604.26915,
      },

      // --- Derived Electromagnetic Forms ---
      { name: "Vacuum impedance", notation: "Z₀", rate: 376.730313668 }, // 1/(c·ε₀) ≈ 376.73 Ω
      { name: "Ohm per square (Sheet resistance)", notation: "Ω/□", rate: 1 },
    ],
  },

  // Electric Capacitance
  {
    title: "Electric Capacitance",
    data: [
      // --- SI Base Unit ---
      { name: "Farad", notation: "F", rate: 1 }, // Base SI unit: 1 F = 1 C/V

      // --- Submultiples ---
      { name: "Millifarad", notation: "mF", rate: 1e-3 },
      { name: "Microfarad", notation: "µF", rate: 1e-6 },
      { name: "Nanofarad", notation: "nF", rate: 1e-9 },
      { name: "Picofarad", notation: "pF", rate: 1e-12 },
      { name: "Femtofarad", notation: "fF", rate: 1e-15 },
      { name: "Attofarad", notation: "aF", rate: 1e-18 },
      { name: "Kilofarad", notation: "kF", rate: 1e3 },
      { name: "Megafarad", notation: "MF", rate: 1e6 },
      { name: "Gigafarad", notation: "GF", rate: 1e9 },

      // --- Derived / Equivalent Forms ---
      { name: "Coulomb per Volt", notation: "C/V", rate: 1 },
      { name: "Ampere-second per Volt", notation: "A·s/V", rate: 1 },
      { name: "Second per Ohm", notation: "s/Ω", rate: 1 }, // since 1 F = 1 s/Ω
      { name: "Coulomb per Joule per Volt", notation: "C/(J/V)", rate: 1 },

      // --- CGS Units ---
      {
        name: "Statfarad (ESU of capacitance)",
        notation: "statF",
        rate: 1.11265e-12,
      }, // 1 statF = 1.11265×10⁻¹² F
      { name: "Abfarad (EMU of capacitance)", notation: "abF", rate: 1e9 }, // 1 abF = 10⁹ F
      {
        name: "Centimeter (Gaussian CGS unit)",
        notation: "cm",
        rate: 1.11265e-12,
      }, // 1 cm capacitance = 1.11265×10⁻¹² F

      // --- Practical / Engineering Units ---
      { name: "Microfarad per volt", notation: "µF/V", rate: 1e-6 },
      { name: "Farad per meter", notation: "F/m", rate: 1 }, // permittivity concept
      { name: "Microfarad per meter", notation: "µF/m", rate: 1e-6 },
      { name: "Nanofarad per meter", notation: "nF/m", rate: 1e-9 },
      { name: "Farad per square meter", notation: "F/m²", rate: 1 }, // for areal capacitance
      {
        name: "Microfarad per square centimeter",
        notation: "µF/cm²",
        rate: 1e-2,
      },

      // --- Common Engineering Values ---
      {
        name: "1 µF (common electrolytic capacitor)",
        notation: "1µF",
        rate: 1e-6,
      },
      { name: "100 nF (decoupling capacitor)", notation: "100nF", rate: 1e-7 },
      { name: "10 pF (RF capacitor)", notation: "10pF", rate: 1e-11 },
      { name: "1 F (supercapacitor)", notation: "1F", rate: 1 },

      // --- Theoretical / Natural Units ---
      { name: "Planck capacitance", notation: "C_P", rate: 1.8755459e-18 },
      {
        name: "Vacuum permittivity equivalent (per meter)",
        notation: "ε₀/m",
        rate: 8.8541878128e-12,
      },
      {
        name: "Atomic unit of capacitance",
        notation: "a.u. (capacitance)",
        rate: 1.648777274e-41,
      },
      { name: "Electrostatic unit (ESU)", notation: "esu", rate: 1.11265e-12 },

      // --- Historical / Obsolete Units ---
      { name: "Jar (Leyden jar)", notation: "jar", rate: 1.11e-8 }, // early unit (~1.11×10⁻⁸ F)
      {
        name: "Micro-microfarad (old term for pF)",
        notation: "mmf",
        rate: 1e-12,
      },
      {
        name: "Centimeter of capacitance",
        notation: "cm (CGS)",
        rate: 1.11265e-12,
      },
      { name: "Abohm-second", notation: "abΩ·s", rate: 1e9 },
      { name: "Statohm-second", notation: "statΩ·s", rate: 8.98755e11 },

      // --- Derived / Relationship Units ---
      { name: "Farad per volt", notation: "F/V", rate: 1 },
      { name: "Farad per coulomb", notation: "F/C", rate: 1 },
      { name: "Second per ohm", notation: "s/Ω", rate: 1 },
      { name: "Henry inverse", notation: "1/H", rate: 1 }, // reciprocal of inductance
      { name: "Ampere-second per volt", notation: "A·s/V", rate: 1 },
    ],
  },
];

// Hyperbolic Functions
export const hyperbolic = [
  // Primary hyperbolic functions
  { title: "Sinh(value)", subtitle: "Hyperbolic sine", value: "\\sinh()" },
  { title: "Cosh(value)", subtitle: "Hyperbolic cosine", value: "\\cosh()" },
  { title: "Tanh(value)", subtitle: "Hyperbolic tangent", value: "\\tanh()" },
  { title: "Coth(value)", subtitle: "Hyperbolic cotangent", value: "\\coth()" },
  { title: "Sech(value)", subtitle: "Hyperbolic secant", value: "\\sech()" },
  { title: "Csch(value)", subtitle: "Hyperbolic cosecant", value: "\\csch()" },

  // Inverse hyperbolic (area hyperbolic) functions
  {
    title: "Arcsinh(value)",
    subtitle: "Inverse hyperbolic sine",
    value: "\\sinh^{-1}()",
  },
  {
    title: "Arccosh(value)",
    subtitle: "Inverse hyperbolic cosine",
    value: "\\cosh^{-1}()",
  },
  {
    title: "Arctanh(value)",
    subtitle: "Inverse hyperbolic tangent",
    value: "\\tanh^{-1}()",
  },
  {
    title: "Arccoth(value)",
    subtitle: "Inverse hyperbolic cotangent",
    value: "\\coth^{-1}()",
  },
  {
    title: "Arcsech(value)",
    subtitle: "Inverse hyperbolic secant",
    value: "\\sech^{-1}()",
  },
  {
    title: "Arccsch(value)",
    subtitle: "Inverse hyperbolic cosecant",
    value: "\\csch^{-1}()",
  },
];
