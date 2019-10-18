import React, { useState } from "react";

import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import DiceRoll from "./DiceRollHooks";

type scoreCardSection = {
  [index: string]: {
    label: string;
    guide: string;
    player1Score: number;
    player2Score: number;
  };
};

type currentRollType = {
  [index: number]: { rollValue: number; isSelected: boolean };
};

export const ScoreCard = () => {
  const tableHeadings = [
    "Upper Section",
    "How to Score",
    "Player 1",
    "Player 2"
  ];
  const upperScoreCard = {
    "aces": {
      label: "Aces",
      guide: "Count and add only Aces",
      player1Score: -1,
      player2Score: -1
    },
    "twos": {
      label: "Twos",
          guide: "Count and add only Twos",
        player1Score: -1,
        player2Score: -1
    },
    "threes": {
      label: "Threes",
          guide: "Count and add only Threes",
        player1Score: -1,
        player2Score: -1
    },
    "fours": {
      label: "Fours",
          guide: "Count and add only Fours",
        player1Score: -1,
        player2Score: -1
    },
    "fives": {
      label: "Fives",
          guide: "Count and add only Fives",
        player1Score: -1,
        player2Score: -1
    },
    "sixes": {
      label: "Sixes",
          guide: "Count and add only Sixes",
        player1Score: -1,
        player2Score: -1
    },
    "total": {
      label: "Total Score",
          guide: "==>",
        player1Score: -1,
        player2Score: -1
    },
    "bonus": {
      label: "Bonus",
          guide: "Score 35",
        player1Score: -1,
        player2Score: -1
    },
    "totalUpperSection": {
      label: "Total",
          guide: "==>",
        player1Score: -1,
        player2Score: -1
    },
  };

  const lowerScoreCard = {
    "threeOfAKind": {
      label: "3 of a kind",
          guide: "Score total of all dice",
        player1Score: -1,
        player2Score: -1
    },
    "fourOfAKind": {
      label: "4 of a kind",
          guide: "Score total of all dice",
        player1Score: -1,
        player2Score: -1
    },
    "fullHouse": {
      label: "Full House",
          guide: "Score 25",
        player1Score: -1,
        player2Score: -1
    },
    "smallStraight": {
      label: "Sm Straight",
          guide: "Score 30",
        player1Score: -1,
        player2Score: -1
    },
    "largeStraight": {
      label: "Lg Straight",
          guide: "Score 40",
        player1Score: -1,
        player2Score: -1
    },
    "yahtzee": {
      label: "Yahtzee",
          guide: "Score 50",
        player1Score: -1,
        player2Score: -1
    },
    "chance": {
      label: "Chance",
          guide: "Score total of all dice",
        player1Score: -1,
        player2Score: -1
    },
    "bonusYahtzee": {
      label: "Bonus Yahtzee",
          guide: "Score 100 each",
        player1Score: -1,
        player2Score: -1
    },
    "upperTotal": {
      label: "Upper Total",
          guide: "==>",
        player1Score: -1,
        player2Score: -1
    },
    "lowerTotal": {
      label: "Lower Total",
          guide: "==>",
        player1Score: -1,
        player2Score: -1
    },
    "grandTotal": {
      label: "Grand Total",
          guide: "==>",
        player1Score: -1,
        player2Score: -1
    },
  };


  const initialRoll: currentRollType = {
    1: { rollValue: 1, isSelected: false },
    2: { rollValue: 2, isSelected: false },
    3: { rollValue: 3, isSelected: false },
    4: { rollValue: 4, isSelected: false },
    5: { rollValue: 5, isSelected: false }
  };

  const [currentRoll, setCurrentRoll] = useState(initialRoll);

  const handleRollDice = () => {
    if (currentPlayerRoll === 3) {
      resetSelectedDice();
    }
    let newRoll: currentRollType = currentRoll;
    for (let i = 1; i <= 5; i++) {
      if (!newRoll[i].isSelected) {
        newRoll[i].rollValue = Math.floor(Math.random() * Math.floor(5)) + 1;
      }
    }
    setCurrentRoll(newRoll);
    setCurrentPlayerRoll(currentPlayerRoll + 1);
    if (currentPlayerRoll === 3) {
      handleSetCurrentPlayer();
      handleSetCurrentPlayerRoll();
    }
  };

  const handleSelectDie = (die: number) => {
    const newSelect:boolean = !currentRoll[die].isSelected;
    setCurrentRoll({
      ...currentRoll,
      [die]: { rollValue: currentRoll[die].rollValue, isSelected: newSelect }
    });
  };

  const resetSelectedDice = () => {
    const newRoll = currentRoll;
    [1,2,3,4,5].map((i: number) => {
      newRoll[i].isSelected = false;
    });
    setCurrentRoll(newRoll);
  };

  const [currentPlayer, setCurrentPlayer] = useState(1);
  const handleSetCurrentPlayer = () => {
    const player = currentPlayer === 1 ? 2 : 1;
    setCurrentPlayer(player);
    setCurrentPlayerRoll(1);
  };

  const [currentPlayerRoll, setCurrentPlayerRoll] = useState(0);
  const handleSetCurrentPlayerRoll = () => {
    let roll = currentPlayerRoll < 3 ? currentPlayerRoll + 1 : 1;
    setCurrentPlayerRoll(roll);
  };

  const drawHeadings = () => {
    return tableHeadings.map(heading => {
      return (
        <td key={heading}>
          <h6>{heading}</h6>
        </td>
      );
    });
  };

  const drawScoreCard = (section: scoreCardSection) => {
    return Object.values(section).map(row => {
      const { label, guide, player1Score, player2Score } = row;
      return (
        <tr key={label}>
          <td key={label}>
            <h6>{label}</h6>
          </td>
          <td>
            <small>{guide}</small>
          </td>
          <td>{player1Score !== -1 ? player1Score : ""}</td>
          <td>{player2Score !== -1 ? player2Score : ""}</td>
        </tr>
      );
    });
  };

  return (
    <Container>
      <Table bordered hover size="sm">
        <thead>
          <tr>{drawHeadings()}</tr>
        </thead>
        <tbody>
          {drawScoreCard(upperScoreCard)}
          <tr>
            <td>
              <h6>Lower Section</h6>
            </td>
          </tr>
          {drawScoreCard(lowerScoreCard)}
        </tbody>
      </Table>
      <small>
        Yahtzee is a registered trademark of{" "}
        <a href="http://www.hasbro.com">Hasbro</a>
      </small>
      <DiceRoll
        currentRoll={currentRoll}
        handleRollDice={handleRollDice}
        handleSelectDie={handleSelectDie}
        currentPlayer={currentPlayer}
        currentPlayerRoll={currentPlayerRoll}
      />
    </Container>
  );
};

export default ScoreCard;
