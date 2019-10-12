import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

const DiceRoll: React.FC = () => {
  return (
    <Navbar fixed="bottom">
      <Container>
        <Table borderless>
          <tr>
            <td>
              <Button>Roll Dice</Button>
            </td>
            <td>&nbsp;</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>&nbsp;</td>
          </tr>
        </Table>
      </Container>
    </Navbar>
  );
};

export default DiceRoll;
