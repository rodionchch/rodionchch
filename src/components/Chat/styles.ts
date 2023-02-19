import styled from "styled-components";
import { StyledProps } from "styled/styled";

export const Chat = styled.div`
  width: 830px;
  height: 496px;
  background: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: column;
`;

export const ChatHeader = styled.div`
  height: 125px;
  border-bottom: 1px solid ${(props) => props.theme.colors.black};
  padding: 20px 20px 10px;
`;

export const ChatTitle = styled.div`
  font-size: 12px;
`;

export const ChatContent = styled.div`
  display: flex;
  flex: 1;
`;

export const ChatFooter = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${(props) => props.theme.colors.black};
  padding: 12px 20px;
`;

export const ChatPlayers = styled.div`
  width: 226px;
  border-right: 1px solid ${(props) => props.theme.colors.black};
`;

export const ChatLabel = styled.h3`
  text-transform: uppercase;
  font-weight: 700;
  padding: 10px 20px 16px;
  font-size: 15px;
`;

export const ChatMessages = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-height: 306px;
  > ${ChatLabel} {
    padding: 10px 12px 16px;
  }
`;

export const ChatMessage = styled.div`
  display: flex;
  font-size: 15px;
`;

export const ChatMessagesUser = styled.span`
  font-weight: 700;
  margin-right: 2px;
`;

export const ChatMessagesInfoText = styled.div`
  display: flex;
`;

export const ChatMessagesInfoInner = styled.div`
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ChatMessagesInfoFigure = styled.div`
  width: 60px;
  height: 20px;
  transform: scale(0.35);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ChatMessagesText = styled.p``;

export const ChatPlayersList = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden auto;
  max-height: 262px;
`;

export const ChatPlayersItem = styled.div<StyledProps>`
  padding: 0 20px;
  font-size: 15px;
  line-height: 15px;
  &:before {
    content: "·";
    padding: 0 4px;
    font-size: 30px;
    font-weight: 700;
    vertical-align: middle;
  }
  ${(props) =>
    props.color &&
    `color: ${
      props.theme.colors.figures[
        props.color as keyof typeof props.theme.colors.figures
      ] || props.theme.colors.black
    }`}
`;

export const ChatMessagesList = styled.div`
  flex: 1;
  overflow: hidden auto;
  max-height: 262px;
  padding: 0 12px;
`;

export const ChatMessagesTextInput = styled.div`
  padding: 8px 12px;
`;
