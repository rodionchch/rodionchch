import { useAppSelector } from "store/hooks";
import { FigureClickType } from "types";
import { selectGame } from "store/game/gameSlice";
import Figure from "components/Figure";
import * as s from "./styles";

type AllFiguresPopup = {
  onClick?: FigureClickType;
  position: number;
  userId: number;
};

const AllFiguresPopup: React.FC<AllFiguresPopup> = ({
  onClick,
  position,
  userId,
}) => {
  const { figures } = useAppSelector(selectGame);
  return (
    <s.AllFigures>
      <s.AllFiguresPopup>
        {figures.map((figure) => (
          <s.AllFiguresItem
            key={figure?.join(".")}
            onClick={() => {
              onClick?.({ figure, position, userId });
            }}
          >
            {figure && <Figure param={figure} />}
          </s.AllFiguresItem>
        ))}
      </s.AllFiguresPopup>
    </s.AllFigures>
  );
};

export default AllFiguresPopup;
