import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

interface DiceRollState {
  currentRoll: Array<number>;
  handleCurrentRoll: Function;
  selectedDice: Set<number>;
  handleSelectDie: Function;
  currentPlayer: number;
  currentPlayerRoll: number;
}

const DiceRoll = (props: DiceRollState) => {
  const rollDice = () => {
    let newRoll: Array<number> = [];
    for (let i = 0; i < 5; i++) {
      if (!props.selectedDice.has(i)) {
        newRoll = newRoll.concat([
          Math.floor(Math.random() * Math.floor(5)) + 1
        ]);
      } else {
        newRoll = newRoll.concat([props.currentRoll[i]]);
      }
    }
    return newRoll;
  };

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
    return props.currentRoll.map((die: number, index: number) => {
      return (
        <td key={index}>
          <Button
            variant="light"
            value={index}
            onClick={() => props.handleSelectDie}
            disabled={
              props.currentPlayerRoll === 3 || props.currentPlayerRoll === 0
            }
          >
            <span
              style={{
                color: props.selectedDice.has(index) ? "green" : "black"
              }}
            >
              <i className={getDie(die)}> </i>
            </span>
          </Button>
        </td>
      );
    });
  };

  return (
    <Navbar fixed="bottom">
      <Container>
        <Table borderless>
          <tbody>
            <tr>
              <td>
                <Container>
                  <h6>
                    Player
                    {" " +
                      props.currentPlayer +
                      ", roll " +
                      props.currentPlayerRoll +
                      ": "}
                  </h6>
                  <Button
                    onClick={() => props.handleCurrentRoll(rollDice())}
                    size="lg"
                  >
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
