import sleep from "utils/sleep";
import { GameAreaType } from "store/game/gameSlice";
import { AppDispatch } from "store";
import { MessageInfoType } from "types";

type onEmulateGameChatType = {
  setDisabled: (disabled: boolean) => void;
  randomFigures: string[];
  gameArea: GameAreaType[];
  dispatch: AppDispatch;
  gameAreaChange: any;
  sendInfoMessage: ({ figure, position, userId }: MessageInfoType) => void;
};

export const onEmulateGame = async ({
  setDisabled,
  randomFigures,
  gameArea,
  dispatch,
  gameAreaChange,
  sendInfoMessage,
}: onEmulateGameChatType) => {
  setDisabled(true);
  const bot1 = {
    figure: [...randomFigures[0]],
    position: gameArea.findIndex((cell) => cell.userId === 2) + 1,
    userId: 2,
  };
  const bot2 = {
    figure: [...randomFigures[1]],
    position: gameArea.findIndex((cell) => cell.userId === 3) + 1,
    userId: 3,
  };
  const bot3 = {
    figure: [...randomFigures[2]],
    position: gameArea.findIndex((cell) => cell.userId === 4) + 1,
    userId: 4,
  };
  await sleep(800);
  dispatch(gameAreaChange(bot1));
  sendInfoMessage({
    figure: bot1.figure,
    position: bot1.position,
    userId: bot1.userId,
  });

  await sleep(300);
  dispatch(gameAreaChange(bot2));
  sendInfoMessage({
    figure: bot2.figure,
    position: bot2.position,
    userId: bot2.userId,
  });

  await sleep(500);
  dispatch(gameAreaChange(bot3));
  setDisabled(false);
  sendInfoMessage({
    figure: bot3.figure,
    position: bot3.position,
    userId: bot3.userId,
  });
};
