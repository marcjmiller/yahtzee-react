import React from "react";

import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

interface ScoreCardProps {
  tableHeadings: Array<string>;
  upperScoreCard: Array<{ label: string; guide: string; game: number }>;
  lowerScoreCard: Array<{ label: string; guide: string; game: number }>;
}

class ScoreCard extends React.Component<{}, ScoreCardProps> {
  constructor(props: ScoreCardProps) {
    super(props);

    this.state = {
      tableHeadings: [
        "Upper Section",
        "How to Score",
        "Game #1",
        "Game #2",
        "Game #3",
        "Game #4",
        "Game #5",
        "Game #6"
      ],
      upperScoreCard: [
        { label: "Aces", guide: "Count and add only Aces", game: -1 },
        { label: "Twos", guide: "Count and add only Twos", game: -1 },
        { label: "Threes", guide: "Count and add only Threes", game: -1 },
        { label: "Fours", guide: "Count and add only Fours", game: -1 },
        { label: "Fives", guide: "Count and add only Fives", game: -1 },
        { label: "Sixes", guide: "Count and add only Sixes", game: -1 },
        { label: "Total Score", guide: "==>", game: -1 },
        { label: "Bonus", guide: "Score 35", game: -1 },
        { label: "Total", guide: "==>", game: -1 }
      ],
      lowerScoreCard: [
        { label: "3 of a kind", guide: "Score total of all dice", game: -1 },
        { label: "4 of a kind", guide: "Score total of all dice", game: -1 },
        { label: "Full House", guide: "Score 25", game: -1 },
        { label: "Sm Straight", guide: "Score 30", game: -1 },
        { label: "Lg Straight", guide: "Score 40", game: -1 },
        { label: "Yahtzee", guide: "Score 50", game: -1 },
        { label: "Chance", guide: "Score total of all dice", game: -1 },
        { label: "Bonus Yahtzee", guide: "Score 100 each", game: -1 },
        { label: "Upper Total", guide: "==>", game: -1 },
        { label: "Lower Total", guide: "==>", game: -1 },
        { label: "Grand Total", guide: "==>", game: -1 }
      ]
    };
  }

  drawHeadings() {
    return this.state.tableHeadings.map(heading => {
      return (
        <td>
          <h6>{heading}</h6>
        </td>
      );
    });
  }

  drawScoreCard(section: { label: string; guide: string; game: number }[]) {
    return section.map(row => {
      const { label, guide, game } = row;
      return (
        <tr>
          <td>
            <h6>{label}</h6>
          </td>
          <td>
            <small>{guide}</small>
          </td>
          <td>{game !== -1 ? game : ""}</td>
          <td>{game !== -1 ? game : ""}</td>
          <td>{game !== -1 ? game : ""}</td>
          <td>{game !== -1 ? game : ""}</td>
          <td>{game !== -1 ? game : ""}</td>
          <td>{game !== -1 ? game : ""}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <Container>
        <Table bordered hover size="sm">
          <thead>
            <tr>{this.drawHeadings()}</tr>
          </thead>
          <tbody>
            {this.drawScoreCard(this.state.upperScoreCard)}
            <tr>
              <td>
                <h6>Lower Section</h6>
              </td>
            </tr>
            {this.drawScoreCard(this.state.lowerScoreCard)}
          </tbody>
        </Table>
      </Container>
    );
  }
}
export default ScoreCard;
