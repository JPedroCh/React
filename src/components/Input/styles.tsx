import styled from "styled-components";

export const Title = styled.h1`
  color: black;
`;

export const StyledInput =  styled.input`
  width: 100%;
  color: #061A40;
  font-size: 24px;
  font-weight: 400;
  line-height: normal;
  outline: none;
  border: 1px solid black;
  border-radius: 10px;
  padding: 8px;
  
  @media (max-width: 750px) {
    padding: 6px;
    font-size: 18px;
  }
`;

export const StyledLabel = styled.label`
  display: block;
  font-size: 20px;
  margin-bottom: 0.5rem;

  @media (max-width: 750px) {
    font-size: 16px;
    margin-bottom: 0.3rem;
  }
`;

export const InvalidMessage  = styled.span`
  display: block;
  color: red;
`;