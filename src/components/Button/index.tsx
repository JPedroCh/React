import { StyledButton } from "./styles";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: 'button' | 'reset' | 'submit';
}

const Button = ({ text, onClick, type = 'button' }: ButtonProps) => {

  return (
    <StyledButton onClick={onClick} type={type}>
      {text}
    </StyledButton>
  )
}

export default Button;