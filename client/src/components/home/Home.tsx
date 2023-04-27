import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const naviagte = useNavigate();
  const [toShow, setToShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setToShow(true);
    }, 380);
  }, []);

  return (
    <>
      <div className="home-container">
        {toShow ? (
          <>
            <h1>Welcome!</h1>
            <span>
              "Let's Decide" is a basic game we all know called Rock, Scissors &
              Papers. Most people know how to play it but for those who don't,
              here are the <Link to="/rules">Rules</Link>.
            </span>
            <br />
            <br />
            <br />
            <span>What are you waiting for? Let's decide who...</span>
            <button className="play-btn" onClick={() => naviagte("/game")}>
              Play ▶
            </button>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default Home;
