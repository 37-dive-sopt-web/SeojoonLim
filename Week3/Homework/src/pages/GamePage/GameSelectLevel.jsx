import { useEffect } from "react";
import { levelOptionStyle } from "./GamePageStyles";
const timeOfLevel = {
  1: 45,
  2: 60,
  3: 100,
};

function GameSelectLevel({ deckInfo, setDeckInfo, setTime, resetGame }) {
  // 레벨 별 카드 랜덤 생성
  const generateDeck = (level = 1) => {
    level = Number(level);
    setTime(timeOfLevel[level]);
    setDeckInfo((prev) => ({ ...prev, level }));
  };

  // 레벨이 바뀔 때마다 게임 초기화
  useEffect(() => {
    resetGame();
  }, [deckInfo.level]);


  return (
    <div css={levelOptionStyle}>
      <label>
        <select
          value={deckInfo.level}
          onChange={(e) => generateDeck(e.target.value)}
        >
          <option value="1">레벨 1 덱 생성</option>
          <option value="2">레벨 2 덱 생성</option>
          <option value="3">레벨 3 덱 생성</option>
        </select>
      </label>
    </div>
  );
}

export default GameSelectLevel;
