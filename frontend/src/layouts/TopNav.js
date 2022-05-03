import React from "react";

const TopNav = () => {
  return (
    <nav className="navbar has-shadow">
      <div className="container">
        <div className="navbar-brand">
          <h1 className="is-size-4">
            <a className="navbar-item" href="../">
              Scrabble
            </a>
          </h1>

          <div className="navbar-burger burger" data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link"> Account </a>
            <div className="navbar-dropdown">
              <a className="navbar-item"> Dashboard </a>
              <hr className="navbar-divider" />
              <a className="navbar-item"> Logout </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
