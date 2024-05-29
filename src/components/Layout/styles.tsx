import { theme } from "../../styles/theme";
import styled from "styled-components";

export const Background = styled.div`
  background: ${theme.gradient};
  height: 100%;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  padding: 40px;
  flex-direction: row;
  justify-content: center;
  font-family: ${theme.fontFamily};
  flex-wrap: wrap;
`;
