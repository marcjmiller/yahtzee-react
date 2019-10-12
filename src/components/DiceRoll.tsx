import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

interface DiceRollState {
  currentRoll: Array<number>;
}

class DiceRoll extends React.Component<{}, DiceRollState> {
  constructor(props: DiceRollState) {
    super(props);
    this.state = {
      currentRoll: []
    };

    this.handleClick = this.handleClick.bind(this);
    this.selectDie = this.selectDie.bind(this);
  }

  handleClick = () => {
    this.setState({
      currentRoll: this.rollDice()
    });
  };

  selectDie = () => {
    this.setState({});
  };

  rollDice() {
    let newRoll: Array<number> = [];
    for (let i = 0; i < 5; i++) {
      newRoll = newRoll.concat([Math.floor(Math.random() * Math.floor(5)) + 1]);
    }
    return newRoll;
  }

  render() {
    const dice: Array<string> = [
      "",
      "fas fa-dice-one fa-5x",
      "fas fa-dice-two fa-5x",
      "fas fa-dice-three fa-5x",
      "fas fa-dice-four fa-5x",
      "fas fa-dice-five fa-5x",
      "fas fa-dice-six fa-5x"
    ];

    return (
      <Navbar fixed="bottom">
        <Container>
          <Table borderless>
            <tr>
              <td>
                <Button onClick={this.handleClick}>Roll Dice</Button>
                <br />
                Click dice you want to keep
              </td>
              <td>&nbsp;</td>
              <td>
                <i className={dice[this.state.currentRoll[0]]}> </i>
              </td>
              <td>
                <i className={dice[this.state.currentRoll[1]]}> </i>
              </td>
              <td>
                <i className={dice[this.state.currentRoll[2]]}> </i>
              </td>
              <td>
                <i className={dice[this.state.currentRoll[3]]}> </i>
              </td>
              <td>
                <i className={dice[this.state.currentRoll[4]]}> </i>
              </td>
              <td>&nbsp;</td>
            </tr>
          </Table>
        </Container>
      </Navbar>
    );
  }
}

export default DiceRoll;
