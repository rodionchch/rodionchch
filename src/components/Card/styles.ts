import styled from "styled-components";

export const Card = styled.div`
  width: 980px;
  height: 560px;
  background: ${(props) => props.theme.colors.secondary};
  border-radius: 32px;
  padding: 50px 60px 50px 80px;
  display: flex;
  flex-direction: column;
`;

export const CardHeader = styled.div`
  margin-bottom: 68px;
`;

export const CardInner = styled.div`
  display: flex;
`;

export const CardTitle = styled.h3`
  text-transform: uppercase;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 25px;
`;

export const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 50%;
  position: relative;
  &:first-child {
    flex: 1 0 calc(50% - 20px);
    &:before {
      content: "";
      background: ${(props) => props.theme.colors.black};
      width: 1px;
      height: 376px;
      position: absolute;
      right: -8px;
      top: -22px;
    }
  }

  &:last-child {
    margin-left: 42px;
  }
`;

export const CardItemRow = styled.div`
  margin-bottom: 50px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const CardItemRowInput = styled(CardItemRow)`
  padding-top: 22px;
`;
