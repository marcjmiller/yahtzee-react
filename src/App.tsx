import React from "react";

import ScoreCard from "./components/ScoreCard";
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
