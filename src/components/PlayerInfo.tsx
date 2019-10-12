import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import DropdownButton from "react-bootstrap/DropdownButton";
import DropdownItem from "react-bootstrap/DropdownItem";
import Nav from "react-bootstrap/Nav";

const PlayerInfo: React.FC = () => {
  return (
    <Navbar>
      <Navbar.Brand>Yahtzee</Navbar.Brand>
      <Nav className="mr-auto"></Nav>
      <Form inline>
        <DropdownButton id="dropdown-basic-button" title="Games">
          <DropdownItem href="#">6</DropdownItem>
        </DropdownButton>
      </Form>
    </Navbar>
  );
};

export default PlayerInfo;
