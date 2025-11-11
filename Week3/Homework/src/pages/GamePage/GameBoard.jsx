import {
  gameBoardStyle,
  cardItemStyle,
  cardContainerStyle,
  gameTitleStyle,
  gameTitleNameStyle,
  cardStyle,
  cardFrontBackStyle,
  cardFrontStyle,
  cardBackStyle,
  cardWrapperStyle
} from "./GamePageStyles";
import { useEffect } from "react";
import RedButton from "../../components/RedButton";

function GameBoard({
  deckInfo,
  resetGame,
  setDeckInfo,
  flippedCard,
  setFlippedCard,
  setMatchedCard,
  setHistories,
  setMessage,
  isFirstFlipped,
  setIsFirstFlipped,
}) {
  // 카드를 클릭했을 때
  const flipCard = (card) => {
    if (!isFirstFlipped) setIsFirstFlipped(true);

    if (card.matched) {
      setMessage("이미 매치되었습니다.");
      return;
    }
    if (card.flipped) {
      setMessage("이미 카드를 선택하였습니다.");
      return;
    }
    // 클릭한 카드를 flippedCard에 추가
    setFlippedCard((prev) => [...prev, card.value]);
    // 클릭한 카드의 flipped 상태 변경
    setDeckInfo((prev) => ({
      ...prev,
      data: prev.data.map((item) =>
        item.id === card.id ? { ...item, flipped: true } : { ...item }
      ),
    }));
  };
  // 카드가 flip 됐을 때마다 실행
  useEffect(() => {
    if (flippedCard.length !== 2) return;
    // 뒤집은 카드가 서로 같을 때
    if (flippedCard[0] === flippedCard[1]) {
      // 성공 히스토리 출력
      setHistories((prev) => [
        ...prev,
        {
          id: Date.now(),
          firstNum: flippedCard[0],
          secondNum: flippedCard[1],
          isMatch: "성공",
        },
      ]);
      // matched 상태 변경
      setDeckInfo((prev) => ({
        ...prev,
        data: prev.data.map((item) =>
          item.value === flippedCard[0]
            ? { ...item, matched: true }
            : { ...item }
        ),
      }));
      // matchedCard에 매치된 카드 집어넣음
      setMatchedCard((prev) => [...prev, ...flippedCard]);
    }
    // 뒤집은 카드가 서로 다를 때
    else {
      // 실패 히스토리 출력
      setHistories((prev) => [
        ...prev,
        {
          id: Date.now(),
          firstNum: flippedCard[0],
          secondNum: flippedCard[1],
          isMatch: "실패",
        },
      ]);
      // 0.7초 후 flipped 상태 변경
      setTimeout(() => {
        setDeckInfo((prev) => ({
          ...prev,
          data: prev.data.map((item) => ({ ...item, flipped: false })),
        }));
      }, 700);
    }
    setFlippedCard([]);
  }, [flippedCard]);

  return (
    <div css={gameBoardStyle}>
      {deckInfo.status === "ready" && (
        <>
          <div css={gameTitleStyle}>
            <p css={gameTitleNameStyle}>게임보드</p>
            <RedButton onClick={resetGame}>게임 리셋</RedButton>
          </div>
          <div css={cardWrapperStyle}>
            <div css={cardContainerStyle(deckInfo.level)}>
              {deckInfo.data.map((card) => (
                <button
                  css={cardItemStyle}
                  type="button"
                  key={card.id}
                  onClick={() => flipCard(card)}
                  title={card.id}
                >
                  <div css={cardStyle(card.flipped, card.matched)}>
                    <div css={[cardFrontStyle, cardFrontBackStyle]}>
                      ?
                    </div>
                    <div
                      css={[cardBackStyle(card.matched), cardFrontBackStyle]}
                    >
                      {card.value}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default GameBoard;
