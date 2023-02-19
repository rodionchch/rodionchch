import { ThemeProvider } from "styled-components";
import { useStopwatch } from "react-timer-hook";
import { useAppSelector } from "store/hooks";
import { selectLogin } from "store/game/loginSlice";
import Login from "../Login";
import Game from "../Game";
import GlobalStyle from "styled/global";
import { myTheme } from "styled/theme";
import * as s from "./styles";
import { useEffect } from "react";

const App = () => {
  const { startGame } = useAppSelector(selectLogin);
  const { hours, minutes, seconds, start, pause } = useStopwatch({
    autoStart: false,
  });

  useEffect(() => {
    if (startGame) {
      start();
    }

    return () => {
      pause();
    };
  }, [startGame]);

  const stopwatch = `${minutes < 10 ? 0 : ""}${hours}:${
    minutes < 10 ? 0 : ""
  }${minutes}:${seconds < 10 ? 0 : ""}${seconds}`;

  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyle />
      <s.App>{startGame ? <Game /> : <Login />}</s.App>
      {startGame && <s.Stopwatch>{stopwatch}</s.Stopwatch>}
    </ThemeProvider>
  );
};

export default App;
