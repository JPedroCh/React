import React, { HTMLInputTypeAttribute } from 'react';
import { InvalidMessage, StyledInput, StyledLabel } from './styles';

interface InputProps {
  label?: string;
  value: string;
  name: string;
  validation?: {
    isInvalid: boolean;
    message?: string;
  };
  placeholder: string;
  type: HTMLInputTypeAttribute;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ 
  label, 
  value = "", 
  name, 
  placeholder = "", 
  onChange, 
  type = "text",
  validation = { isInvalid: false }
}) => {
  return (
    <div>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledInput
        value={value}
        name={name}
        type={type}
        style={validation.isInvalid ? { border: '1px solid red'} : {}}
        placeholder={placeholder}
        onChange={onChange}
      />
      {validation.isInvalid && validation.message && <InvalidMessage>{validation.message}</InvalidMessage>}
    </div>
  )
};

export default Input;