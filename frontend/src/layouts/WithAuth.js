import React from "react";
import TopNav from "./TopNav";
import Footer from "./Footer";
import SideNav from "./SideNav";

const WithAuth = ({ children }) => {
  return (
    <>
      <TopNav />
      <div id="scrabble-app">
        <div class="y-pad columns">
          <SideNav />
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WithAuth;
