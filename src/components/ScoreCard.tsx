import React from "react";

import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

interface ScoreCardProps {
  tableHeadings: Array<string>;
  upperScoreCard: Array<{
    label: string;
    guide: string;
    player1Score: number;
    player2Score: number;
  }>;
  lowerScoreCard: Array<{
    label: string;
    guide: string;
    player1Score: number;
    player2Score: number;
  }>;
}

class ScoreCard extends React.Component<{}, ScoreCardProps> {
  constructor(props: ScoreCardProps) {
    super(props);

    this.state = {
      tableHeadings: ["Upper Section", "How to Score", "Player 1", "Player 2"],
      upperScoreCard: [
        {
          label: "Aces",
          guide: "Count and add only Aces",
          player1Score: -1,
          player2Score: -1
        },
        {
          label: "Twos",
          guide: "Count and add only Twos",
          player1Score: -1,
          player2Score: -1
        },
        {
          label: "Threes",
          guide: "Count and add only Threes",
          player1Score: -1,
          player2Score: -1
        },
        {
          label: "Fours",
          guide: "Count and add only Fours",
          player1Score: -1,
          player2Score: -1
        },
        {
          label: "Fives",
          guide: "Count and add only Fives",
          player1Score: -1,
          player2Score: -1
        },
        {
          label: "Sixes",
          guide: "Count and add only Sixes",
          player1Score: -1,
          player2Score: -1
        },
        {
          label: "Total Score",
          guide: "==>",
          player1Score: -1,
          player2Score: -1
        },
        {
          label: "Bonus",
          guide: "Score 35",
          player1Score: -1,
          player2Score: -1
        },
        { label: "Total", guide: "==>", player1Score: -1, player2Score: -1 }
      ],
      lowerScoreCard: [
        {
          label: "3 of a kind",
          guide: "Score total of all dice",
          player1Score: -1,
          player2Score: -1
        },
        {
          label: "4 of a kind",
          guide: "Score total of all dice",
          player1Score: -1,
          player2Score: -1
        },
        {
          label: "Full House",
          guide: "Score 25",
          player1Score: -1,
          player2Score: -1
        },
        {
          label: "Sm Straight",
          guide: "Score 30",
          player1Score: -1,
          player2Score: -1
        },
        {
          label: "Lg Straight",
          guide: "Score 40",
          player1Score: -1,
          player2Score: -1
        },
        {
          label: "Yahtzee",
          guide: "Score 50",
          player1Score: -1,
          player2Score: -1
        },
        {
          label: "Chance",
          guide: "Score total of all dice",
          player1Score: -1,
          player2Score: -1
        },
        {
          label: "Bonus Yahtzee",
          guide: "Score 100 each",
          player1Score: -1,
          player2Score: -1
        },
        {
          label: "Upper Total",
          guide: "==>",
          player1Score: -1,
          player2Score: -1
        },
        {
          label: "Lower Total",
          guide: "==>",
          player1Score: -1,
          player2Score: -1
        },
        {
          label: "Grand Total",
          guide: "==>",
          player1Score: -1,
          player2Score: -1
        }
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

  drawScoreCard(
    section: {
      label: string;
      guide: string;
      player1Score: number;
      player2Score: number;
    }[]
  ) {
    return section.map(row => {
      const { label, guide, player1Score, player2Score } = row;
      return (
        <tr>
          <td>
            <h6>{label}</h6>
          </td>
          <td>
            <small>{guide}</small>
          </td>
          <td>{player1Score !== -1 ? player1Score : ""}</td>
          <td>{player2Score !== -1 ? player2Score : ""}</td>
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
