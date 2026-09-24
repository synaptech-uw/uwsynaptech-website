import React, { useEffect } from "react";
import "../styles/Styles.css";
import "../styles/OurTeamStyles.css";
import ThreeDBrainBG from "../Components/OurTeam_Background.js";
import Navbar from "../Components/Navbar.js";
import SocialLinks from "../Components/SocialLinks.js";
import { isMobile } from "react-device-detect";

function HowToJoin() {
  useEffect(() => {
    window.scrollTo(window.scrollX, 0, true);
  }, []);

  return (
    <>
      <head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Bungee&family=Inconsolata&family=Open+Sans:wght@800&family=Roboto:wght@400;900&display=swap');
        </style>
      </head>

      {/* This page is short and may never scroll, so the navbar stays visible. */}
      <Navbar role="navigation" show="Header" />
      <ThreeDBrainBG />
      <div
        Style={
          isMobile
            ? "color: white; display: flex; flex-direction: row; justify-content: center; padding-top: 4rem"
            : "color: white; display: flex; flex-direction: row; justify-content: right; padding-right: 12rem; padding-top: 4rem"
        }
      >
        <h2 Style={isMobile ? "font-size: 3rem" : ""}>How to Join</h2>
      </div>
      <div Style={"height: 1.5rem; background: #9E9577; margin-bottom: 2.5rem;"}></div>

      <main className="Join-Body">
        <h2>Prospective members</h2>
        <p>
          No application is required to join! Our weekly meetings are beginner-friendly, and some of our
          projects are also accepting beginners.
        </p>
        <p>
          We meet on Friday evenings during the school year. Join our Discord for meeting times, announcements,
          and project channels, and follow us on Instagram and LinkedIn to keep up with events.
        </p>
      </main>

      <div Style="height: 10vh" />

      <div className="EndBlurb">
        <h2>Want to join in on the fun?</h2>
        <SocialLinks />
      </div>
    </>
  );
}

export default HowToJoin;
