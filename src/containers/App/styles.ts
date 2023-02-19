import styled from "styled-components";
import background from "assets/images/background.jpg";

export const App = styled.div`
  background: url(${background}) center no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const Stopwatch = styled.span`
  color: ${(props) => props.theme.colors.white};
  position: absolute;
  left: 32px;
  bottom: 16px;
  font-size: 34px;
  font-weight: 700;
`;
