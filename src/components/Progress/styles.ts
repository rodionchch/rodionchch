import styled from "styled-components";
import { StyledProps } from "styled/styled";

export const Progress = styled.div`
  max-width: 830px;
  height: 492px;
  background: ${(props) => props.theme.colors.white};
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
  overflow: hidden;
`;

export const ProgressFigure = styled.div`
  flex: 1 0 8%;
  height: 41px;
  width: 69px;
  border: 1px solid #c0c0c0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProgressFigureInner = styled.div<StyledProps>`
  transform: scale(0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: 300ms;
  ${(props) => props.show && `opacity: 1;`}
`;
