import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

interface DiceRollState {
  currentRoll: Array<number>;
  selectedDice: Array<number>;
}

class DiceRoll extends React.Component<{}, DiceRollState> {
  constructor(props: DiceRollState) {
    super(props);
    this.state = {
      currentRoll: [1, 2, 3, 4, 5],
      selectedDice: []
    };

    this.handleClick = this.handleClick.bind(this);
    this.selectDie = this.selectDie.bind(this);
  }

  handleClick = () => {
    this.setState({
      currentRoll: this.rollDice()
    });
  };

  selectDie = (e: number) => {
    this.setState({
      selectedDice: this.state.selectedDice.concat([e])
    });
  };

  rollDice() {
    let newRoll: Array<number> = [];
    for (let i = 0; i < 5; i++) {
      newRoll = newRoll.concat([Math.floor(Math.random() * Math.floor(5)) + 1]);
    }
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
    return this.state.currentRoll.map(die => {
      return (
        <td>
          <Button variant="light">
            <i className={this.getDie(die)}> </i>
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
            <tr>
              <td>
                <Container>
                  <Button onClick={this.handleClick} size="lg">
                    Roll Dice
                  </Button>
                  <p>
                    <small>Click dice you want to keep</small>
                  </p>
                </Container>
              </td>
              <td> </td>
              {this.getDice()}
              <td> </td>
            </tr>
          </Table>
        </Container>
      </Navbar>
    );
  }
}

export default DiceRoll;
