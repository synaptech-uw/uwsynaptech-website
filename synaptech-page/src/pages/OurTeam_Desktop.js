import React, { useEffect } from "react";
import useScrollPosition from "../Components/useScrollPosition";
import "../styles/Styles.css";
//import "../styles/OurTeamStyles.css";
import ThreeDBrainBG from '../Components/OurTeam_Background.js'
import Navbar from "../Components/Navbar.js"
import Admin from "../Components/Admin.js";
import Alumni from "../Components/Alumni.js";

const SIZE_THRESHOLD = 1064;

function OurTeamDesktop() {
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
      <div Style = {"color: white; display: flex; flex-direction: row; justify-content: right; padding-right: 12rem; padding-top: 4rem"}>
        <h2>Administration</h2>
      </div>
      <div Style = {"height: 1.5rem; background: #9E9577; margin-bottom: 2.5rem;"}></div>

      {(window.innerWidth > SIZE_THRESHOLD) ? 
    
        <div Style = {"color: white; display: flex; flex-direction: row; justify-content: space-around;"}>
          <div Style = {"flex-direction: column; padding-left: 10rem; padding-right:2rem; width: 50vw"}>
            <Admin name='Toma Itagaki' title='President' image= {require('../assets/profilePictures/TomaItagaki.png')} major='Neuroscience & Electrical Engineering 2023' minor='' blurb={<><p>Interfacing with the brain is cool but also daunting. Neurotech is one of the most interdisciplinary fields and Synaptech provides a community in which every student, irrespective of their education, can contribute to exciting neurotech projects!</p> <p>My goal is to collaborate with fellow students on neurotech projects, and interconnect the larger neurotech community at the University of Washington.</p></>}/>
            <Admin name='Kirsten Graham' title='Hackjam Team Lead' image= {require('../assets/profilePictures/KirstenGraham.jpeg')} major='Computer Science 2023' minor='' blurb={ <p> I joined Synaptech to learn about neurotech, build technical skills, and work on projects with an amazing group of people! Before joining, I had no experience with brain-computer interfaces, but I’ve since had the opportunity to work with a variety of hardware and help others get involved in neural engineering. I look forward to building more long-term projects and expanding access to neurotech in the UW community!</p>}/>
            <Admin name='Alejandro Striefel' title='Website Team Lead' image= {require('../assets/profilePictures/AlejandroStriefel.jpg')} major='Human Centered Design & Engineering 2023' minor='Minor in Computational Neuroscience' blurb= {<p> I've been incredibly interested in neurotechnology ever since highschool, which brought me immediately to Synaptech as an incoming freshman. Subscribing to their newsletter brought me to their first HackJam which then led into several projects working with them. I am particularly interested in the motor cortex and decoding motion from neural activity, and as thus I have been working to build the necessary skills to do this through Synaptech. </p> } />
          </div>
          <div Style = {"flex-direction: column; padding-right: 10rem; padding-left: 2rem; width:50vw"}>
            <Admin name='Pierre Karashchuk' title='Officer' image= {require('../assets/profilePictures/PierreKarashchuk.jpg')} major='Neuroscience (PhD) 2023' minor='' blurb= { <p> I joined Synaptech because I wanted to work on cool projects around neurotech with others. We made so many cool things, but I particularly enjoyed playing a Tron game collaboratively, where I controlled left/right with my arms and another person controlled up/down.' </p>}/>
            <Admin name='Chetana Iyer' title='Funding Manager' image= {require('../assets/profilePictures/ChetanaIyer.jpg')} major='Electrical Engineering 2023' minor='' blurb={ <p> I initially joined synaptech because I am obsessed with how the brain's efficiency can be hacked by technologies , and I wanted to join Synaptech's weekly hack sessions where students could experiment with these technologies. I as spent more time attending these sessions, I realized this was the perfect opportunity to immerse myself in all things neurotech. Synaptech has built a remarkable community of students passionate about Neurotech by providing the resources, opportunities and exposure to learning about these technologies and getting involved in projects incorporating these technologies.</p> }/>
          </div>
        </div>

      :

          <div className="AdminInfo" Style = {"color: white; display: flex; flex-direction: column; justify-content: center; align-items: center; padding-left: 10rem; padding-right: 10rem;"}>
            <Admin name='Toma Itagaki' title='President' image= {require('../assets/profilePictures/TomaItagaki.png')} major='Neuroscience & Electrical Engineering 2023' minor='' blurb={<><p>Interfacing with the brain is cool but also daunting. Neurotech is one of the most interdisciplinary fields and Synaptech provides a community in which every student, irrespective of their education, can contribute to exciting neurotech projects!</p> <p>My goal is to collaborate with fellow students on neurotech projects, and interconnect the larger neurotech community at the University of Washington.</p></>}/>
            <Admin name='Pierre Karashchuk' title='Officer' image= {require('../assets/profilePictures/PierreKarashchuk.jpg')} major='Neuroscience (PhD) 2023' minor='' blurb= { <p> I joined Synaptech because I wanted to work on cool projects around neurotech with others. We made so many cool things, but I particularly enjoyed playing a Tron game collaboratively, where I controlled left/right with my arms and another person controlled up/down.' </p>}/> 
            <Admin name='Kirsten Graham' title='Hackjam Team Lead' image= {require('../assets/profilePictures/KirstenGraham.jpeg')} major='Computer Science 2023' minor='' blurb={ <p> I joined Synaptech to learn about neurotech, build technical skills, and work on projects with an amazing group of people! Before joining, I had no experience with brain-computer interfaces, but I’ve since had the opportunity to work with a variety of hardware and help others get involved in neural engineering. I look forward to building more long-term projects and expanding access to neurotech in the UW community!</p>}/>
            <Admin name='Chetana Iyer' title='Funding Manager' image= {require('../assets/profilePictures/ChetanaIyer.jpg')} major='Electrical Engineering 2023' minor='' blurb={ <p> I initially joined synaptech because I am obsessed with how the brain's efficiency can be hacked by technologies , and I wanted to join Synaptech's weekly hack sessions where students could experiment with these technologies. I as spent more time attending these sessions, I realized this was the perfect opportunity to immerse myself in all things neurotech. Synaptech has built a remarkable community of students passionate about Neurotech by providing the resources, opportunities and exposure to learning about these technologies and getting involved in projects incorporating these technologies.</p> }/>
            <Admin name='Alejandro Striefel' title='Website Team Lead' image= {require('../assets/profilePictures/AlejandroStriefel.jpg')} major='Human Centered Design & Engineering 2023' minor='Minor in Computational Neuroscience' blurb= {<p> I've been incredibly interested in neurotechnology ever since highschool, which brought me immediately to Synaptech as an incoming freshman. Subscribing to their newsletter brought me to their first HackJam which then led into several projects working with them. I am particularly interested in the motor cortex and decoding motion from neural activity, and as thus I have been working to build the necessary skills to do this through Synaptech. </p> }/>
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
        <h2>Send us an email from your UW account!</h2>
      </div>
      {/* <SetPageScroll pageName = "OurTeam" pageScroll = {scrollPos} /> */}
    </>
  );
}

export default OurTeamDesktop;