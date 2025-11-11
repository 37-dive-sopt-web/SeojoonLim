import GameSelectLevel from "./GameSelectLevel";
import GameLeftTime from "./GameLeftTime";
import GamePair from "./GamePair";
import {
  gameInfoStyle,
  messageStyle,
  messageTitleStyle,
  historiesTitleStyle,
  historyStyle,
  historiesContainer,
  statusStyle,
  historiesWrapperStyle
} from "./GamePageStyles";

function GameInfo({
  deckInfo,
  setDeckInfo,
  setTime,
  matchedCard,
  time,
  timeCount,
  setTimeCount,
  message,
  histories,
  setMessage,
  resetGame,
  isFirstFlipped,
  setIsFirstFlipped,
  setRecords,
  record,
  setRecord,
  setShowModal
}) {
  return (
    <section css={gameInfoStyle}>
      <GameSelectLevel
        deckInfo={deckInfo}
        setDeckInfo={setDeckInfo}
        setTime={setTime}
        resetGame={resetGame}
      />
      <div css={statusStyle}>
        <GameLeftTime
          deckInfo={deckInfo}
          time={time}
          timeCount={timeCount}
          setTimeCount={setTimeCount}
          setMessage={setMessage}
          resetGame={resetGame}
          isFirstFlipped={isFirstFlipped}
          setIsFirstFlipped={setIsFirstFlipped}
          setShowModal={setShowModal}
          setRecord={setRecord}
        />
        <GamePair
          deckInfo={deckInfo}
          matchedCard={matchedCard}
          setMessage={setMessage}
          resetGame={resetGame}
          time={time}
          timeCount={timeCount}
          setRecords={setRecords}
          setShowModal={setShowModal}
          record={record}
          setRecord={setRecord}
        />
      </div>
      <div>
        <p css={messageTitleStyle}>안내 메시지</p>
        <p css={messageStyle}>{message}</p>
      </div>
      <div css={historiesWrapperStyle}>
        <p css={historiesTitleStyle}>최근 히스토리</p>
        <div css={historiesContainer}>
          {histories.map((history) => (
            <div css={historyStyle} key={history.id}>
              <p>
                {history.firstNum},{history.secondNum}
              </p>
              <p>{history.isMatch}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default GameInfo;
