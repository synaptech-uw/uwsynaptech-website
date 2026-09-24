import React, { useEffect } from "react";
import useScrollPosition from "../Components/useScrollPosition";
import "../styles/Styles.css";
import "../styles/OurTeamStyles.css";
import ThreeDBrainBG from '../Components/OurTeam_Background.js'
import Navbar from "../Components/Navbar.js"
import Admin from "../Components/Admin.js";
import SocialLinks from "../Components/SocialLinks.js";
import OFFICERS from "../data/officers";

function OurTeamMobile() {
  const scrollPos = useScrollPosition();

  useEffect(() => {
    window.scrollTo(window.scrollX, 0, true);
  }, [])
  return (
    <>
      <head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Bungee&family=Inconsolata&family=Open+Sans:wght@800&family=Roboto:wght@400;900&display=swap');
        </style>
      </head>

      <Navbar show = { (scrollPos > 1) ? "Header" : "Header-Hidden" } />
      <ThreeDBrainBG/>
      <div Style = {"color: white; display: flex; flex-direction: row; justify-content: center; padding-top: 4rem"}>
        <h2 Style = {"font-size: 3rem"}>Administration</h2>
      </div>
      <div Style = {"height: 20px; background: #9E9577; margin-bottom: 2.5rem; font-size: 1.25rem;"}></div>
      <div className="AdminInfo" Style = {"color: white; display: flex; flex-direction: column; justify-content: center; align-items: center; padding-left: 4rem; padding-right: 4rem; font-size: 1.25rem;"}>
        {OFFICERS.map((o) => (
          <Admin
            key={o.name}
            sizing={"single_column"}
            name={o.name}
            title={o.title}
            image={o.image}
            major={o.major}
            minor={o.minor}
            year={o.year}
            blurb={o.blurb}
          />
        ))}
      </div>

      <div Style = "height: 20vh" />

      <div className="EndBlurb" Style = {"text-align: center; padding: 5rem 1rem"}>
        <h2>Want to join in on the fun?</h2>
        <SocialLinks />
      </div>

      {/* <SetPageScroll pageName = "OurTeam" pageScroll = {scrollPos} /> */}
    </>
  );
}

export default OurTeamMobile;
