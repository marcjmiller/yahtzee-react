import React from "react";
import ScoreCard from "./components/ScoreCard";
import DiceRoll from "./components/DiceRoll";
import PlayerInfo from "./components/PlayerInfo";

const App: React.FC = () => {
  return (
    <div>
      <PlayerInfo />
      <ScoreCard />
      <DiceRoll />
    </div>
  );
};

export default App;
