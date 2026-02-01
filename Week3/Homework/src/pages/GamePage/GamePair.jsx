import { useState, useEffect } from "react";
import { statusItemStyle } from "./GamePageStyles";

function GamePair({
  deckInfo,
  matchedCard,
  setMessage,
  resetGame,
  time,
  timeCount,
  setRecords,
  setShowModal,
  setRecord,
}) {
  const [matchedPair, setMatchedPair] = useState(0);
  const [entirePair, setEntirePair] = useState(8);
  const [restPair, setRestPair] = useState(8);
  const entirePairLength = deckInfo.data.length / 2;
  const matchedPairLength = matchedCard.length / 2;
  const localStorageRecord = JSON.parse(localStorage.getItem("record")) || [];

  // 게임의 맞춘 짝과 남은 짝 갱신
  useEffect(() => {
    setMatchedPair(matchedPairLength);
    setEntirePair(entirePairLength);
    setRestPair(entirePairLength - matchedPairLength);
  }, [matchedCard, deckInfo.data, deckInfo.level]);

  // 짝을 모두 다 맞췄을 때 게임 성공 띄우기
  useEffect(() => {
    if (entirePairLength === matchedPairLength && entirePairLength > 0) {
      const localRecord = {
        date: new Date().toLocaleString("ko-KR"),
        time: time - timeCount,
        level: deckInfo.level,
      };
      setMessage("성공");
      setRecord(localRecord);
      setTimeout(() => {
        resetGame();
      }, 3000);
      setRecords((prev) => {
        const update = [...prev, localRecord];
        localStorage.setItem(
          "record",
          JSON.stringify([...localStorageRecord, localRecord])
        );
        return update;
      });
      setShowModal(true);
    }
  }, [matchedCard]);

  return (
    <>
      <div css={statusItemStyle}>
        <p>성공한 짝</p>
        <p>
          {matchedPair}/{entirePair}
        </p>
      </div>
      <div css={statusItemStyle}>
        <p>남은 짝</p>
        <p>{restPair}</p>
      </div>
    </>
  );
}

export default GamePair;
