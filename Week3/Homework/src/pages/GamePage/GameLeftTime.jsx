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
