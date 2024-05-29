import { FieldError } from 'react-hook-form';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  forwardRef,
  Input,
  InputGroup,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';

export interface InputProps extends ChakraInputProps {
  label?: string | JSX.Element;
  errors: FieldError | undefined;
}

export const ChakraInput = forwardRef<InputProps, 'input'>((props, ref) => {
  const {
    label,
    errors,
    ...rest
  } = props;

  return (
    <FormControl isInvalid={Boolean(errors)}>
      {label && <FormLabel>{label}</FormLabel>}
      <InputGroup>
        <Input {...rest} ref={ref}/>
      </InputGroup>
      <FormErrorMessage>{errors?.message}</FormErrorMessage>
    </FormControl>
  );
});
