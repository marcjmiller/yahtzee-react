import React, { useState } from "react";

import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

import {
  currentRollType,
  scoreCardSectionType, scoresType,
  tableHeadingsType
} from "../types/types";

import DiceRoll from "./DiceRoll";
import {Button} from "react-bootstrap";

export const ScoreCard = () => {
  const tableHeadings: tableHeadingsType = [
    "Upper Section",
    "How to Score",
    "Player 1",
    "Player 2"
  ];

  const upperScoreCard: scoreCardSectionType = {
    aces: {
      label: "Aces",
      guide: "Count and add only Aces",
    },
    twos: {
      label: "Twos",
      guide: "Count and add only Twos",
    },
    threes: {
      label: "Threes",
      guide: "Count and add only Threes",
    },
    fours: {
      label: "Fours",
      guide: "Count and add only Fours",
    },
    fives: {
      label: "Fives",
      guide: "Count and add only Fives",
    },
    sixes: {
      label: "Sixes",
      guide: "Count and add only Sixes",
    },
    totalTop: {
      label: "Total Score",
      guide: "==>",
    },
    bonus: {
      label: "Bonus",
      guide: "Score 35",
    },
    totalUpperSection: {
      label: "Total",
      guide: "==>",
    }
  };

  const lowerScoreCard: scoreCardSectionType = {
    threeOfAKind: {
      label: "3 of a kind",
      guide: "Score total of all dice",
    },
    fourOfAKind: {
      label: "4 of a kind",
      guide: "Score total of all dice",
    },
    fullHouse: {
      label: "Full House",
      guide: "Score 25",
    },
    smStraight: {
      label: "Sm Straight",
      guide: "Score 30",
    },
    lgStraight: {
      label: "Lg Straight",
      guide: "Score 40",
    },
    yahtzee: {
      label: "Yahtzee",
      guide: "Score 50",
    },
    chance: {
      label: "Chance",
      guide: "Score total of all dice",
    },
    bonusYahtzee: {
      label: "Bonus Yahtzee",
      guide: "Score 100 each",
    },
    upperTotal: {
      label: "Upper Total",
      guide: "==>",
    },
    totalLowerSection: {
      label: "Lower Total",
      guide: "==>",
    },
    grandTotal: {
      label: "Grand Total",
      guide: "==>",
    }
  };

  const initialRoll: currentRollType = {
    1: { rollValue: 1, isSelected: false },
    2: { rollValue: 2, isSelected: false },
    3: { rollValue: 3, isSelected: false },
    4: { rollValue: 4, isSelected: false },
    5: { rollValue: 5, isSelected: false }
  };

  const initialScores: scoresType = {
    aces: -1,
    twos: -1,
    threes: -1,
    fours: -1,
    fives: -1,
    sixes: -1,
    totalTop: -1,
    bonus: -1,
    totalUpperSection: -1,
    threeOfAKind: -1,
    fourOfAKind: -1,
    fullHouse: -1,
    smStraight: -1,
    lgStraight: -1,
    yahtzee: -1,
    chance: -1,
    bonusYahtzee: -1,
    totalLowerSection: -1,
    grandTotal: -1,
  };

  const [currentRoll, setCurrentRoll] = useState(initialRoll);

  const handleRollDice = () => {
    const newRoll: currentRollType = currentRoll;
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
      resetSelectedDice();
    }
  };

  const handleSelectDie = (die: number) => {
    const newSelect: boolean = !currentRoll[die].isSelected;
    setCurrentRoll({
      ...currentRoll,
      [die]: { rollValue: currentRoll[die].rollValue, isSelected: newSelect }
    });
  };

  const resetSelectedDice = () => {
    const newRoll: currentRollType = currentRoll;
    [1, 2, 3, 4, 5].forEach(value => {
      newRoll[value].isSelected = false;
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

  const scoreAcesToSixes = (dieValue: number) => {
    let score: number = 0;
    Object.entries(currentRoll).forEach(index => {
      if (index[1].rollValue === dieValue) {
        score += dieValue;
      }
    });
    return score;
  };

  const scoreDice = (index: string) => {
    let score: number = 0;
    switch(index) {
      case "aces": {
        score = scoreAcesToSixes(1);
        break;
      }
      case "twos": {
        score = scoreAcesToSixes(2);
        break;
      }
      case "threes": {
        score = scoreAcesToSixes(3);
        break;
      }
      case "fours": {
        score = scoreAcesToSixes(4);
        break;
      }
      case "fives": {
        score = scoreAcesToSixes(5);
        break;
      }
      case "sixes": {
        score = scoreAcesToSixes(6);
        break;
      }
      default: {
        score = 0;
      }
    }

    return score
  };

  const [player1Score, setPlayer1Score] = useState(initialScores);

  const handleSetPlayer1Score = (label: string, score: number) => {
    setPlayer1Score({...player1Score, [label]: score})
  };

  const [player2Score, setPlayer2Score] = useState(initialScores);

  const handleSetPlayer2Score = (label: string, score: number) => {
    setPlayer2Score({...player2Score, [label]: score})
  };

  const drawHeadings = () => {
    return tableHeadings.map(heading => {
      return (
        <td key={"TD"+heading}>
          <h6>{heading}</h6>
        </td>
      );
    });
  };

  const drawScoreCard = (section: scoreCardSectionType) => {
    return Object.entries(section).map(row => {
      const index = row[0];
      const label = row[1].label;
      const guide = row[1].guide;

      const p1Score = player1Score[index] >= 0 ? player1Score[index] : "Set";
      const p2Score = player2Score[index] >= 0 ? player2Score[index] : "Set";

      return (
        <tr key={"TR"+label}>
          <td key={"TD"+label}>
            <h6>{label}</h6>
          </td>
          <td>
            <small>{guide}</small>
          </td>
          <td><Button variant="link" onClick={() => handleSetPlayer1Score(index, scoreDice(index))} disabled={p1Score >= 0 || currentPlayer === 2}>{p1Score}</Button></td>
          <td><Button variant="link" onClick={() => handleSetPlayer2Score(index, scoreDice(index))} disabled={p2Score >= 0 || currentPlayer === 1}>{p2Score}</Button></td>
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
