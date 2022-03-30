import React from "react";
import useScrollPosition from "../Components/useScrollPosition";
import "../styles/Styles.css";
import "../styles/OurTeamStyles.css";
import ThreeDBrainBG from '../Components/OurTeam_Background.js'
import Navbar from "../Components/Navbar.js"
import Admin from "../Components/Admin.js";
import Alumni from "../Components/Alumni.js";

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
      <ThreeDBrainBG/>
      <div Style = {"display: flex; flex-direction: row; justify-content: right; padding-right: 3rem; margin-top: 4rem"}>
        <h2>Administration</h2>
      </div>
      <div Style = {"height: 20px; background: #9E9577; margin-bottom: 2.5rem"}></div>
      <div Style = {"display: flex; flex-direction: row; justify-content: space-around"}>
        <div Style = {"flex-direction: column"}>
          <Admin name='Nathaniel Bogues' title='President' image= {require('../assets/profilePictures/DevyanshGupta.png')} major='Chemistry 2022' minor='Minor in Data Science' blurb='I am so proud to be president of Synaptech'/>
          <Admin name='Nathaniel Bogues' title='Events Coordinator' image= {require('../assets/profilePictures/HritikArasu.png')} major='Chemistry & Mathematics 2022' minor='' blurb='I am so proud to be president of Synaptech'/>
          <Admin name='Nathaniel Bogues' title='President' image= {require('../assets/profilePictures/PierreKarashchuk.png')} major='Chemistry 2022' minor='Minor in Data Science' blurb='I am so proud to be president of Synaptech'/>
          <Admin name='Nathaniel Bogues' title='President' image= {require('../assets/profilePictures/DevyanshGupta.png')} major='Chemistry 2022' minor='Minor in Data Science' blurb='I am so proud to be president of Synaptech'/>
          <Admin name='Nathaniel Bogues' title='President' image= {require('../assets/profilePictures/DevyanshGupta.png')} major='Chemistry 2022' minor='Minor in Data Science' blurb='I am so proud to be president of Synaptech'/>
        </div>
        <div Style = {"flex-direction: column"}>
          <Admin name='Nathaniel Bogues' title='Vice President' image= {require('../assets/profilePictures/MorganGraham.png')} major='Chemistry 2022' minor='' blurb='I am so proud to be president of Synaptech'/>
          <Admin name='Nathaniel Bogues' title='Secretary' image= {require('../assets/profilePictures/PeterZachariah.png')} major='Chemistry & Informatics 2022' minor='Minor in Data Science' blurb='I am so proud to be president of Synaptech'/>
          <Admin name='Nathaniel Bogues' title='President' image= {require('../assets/profilePictures/DevyanshGupta.png')} major='Chemistry 2022' minor='Minor in Data Science' blurb='I am so proud to be president of Synaptech'/>
          <Admin name='Nathaniel Bogues' title='President' image= {require('../assets/profilePictures/DevyanshGupta.png')} major='Chemistry 2022' minor='Minor in Data Science' blurb='I am so proud to be president of Synaptech'/>
        </div>
      </div>

      <div Style = {"display: flex; flex-direction: row; justify-content: right; padding-right: 3rem; margin-top: 4rem"}>
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
      </div>

      <div className="EndBlurb">
        <h2>Want to join in on the fun?</h2>
        <h2>Send us an email from your UW account!</h2>
      </div>

    </>
  );
}

export default OurTeam;
