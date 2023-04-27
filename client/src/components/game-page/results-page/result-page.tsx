import React, { useEffect, useState } from "react";
import { GameResult } from "../main-game/utils";
import "./results-page.css";
import RockImg from "../../../assets/Rock.png";
import ScissorsImg from "../../../assets/Scissors.png";
import PaperImg from "../../../assets/Paper.png";
import { EndGame } from "../end-game-page/end-game";

interface Round {
  number: number;
  result: string;
  score: string;
}

type Props = {
  limitPoints: number;
  roundNum: number;
  roundNumFunc: () => void;
  matchHistory: Round[];
  historyFunc: any;

  playerOption: string;
  machineOption: string;

  playerScore: number;
  machineScore: number;

  continueBtn: () => void;
  playerScoresFunc: () => void;
  machineScoresFunc: () => void;
  replayBtn: () => void;
};

const ResultPage: React.FC<Props> = ({
  limitPoints,
  playerOption,
  machineOption,
  playerScore,
  machineScore,
  continueBtn,
  playerScoresFunc,
  machineScoresFunc,
  roundNum,
  roundNumFunc,
  matchHistory,
  historyFunc,
  replayBtn,
}) => {
  const [result, setResult] = useState<string>();
  const [winner, setWinner] = useState<string>("");
  const [nextRoundTime, setNextRoundTime] = useState<number>(4);

  useEffect(() => {
    if (!winner) {
      const roundResult = GameResult(playerOption, machineOption);
      setResult(roundResult);

      if (roundResult) {
        if (roundResult === "Win") {
          playerScoresFunc();
        }
        if (roundResult === "Lose") {
          machineScoresFunc();
        }
        setTimeout(() => {
          const newHistoryRound: Round = {
            number: roundNum,
            result: roundResult,
            score: `Player ${playerScore} - ${machineScore} Machine`,
          };

          historyFunc([...matchHistory, newHistoryRound]);
          roundNumFunc();
        }, 1000);
      }
    }
  }, []);

  useEffect(() => {
    if (nextRoundTime !== 0) {
      setTimeout(() => setNextRoundTime(nextRoundTime - 1), 1000);
    }
    if (nextRoundTime === 0) {
      if (!winner) continueBtn();
    }
  }, [nextRoundTime]);

  useEffect(() => {
    setTimeout(() => {
      if (playerScore === limitPoints) {
        setWinner("Player Wins");
      }
      if (machineScore === limitPoints) {
        setWinner("Machine Wins");
      }
    }, 2000);
  }, [playerScore, machineScore]);

  const ImgSelector = (selection: string) => {
    if (selection === "Rock") {
      return RockImg;
    }
    if (selection === "Scissors") {
      return ScissorsImg;
    }
    if (selection === "Paper") {
      return PaperImg;
    }
  };

  const ResultClass = (roundResult: any) => {
    if (roundResult === "Tie") {
      return "tie-result";
    }
    if (roundResult === "Win") {
      return "win-result";
    }
    if (roundResult === "Lose") {
      return "lose-result";
    }
  };

  const resetMatch = () => {
    replayBtn();
    setWinner("");
  };

  return (
    <>
      {winner ? (
        <EndGame
          matchWinner={winner}
          matchHistory={matchHistory}
          replayBtn={resetMatch}
        />
      ) : (
        <div className="results-page-container">
          <div className="score-text">{`${playerScore} - ${machineScore}`}</div>
          <span className={ResultClass(result)}>
            {result === "Tie" ? "Tie" : `You ${result}`}
          </span>
          <div className="selections-panel">
            <div className="choices-panel">
              <h2>You:</h2>
              <h2>{playerOption}</h2>
              <img src={ImgSelector(playerOption)} />
            </div>
            <h1>vs</h1>
            <div className="choices-panel">
              <h2>Machine:</h2>
              <h2>{machineOption}</h2>
              <img src={ImgSelector(machineOption)} />
            </div>
          </div>
          {playerScore === 5 || machineScore === 5 ? (
            <></>
          ) : (
            <div className="next-round-timer">{`Next round in ${nextRoundTime} s`}</div>
          )}
        </div>
      )}
    </>
  );
};

export default ResultPage;
