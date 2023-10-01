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
            <Admin sizing = {"two_columns"} name='Harshil Sharma' title='Hardware Manager' image= {'assets/profilePictures/HarshilSharma.png'} major='Applied Mathematics' minor='' blurb= {<p>I'm Harshil, this year's Hardware Manager. I'm a class of 2026 applied mathematics major. I was interested in theoretical neuroscience and joined Synaptech to explore the adjacent applications. The overall interdisciplinary nature of the field along with the opportunity for productive projects drew me in. I just joined the club last year, so I'm here to learn just as much as anyone else about all the hardware we have!</p> } />
            <Admin sizing = {"two_columns"} name='Alejandro Striefel' title='Website Team Lead' image= {'assets/profilePictures/AlejandroStriefel.jpg'} major='Human Centered Design & Engineering' minor='Minor in Computational Neuroscience' blurb= {<p>I'm Alejandro Striefel, the web-dev for Synaptech. I've been incredibly interested in neurotechnology ever since highschool, which brought me immediately to Synaptech as an incoming freshman. Subscribing to their newsletter brought me to their first HackJam which then led into several projects working with them. I am particularly interested in the motor cortex and decoding motion from neural activity. I've been staying connected as an Alum to continue to do just that. </p> } />
            
          </div>
          <div Style = {"flex-direction: column; padding-right: 10rem; padding-left: 2rem; width:50vw"}>
            <Admin sizing = {"two_columns"} name='Tanmay Bhanushali' title='Vice President' image= {'/assets/profilePictures/TanmayBhanushali.png'} major='Speech & Hearing Sciences' minor='' blurb= { <p>Hi! My name is Tanmay Bhanushali, and I am Synaptech’s Vice President for the 2023-2024 academic year. I am an incoming second year student looking to become a SPHSC student. I joined Synaptech because I found that neurotechnology had an incredibly inclusive and rapidly expanding community, and am excited to explore this newly developing field. Neurotechnology does not need to be restricted to the upper echelons of academia, and Synaptech’s efforts are proof that undergraduates can make amazing contributions in the field.</p>}/>
            <Admin sizing = {"two_columns"} name='Diana Nguyen' title='Social Media Manager' image= {'/assets/profilePictures/PeytonRapo.png'} major='Biochemistry' minor='Bioethics' blurb={ <p>My name is Diana Nguyen and I am Synaptech's Social Media Manager. I am majoring in biochemistery with a minor in bioethics, and I am in my 4th year at UW! I joined Synaptech because I have always been interested in neurotech but couldn't find many opportunities to learn and explore this field. I'm super excited to learn more, and work with everyone on different projects.</p> }/>
            <Admin sizing = {"two_columns"} name='Peyton Rapo' title='Transition Officer' image= {'/assets/profilePictures/PeytonRapo.png'} major='Computer Science' minor='' blurb={ <p>Hi! I'm Peyton Rapo and I am a Transition Officer for Synaptech. I am majoring in computer science with a focus in data science, and I am also minoring in math and stats. This is my fourth year at UW and will be graduating in Winter Quarter. I joined Synaptech because I love the intersection of tech and neuroscience. What made me stay was the great community that this club provides!</p> }/>
          </div>
        </div>

      :

          <div className="AdminInfo" Style = {"color: white; display: flex; flex-direction: column; justify-content: center; align-items: center; padding-left: 4rem; padding-right: 4rem; font-size: 1.25rem;"}>
            <Admin sizing = {"single_column"} name='Catherine Rasgaitis' title='President' image= {'assets/profilePictures/CatherineRasgaitis.png'} major='Computer Science' minor='' blurb={<><p>Hi, I’m Catherine Rasgaitis and I’m the President of Synaptech. I’m a Computer Science major, primarily focusing on artificial intelligence. I’m also planning to double major in Neuroscience! This marks my second year both at UW and Synaptech, so I’m really excited to continue my journey here! I think that the intersection between technology and neuroscience has so much potential for innovation. Hopefully, I can help foster some really cool conversations and projects about neurotech.</p></>}/>
            <Admin sizing = {"single_column"} name='Tanmay Bhanushali' title='Vice President' image= {'assets/profilePictures/TanmayBhanushali.png'} major='Speech & Hearing Sciences' minor='' blurb= { <p>Hi! My name is Tanmay Bhanushali, and I am Synaptech’s Vice President for the 2023-2024 academic year. I am an incoming second year student looking to become a SPHSC student. I joined Synaptech because I found that neurotechnology had an incredibly inclusive and rapidly expanding community, and am excited to explore this newly developing field. Neurotechnology does not need to be restricted to the upper echelons of academia, and Synaptech’s efforts are proof that undergraduates can make amazing contributions in the field.</p>}/>
            <Admin sizing = {"single_column"} name='Alek Helgesen-Thompson' title='Secretary' image= {'assets/profilePictures/AlekHelgesen-Thompson.png'} major='Electrical & Computer Engineering' minor='' blurb={ <p>My name is Alek Helgesen-Thompson, I am the secretary of Synaptech. I am majoring in Electrical & Computer Engineering, and I plan to minor in Computational Neuroscience & Engineering. I am currently a sophomore, and I joined Synaptech since I really enjoy using Machine Learning, and Artificial Intelligence for real life uses.</p>}/>
            <Admin sizing = {"single_column"} name='Harshil Sharma' title='Hardware Manager' image= {'assets/profilePictures/HarshilSharma.png'} major='Applied Mathematics' minor='' blurb= {<p>I'm Harshil, this year's Hardware Manager. I'm a class of 2026 applied mathematics major. I was interested in theoretical neuroscience and joined Synaptech to explore the adjacent applications. The overall interdisciplinary nature of the field along with the opportunity for productive projects drew me in. I just joined the club last year, so I'm here to learn just as much as anyone else about all the hardware we have!</p> } />
            <Admin sizing = {"single_column"} name='Peyton Rapo' title='Transition Officer' image= {'assets/profilePictures/PeytonRapo.png'} major='Computer Science' minor='' blurb={ <p>Hi! I'm Peyton Rapo and I am a Transition Officer for Synaptech. I am majoring in computer science with a focus in data science, and I am also minoring in math and stats. This is my fourth year at UW and will be graduating in Winter Quarter. I joined Synaptech because I love the intersection of tech and neuroscience. What made me stay was the great community that this club provides!</p> }/>
            <Admin sizing = {"single_column"} name='Diana Nguyen' title='Social Media Manager' image= {'assets/profilePictures/PeytonRapo.png'} major='Biochemistry' minor='Minor in Bioethics' blurb={ <p>My name is Diana Nguyen and I am Synaptech's Social Media Manager. I am majoring in biochemistery with a minor in bioethics, and I am in my 4th year at UW! I joined Synaptech because I have always been interested in neurotech but couldn't find many opportunities to learn and explore this field. I'm super excited to learn more, and work with everyone on different projects.</p> }/>
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