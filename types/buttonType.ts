export type ButtonType = {
  label: string;
  cap1?: string;
  cap2?: string;
  mid?: string;
  fxn?: (label: string) => void;
};
