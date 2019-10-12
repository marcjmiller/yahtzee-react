import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const PlayerInfo: React.FC = () => {
  return (
    <Navbar>
      <Navbar.Brand>
        <h1>Yahtzee</h1>
      </Navbar.Brand>
      <Nav className="mr-auto"> </Nav>
    </Navbar>
  );
};

export default PlayerInfo;
