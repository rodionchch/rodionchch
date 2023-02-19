import { useMemo } from "react";
import Figure from "components/Figure";
import { selectGame, selectRandomFigures } from "store/game/gameSlice";
import { useAppSelector } from "store/hooks";
import * as s from "./styles";

type ProgressProps = {
  onClick?: () => void;
};

const Progress: React.FC<ProgressProps> = ({ onClick }) => {
  const { progress } = useAppSelector(selectGame);
  const randomFigures = useAppSelector(selectRandomFigures);

  const randomFiguresMemo = useMemo(() => {
    return randomFigures;
  }, []);

  return (
    <s.Progress onClick={onClick}>
      {randomFiguresMemo.map((figure) => (
        <s.ProgressFigure key={[...figure].join(".")}>
          <s.ProgressFigureInner
            show={progress.includes([...figure].join("."))}
          >
            <Figure param={[...figure]} />
          </s.ProgressFigureInner>
        </s.ProgressFigure>
      ))}
    </s.Progress>
  );
};

export default Progress;
