import React, { useEffect, useState } from "react";
import RockImg from "../../../assets/Rock.png";
import ScissorsImg from "../../../assets/Scissors.png";
import PaperImg from "../../../assets/Paper.png";
import "./main-game.css";
import { RandomChoice } from "./utils";
import ResultPage from "../results-page/result-page";

type Props = {
  time: number;
  limitPoints: number;
};

interface Round {
  number: number;
  result: string;
  score: string;
}

const MainGame: React.FC<Props> = ({ time, limitPoints }) => {
  const [playerChoice, setPlayerChoice] = useState<string>("");
  const [machineChoice, setMachineChoice] = useState<string>("");

  const [playerScore, setPlayerScore] = useState<number>(0);
  const [machineScore, setMachineScore] = useState<number>(0);

  const [playTime, setPlayTime] = useState<number>(time);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [round, setRound] = useState<number>(1);
  const [matchHistory, setMatchHistory] = useState<Round[]>([]);

  useEffect(() => {
    if (playTime !== 0) {
      setTimeout(() => setPlayTime(playTime - 1), 1000);
    }
    if (playTime === 0) {
      if (!playerChoice) {
        const randomPlayerChoice: any = RandomChoice();
        setPlayerChoice(randomPlayerChoice);
      }
      const randomMachineChoice: any = RandomChoice();
      setMachineChoice(randomMachineChoice);
      setShowResults(true);
    }
  }, [playTime]);

  const HandleSelect = (value: string) => {
    setPlayerChoice(value);
  };

  const HandleNextRound = () => {
    setShowResults(false);
    setPlayTime(time);
    setPlayerChoice("");
    setMachineChoice("");
  };

  const HandleReplayMatch = () => {
    setShowResults(false);
    setRound(1);
    setPlayTime(time);
    setPlayerScore(0);
    setMachineScore(0);
    setMatchHistory([]);
    setPlayerChoice("");
    setMachineChoice("");
  };

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

  return (
    <>
      {showResults ? (
        <ResultPage
          limitPoints={limitPoints}
          playerOption={playerChoice}
          machineOption={machineChoice}
          continueBtn={() => HandleNextRound()}
          playerScore={playerScore}
          machineScore={machineScore}
          playerScoresFunc={() => setPlayerScore(playerScore + 1)}
          machineScoresFunc={() => setMachineScore(machineScore + 1)}
          roundNum={round}
          roundNumFunc={() => setRound(round + 1)}
          matchHistory={matchHistory}
          historyFunc={setMatchHistory}
          replayBtn={HandleReplayMatch}
        />
      ) : (
        <>
          <div className="game-container">
            <div className="top-panel-container">
              <h3>{`Points to Win: ${limitPoints}`}</h3>
              <h2 className="timer">{playTime} s</h2>
              <h3>{`Round ${round}`}</h3>
            </div>
            <div className="mid-panel-container">
              <h1>{playerChoice}</h1>
              <img src={ImgSelector(playerChoice)} />
            </div>
            <div className="btns-container">
              <button
                className="game-btn"
                disabled={playTime === 0}
                onClick={() => HandleSelect("Rock")}
              >
                <img src={RockImg} />
              </button>
              <button
                className="game-btn"
                disabled={playTime === 0}
                onClick={() => HandleSelect("Scissors")}
              >
                <img src={ScissorsImg} />
              </button>
              <button
                className="game-btn"
                disabled={playTime === 0}
                onClick={() => HandleSelect("Paper")}
              >
                <img src={PaperImg} />
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MainGame;
