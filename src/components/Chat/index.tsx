import Button from "components/Button";
import Description from "components/Description";
import Figure from "components/Figure";
import TextInput from "components/TextInput";
import { UsersType } from "store/game/loginSlice";
import { MessageType, onKeyDown, UserColorType } from "types";
import * as s from "./styles";

type ChatProps = {
  users?: UsersType[];
  colors?: UserColorType[];
  message: string;
  onChangeMessage: (message: string) => void;
  onSend: () => void;
  messages: MessageType[];
  onKeyDown: onKeyDown;
  onOfferToMove: () => void;
  onOfferToEnd: () => void;
};

const Chat: React.FC<ChatProps> = ({
  users,
  colors,
  message,
  onChangeMessage,
  onSend,
  messages,
  onKeyDown,
  onOfferToMove,
  onOfferToEnd,
}) => {
  return (
    <s.Chat>
      <s.ChatHeader>
        <Description />
      </s.ChatHeader>

      <s.ChatContent>
        <s.ChatPlayers>
          <s.ChatLabel>Список игроков</s.ChatLabel>
          <s.ChatPlayersList>
            {users?.map(({ id, name }) => (
              <s.ChatPlayersItem
                key={id}
                color={colors?.find((c) => c.userId === id)?.color}
              >
                {name}
              </s.ChatPlayersItem>
            ))}
          </s.ChatPlayersList>
        </s.ChatPlayers>
        <s.ChatMessages>
          <s.ChatLabel>Чат</s.ChatLabel>
          <s.ChatMessagesList>
            {messages.map(({ userId, username, message, info }, index) => (
              <s.ChatMessage key={`${userId}-${index}`}>
                {info ? (
                  <s.ChatMessagesInfoText>
                    {`${username} поставил фигуру `}
                    <s.ChatMessagesInfoInner>
                      <s.ChatMessagesInfoFigure>
                        <Figure param={info?.figure} />
                      </s.ChatMessagesInfoFigure>
                    </s.ChatMessagesInfoInner>
                    {`в клетку ${info?.position}`}
                  </s.ChatMessagesInfoText>
                ) : (
                  <>
                    {username && (
                      <s.ChatMessagesUser>{username}:</s.ChatMessagesUser>
                    )}
                    <s.ChatMessagesText>{message}</s.ChatMessagesText>
                  </>
                )}
              </s.ChatMessage>
            ))}
          </s.ChatMessagesList>
          <s.ChatMessagesTextInput>
            <TextInput
              value={message}
              onChange={onChangeMessage}
              onSubmit={onSend}
              onKeyDown={onKeyDown}
              placeholder={"Сообщение"}
            />
          </s.ChatMessagesTextInput>
        </s.ChatMessages>
      </s.ChatContent>

      <s.ChatFooter>
        <Button onClick={onOfferToMove} small>
          Предложить переместиться в клетку
        </Button>
        <Button onClick={onOfferToEnd} small>
          Предложить завершить игру
        </Button>
      </s.ChatFooter>
    </s.Chat>
  );
};

export default Chat;
