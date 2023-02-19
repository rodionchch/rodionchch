import { useMemo } from "react";
import { PositionType } from "types";
import { useAppSelector } from "store/hooks";
import { selectGame } from "store/game/gameSlice";
import Figure from "components/Figure";
import * as s from "./styles";

type GameCellProps = {
  number?: number;
  onClick?: (currentPosition?: number) => void;
  position?: PositionType;
  disabled?: boolean;
  currentUserPosition?: number;
};

const GameCell: React.FC<GameCellProps> = ({
  number,
  onClick,
  position,
  disabled,
  currentUserPosition,
}) => {
  const { gameArea } = useAppSelector(selectGame);

  const onShowAllFigures = () => {
    if (!disabled) {
      onClick?.(currentUserPosition === number ? currentUserPosition : 0);
    }
  };

  const color = useMemo(
    () => position?.find((p) => p.position + 1 === number)?.color,
    [position, number]
  );
  return (
    <s.GameCell onClick={onShowAllFigures}>
      <s.GameCellInner color={color}>
        <Figure param={gameArea[Number(number) - 1].figure} />
        <s.GameCellNumber>{number}</s.GameCellNumber>
      </s.GameCellInner>
    </s.GameCell>
  );
};

export default GameCell;
