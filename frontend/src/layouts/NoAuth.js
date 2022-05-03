import React from "react";

const NoAuth = ({ children }) => {
  return (
    <section className="container">
      <div className="columns is-multiline">
        <div className="column is-8 is-offset-2 register">
          <div className="columns">
            <div className="column left">
              <h1 className="title is-1">Lets Scrabble</h1>
              <h2 className="subtitle colored is-4">
                Play like the britishers do
              </h2>
              <p>.</p>
            </div>
            <div className="column right has-text-centered">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoAuth;
