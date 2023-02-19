import sleep from "utils/sleep";
import { UsersType } from "store/game/loginSlice";
import { MessageType } from "types";

type onEmulateChatType = {
  users?: UsersType[];
  sendMessage: ({ message, userId, username }: MessageType) => void;
};

export const onEmulateChat = async ({
  users,
  sendMessage,
}: onEmulateChatType) => {
  const bot1 = [
    "Что ты тут натворил?",
    Number(users?.[1].id),
    String(users?.[1].name),
  ] as const;

  const bot2 = [
    "Кто?",
    Number(users?.[2].id),
    String(users?.[2].name),
  ] as const;

  const bot3 = [
    "Да ты, ты",
    Number(users?.[1].id),
    String(users?.[1].name),
  ] as const;

  const bot4 = [
    "Да ты, ты",
    Number(users?.[3].id),
    String(users?.[3].name),
  ] as const;

  await sleep(300);
  sendMessage({ message: bot1[0], userId: bot1[1], username: bot1[2] });

  await sleep(600);
  sendMessage({ message: bot2[0], userId: bot2[1], username: bot2[2] });

  await sleep(300);
  sendMessage({ message: bot3[0], userId: bot3[1], username: bot3[2] });

  await sleep(600);
  sendMessage({ message: bot4[0], userId: bot4[1], username: bot4[2] });
};
