import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

type currentRollType = {
  [index: number]: { rollValue: number; isSelected: boolean };
};

interface DiceRollState {
  currentRoll: currentRollType;
  handleRollDice: Function;
  handleSelectDie: Function;
  currentPlayer: number;
  currentPlayerRoll: number;
}

const DiceRoll = (props: DiceRollState) => {
  const getDie = (die: number) => {
    const dice: Array<string> = [
      "",
      "fas fa-dice-one fa-5x",
      "fas fa-dice-two fa-5x",
      "fas fa-dice-three fa-5x",
      "fas fa-dice-four fa-5x",
      "fas fa-dice-five fa-5x",
      "fas fa-dice-six fa-5x"
    ];
    return dice[die];
  };

  const getDice = () => {
    return [1, 2, 3, 4, 5].map((index: number) => {
      return <td key={index}>
        <Button
            variant="light"
            value={index}
            onClick={() => props.handleSelectDie(index)}
            disabled={
              props.currentPlayerRoll === 3 || props.currentPlayerRoll === 0
            }
        >
            <span
                style={{
                  color: (props.currentRoll[index].isSelected) ? "green" : "black"
                }}
            >
              <i className={getDie(props.currentRoll[index].rollValue)}> </i>
            </span>
        </Button>
      </td>;
    });
  };

  return (
    <Navbar sticky="bottom">
      <Container>
        <Table borderless>
          <tbody>
            <tr>
              <td>
                <Container>
                  <h5>
                    Player
                    {" " +
                      props.currentPlayer +
                      ", roll " +
                      props.currentPlayerRoll +
                      ": "}
                  </h5>
                  <Button onClick={() => props.handleRollDice()} size="lg">
                    Roll Dice
                  </Button>
                  <p>
                    <small>Click the dice you want to keep</small>
                  </p>
                </Container>
              </td>
              <td> </td>
              {getDice()}
              <td> </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </Navbar>
  );
};

export default DiceRoll;
