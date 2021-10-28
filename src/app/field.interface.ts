export interface Validator {
  name: string;
  validator: any;
  message: string;
}
export interface FieldConfig {
  label?: string;
  name?: string;
  inputType?: string;
  options?: string[];
  collections?: any;
  type: string;
  value?: any;
  validations?: Validator[];
}

export interface Questions {
  linkId?: string;
  text?: string;
  type?: string;
  name?: string;
  option?: ChoiceOptions[];
}

export interface ChoiceOptions {
  valueCoding?: valueCoder;
}

export interface valueCoder {
  system?:string;
  code?: string;
  display?: string;
}
