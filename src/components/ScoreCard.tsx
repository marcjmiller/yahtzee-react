import React from "react";

import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

const ScoreCard: React.FC = () => {
  const tableHeadings: Array<string> = [
    "Upper Section",
    "How to Score",
    "Game #1",
    "Game #2",
    "Game #3",
    "Game #4",
    "Game #5",
    "Game #6"
  ];

  return (
    <Container>
      <Table bordered size="sm">
        <thead>
          <tr>
            <th>{tableHeadings[0]}</th>
            <th>{tableHeadings[1]}</th>
            <th>{tableHeadings[2]}</th>
            <th>{tableHeadings[3]}</th>
            <th>{tableHeadings[4]}</th>
            <th>{tableHeadings[5]}</th>
            <th>{tableHeadings[6]}</th>
            <th>{tableHeadings[7]}</th>
          </tr>
        </thead>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </Table>
    </Container>
  );
};

export default ScoreCard;
