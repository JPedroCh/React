import { theme } from "../../styles/theme";
import styled from "styled-components";

export const Card = styled.div`
  background-color: white;
  box-shadow: ${theme.boxShadow};
  display: flex;
  justify-content: center;
  border-radius: 15px;
  padding: 20px;
  flex-direction: column;
  height: 100%;
  margin: 15px;
  cursor: pointer;

  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.01);
  }
`;

export const Title = styled.h1`
  color: black;
`;

export const Image = styled.img`
  height: 300px; 
  width: 350px;
  padding: 20px;
`;

