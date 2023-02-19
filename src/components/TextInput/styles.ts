import styled from "styled-components";
import iconSend from "assets/images/send-icon.svg";

export const TextInput = styled.div`
  background: ${(props) => props.theme.colors.figures.gray};
  height: 40px;
  border-radius: 10px;
  display: flex;
`;

export const TextInputField = styled.input`
  padding: 0 12px;
  height: 100%;
  flex: 1;
  background: transparent;
  border: 0;
`;

export const TextInputButton = styled.button`
  background: url(${iconSend}) transparent center no-repeat;
  width: 40px;
  border: 0;
  cursor: pointer;
  background-size: 25px;
  padding: 0;
  &:hover {
    border-radius: 10px;
    background-color: #ccc;
  }
`;
