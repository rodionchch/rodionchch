import { useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import {
  startGame,
  username as usernameAction,
  users as usersAction,
  GameType,
} from "store/game/loginSlice";
import Input from "components/Input";
import Button from "components/Button";
import { users } from "api";
import * as s from "./styles";

const Card: React.FC = () => {
  const dispatch = useAppDispatch();

  const [username, setUsername] = useState("");
  const [gameCode, setGameCode] = useState("");
  const [usernameError, setUsernameError] = useState(false);

  const onChangeUsername = (name: string) => {
    setUsername(name);
    setUsernameError(false);
  };

  const onStartGame = (gameType: GameType) => {
    if (username) {
      if (gameType) {
        dispatch(startGame("open"));
        dispatch(usernameAction(username));
        dispatch(usersAction([{ id: 1, name: username }, ...users]));
      }
    } else {
      setUsernameError(true);
    }
    setGameCode("");
  };

  return (
    <s.Card>
      <s.CardHeader>
        <Input
          autofocus
          placeholder={"Введите Ваше имя"}
          onChange={onChangeUsername}
          value={username}
          error={usernameError}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onStartGame("open");
            }
          }}
        />
      </s.CardHeader>
      <s.CardInner>
        <s.CardItem>
          <s.CardTitle>Начать игру</s.CardTitle>

          <s.CardItemRow>
            <Button
              onClick={() => {
                onStartGame("open");
              }}
            >
              Начать открытую игру
            </Button>
          </s.CardItemRow>

          <s.CardItemRow>
            <Button
              onClick={() => {
                onStartGame("open");
              }}
            >
              Начать закрытую игру
            </Button>
          </s.CardItemRow>
        </s.CardItem>
        <s.CardItem>
          <s.CardTitle>Присоединиться к игре</s.CardTitle>

          <s.CardItemRowInput>
            <Input
              placeholder={"Введите код комнаты"}
              onChange={setGameCode}
              value={gameCode}
            />
          </s.CardItemRowInput>

          <s.CardItemRow>
            <Button
              onClick={() => {
                setGameCode("");
              }}
            >
              Присоединиться к игре
            </Button>
          </s.CardItemRow>
        </s.CardItem>
      </s.CardInner>
    </s.Card>
  );
};

export default Card;
