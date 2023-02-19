import AllFiguresPopup from "components/AllFiguresPopup";
import Chat from "components/Chat";
import Progress from "components/Progress";
import GameCell from "components/GameCell";
import useGame from "./useGame";
import useChat from "components/Chat/useChat";
import * as s from "./styles";

const Game: React.FC = () => {
  const {
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
  } = useChat();

  const {
    page,
    setPage,
    showAllFigures,
    onShow,
    onSelect,
    leftCells,
    topCells,
    rightCells,
    bottomCells,
    disabled,
    animate,
    usersPosition,
    currentUserPosition,
  } = useGame({ sendInfoMessage });

  const Cell = (number: number) => (
    <GameCell
      key={number}
      number={number}
      onClick={onShow}
      disabled={disabled}
      position={usersPosition}
      currentUserPosition={currentUserPosition}
    />
  );

  return (
    <s.Game>
      <s.GameCol animate={currentUserPosition === 1 && animate.current}>
        {leftCells.map((number) => Cell(number))}
      </s.GameCol>
      <s.GameBody>
        <s.GameRow>{topCells.map((number) => Cell(number))}</s.GameRow>

        <s.GameContent>
          {page === "chat" ? (
            <Chat
              users={users}
              colors={colors}
              message={message}
              onChangeMessage={onChangeMessage}
              onSend={onSend}
              messages={messages}
              onKeyDown={onKeyDown}
              onOfferToMove={onOfferToMove}
              onOfferToEnd={onOfferToEnd}
            />
          ) : (
            <Progress
              onClick={() => {
                setPage("chat");
              }}
            />
          )}
        </s.GameContent>

        <s.GameRow>{bottomCells.map((number) => Cell(number))}</s.GameRow>
      </s.GameBody>
      <s.GameCol>{rightCells.map((number) => Cell(number))}</s.GameCol>
      {!!showAllFigures && (
        <AllFiguresPopup
          onClick={onSelect}
          position={showAllFigures}
          userId={usersPosition?.[0].userId || 0}
        />
      )}
    </s.Game>
  );
};

export default Game;
