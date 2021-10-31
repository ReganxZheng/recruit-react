export interface RegistionFormProps {
  onSubmit: (values: FormikValues) => void;
}

export interface RegistionFormWrapperProps {
  shouldDisplay: boolean;
}

export interface FieldInputProps {
  onChange: (val: string) => void;
}

export interface FormikValues {
  creditCard: string;
  cvcNumber: string;
  expireDate: string;
}
