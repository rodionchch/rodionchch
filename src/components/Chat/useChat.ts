import { onEmulateChat } from "mocks/Chat";
import { useEffect, useMemo, useState } from "react";
import { selectLogin } from "store/game/loginSlice";
import { useAppSelector } from "store/hooks";
import { MessageInfoType, MessageType } from "types";
import getUserColors from "utils/getUserColors";

const useChat = () => {
  const { users, username } = useAppSelector(selectLogin);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<MessageType[]>([]);

  const colors = useMemo(() => getUserColors(users), [users]);

  useEffect(() => {
    onEmulateChat({ users, sendMessage });
  }, []);

  const onChangeMessage = (message: string) => {
    setMessage(message);
  };

  const sendMessage = ({ message, userId, username, info }: MessageType) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        userId,
        username,
        message,
        info,
      },
    ]);
  };

  const sendInfoMessage = ({ figure, position, userId }: MessageInfoType) => {
    const username = users?.find((user) => user.id === userId)?.name;
    sendMessage({
      username,
      info: {
        figure,
        position,
      },
    });
  };

  const onSend = () => {
    if (message.length) {
      const userId = users?.[0]?.id || 1;
      sendMessage({ message, userId, username });
      setMessage("");
    }
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      onSend();
    }
  };

  const onOfferToMove = () => {
    sendMessage({ message: `${username} предложил переместиться в клетку` });
  };

  const onOfferToEnd = () => {
    sendMessage({ message: `${username} предложил завершить игру` });
  };

  return {
    users,
    colors,
    message,
    onChangeMessage,
    onSend,
    messages,
    onKeyDown,
    onOfferToMove,
    onOfferToEnd,
    sendInfoMessage,
  };
};

export default useChat;
