import { useState } from "react";
import Header from "./layouts/Header";
import GamePage from "./pages/GamePage/GamePage";
import RankPage from "./pages/RankPage/RankPage";
import Global from "./styles/ResetStyles";


function App() {
  const [gameOrRank, setGameOrRank] = useState("game");
  const [records, setRecords] = useState(
    JSON.parse(localStorage.getItem("record")) || []
  );

  return (
    <>
      <Global />
      <Header setGameOrRank={setGameOrRank} />
      <main>
        {gameOrRank === "game" && <GamePage setRecords={setRecords} />}
        {gameOrRank === "rank" && <RankPage records={records} setRecords={setRecords} />}
      </main>
    </>
  );
}

export default App;
