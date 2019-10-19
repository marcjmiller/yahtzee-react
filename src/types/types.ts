export type currentRollType = {
  [index: number]: { rollValue: number; isSelected: boolean };
};

export type tableHeadingsType = Array<string>;

export type scoreCardSectionType = {
  [index: string]: {
    label: string;
    guide: string;
  };
};

export type scoresType = {
  [index: string] : number
}

export interface DiceRollState {
  currentRoll: currentRollType;
  handleRollDice: Function;
  handleSelectDie: Function;
  currentPlayer: number;
  currentPlayerRoll: number;
}
