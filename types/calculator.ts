export interface Option {
  label: string;
  value: string;
  price?: number;
  multiplier?: number;
  tooltip?: string;
  branches?: Step[];
}

export interface OptionInput {
  label: string;
  key: string;
  unitPrice: number;
  tooltip?: string;
}

export interface Step {
  title: string;
  tooltip?: string;
  options: Option[];
  type?: 'single' | 'multi';
  required?: boolean;
  branches?: Record<string, Step[]>;
  metaBranchParent?: string;
  input?: OptionInput;
}
