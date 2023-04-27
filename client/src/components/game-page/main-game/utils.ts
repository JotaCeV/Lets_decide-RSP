// interface Choices {
//   0: "Rock";
//   1: "Scissors";
//   2: "Paper";
// }

const RandomChoice = () => {
  const randomNum: number = Math.floor(Math.random() * 3);
  // const choices: Choices = {
  //   0: "Rock",
  //   1: "Scissors",
  //   2: "Paper",
  // };
  // return choices[randomNum];

  return {
    0: "Rock",
    1: "Scissors",
    2: "Paper",
  }[randomNum];
};

function GameResult(playerOption: string, machineChoice: string) {
  const TIE = "Tie";
  const WIN = "Win";
  const LOSE = "Lose";

  if (playerOption === "Rock") {
    switch (machineChoice) {
      case "Scissors":
        return WIN;

      case "Paper":
        return LOSE;
    }
  }

  if (playerOption === "Scissors") {
    switch (machineChoice) {
      case "Paper":
        return WIN;

      case "Rock":
        return LOSE;
    }
  }

  if (playerOption === "Paper") {
    switch (machineChoice) {
      case "Rock":
        return WIN;

      case "Scissors":
        return LOSE;
    }
  }

  return TIE;
}

export { RandomChoice, GameResult };
