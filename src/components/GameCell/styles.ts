import styled from "styled-components";
import { StyledProps } from "styled/styled";

export const GameCell = styled.button<StyledProps>`
  background: ${(props) => props.theme.colors.white};
  width: 90px;
  height: 90px;
  border: 1px solid ${(props) => props.theme.colors.black};
  user-select: none;
  padding: 0;
  &:hover {
    transform: scale(1.1);
    transition: 300ms transform;
    border: 1px solid ${(props) => props.theme.colors.black} !important;
    position: relative;
    z-index: 100;
  }
  &:active {
    background: #f0f0f0;
  }
`;

export const GameCellInner = styled.div<StyledProps>`
  background: ${(props) => props.theme.colors.white};
  width: 100%;
  height: 100%;
  border: 3px solid transparent;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.color === "red" && `border-color: ${props.theme.colors.figures.red};`}
  ${(props) =>
    props.color === "blue" &&
    `border-color: ${props.theme.colors.figures.blue};`}
    ${(props) =>
    props.color === "green" &&
    `border-color: ${props.theme.colors.figures.green};`}
    ${(props) =>
    props.color === "yellow" &&
    `border-color: ${props.theme.colors.figures.yellow};`};
`;

export const GameCellNumber = styled.span`
  position: absolute;
  left: 0;
  bottom: 0;
`;
