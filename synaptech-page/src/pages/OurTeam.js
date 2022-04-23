import React, { useEffect } from "react";
import useScrollPosition from "../Components/useScrollPosition";
import "../styles/Styles.css";
import "../styles/OurTeamStyles.css";
import ThreeDBrainBG from '../Components/OurTeam_Background.js'
import Navbar from "../Components/Navbar.js"
import Admin from "../Components/Admin.js";
import Alumni from "../Components/Alumni.js";

function OurTeam() {
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
      <div Style = {"height: 20px; background: #9E9577; margin-bottom: 2.5rem"}></div>
      {/* <Navbar show = { (scrollPos > 1) ? "Header" : "Header-Hidden" } />
      <ThreeDBrainBG/>
      <div Style = {"color: white; display: flex; flex-direction: row; justify-content: right; padding-right: 3rem; margin-top: 4rem"}>
        <h2>Administration</h2>
      </div>
      <div Style = {"height: 20px; background: #9E9577; margin-bottom: 2.5rem"}></div>
      <div Style = {"color: white; display: flex; flex-direction: row; justify-content: space-around"}>
        <div Style = {"flex-direction: column"}>
          <Admin name='Toma Itagaki' title='President' image= {require('../assets/profilePictures/TomaItagaki.png')} major='Neuroscience & Electrical Engineering 2023' minor='' blurb='My goal is to collaborate with fellow students on neurotech projects, and interconnect the larger neurotech community at the University of Washington.'/>
          <Admin name='Kirsten Graham' title='Hackjam Team Lead' image= {require('../assets/profilePictures/KirstenGraham.jpeg')} major='Computer Science 2023' minor='' blurb="I initially joined synaptech because I am obsessed with how the brain's efficiency can be hacked by technologies , and I wanted to join Synaptech's weekly hack sessions where students could experiment with these technologies. I as spent more time attending these sessions, I realized this was the perfect opportunity to immerse myself in all things neurotech. Synaptech has built a remarkable community of students passionate about Neurotech by providing the resources, opportunities and exposure to learning about these technologies and getting involved in projects incorporating these technologies."/>
          <Admin name='Alejandro Striefel' title='Website Team Lead' image= {require('../assets/profilePictures/AlejandroStriefel.jpg')} major='Human Centered Design & Engineering 2023' minor='Minor in Computational Neuroscience' blurb="I've been incredibly interested in neurotechnology ever since highschool, which brought me immediately to Synaptech as an incoming freshman. Subscribing to their newsletter brought me to their first HackJam which then led into several projects working with them. I am particularly interested in the motor cortex and decoding motion from neural activity, and as thus I have been working to build the necessary skills to do this through Synaptech."/>
        </div>
        <div Style = {"flex-direction: column"}>
          <Admin name='Pierre Karashchuk' title='Officer' image= {require('../assets/profilePictures/PierreKarashchuk.jpg')} major='Neuroscience (PhD) 2023' minor='' blurb='Interfacing with the brain is cool but also daunting. Neurotech is one of the most interdisciplinary fields and Synaptech provides a community in which every student, irrespective of their education, can contribute to exciting neurotech projects!'/>
          <Admin name='Chetana Iyer' title='Funding Manager' image= {require('../assets/profilePictures/ChetanaIyer.jpg')} major='Electrical Engineering 2023' minor='' blurb='I joined Synaptech because I wanted to work on cool projects around neurotech with others. We made so many cool things, but I particularly enjoyed playing a Tron game collaboratively, where I controlled left/right with my arms and another person controlled up/down.'/>
        </div>
      </div> */}
      <div className="AdminInfo" Style = {"color: white; display: flex; flex-direction: column; justify-content: center; align-items: center"}>
        <Admin name='Toma Itagaki' title='President' image= {require('../assets/profilePictures/TomaItagaki.png')} major='Neuroscience & Electrical Engineering 2023' minor='' blurb='My goal is to collaborate with fellow students on neurotech projects, and interconnect the larger neurotech community at the University of Washington.'/>
        <Admin name='Kirsten Graham' title='Hackjam Team Lead' image= {require('../assets/profilePictures/KirstenGraham.jpeg')} major='Computer Science 2023' minor='' blurb="I initially joined synaptech because I am obsessed with how the brain's efficiency can be hacked by technologies , and I wanted to join Synaptech's weekly hack sessions where students could experiment with these technologies. I as spent more time attending these sessions, I realized this was the perfect opportunity to immerse myself in all things neurotech. Synaptech has built a remarkable community of students passionate about Neurotech by providing the resources, opportunities and exposure to learning about these technologies and getting involved in projects incorporating these technologies."/>
        <Admin name='Alejandro Striefel' title='Website Team Lead' image= {require('../assets/profilePictures/AlejandroStriefel.jpg')} major='Human Centered Design & Engineering 2023' minor='Minor in Computational Neuroscience' blurb="I've been incredibly interested in neurotechnology ever since highschool, which brought me immediately to Synaptech as an incoming freshman. Subscribing to their newsletter brought me to their first HackJam which then led into several projects working with them. I am particularly interested in the motor cortex and decoding motion from neural activity, and as thus I have been working to build the necessary skills to do this through Synaptech."/>
        <Admin name='Pierre Karashchuk' title='Officer' image= {require('../assets/profilePictures/PierreKarashchuk.jpg')} major='Neuroscience (PhD) 2023' minor='' blurb='Interfacing with the brain is cool but also daunting. Neurotech is one of the most interdisciplinary fields and Synaptech provides a community in which every student, irrespective of their education, can contribute to exciting neurotech projects!'/>
        <Admin name='Chetana Iyer' title='Funding Manager' image= {require('../assets/profilePictures/ChetanaIyer.jpg')} major='Electrical Engineering 2023' minor='' blurb='I joined Synaptech because I wanted to work on cool projects around neurotech with others. We made so many cool things, but I particularly enjoyed playing a Tron game collaboratively, where I controlled left/right with my arms and another person controlled up/down.'/>
      </div>

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

      <div className="EndBlurb" Style = {"text-align: center; padding: 5rem 1rem"}>
        <h2>Want to join in on the fun?</h2>
        <h2>Send us an email from your UW account!</h2>
      </div>
      {/* <SetPageScroll pageName = "OurTeam" pageScroll = {scrollPos} /> */}
    </>
  );
}

export default OurTeam;
