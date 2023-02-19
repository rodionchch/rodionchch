import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FigureClickParamsType, MessageInfoType, PositionType } from "types";
import { useAppDispatch, useAppSelector } from "store/hooks";
import {
  selectGame,
  figures as figuresAction,
  gameArea as gameAreaAction,
  gameAreaChange,
  selectRandomFigures,
} from "store/game/gameSlice";
import { selectLogin } from "store/game/loginSlice";
import { figures, colors, cross, sizes } from "./figures";
import range from "utils/range";
import getUserColors from "utils/getUserColors";
import { onEmulateGame } from "mocks/Game";

type UseGameProps = {
  sendInfoMessage: ({ figure, position, userId }: MessageInfoType) => void;
};

const useGame = ({ sendInfoMessage }: UseGameProps) => {
  const dispatch = useAppDispatch();
  const { figures: figuresSelector, gameArea } = useAppSelector(selectGame);
  const randomFigures = useAppSelector(selectRandomFigures);
  const { users } = useAppSelector(selectLogin);
  const [page, setPage] = useState<"chat" | "progress">("chat");
  const [showAllFigures, setShowAllFigures] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const firstEntry = useRef(true);
  const animate = useRef(false);

  const leftCells = range(1, 9);
  const topCells = range(9, 19);
  const rightCells = range(19, 27);
  const bottomCells = range(27, 37);

  const figuresMemo = useMemo(() => {
    if (!Object.keys(figuresSelector)?.length) {
      const arr: [string[]?] = [];
      figures.forEach((f) =>
        colors.forEach((c) =>
          cross.forEach((cc) => sizes.forEach((s) => arr.push([f, c, cc, s])))
        )
      );

      return arr;
    }
  }, [figuresSelector]);

  useEffect(() => {
    if (figuresMemo && !Object.keys(figuresSelector)?.length) {
      dispatch(figuresAction(figuresMemo));
      dispatch(gameAreaAction());
    }
  }, [figuresMemo, figuresSelector]);

  const usersPosition = useMemo(() => {
    if (getUserColors(users)?.length && gameArea.length) {
      const arr: PositionType = [];

      getUserColors(users)?.forEach((userColor) => {
        if (gameArea.find((cell) => cell.userId === userColor.userId)) {
          arr.push({
            userId: userColor.userId,
            position: gameArea.findIndex(
              (cell) => cell.userId === userColor.userId
            ),
            color: userColor.color,
          });
        }
      });
      return arr;
    }
  }, [gameArea]);

  const currentUserPosition =
    Number(usersPosition?.find((p) => p.userId === 1)?.position) + 1;

  const onShow = useCallback(
    (currentPosition?: number) => {
      if (page === "chat") {
        if (firstEntry.current) {
          animate.current = true;
          firstEntry.current = false;
        }
        setPage("progress");
      } else {
        if (currentPosition) {
          animate.current = false;
          setShowAllFigures(currentPosition);
        }
      }
    },
    [setPage, page]
  );

  const onSelect = ({ figure, position, userId }: FigureClickParamsType) => {
    sendInfoMessage?.({ figure: figure || [], position, userId });
    dispatch(gameAreaChange({ figure, position, userId }));
    setShowAllFigures(0);
    onEmulateGame({
      setDisabled,
      randomFigures,
      gameArea,
      dispatch,
      gameAreaChange,
      sendInfoMessage,
    });
  };

  return {
    page,
    setPage,
    showAllFigures,
    onShow,
    onSelect,
    leftCells,
    topCells,
    rightCells,
    bottomCells,
    usersPosition,
    disabled,
    animate,
    currentUserPosition,
  };
};

export default useGame;
