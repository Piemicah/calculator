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
    label: "1.67262189821 × 10^-27",
    value: "1.67262189821e-27",
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
        title: "Fuel Comsumption",
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
        title: "Flow rate",
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
        title: "Electric charge",
        subtitle: "Coulomb, Ampere-hour, Faraday",
        img: images.electric_charge,
      },
      {
        title: "Electric current",
        subtitle: "Ampere, Milliampere, Microampere",
        img: images.electric_current,
      },
      {
        title: "Electrical resistance",
        subtitle: "Ohm, Volt per ampere",
        img: images.electric_resistance,
      },
      {
        title: "Electric capacitance",
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
    ],
  },

  // ---------- AREA ----------
  {
    title: "Area",
    data: [
      { name: "Square Kilometer", notation: "km²", rate: 1e6 },
      { name: "Square Meter", notation: "m²", rate: 1 },
      { name: "Square Centimeter", notation: "cm²", rate: 1e-4 },
      { name: "Square Millimeter", notation: "mm²", rate: 1e-6 },
      { name: "Hectare", notation: "ha", rate: 10000 },
    ],
  },

  // ---------- VOLUME ----------
  {
    title: "Volume",
    data: [
      { name: "Cubic Meter", notation: "m³", rate: 1 },
      { name: "Cubic Decimeter", notation: "dm³", rate: 1e-3 },
      { name: "Cubic Centimeter", notation: "cm³", rate: 1e-6 },
      { name: "Cubic Millimeter", notation: "mm³", rate: 1e-9 },
      { name: "Liter", notation: "L", rate: 0.001 },
      { name: "Deciliter", notation: "dL", rate: 0.0001 },
      { name: "Centiliter", notation: "cL", rate: 0.00001 },
      { name: "Milliliter", notation: "mL", rate: 1e-6 },
    ],
  },

  // ---------- TIME ----------
  {
    title: "Time",
    data: [
      { name: "Day", notation: "d", rate: 86400 },
      { name: "Hour", notation: "h", rate: 3600 },
      { name: "Minute", notation: "min", rate: 60 },
      { name: "Second", notation: "s", rate: 1 },
      { name: "Millisecond", notation: "ms", rate: 1e-3 },
      { name: "Microsecond", notation: "µs", rate: 1e-6 },
      { name: "Nanosecond", notation: "ns", rate: 1e-9 },
    ],
  },

  // ---------- PRESSURE ----------
  {
    title: "Pressure",
    data: [
      { name: "Pascal", notation: "Pa", rate: 1 },
      { name: "Kilopascal", notation: "kPa", rate: 1000 },
      { name: "Bar", notation: "bar", rate: 1e5 },
      { name: "Atmosphere", notation: "atm", rate: 101325 },
      { name: "Torr", notation: "torr", rate: 133.322 },
      { name: "PSI", notation: "psi", rate: 6894.76 },
    ],
  },

  // ---------- WEIGHT (MASS) ----------
  {
    title: "Weight",
    data: [
      { name: "Tonne", notation: "t", rate: 1000 },
      { name: "Kilogram", notation: "kg", rate: 1 },
      { name: "Gram", notation: "g", rate: 0.001 },
      { name: "Milligram", notation: "mg", rate: 1e-6 },
      { name: "Microgram", notation: "µg", rate: 1e-9 },
      { name: "Pound", notation: "lb", rate: 0.45359237 },
      { name: "Ounce", notation: "oz", rate: 0.0283495 },
    ],
  },

  // ---------- FORCE ----------
  {
    title: "Force",
    data: [
      { name: "Newton", notation: "N", rate: 1 },
      { name: "Kilonewton", notation: "kN", rate: 1000 },
      { name: "Dyne", notation: "dyn", rate: 1e-5 },
      { name: "Pound-force", notation: "lbf", rate: 4.44822 },
    ],
  },

  // ---------- TORQUE ----------
  {
    title: "Torque",
    data: [
      { name: "Newton meter", notation: "N·m", rate: 1 },
      { name: "Kilonewton meter", notation: "kN·m", rate: 1000 },
      { name: "Pound-foot", notation: "lb·ft", rate: 1.35582 },
      { name: "Pound-inch", notation: "lb·in", rate: 0.112985 },
    ],
  },

  // ---------- SPEED ----------
  {
    title: "Speed",
    data: [
      { name: "Meter per second", notation: "m/s", rate: 1 },
      { name: "Kilometer per hour", notation: "km/h", rate: 0.277778 },
      { name: "Mile per hour", notation: "mph", rate: 0.44704 },
      { name: "Knot", notation: "kn", rate: 0.514444 },
    ],
  },

  // ---------- ACCELERATION ----------
  {
    title: "Acceleration",
    data: [
      { name: "Meter per second squared", notation: "m/s²", rate: 1 },
      { name: "Gal", notation: "Gal", rate: 0.01 },
      { name: "Foot per second squared", notation: "ft/s²", rate: 0.3048 },
    ],
  },

  // ---------- ANGULAR SPEED ----------
  {
    title: "Angular speed",
    data: [
      { name: "Radian per second", notation: "rad/s", rate: 1 },
      { name: "Degree per second", notation: "°/s", rate: Math.PI / 180 },
      {
        name: "Revolution per minute",
        notation: "rpm",
        rate: (2 * Math.PI) / 60,
      },
    ],
  },

  // ---------- FLOW RATE ----------
  {
    title: "Flow Rate",
    data: [
      { name: "Cubic meter per second", notation: "m³/s", rate: 1 },
      { name: "Liter per second", notation: "L/s", rate: 0.001 },
      { name: "Liter per minute", notation: "L/min", rate: 0.001 / 60 },
      { name: "Gallon per minute", notation: "GPM", rate: 0.00378541 / 60 },
    ],
  },

  // ---------- FREQUENCY ----------
  {
    title: "Frequency",
    data: [
      { name: "Hertz", notation: "Hz", rate: 1 },
      { name: "Kilohertz", notation: "kHz", rate: 1000 },
      { name: "Megahertz", notation: "MHz", rate: 1e6 },
      { name: "Gigahertz", notation: "GHz", rate: 1e9 },
    ],
  },

  // ---------- DENSITY ----------
  {
    title: "Density",
    data: [
      { name: "Kilogram per cubic meter", notation: "kg/m³", rate: 1 },
      { name: "Gram per cubic centimeter", notation: "g/cm³", rate: 1000 },
      { name: "Gram per liter", notation: "g/L", rate: 1 },
      { name: "Pound per cubic foot", notation: "lb/ft³", rate: 16.0185 },
      { name: "Pound per cubic inch", notation: "lb/in³", rate: 27679.9 },
    ],
  },

  // ---------- ENERGY ----------
  {
    title: "Energy",
    data: [
      { name: "Joule", notation: "J", rate: 1 },
      { name: "Kilojoule", notation: "kJ", rate: 1000 },
      { name: "Calorie", notation: "cal", rate: 4.184 },
      { name: "Kilocalorie", notation: "kcal", rate: 4184 },
      { name: "Watt-hour", notation: "Wh", rate: 3600 },
      { name: "Kilowatt-hour", notation: "kWh", rate: 3.6e6 },
      { name: "Electronvolt", notation: "eV", rate: 1.602176634e-19 },
      { name: "British thermal unit", notation: "BTU", rate: 1055.06 },
    ],
  },

  // ---------- POWER ----------
  {
    title: "Power",
    data: [
      { name: "Watt", notation: "W", rate: 1 },
      { name: "Kilowatt", notation: "kW", rate: 1000 },
      { name: "Megawatt", notation: "MW", rate: 1e6 },
      { name: "Horsepower", notation: "hp", rate: 745.7 },
      { name: "BTU per hour", notation: "BTU/h", rate: 0.293071 },
    ],
  },

  // ---------- TEMPERATURE ----------
  // {
  //   title: "Temperature",
  //   data: [
  //     {
  //       name: "Celsius",
  //       notation: "°C",
  //       toBase: (v: number) => v + 273.15,
  //       fromBase: (v: number) => v - 273.15,
  //     },
  //     {
  //       name: "Kelvin",
  //       notation: "K",
  //       toBase: (v: number) => v,
  //       fromBase: (v: number) => v,
  //     },
  //     {
  //       name: "Fahrenheit",
  //       notation: "°F",
  //       toBase: (v: number) => ((v - 32) * 5) / 9 + 273.15,
  //       fromBase: (v: number) => ((v - 273.15) * 9) / 5 + 32,
  //     },
  //     {
  //       name: "Rankine",
  //       notation: "°R",
  //       toBase: (v: number) => (v * 5) / 9,
  //       fromBase: (v: number) => (v * 9) / 5,
  //     },
  //   ],
  // },

  // ---------- ANGLE ----------
  {
    title: "Angle",
    data: [
      { name: "Radian", notation: "rad", rate: 1 },
      { name: "Degree", notation: "°", rate: Math.PI / 180 },
      { name: "Gradian", notation: "gon", rate: Math.PI / 200 },
      { name: "Arcminute", notation: "′", rate: Math.PI / 10800 },
      { name: "Arcsecond", notation: "″", rate: Math.PI / 648000 },
    ],
  },

  // ---------- LUMINANCE ----------
  {
    title: "Luminance",
    data: [
      { name: "Candela per square meter", notation: "cd/m²", rate: 1 },
      { name: "Nit", notation: "nit", rate: 1 },
      { name: "Foot-lambert", notation: "fL", rate: 3.4262591 },
    ],
  },

  // ---------- ILLUMINANCE ----------
  {
    title: "Illuminance",
    data: [
      { name: "Lux", notation: "lx", rate: 1 },
      { name: "Phot", notation: "ph", rate: 10000 },
      { name: "Foot-candle", notation: "fc", rate: 10.7639 },
    ],
  },

  // ---------- RADIATION ----------
  {
    title: "Radiation",
    data: [
      { name: "Gray", notation: "Gy", rate: 1 },
      { name: "Rad", notation: "rad", rate: 0.01 },
      { name: "Sievert", notation: "Sv", rate: 1 },
      { name: "Rem", notation: "rem", rate: 0.01 },
    ],
  },

  // ---------- RADIOACTIVITY ----------
  {
    title: "Radioactivity",
    data: [
      { name: "Becquerel", notation: "Bq", rate: 1 },
      { name: "Curie", notation: "Ci", rate: 3.7e10 },
      { name: "Rutherford", notation: "Rd", rate: 1e6 },
    ],
  },

  // ---------- MAGNETIC FIELD ----------
  {
    title: "Magnetic field",
    data: [
      { name: "Tesla", notation: "T", rate: 1 },
      { name: "Gauss", notation: "G", rate: 1e-4 },
    ],
  },

  // ---------- ASTRONOMICAL DISTANCE ----------
  {
    title: "Astronomy",
    data: [
      { name: "Meter", notation: "m", rate: 1 },
      { name: "Kilometer", notation: "km", rate: 1000 },
      { name: "Astronomical Unit", notation: "AU", rate: 1.495978707e11 },
      { name: "Light Year", notation: "ly", rate: 9.4607e15 },
      { name: "Parsec", notation: "pc", rate: 3.0857e16 },
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
];
