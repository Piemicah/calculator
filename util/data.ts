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
        img: images.electric_resistance,
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
