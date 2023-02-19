import styled from "styled-components";
import { StyledProps } from "styled/styled";

export const Button = styled.button<StyledProps>`
  background: ${(props) => props.theme.colors.main};
  font-size: 26px;
  font-weight: 500;
  max-width: 304px;
  width: 100%;
  height: 64px;
  border-radius: 20px;
  border: 0;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: 200ms;
  user-select: none;
  ${(props) =>
    props.small &&
    `
    height: 40px;
    font-size: 15px;
    font-weight: 700;
    border-radius: 10px;
    padding: 0 10px;
    width: auto

  `}
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`;
