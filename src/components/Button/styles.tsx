import { theme } from "../../styles/theme";
import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${theme.background};
  border: none;
  padding: 12px 0 !important;
  color: #FFF;
  width: 200px;
  height: min-content;
  border-radius: 15px;
  box-shadow: ${theme.boxShadow};
  margin: 20px;
  cursor: pointer;

  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 750px) {
    font-size: 16px;
  }
`