import styled from "styled-components";

export const AllFigures = styled.div`
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: -2px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
`;

export const AllFiguresPopup = styled.div`
  background: ${(props) => props.theme.colors.white};
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.8);
  width: 600px;
  height: 500px;
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const AllFiguresItem = styled.div`
  background: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.black};
  height: 100px;
  width: 100px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    transform: scale(1.1);
    transition: 300ms transform;
  }
  &:active {
    background: #f0f0f0;
  }
`;
