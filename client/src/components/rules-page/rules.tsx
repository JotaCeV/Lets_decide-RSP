import React from "react";
import "./rules.css";
import RulesImg from "../../assets/rules-img.png";

function Rules() {
  return (
    <>
      <div className="rules-container">
        <h1>Rules</h1>

        <h2>- Basic game -</h2>
        <section className="basic-rules-container">
          <p>
            You have 3 choices per round: Rock, Paper, Scissors. The game
            consists of beating your opponent by scoring points by winning
            rounds.
          </p>
          <div className="img-panel">
            <img src={RulesImg} />
            <span>
              The <b className="r-arrow">green arrows</b> mark the choice that
              beats the other, while the <b className="g-arrow">red arrows</b>{" "}
              mark the choice that loses.
              <br />
              <br />
              See? Simple.
            </span>
          </div>
        </section>
      </div>
    </>
  );
}

export default Rules;
