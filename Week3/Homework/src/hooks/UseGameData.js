import { useState } from "react";
import { buildDeck } from "../utils/BuildDeck";

export const useGameData = () => {
  const [deckInfo, setDeckInfo] = useState({
    status: "idle",
    data: [],
    level: 1,
  });
  const [time, setTime] = useState(45);
  const [timeCount, setTimeCount] = useState(time);
  const [isFirstFlipped, setIsFirstFlipped] = useState(false);
  const [flippedCard, setFlippedCard] = useState([]);
  const [matchedCard, setMatchedCard] = useState([]);
  const [message, setMessage] = useState("카드를 눌러 게임을 시작");
  const [histories, setHistories] = useState([]);
  const [record, setRecord] = useState({
    date: "",
    time: 45,
    level: 1,
  });
  const resetGame = () => {
    const data = buildDeck(deckInfo.level);
    setDeckInfo({ status: "ready", data, level: deckInfo.level });
    setMatchedCard([]);
    setTimeCount(time);
    setHistories([]);
    setFlippedCard([]);
    setMessage("카드를 눌러 게임을 시작");
    setIsFirstFlipped(false);
  };

  return [
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
  ];
};
