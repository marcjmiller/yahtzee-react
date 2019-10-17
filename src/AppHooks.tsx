import React from "react";
import ScoreCard from "./components/ScoreCardHooks";
import PlayerInfo from "./components/PlayerInfo";

const App: React.FC = () => {
  return (
    <div key="main">
      <PlayerInfo />
      <ScoreCard />
    </div>
  );
};

export default App;
