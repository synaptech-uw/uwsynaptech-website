import React, { useEffect, useState } from "react";
import useScrollPosition from "../Components/useScrollPosition";
import "../styles/Styles.css";
//import "../styles/OurTeamStyles.css";
import ThreeDBrainBG from '../Components/OurTeam_Background.js'
import Navbar from "../Components/Navbar.js"
import Admin from "../Components/Admin.js";
import SocialLinks from "../Components/SocialLinks.js";
import OFFICERS from "../data/officers";

const renderOfficer = (o, sizing) => (
  <Admin
    key={o.name}
    sizing={sizing}
    name={o.name}
    title={o.title}
    image={o.image}
    major={o.major}
    minor={o.minor}
    year={o.year}
    blurb={o.blurb}
  />
);

const SIZE_THRESHOLD = 1064;

function OurTeamDesktop() {
  const scrollPos = useScrollPosition();

  const [winThresh, setWinThresh] = useState(window.innerWidth > SIZE_THRESHOLD);

  useEffect(() => {
    window.scrollTo(window.scrollX, 0, true);
  }, [])

  window.onresize = () => {
    setWinThresh(window.innerWidth > SIZE_THRESHOLD);
  }

  return (
    <>
      <head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Bungee&family=Inconsolata&family=Open+Sans:wght@800&family=Roboto:wght@400;900&display=swap');
        </style>
      </head>

      <Navbar role="navigation" show = { (scrollPos > 1) ? "Header" : "Header-Hidden" } />
      <ThreeDBrainBG/>
      <div Style = {"color: white; display: flex; flex-direction: row; justify-content: right; padding-right: 12rem; padding-top: 4rem"}>
        <h2>Administration</h2>
      </div>
      <div Style = {"height: 1.5rem; background: #9E9577; margin-bottom: 2.5rem;"}></div>

      {(winThresh) ?

        <div Style = {"color: white; display: flex; flex-direction: row; justify-content: space-around; "}>
          <div Style = {"flex-direction: column; padding-left: 10rem; padding-right:2rem; width: 50vw"}>
            {OFFICERS.slice(0, Math.ceil(OFFICERS.length / 2)).map((o) => renderOfficer(o, "two_columns"))}
          </div>

          <div Style = {"flex-direction: column; padding-right: 10rem; padding-left: 2rem; width:50vw"}>
            {OFFICERS.slice(Math.ceil(OFFICERS.length / 2)).map((o) => renderOfficer(o, "two_columns"))}
          </div>
        </div>

      :

          <div className="AdminInfo" Style = {"color: white; display: flex; flex-direction: column; justify-content: center; align-items: center; padding-left: 4rem; padding-right: 4rem; font-size: 1.25rem;"}>
            {OFFICERS.map((o) => renderOfficer(o, "single_column"))}
          </div>
      }

      {/* <div Style = {"display: flex; flex-direction: row; justify-content: right; padding-right: 3rem; margin-top: 4rem"}>
        <h2>Alumni</h2>
      </div>
      <div Style = {"height: 20px; background: #9E9577; margin-bottom: 2.5rem"}></div>
      <div>
        <Alumni name='Nathaniel Bogues' major='Human Centered Design & Engineering 2020' minor='Minor in Data Science' image={require('../assets/profilePictures/MorganGraham.png')} job='Junior Product Designer' email='example@gmail.com' link='https://www.linkedin.com/home'/>
        <Alumni name='Nathaniel Bogues' major='Human Centered Design & Engineering 2020' minor='Minor in Data Science' image={require('../assets/profilePictures/MorganGraham.png')} job='Junior Product Designer' email='example@gmail.com' link='https://www.linkedin.com/home'/>
        <Alumni name='Nathaniel Bogues' major='Human Centered Design & Engineering 2020' minor='Minor in Data Science' image={require('../assets/profilePictures/MorganGraham.png')} job='Junior Product Designer' email='example@gmail.com' link='https://www.linkedin.com/home'/>
        <Alumni name='Nathaniel Bogues' major='Human Centered Design & Engineering 2020' minor='Minor in Data Science' image={require('../assets/profilePictures/MorganGraham.png')} job='Junior Product Designer' email='example@gmail.com' link='https://www.linkedin.com/home'/>
        <Alumni name='Nathaniel Bogues' major='Human Centered Design & Engineering 2020' minor='Minor in Data Science' image={require('../assets/profilePictures/MorganGraham.png')} job='Junior Product Designer' email='example@gmail.com' link='https://www.linkedin.com/home'/>
        <Alumni name='Nathaniel Bogues' major='Human Centered Design & Engineering 2020' minor='Minor in Data Science' image={require('../assets/profilePictures/MorganGraham.png')} job='Junior Product Designer' email='example@gmail.com' link='https://www.linkedin.com/home'/>

      </div> */}
      <div Style = "height: 20vh" />

      <div className="EndBlurb">
        <h2>Want to join in on the fun?</h2>
        <SocialLinks />
      </div>
      {/* <SetPageScroll pageName = "OurTeam" pageScroll = {scrollPos} /> */}
    </>
  );
}

export default OurTeamDesktop;