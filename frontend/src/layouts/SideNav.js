import React from "react";

const SideNav = () => {
  return (
    <aside className="column is-2 aside hero">
      <div>
        <div className="compose has-text-centered">
          <a className="button is-danger is-block is-bold">
            <span className="compose">Compose</span>
          </a>
        </div>
        <div className="main"></div>
      </div>
    </aside>
  );
};

export default SideNav;
