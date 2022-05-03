import React from "react";
import WithAuth from "../layouts/WithAuth";

const Scrabble = () => {
  return (
    <WithAuth>
      <div className="column is-10">
        <div className="columns">
          <div className="column is-4 messages hero" id="game-pane">
            <h2>Hello pane 1</h2>
          </div>
          <div className="column is-8 message hero" id="board-pane">
            <div className="scabble-wrap">
              <div className="sc-container">
                {[...Array(224).keys()].map((value) => (
                  <div key={value} className="mcolumn is-1 cell"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </WithAuth>
  );
};

export default Scrabble;
