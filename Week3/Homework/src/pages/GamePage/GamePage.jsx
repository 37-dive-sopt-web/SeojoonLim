import GameInfo from "./GameInfo";
import GameBoard from "./GameBoard";
import { sectionStyle } from "./GamePageStyles";
import { useGameData } from "../../hooks/UseGameData";
import { useState } from "react";
import Modal from "./Modal";
function GamePage({setRecords}) {
  const [
    deckInfo,
    setDeckInfo,
    setTime,
    matchedCard,
    time,
    timeCount,
    setTimeCount,
    resetGame,
    message,
    histories,
    flippedCard,
    setFlippedCard,
    setMatchedCard,
    setHistories,
    setMessage,
    isFirstFlipped,
    setIsFirstFlipped,
    record,
    setRecord
  ] = useGameData();
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <section css={sectionStyle}>
        {/* 게임 정보창 */}
        <GameInfo
          deckInfo={deckInfo}
          setDeckInfo={setDeckInfo}
          setTime={setTime}
          matchedCard={matchedCard}
          time={time}
          timeCount={timeCount}
          setTimeCount={setTimeCount}
          message={message}
          histories={histories}
          resetGame={resetGame}
          setMessage={setMessage}
          isFirstFlipped={isFirstFlipped}
          setIsFirstFlipped={setIsFirstFlipped}
          setHistories={setHistories}
          setRecords={setRecords}
          setShowModal={setShowModal}
          record = {record}
          setRecord = {setRecord}
        />
        {/* 게임 */}
        <GameBoard
          deckInfo={deckInfo}
          resetGame={resetGame}
          setDeckInfo={setDeckInfo}
          flippedCard={flippedCard}
          setFlippedCard={setFlippedCard}
          setMatchedCard={setMatchedCard}
          setHistories={setHistories}
          setMessage={setMessage}
          isFirstFlipped={isFirstFlipped}
          setIsFirstFlipped={setIsFirstFlipped}
        />
        
      </section>
      {/* 모달 */}
      <Modal showModal={showModal} setShowModal={setShowModal} message={message} record={record}/>
    </>
  );
}

export default GamePage;
