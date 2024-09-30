import React, { useEffect, useState } from "react";
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
            <Admin sizing = {"two_columns"} name='Catherine Rasgaitis' title='President' image= {'assets/profilePictures/CatherineRasgaitis.png'} major='Computer Science' minor='' blurb={<><p>Hi, I’m Catherine Rasgaitis and I’m the President of Synaptech. I’m a Computer Science major, primarily focusing on artificial intelligence. I’m also planning to double major in Neuroscience! This marks my second year both at UW and Synaptech, so I’m really excited to continue my journey here! I think that the intersection between technology and neuroscience has so much potential for innovation. Hopefully, I can help foster some really cool conversations and projects about neurotech.</p></>}/>
            <Admin sizing = {"two_columns"} name='Alek Helgesen-Thompson' title='Secretary' image= {'assets/profilePictures/AlekHelgesen-Thompson.png'} major='Electrical & Computer Engineering' minor='' blurb={ <p>My name is Alek Helgesen-Thompson, I am the secretary of Synaptech. I am majoring in Electrical & Computer Engineering, and I plan to minor in Computational Neuroscience & Engineering. I am currently a sophomore, and I joined Synaptech since I really enjoy using Machine Learning, and Artificial Intelligence for real life uses.</p>}/>
            <Admin sizing = {"two_columns"} name='Harshil Sharma' title='Hardware Manager' image= {'assets/profilePictures/HarshilSharma.png'} major='Applied Mathematics; Electrical & Computer Engineering' minor='' blurb= {<p>I'm Harshil, this year's Hardware Manager. I'm a class of 2026 double degree in Applied Mathematics and Electrical and Computer Engineering. I was interested in theoretical neuroscience and joined Synaptech to explore the adjacent applications. The overall interdisciplinary nature of the field along with the opportunity for productive projects drew me in. If you'd like to work with or learn more about the hardware we have or have suggestions for new hardware, please let me know!</p> } />
            <Admin sizing = {"two_columns"} name='Alejandro Striefel' title='Website Team Lead' image= {'assets/profilePictures/AlejandroStriefel.jpg'} major='Human Centered Design & Engineering' minor='Minor in Computational Neuroscience' blurb= {<p>I'm Alejandro Striefel, the web-dev for Synaptech. I've been incredibly interested in neurotechnology ever since highschool, which brought me immediately to Synaptech as an incoming freshman. Subscribing to their newsletter brought me to their first HackJam which then led into several projects working with them. I am particularly interested in the motor cortex and decoding motion from neural activity. I've been staying connected as an Alum to continue to do just that. </p> } />
            
          </div>
          <div Style = {"flex-direction: column; padding-right: 10rem; padding-left: 2rem; width:50vw"}>
            <Admin sizing = {"two_columns"} name='Joanna Zhou' title='Vice President' image= {'/assets/profilePictures/Joanna.png'} major='Electrical & Computer Engineering' minor='' blurb= { <p> Hi! I’m Joanna Zhou, the Vice President of Synaptech for the 2024-2025 academic year. As a second-year Electrical & Computer Engineering major with a focus on biosignal processing, I’m passionate about the innovative ideas and potentials in the rapidly developing field of Neurotech. Synaptech is a supportive community dedicated to exploring the frontiers of Neural Technology & Engineering through projects, workshops and general meetings. We’re excited to share our resources and insights with you, and I hope you’ll enjoy your time with us! </p> } />
            <Admin sizing = {"two_columns"} name='Ruslana Korolov' title='Social Media Manager' image= {'assets/profilePictures/Ruslana.png'} major='Electrical & Computer Science' minor='Minor in Data Science' blurb={ <p>My name is Ruslana Korolov and I am Synaptech’s Media Intern. I am intending to major in Electrical & Computer Science with a minor in Data Science. I am currently a freshman and I joined Synaptech because I wanted to get more involved with neurotechnology through being apart of exciting projects!</p> }/>
            <Admin sizing = {"two_columns"} name='Daniel Zheng' title='ESC Representative' image= {'/assets/profilePictures/Daniel.png'} major='Mechanical Engineering' minor='' blurb={ <p>I'm Daniel Zheng, the ESC representative of the club. I'm a second year student in Mechanical Engineering, but also interested in some areas in electrical engineering like signal processing.</p> }/>
          </div>
        </div>

      :

          <div className="AdminInfo" Style = {"color: white; display: flex; flex-direction: column; justify-content: center; align-items: center; padding-left: 4rem; padding-right: 4rem; font-size: 1.25rem;"}>
            <Admin sizing = {"single_column"} name='Catherine Rasgaitis' title='President' image= {'assets/profilePictures/CatherineRasgaitis.png'} major='Computer Science' minor='' blurb={<><p>Hi, I’m Catherine Rasgaitis and I’m the President of Synaptech. I’m a Computer Science major, primarily focusing on artificial intelligence. I’m also planning to double major in Neuroscience! This marks my second year both at UW and Synaptech, so I’m really excited to continue my journey here! I think that the intersection between technology and neuroscience has so much potential for innovation. Hopefully, I can help foster some really cool conversations and projects about neurotech.</p></>}/>
            <Admin sizing = {"single_column"} name='Joanna Zhou' title='Vice President' image= {'/assets/profilePictures/Joanna.png'} major='Electrical & Computer Engineering' minor='' blurb= { <p> Hi! I’m Joanna Zhou, the Vice President of Synaptech for the 2024-2025 academic year. As a second-year Electrical & Computer Engineering major with a focus on biosignal processing, I’m passionate about the innovative ideas and potentials in the rapidly developing field of Neurotech. Synaptech is a supportive community dedicated to exploring the frontiers of Neural Technology & Engineering through projects, workshops and general meetings. We’re excited to share our resources and insights with you, and I hope you’ll enjoy your time with us! </p> } />
            <Admin sizing = {"single_column"} name='Alek Helgesen-Thompson' title='Secretary' image= {'assets/profilePictures/AlekHelgesen-Thompson.png'} major='Electrical & Computer Engineering' minor='' blurb={ <p>My name is Alek Helgesen-Thompson, I am the secretary of Synaptech. I am majoring in Electrical & Computer Engineering, and I plan to minor in Computational Neuroscience & Engineering. I am currently a sophomore, and I joined Synaptech since I really enjoy using Machine Learning, and Artificial Intelligence for real life uses.</p>}/>
            <Admin sizing = {"single_column"} name='Harshil Sharma' title='Hardware Manager' image= {'assets/profilePictures/HarshilSharma.png'} major='Applied Mathematics; Electrical & Computer Engineering' minor='' blurb= {<p>I'm Harshil, this year's Hardware Manager. I'm a class of 2026 double degree in Applied Mathematics and Electrical and Computer Engineering. I was interested in theoretical neuroscience and joined Synaptech to explore the adjacent applications. The overall interdisciplinary nature of the field along with the opportunity for productive projects drew me in. If you'd like to work with or learn more about the hardware we have or have suggestions for new hardware, please let me know!</p> } />
            <Admin sizing = {"single_column"}  name='Daniel Zheng' title='ESC Representative' image= {'/assets/profilePictures/Daniel.png'} major='Mechanical Engineering' minor='' blurb={ <p>I'm Daniel Zheng, the ESC representative of the club. I'm a second year student in Mechanical Engineering, but also interested in some areas in electrical engineering like signal processing.</p> }/>
            <Admin sizing = {"single_column"} name='Ruslana Korolov' title='Social Media Manager' image= {'assets/profilePictures/Ruslana.png'} major='Electrical & Computer Science' minor='Minor in Data Science' blurb={ <p>My name is Ruslana Korolov and I am Synaptech’s Media Manager. I am intending to major in Electrical & Computer Science with a minor in Data Science. I am currently a freshman and I joined Synaptech because I wanted to get more involved with neurotechnology through being apart of exciting projects!</p> }/>
            <Admin sizing = {"single_column"} name='Alejandro Striefel' title='Website Team Lead' image= {'assets/profilePictures/AlejandroStriefel.jpg'} major='Human Centered Design & Engineering' minor='Minor in Computational Neuroscience' blurb= {<p>I'm Alejandro Striefel, the web-dev for Synaptech. I've been incredibly interested in neurotechnology ever since highschool, which brought me immediately to Synaptech as an incoming freshman. Subscribing to their newsletter brought me to their first HackJam which then led into several projects working with them. I am particularly interested in the motor cortex and decoding motion from neural activity. I've been staying connected as an Alum to continue to do just that. </p> } />
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