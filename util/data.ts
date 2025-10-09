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
  { label: "in►cm", value: "2.54" },
  { label: "cm►in", value: "0.3937007874" },
  { label: "ft►m", value: "0.3048" },
  { label: "m►ft", value: "3.28083989501" },
];
