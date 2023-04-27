import React, { useEffect } from "react";
import "./end-game.css";

type Props = {
  matchWinner: string;
  matchHistory: any;
  replayBtn: () => void;
};

interface Round {
  number: number;
  result: string;
  score: string;
}

const EndGame: React.FC<Props> = ({ matchWinner, matchHistory, replayBtn }) => {
  return (
    <div className="end-page-container">
      <h1>{matchWinner}</h1>
      <h2>Hope you have fun playing!</h2>

      <div>Match history:</div>
      <div className="history-container">
        {matchHistory.map((round: Round) => (
          <div
            key={`Round ${round.number}`}
            className={`history-info-container  ${round.result.toLowerCase()}-bg`}
          >
            <h3>{`Round ${round.number}`}</h3>
            <h2>{round.result}</h2>
            <h3>{round.score}</h3>
          </div>
        ))}
      </div>
      <button className="next-game-btn" onClick={() => replayBtn()}>
        Play again
      </button>
    </div>
  );
};

export { EndGame };
