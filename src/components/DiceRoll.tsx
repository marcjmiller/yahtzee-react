import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

interface DiceRollState {
  currentRoll: Array<number>;
  selectedDice: Set<number>;
  currentPlayer: number;
  currentPlayerRoll: number;
}

class DiceRoll extends React.Component<{}, DiceRollState> {
  constructor(props: DiceRollState) {
    super(props);
    this.state = {
      currentRoll: [1, 2, 3, 4, 5],
      selectedDice: new Set<number>([]),
      currentPlayer: 1,
      currentPlayerRoll: 0
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleSelectDie = this.handleSelectDie.bind(this);
  }

  handleClick = () => {
    this.setState({
      currentRoll: this.rollDice()
    });
  };

  handleSelectDie = (die: React.FormEvent<HTMLButtonElement>) => {
    let dice = this.state.selectedDice;
    if (dice.has(Number(die.currentTarget.value))) {
      dice.delete(Number(die.currentTarget.value));
    } else {
      dice.add(Number(die.currentTarget.value));
    }
    this.setState({
      selectedDice: dice
    });
  };

  rollDice() {
    let newRoll: Array<number> = [];
    for (let i = 0; i < 5; i++) {
      if (!this.state.selectedDice.has(i) && this.state.currentPlayerRoll < 3) {
        newRoll = newRoll.concat([
          Math.floor(Math.random() * Math.floor(5)) + 1
        ]);
      } else if (this.state.currentPlayerRoll === 3) {
        newRoll = newRoll.concat([
          Math.floor(Math.random() * Math.floor(5)) + 1
        ]);
      } else {
        newRoll = newRoll.concat([this.state.currentRoll[i]]);
      }
    }
    this.state.currentPlayerRoll < 3
      ? this.setState({ currentPlayerRoll: this.state.currentPlayerRoll + 1 })
      : this.setState({
          currentPlayerRoll: 1,
          selectedDice: new Set<number>([]),
          currentPlayer: this.state.currentPlayer === 1 ? 2 : 1
        });
    return newRoll;
  }

  getDie(die: number) {
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
  }

  getDice() {
    return this.state.currentRoll.map((die: number, index: number) => {
      return (
        <td key={index}>
          <Button
            variant="light"
            value={index}
            onClick={this.handleSelectDie}
            disabled={
              this.state.currentPlayerRoll === 3 ||
              this.state.currentPlayerRoll === 0
            }
          >
            <span
              style={{
                color: this.state.selectedDice.has(index) ? "green" : "black"
              }}
            >
              <i className={this.getDie(die)}> </i>
            </span>
          </Button>
        </td>
      );
    });
  }

  render() {
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
                        this.state.currentPlayer +
                        ", roll " +
                        this.state.currentPlayerRoll +
                        ": "}
                    </h6>
                    <Button onClick={this.handleClick} size="lg">
                      Roll Dice
                    </Button>
                    <p>
                      <small>Click the dice you want to keep</small>
                    </p>
                  </Container>
                </td>
                <td> </td>
                {this.getDice()}
                <td> </td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </Navbar>
    );
  }
}

export default DiceRoll;
