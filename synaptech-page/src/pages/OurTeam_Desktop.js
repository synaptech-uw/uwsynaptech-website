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
            <Admin sizing = {"two_columns"} name='Catherine Rasgaitis' title='President' image= {'assets/profilePictures/CatherineRasgaitis.png'} major='Computer Science' minor='Computational Neuroscience' blurb={<><p>Hi, I’m Catherine Rasgaitis and I’m the President of Synaptech. I’m a Computer Science major, primarily focusing on artificial intelligence. I’m also planning to double major in Neuroscience! This marks my second year both at UW and Synaptech, so I’m really excited to continue my journey here! I think that the intersection between technology and neuroscience has so much potential for innovation. Hopefully, I can help foster some really cool conversations and projects about neurotech.</p></>}/>
            <Admin sizing = {"two_columns"} name='Lincoln Mansbach' title='Treasurer' image= {'assets/profilePictures/lincoln_pic.webp'} major='Electrical & Computer Engineering' minor='' blurb={ <p>Hi, I'm Lincoln! I'm the treasurer for Synaptech this year, and currently a sophomore in the class of 27'. My current interest is in computer architecture and signal processing, and how we can use our preexisting technology and ideas to try to solve new issues. I joined Synaptech because I saw that they were utilizing very interesting and useful technology, that I knew nothing about. I was part of Opticars last year, working on the hardware side of making an eye-controlled car, and this have been working on keeping Synaptech organized, and with money.</p>}/>
            <Admin sizing = {"two_columns"} name='Harshil Sharma' title='Hardware Manager' image= {'assets/profilePictures/HarshilSharma.png'} major='Applied Mathematics; Electrical & Computer Engineering' minor='' blurb= {<p>I'm Harshil, this year's Hardware Manager. I'm a class of 2026 double degree in Applied Mathematics and Electrical and Computer Engineering. I was interested in theoretical neuroscience and joined Synaptech to explore the adjacent applications. The overall interdisciplinary nature of the field along with the opportunity for productive projects drew me in. If you'd like to work with or learn more about the hardware we have or have suggestions for new hardware, please let me know!</p> } />
            <Admin sizing = {"two_columns"} name='Evan Wu' title='Secretary' image= {'assets/profilePictures/evan_img.jpg'} major = 'Computer Engineering' minor='' blurb = {<p> Hi! I'm Evan, this year's Secretary. I'm a Computer Engineering Major in the class of 2027. I've been interested in the human brain and neurotechnology for a long time, and joined Synaptech because of all the cool devices. The team-based projects and capacity for exploration reminds me a lot of the robotics I did previously. Most of the work I do is behind the scenes, but I'm interested in participating in projects this year too!</p>} />
            <Admin sizing = {"two_columns"} name='Alejandro Striefel' title='Website Team Lead' image= {'assets/profilePictures/AlejandroStriefel.jpg'} major='Human Centered Design & Engineering' minor='Minor in Computational Neuroscience' blurb= {<p>I'm Alejandro Striefel, the web-dev for Synaptech. I've been incredibly interested in neurotechnology ever since highschool, which brought me immediately to Synaptech as an incoming freshman. Subscribing to their newsletter brought me to their first HackJam which then led into several projects working with them. I am particularly interested in the motor cortex and decoding motion from neural activity. I've been staying connected as an Alum to continue to do just that. </p> } />
            
          </div>
          
          <div Style = {"flex-direction: column; padding-right: 10rem; padding-left: 2rem; width:50vw"}> 
            <Admin sizing = {"two_columns"} name='Joanna Zhou' title='Vice President' image= {'assets/profilePictures/Joanna.png'} major='Electrical & Computer Engineering' minor='' blurb= { <p> Hi! I’m Joanna Zhou, the Vice President of Synaptech for the 2024-2025 academic year. As a second-year Electrical & Computer Engineering major with a focus on biosignal processing, I’m passionate about the innovative ideas and potentials in the rapidly developing field of Neurotech. Synaptech is a supportive community dedicated to exploring the frontiers of Neural Technology & Engineering through projects, workshops and general meetings. We’re excited to share our resources and insights with you, and I hope you’ll enjoy your time with us! </p> } />
            <Admin sizing = {"two_columns"} name='Ruslana Korolov' title='Social Media Manager' image= {'assets/profilePictures/RuslanaKorolov.png'} major='Electrical & Computer Engineering'  blurb={ <p>My name is Ruslana Korolov and I am Synaptech’s Social Media Manager. I am intending to major in Electrical & Computer Engineering. I am currently a second-year and I joined Synaptech because I wanted to get more involved with neurotechnology through being apart of exciting projects!</p> }/>
            <Admin sizing = {"two_columns"} name='Daniel Zheng' title='ESC Representative' image={'/assets/profilePictures/Daniel.png'} major='Mechanical Engineering' minor='' blurb={ <p>I'm Daniel Zheng, the ESC representative of the club. I'm a second year student in Mechanical Engineering, but also interested in some areas in electrical engineering like signal processing.</p> }/>
            <Admin sizing = {"two_columns"} name='Graham Cobden' title='Allen Affiliate Representative' image= {'assets/profilePictures/Graham.jpg'} major='Computer Science' minor='' blurb= {<p>Hi, I’m Graham! This year, I’m one of Synaptech’s Allen School Representatives. I’m a class of 2027 computer science major interested in the intersection between technology and psychology. I joined Synaptech because they offered informational meetings and projects in the realm of neuroscience and related technologies. During my freshman year I was a member of the Opticars team, a fun robotics project that we presented at the UW master’s research showcase.</p> } />
            <Admin sizing = {"two_columns"} name='Dani Ballesteros' title='Allen Affiliate Representative' image= {'assets/profilePictures/Dani.webp'} major='Computer Science' minor='' blurb={ <p>Hi, I’m Dani and I’m an Allen Rep here at Synaptech! I’m a Computer Science major, primarily focused on Graphics and Computer Vision (Eventually). I’m also planning to minor in Professional and Technical Writing! While it’s only my first year here at both UW and Synaptech, I’m really excited to get involved in research and the community as a whole. I believe that culture building is critical towards the development of great achievements and research, and I joined Synaptech because you get to work with people from all educational backgrounds and sectors! If you see me around, feel free to say hi!</p> }/>
            
          </div>
        </div>

      :

          <div className="AdminInfo" Style = {"color: white; display: flex; flex-direction: column; justify-content: center; align-items: center; padding-left: 4rem; padding-right: 4rem; font-size: 1.25rem;"}>
            <Admin sizing = {"single_column"} name='Catherine Rasgaitis' title='President' image= {'assets/profilePictures/CatherineRasgaitis.png'} major='Computer Science' minor='' blurb={<><p>Hi, I’m Catherine Rasgaitis and I’m the President of Synaptech. I’m a Computer Science major, primarily focusing on artificial intelligence. I’m also planning to double major in Neuroscience! This marks my second year both at UW and Synaptech, so I’m really excited to continue my journey here! I think that the intersection between technology and neuroscience has so much potential for innovation. Hopefully, I can help foster some really cool conversations and projects about neurotech.</p></>}/>
            <Admin sizing = {"single_column"} name='Joanna Zhou' title='Vice President' image= {'/assets/profilePictures/Joanna.png'} major='Electrical & Computer Engineering' minor='' blurb= { <p> Hi! I’m Joanna Zhou, the Vice President of Synaptech for the 2024-2025 academic year. As a second-year Electrical & Computer Engineering major with a focus on biosignal processing, I’m passionate about the innovative ideas and potentials in the rapidly developing field of Neurotech. Synaptech is a supportive community dedicated to exploring the frontiers of Neural Technology & Engineering through projects, workshops and general meetings. We’re excited to share our resources and insights with you, and I hope you’ll enjoy your time with us! </p> } />
            <Admin sizing = {"single_column"} name='Lincoln Mansbach' title='Treasurer' image= {'assets/profilePictures/lincoln_pic.webp'} major='Electrical & Computer Engineering' minor='' blurb={ <p>Hi, I'm Lincoln! I'm the treasurer for Synaptech this year, and currently a sophomore in the class of 27'. My current interest is in computer architecture and signal processing, and how we can use our preexisting technology and ideas to try to solve new issues. I joined Synaptech because I saw that they were utilizing very interesting and useful technology, that I knew nothing about. I was part of Opticars last year, working on the hardware side of making an eye-controlled car, and this have been working on keeping Synaptech organized, and with money.</p>}/>
            <Admin sizing = {"single_column"} name='Harshil Sharma' title='Hardware Manager' image= {'assets/profilePictures/HarshilSharma.png'} major='Applied Mathematics; Electrical & Computer Engineering' minor='' blurb= {<p>I'm Harshil, this year's Hardware Manager. I'm a class of 2026 double degree in Applied Mathematics and Electrical and Computer Engineering. I was interested in theoretical neuroscience and joined Synaptech to explore the adjacent applications. The overall interdisciplinary nature of the field along with the opportunity for productive projects drew me in. If you'd like to work with or learn more about the hardware we have or have suggestions for new hardware, please let me know!</p> } />
            <Admin sizing = {"single_column"} name='Evan Wu' title='Secretary' image= {'assets/profilePictures/evan_img.jpg'} major = 'Computer Engineering' minor='' blurb = {<p> Hi! I'm Evan, this year's Secretary. I'm a Computer Engineering Major in the class of 2027. I've been interested in the human brain and neurotechnology for a long time, and joined Synaptech because of all the cool devices. The team-based projects and capacity for exploration reminds me a lot of the robotics I did previously. Most of the work I do is behind the scenes, but I'm interested in participating in projects this year too!</p>} />
            <Admin sizing = {"single_column"}  name='Daniel Zheng' title='ESC Representative' image= {'/assets/profilePictures/Daniel.png'} major='Mechanical Engineering' minor='' blurb={ <p>I'm Daniel Zheng, the ESC representative of the club. I'm a second year student in Mechanical Engineering, but also interested in some areas in electrical engineering like signal processing.</p> }/>
            <Admin sizing = {"single_column"} name='Ruslana Korolov' title='Social Media Manager' image= {'assets/profilePictures/Ruslana.png'} major='Electrical & Computer Science' minor='Minor in Data Science' blurb={ <p>My name is Ruslana Korolov and I am Synaptech’s Media Manager. I am intending to major in Electrical & Computer Science with a minor in Data Science. I am currently a freshman and I joined Synaptech because I wanted to get more involved with neurotechnology through being apart of exciting projects!</p> }/>
            <Admin sizing = {"single_column"} name='Alejandro Striefel' title='Website Team Lead' image= {'assets/profilePictures/AlejandroStriefel.jpg'} major='Human Centered Design & Engineering' minor='Minor in Computational Neuroscience' blurb= {<p>I'm Alejandro Striefel, the web-dev for Synaptech. I've been incredibly interested in neurotechnology ever since highschool, which brought me immediately to Synaptech as an incoming freshman. Subscribing to their newsletter brought me to their first HackJam which then led into several projects working with them. I am particularly interested in the motor cortex and decoding motion from neural activity. I've been staying connected as an Alum to continue to do just that. </p> } />
            <Admin sizing = {"single_column"}  name='Dani Ballesteros' title='Allen Affiliate Representative' image= {'/assets/profilePictures/Daniel.png'} major='Mechanical Engineering' minor='' blurb={ <p>Hi, I’m Dani and I’m an Allen Rep here at Synaptech! I’m a Computer Science major, primarily focused on Graphics and Computer Vision (Eventually). I’m also planning to minor in Professional and Technical Writing! While it’s only my first year here at both UW and Synaptech, I’m really excited to get involved in research and the community as a whole. I believe that culture building is critical towards the development of great achievements and research, and I joined Synaptech because you get to work with people from all educational backgrounds and sectors! If you see me around, feel free to say hi!</p> }/>
            <Admin sizing = {"single_column"}  name='Graham Cobden' title='Allen Affiliate Representative' image= {'/assets/profilePictures/graham_pic.png'} major = 'Computer Science' minor='' blurb={ <p>Hi, I’m Graham! This year, I’m one of Synaptech’s Allen School Representatives. I’m a class of 2027 computer science major interested in the intersection between technology and psychology. I joined Synaptech because they offered informational meetings and projects in the realm of neuroscience and related technologies. During my freshman year I was a member of the Opticars team, a fun robotics project that we presented at the UW master’s research showcase.</p>}/>
            </div>  /* add graham */
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