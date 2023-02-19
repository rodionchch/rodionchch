import styled from "styled-components";
import { StyledProps } from "styled/styled";

export const Input = styled.input<StyledProps>`
  background: ${(props) => props.theme.colors.figures.gray};
  border: 2px solid transparent;
  width: 338px;
  height: 42px;
  padding: 0 10px;
  font-size: 25px;
  &:focus {
    border-color: ${(props) => props.theme.colors.main};
  }
  &::placeholder {
    color: ${(props) => props.theme.colors.black};
  }
  ${(props) =>
    props.error && `border-color: ${props.theme.colors.error} !important;`}
`;
