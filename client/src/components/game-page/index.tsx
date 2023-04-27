import React, { useState } from "react";
import "./game-page.css";
import MainGame from "./main-game/main-game";

const GamePage: React.FC = () => {
  const [modeTime, setModeTime] = useState<number>(0);
  const [modeLimitPoints, setModeLimitPoints] = useState<number>(0);
  const [playing, setPlaying] = useState<boolean>(false);

  const HandleMode = (modeTime: number, modeMaxPoints: number) => {
    setPlaying(true);
    setModeTime(modeTime);
    setModeLimitPoints(modeMaxPoints);
  };

  return (
    <>
      <div className="game-page-container">
        <div className="mode-container">
          <h1>Select a mode!</h1>
          <div className="mode-btns-container">
            <button className="btn-mode" onClick={() => HandleMode(6, 5)}>
              Classic
            </button>
          </div>
        </div>
        <div className="game-panel">
          {playing ? (
            <MainGame time={modeTime} limitPoints={modeLimitPoints} />
          ) : (
            <>
              <div className="alert-text">Please, select a game mode</div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default GamePage;
