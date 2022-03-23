import React, { useEffect, useState } from "react";
import useScrollPosition from "./useScrollPosition";
import "./Styles.css";
import "./OurTeamStyles.css";
import Navbar from "./Navbar.js"
import Admin from "./Admin.js";

function OurTeam() {

  const scrollPos = useScrollPosition();

  return (
    <>
      <head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Bungee&family=Inconsolata&family=Open+Sans:wght@800&family=Roboto:wght@400;900&display=swap');
        </style>
      </head>
      <Navbar show = { (scrollPos > 1) ? "Header" : "Header-Hidden" } />

      <div Style = {"display: flex; flex-direction: row; justify-content: right; padding-right: 3rem;"}>
        <h2>Administration</h2>
      </div>
      <div Style = {"height: 20px; background: #9E9577"}></div>
      <div Style = {"display: flex; flex-direction: row; justify-content: space-around"}>
        <div Style = {"flex-direction: column"}>
          <Admin />
          <Admin />
          <Admin />
          <Admin />
          <Admin />
          <Admin />
          <Admin />
          <Admin />
        </div>
        <div Style = {"flex-direction: column"}>
          <Admin />
          <Admin />
          <Admin />
          <Admin />
          <Admin />
          <Admin />
          <Admin />
          <Admin />
        </div>
      </div>

      <p>Hello!</p>
    </>
  );
}

export default OurTeam;