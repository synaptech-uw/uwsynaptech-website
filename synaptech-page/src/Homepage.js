import React, { useEffect, useState } from "react";
import useScrollPosition from "./useScrollPosition";
import "./Styles.css";
import ThreeDBrain from "./Homepage_Background";
import Carousel from "./Carousel";
import Carousel2 from "./Carousel2";
import { Vector3 } from "three";
import BrainWindow from "./Homepage_Background_Window";
import Navbar from "./Navbar.js"

function HomePage() {
  const numWindows = 5;
  const winArray = [];
  const refArray = [];
  const raycasts = [];
  //Blurbs will be structured as an array [title, elemsArr[]]
  //These will be passed into the background to render the different elements.

  const blurbs = [];
  const blurbCoords = [];

  const [thresh, setThresh] = useState([]);

  for (let i = 0; i < numWindows; i++) {
    winArray.push(<BrainWindow setRefFunc={(ra) => refArray.push(ra)} />);
  }

  raycasts[0] = { x: 0.15, y: 0.05 };
  raycasts[2] = { x: 0.2, y: -0.1 };
  raycasts[4] = { x: -0.2, y: -0.03 };
  raycasts[6] = { x: -0.15, y: 0 };
  raycasts[8] = { x: -0.05, y: 0.2 };
  raycasts[10] = { x: 0, y: 0 };

  blurbCoords[0] = { x: -0.5, y: -0.1 };
  blurbCoords[2] = { x: -0.5, y: 0.2 };
  blurbCoords[4] = { x: -0.1, y: -0.4 };
  blurbCoords[6] = { x: 0.05, y: -0.3 };
  blurbCoords[8] = { x: -0.1, y: -0.5 };
  blurbCoords[10] = { x: 0, y: 0 };

  blurbs[0] = ["Neurotech Development @ UW", [<p>
    Synaptech serves as University of Washington’s sole project-based neurotech club, hosting opportunities to hack and develop various neurotech projects. From HackJams to long-term projects, students can look to gain real experience with neural interfaces and neural data.
  </p>]]

  blurbs[2] = ["What to expect", [<p>All of us here at Synaptech are students interested in a highly challenging and future-focused field. We work hard to foster a strong community of
     neuroengineers that can operate and communicate interdisciplinarily.
  </p>]]

  blurbs[4] = ["Build a BCI", [<p>Synaptech supplies students with hardware that they can use to undertake personal projects as well, hack your muscles with EMG or your brain with EEG! </p>]]

  blurbs[6] = ["Feeling unprepared?", [<p> Synaptech offers workshops to help prepare students for their Hackathons, to ensure everyone feels prepared to attempt their dream project! Check out our upcoming events! </p>]]

  blurbs[8] = ["Prospective members", [<p>Reach out to synaptechuw@gmail.com with your uw.edu email, and we will send you steps to join our community!</p>, <p>Don't feel discouraged just because you don't see an immediate use for your skillset; neuroengineering is an extremely diverse field!</p>]]

  blurbs[10] = [null, [null, null]];

  for (let n = 1; n < numWindows*2; n = n + 2) {
    raycasts[n] = raycasts[n-1];
    blurbCoords[n] = blurbCoords[n-1];
    blurbs[n] = blurbs[n-1];
  }

  const targetVecs = new Array(2 * numWindows);
  const vecZ = 8;
  const vecZ2 = 3;
  targetVecs[0] = new Vector3(0, 0, vecZ);
  targetVecs[1] = new Vector3(0, 2, vecZ2);
  targetVecs[2] = new Vector3(0, 0, vecZ);
  targetVecs[3] = new Vector3(3, 1, vecZ2);
  targetVecs[4] = new Vector3(0, 0, vecZ);
  targetVecs[5] = new Vector3(0, -2, vecZ2);
  targetVecs[6] = new Vector3(0, 0, vecZ);
  targetVecs[7] = new Vector3(1, 1, vecZ2);
  targetVecs[8] = new Vector3(0, 0, vecZ);
  targetVecs[9] = new Vector3(-3, 3, 0);
  targetVecs[10] = new Vector3(0, 0, vecZ);

  var windowsRendered = false;



  useEffect(() => {
    if (refArray.length === numWindows) {
      windowsRendered = true;
    }
  }, [refArray.length]);

  // MAKE SURE TO MAKE THIS UPDATE ON RESIZE AS WELL
  function setThresholds() {
    //console.log("windowsRendered", windowsRendered);
    if (windowsRendered === true) {
      const thresholds = [];
      for (let i = 0; i < numWindows; i++) {
        const element = refArray[i].current;
        const threshStart =
          element.offsetTop - window.innerHeight / 2;
        const threshEnd =
          element.offsetTop - window.innerHeight / 2 + element.clientHeight;
        thresholds[i * 2] = threshStart; //[threshStart, threshEnd];
        thresholds[i * 2 + 1] = threshEnd;
        // console.log(thresholds[i]);
        // console.log("THRESHOLDS", thresholds.length);
        //TEST PROPERTIES, THESE WILL NEED TO BE MANUALLY SET LATER
        // targetVecs[ i*2 ] = (new Vector3(0, 0, 3));
        // targetVecs[ (i*2) +1  ] = (new Vector3(0, 2, 3));

        //const cast = new Vector2();
        //cast.x = 0.1;
        //cast.y = 0.1;
        //raycasts[i * 2] = cast;
        // raycasts[(i * 2) + 1] = cast;
      }
      setThresh(thresholds);
    }
  }
  const [introClass, setIntroClass] = useState("Welcome");

  useEffect(() => setThresholds(), []);

  useEffect(() => {
    window.addEventListener("resize", setThresholds);
  }, []);

  const scrollPos = useScrollPosition();

  const testText = [];
  testText[0] = <p>The fitnessgram pacer test is a multistage</p>;
  return (
    <>
      <head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Bungee&family=Inconsolata&family=Open+Sans:wght@800&family=Roboto:wght@400;900&display=swap');
        </style>
      </head>
      <Navbar show = { (scrollPos > 1) ? "Header" : "Header-Hidden" } />
      <div className={ !(scrollPos > 1) ? "Welcome" : "Welcome-Scrolled" }>
        {/* Make this header slide upwards quickly as soon as the scrollY !==0 */}
        <header className="App-header">
          <img
            src={"/assets/dark_synaptech_logo_transparent.png"}
            className="App-logo"
            alt="logo"
          />
        </header>
        {/* <Carousel2 /> */}
      </div>


      {/* Change props to list of vectors with varying points, maybe I can do a list of like x and y
    values instead. Otherwise, we'll also need to pass in a couple waypoints, being the y value of
    the other elements in the return. Getting these y values is the next step. Then we just
    have to evaluate the step in the array and move forward or backward depending on the evaluation
    */}
      <ThreeDBrain
        userScroll={scrollPos}
        targets={targetVecs}
        thresholds={thresh}
        rays={raycasts}
        blurb = {blurbs}
        blurbCoords = {blurbCoords}
      />

      {/* New goal here is to get a homepage logo in, preferrably a menu bar though it may not function
    and start getting some text into the page.  */}
      <div className="Body">
        <div Style={"height:70vh"}>
        </div>
        <p className = {(scrollPos > 1) ? "Welcome-Text" : "Welcome-Text-hidden"}>
          Welcome to Synaptech, the University of Washington's Undergraduate Neurotechnology RSO
        </p>
      </div>
      {winArray[0]}
      <div className={"Body"} Style = {"flex-direction: row; left: 0; right: 0;"}>
        <div Style = {"display: flex; flex-direction: column; position: absolute; left: 4rem; right: 50vw; padding-right: 2rem;"}>
          <h2 Style = {"left: 0; right: 0; position: absolute;"}>
            About us
          </h2>
          <p Style={"font-size : 1.5rem; text-align: left; padding-top:4rem;"}> We are Synaptech, a neuroengineering focused RSO here at the University of Washington with a goal to help students interested in neurotechnologies enter the field!</p>
            <p Style={"font-size : 1.5rem; text-align: left;"}> We are project-focused, hosting quarterly hackjams and competing in the NeurotechX nationwide competition, as well as providing support, hardware, and mentors for students working on their own neurotech projects! </p>
        </div>
        <div Style = {"display: flex; flex-direction: row; position: absolute; right: 4rem; left: 50vw; padding-left: 2rem;"}>
          <h2 Style = {"left: 0; right: 0; position: absolute;"}>
            Upcoming events
          </h2>
          <div Style = "top: 4rem; border: solid white; position: absolute; left: 2rem; right: 0; height: 50vh;">
            <p> calendar component here </p>
          </div>
        </div>
      </div>
      {winArray[1]}
      <div className={"Body"} Style = {"flex-direction: row; left: 0; right: 0;"}>
        <div Style = {"display: flex; flex-direction: column; position: absolute; left: 4rem; right: 4rem;"}>
          <h2>
            Project Spotlight
          </h2>
          <div Style = {"top: 5rem; border: solid white; left: 10rem; right: 10rem; height: 50vh; position: absolute;"}>
            {/* Projects carousel here */}
            <Carousel2 />
          </div>
        </div>
      </div>
      {winArray[2]}
      <div className="Body" Style  = {"flex-direction: row;"}>
        <div Style = {"display: flex; flex-direction: column; left: 4rem; right: 50vw; padding-right:2rem; position: absolute;"}>
          <h1> CNT Hackathon! </h1>
          <p Style = {"font-size : 1.5rem; text-align: left;"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div Style = {"display: flex; flex-direction: column; right:4rem; left : 50vw; padding-left: 2rem; position: absolute;"}>
          <div  Style = {"position: absolute; right:0; border-radius: 0.5rem; border: solid white 0.2rem; background-image: url(assets/fall_hackjam_flyer.jpg); width: 30vw; height: 40vw; background-position: center; background-size: cover; background-repeat: no-repeat;" } alt="Hackjam flyer"/>
        </div>
      </div>
      {winArray[3]}
      <div className="Body-cols">
      <div className={"Body"} Style = {"flex-direction: row; left: 0; right: 0;"}>
        <div Style = {"display: flex; flex-direction: column; position: absolute; left: 4rem; right: 4rem;"}>
          <h2>
            Sponsors
          </h2>
          <div Style = {"top: 5rem; border: solid white; left: 10rem; right: 10rem; height: 50vh; position: absolute;"}>
            Sponsors here (CNT)
          </div>
        </div>
      </div>
      </div>
      {winArray[4]}
      {/* <footer Style = {"bottom: 0; width: 100%; height: 6rem; color: white; background-color: #031A2F; display: flex; flex-direction: column;"}>
        <div Style = {"padding-top: 3rem; padding-right: 2rem; display: flex; flex-direction: row; position: absolute; right: 0; "}>
          <h3 Style = {"padding-right: 1rem;"}>Contact us: </h3>
          { <!-- facebook logo is from https://iconmonstr.com/facebook-4-png/
            License said it could be used without attribution. --> }
          <a href="https://www.facebook.com/uwsynaptech"><img class="social-logo" src="assets/socialMediaLogos/facebook_logo.png"
                alt="Facebook logo"/></a>
          { <!-- instagram logo is from https://iconmonstr.com/instagram-11-png/
            License said it could be used without attribution. --> }
          <a href="https://www.instagram.com/uwsynaptech/"><img class="social-logo" src="assets/socialMediaLogos/instagram_logo.png"
                alt="Instagram logo"/></a>
          { <!-- github logo is from https://iconmonstr.com/github-1-png/
            License said it could be used without attribution. --> }
          <a href="https://github.com/synaptech-uw"><img class="social-logo" src="assets/socialMediaLogos/github_logo.png"
                alt="Github logo"/></a>
          { <!-- email logo is from https://iconmonstr.com/email-2-png/
            License said it could be used without attribution. --> }
          <a href="mailto:synaptechuw@gmail.com"><img class="social-logo" src="assets/socialMediaLogos/email_logo.png"
                alt="E-Mail"/></a>
          { <!-- linkedIn logo is from https://iconmonstr.com/linkedin-3-png/
            License said it could be used without attribution. --> }
          <a href="https://www.linkedin.com/company/synaptechuw/"><img class="social-logo" src="assets/socialMediaLogos/linkedin-logo.png"
                                                                          alt="LinkedIn logo"/></a>
        </div>
      </footer> */}
    </>
  );
}

export default HomePage;