export type InputType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';

export interface InputProps {
  label: string;
  type: InputType;
  id: string;
  value: string;
  required?: boolean;
}