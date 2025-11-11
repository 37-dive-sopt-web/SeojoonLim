import { useEffect } from "react";
import { statusItemStyle } from "./GamePageStyles";

function GameLeftTime({
  time,
  timeCount,
  setTimeCount,
  setMessage,
  resetGame,
  isFirstFlipped,
  setShowModal,
  deckInfo,
  setRecord,
}) {
  // 카드가 처음 뒤집어졌을 때 카운트 시작
  useEffect(() => {
    if (!isFirstFlipped) return;
    setTimeCount(time);
    const counter = setInterval(() => {
      setTimeCount((prev) => {
        if (prev <= 0) {
          clearInterval(counter);
          return 0;
        } else return prev - 1;
      });
    }, 1000);
    return () => clearInterval(counter); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFirstFlipped]);


  // 남은 시간이 0초가 됐을 때 게임 실패 띄우기
  useEffect(() => {
    if (timeCount === 0) {
      setMessage("실패");
      setRecord({ date: null, time: null, level: deckInfo.level });
      setTimeout(() => {
        resetGame();
      }, 3000);
      setShowModal(true);
    }
  }, [timeCount]);

  return (
    <div css={statusItemStyle}>
      <p>남은 시간</p>
      <p>{timeCount}</p>
    </div>
  );
}

export default GameLeftTime;
