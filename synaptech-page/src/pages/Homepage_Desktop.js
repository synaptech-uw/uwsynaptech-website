import React, { useEffect, useState } from "react";
import useScrollPosition from "../Components/useScrollPosition";
import "../styles/Styles.css";
import ThreeDBrain from "../Components/Homepage_Background"
// import ThreeDBrainBG from "../Components/OurTeam_Background";
//import Carousel2 from "../Components/Carousel2";
// import SetPageScroll from "../Components/SetPageScroll"

import { Vector3 } from "three";
import BrainWindow from "../Components/Homepage_Background_Window";
import Navbar from "../Components/Navbar.js"
import UpcomingEvents from "../Components/UpcomingEvents.js";
import { arrToParaArr } from "../utils";

// This need to move to a config file soon
// Will be refactor in the future
const blurbContent = [
  {
    id: 0,
    blurbId: 0,
    title: "Neurotech Development @ UW",
    content: ["Synaptech serves as University of Washington’s sole project-based neurotech club, hosting opportunities to hack and develop various neurotech projects. From HackJams to long-term projects, students can look to gain real experience with neural interfaces and neural data."]
  },
  {
    id: 1,
    blurbId: 2,
    title: "What to expect",
    content: ["All of us here at Synaptech are students interested in a highly challenging and future-focused field. We work hard to foster a strong community of neuroengineers that can operate and communicate interdisciplinarily."]
  },
  {
    id: 2,
    blurbId: 4,
    title: "Build a BCI",
    content: ["Synaptech supplies students with hardware that they can use to undertake personal projects as well, hack your muscles with EMG or your brain with EEG!"]
  },
  {
    id: 3,
    blurbId: 6,
    title: "Feeling unprepared?",
    content: ["Synaptech offers workshops to help prepare students for their Hackathons, to ensure everyone feels prepared to attempt their dream project! Check out our upcoming events!"]
  },
  {
    id: 4,
    blurbId: 8,
    title: "Prospective members",
    content: ["Reach out to synaptechuw@gmail.com with your uw.edu email, and we will send you steps to join our community!", "Don't feel discouraged just because you don't see an immediate use for your skillset; neuroengineering is an extremely diverse field!"]
  }
]

function HomePageDesktop() {
  const SIZE_THRESHOLD = 1064;
  const numWindows = 5;
  const winArray = [];
  const refArray = [];
  const raycasts = [];

  //Blurbs will be structured as an array [title, elemsArr[]]
  //These will be passed into the background to render the different elements.

  const [blurbs, setBlurbs] = useState([]);
  const blurbCoords = [];

  const [thresh, setThresh] = useState([]);

  raycasts[0] = { x: 0.15, y: 0.05 };
  raycasts[2] = { x: 0.2, y: -0.1 };
  raycasts[4] = { x: -0.2, y: -0.03 };
  raycasts[6] = { x: -0.15, y: 0 };
  raycasts[8] = { x: -0.05, y: 0.2 };
  raycasts[10] = { x: 0, y: 0 };

  // blurbCoords[0] = { x: -0.5, y: -0.1 };
  // blurbCoords[2] = { x: -0.5, y: 0.2 };
  // blurbCoords[4] = { x: -0.1, y: -0.4 };
  // blurbCoords[6] = { x: 0.05, y: -0.3 };
  // blurbCoords[8] = { x: -0.1, y: -0.5 };
  // blurbCoords[10] = { x: 0, y: 0 };
  blurbCoords[0] = { x: -.5, y: -1 };
  blurbCoords[2] = { x: -.5, y: -.75 };
  blurbCoords[4] = { x: -.5, y: -.75 };
  blurbCoords[6] = { x: -.5, y: -.75 };
  blurbCoords[8] = { x: -.5, y: -.75 };
  blurbCoords[10] = { x: -.5, y: -.75 };

  //  _______________________ALEJANDRO'S TO DO LIST_________________________________________________
  // WE NEED TO ADD EACH OF THESE BLURB TEXTS TO THE ACCESSIBILITY READER STUFF, THE ARIA LABELS!
  // ALSO WE NEED TO ADD A LITTLE MARKER OR NAVBAR THING SO WE CAN GO BETWEEN SECTIONS!

  useEffect(() => {
    blurbContent.map((e, i) => {
      setBlurbs((prev) => {
        let newBlurb = prev
        newBlurb[e.blurbId] = [e.title, arrToParaArr(e.content)]
        return newBlurb
      })
    })
  }, [])

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


  for (let i = 0; i < numWindows; i++) {
    winArray.push(<BrainWindow setRefFunc={(ra) => refArray.push(ra)} title={blurbContent[i].title} content={blurbContent[i].content} />); // Pass in the related blurb to this window, so we can add aria labels to it.
  }

  for (let n = 1; n < numWindows * 2; n = n + 2) {
    raycasts[n] = raycasts[n - 1];
    blurbCoords[n] = blurbCoords[n - 1];
    blurbs[n] = blurbs[n - 1];
  }

  useEffect(() => {
    if (refArray.length === numWindows) {
      windowsRendered = true;
    }
  }, [refArray]);

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

  const [firstScroll, setFirstScroll] = useState(false);
  const [firstLockClass, setFirstLockClass] = useState("test")
  const [pageLoaded, setPageLoaded] = useState(false);
  var updateBrain = false;

  useEffect(() => {

    setThresholds()
    window.addEventListener("resize", setThresholds);
    window.scrollTo(window.scrollX, 0, true);
    // window.addEventListener("pageshow", () => {setFirstScroll(false)});
    setFirstScroll(sessionStorage.getItem("previouslyVisited") === "true")
    setPageLoaded(true);
  }, []);

  const scrollPos = useScrollPosition();

  if (pageLoaded && firstScroll === false && scrollPos >= 20) {
    sessionStorage.setItem("previouslyVisited", "true")
    setFirstScroll(true);
    setFirstLockClass("test-locked");
    setTimeout(() => {
      setFirstLockClass("test");
      window.scrollTo(0, window.innerHeight);
    }, 2000);
  }

  // I need a boolean that tracks when the user first scrolls past the beginning of the page.

  // This boolean will be used to evaluate whether the page should be locked from scrolling for a second.

  // I can use useEffect to trigger this lock once the firstScroll statement changes.


  // const testText = [];
  // testText[0] = <p>The fitnessgram pacer test is a multistage</p>;

  //dateNum, dateMon, timeString, title, loc
  const eventsArray =
    [
      [12, "NOV", "11:00am - 8:00pm", "Neurahack", "CNT Room"],
      [12, "NOV", "11:00am - 8:00pm", "Neurahack", "CNT Room"],
      [12, "NOV", "11:00am - 8:00pm", "Neurahack", "CNT Room"],
      [12, "NOV", "11:00am - 8:00pm", "Neurahack", "CNT Room"]
    ];
  return (
    <div className={firstLockClass}>
      <header>
        <Navbar role="navigation" show={(scrollPos > 1) ? "Header" : "Header-Hidden"} />
        {/* New goal here is to get a homepage logo in, preferrably a menu bar though it may not function and start getting some text into the page.  */}
        <div className="Body-default">
          <div role="separator" Style={"height:50vh"} />
          <h1 className={(firstScroll) ? "Welcome-Text" : "Welcome-Text-hidden"}>
            Welcome to Synaptech, the University of Washington's Undergraduate Neurotechnology RSO
          </h1>
        </div>
      </header>
      <div aria-hidden="true" className={(!firstScroll && !(scrollPos > 0)) ? "Welcome" : "Welcome-Scrolled"}>
        {/* Make this header slide upwards quickly as soon as the scrollY !==0 */}
        <div className="App-header">
          <img
            src={"/assets/dark_synaptech_logo_transparent.png"}
            className="App-logo"
            alt="The Synaptech Logo - a blue brain overlaid with text saying Synap Tech @ UW"
          />
        </div>
        {/* <Carousel2 /> */}
      </div>


      {/* Change props to list of vectors with varying points, maybe I can do a list of like x and y values instead. Otherwise, we'll also need to pass in a couple waypoints, being the y value of the other elements in the return. Getting these y values is the next step. Then we just have to evaluate the step in the array and move forward or backward depending on the evaluation*/}
      {/* On page load, finally load this! MUST BE LAST! */}
      {(pageLoaded) && <ThreeDBrain
        userScroll={scrollPos}
        targets={targetVecs}
        thresholds={thresh}
        rays={raycasts}
        blurb={blurbs}
        blurbCoords={blurbCoords}
      />}

      <main>
        {/* <div role="separator" Style = "height: 40vh" /> */}
        {winArray[0]}

        <section className={(window.innerWidth > SIZE_THRESHOLD) ? "Body-cols" : "Body-rows"}>
          <article className={(window.innerWidth > SIZE_THRESHOLD) ? "BodyBox-Left" : "BodyBox-Mobile"} > {/* position: absolute; left: 12rem; right: 50vw; padding-right: 2rem; */}
            <h2 Style="text-align: center;">
              About us
            </h2>
            <p>
              We are Synaptech, a neuroengineering focused RSO here at the University of Washington with a goal to help students interested in neurotechnologies enter the field!
            </p>
            <p>
              We are project-focused, hosting quarterly hackjams and competing in the NeurotechX nationwide competition, as well as providing support, hardware, and mentors for students working on their own neurotech projects!
            </p>
          </article>
          <article className={(window.innerWidth > SIZE_THRESHOLD) ? "BodyBox-Right" : "BodyBox-Mobile"}>
            <h2 Style="text-align: center;">
              Upcoming events
            </h2>
            <div>
              <UpcomingEvents nextEvents={eventsArray} />{
              /* <p> calendar component here </p> */}
            </div>
          </article>
        </section>

        {/* <div Style = "height: 20vh" /> */}
        {winArray[1]}
        {/* <div className={"Body"} Style = {"flex-direction: row; left: 0; right: 0;"}>
          <div Style = {"display: flex; flex-direction: column; position: absolute; left: 4rem; right: 4rem;"}>
            <h2>
              Project Spotlight
            </h2>
            <div Style = {"top: 5rem; left: 10rem; right: 10rem; height: 50vh; position: absolute; display: flex; justify-content: center;"}>
              <Carousel2 />
            </div>
          </div>
        </div> */}
        {winArray[2]}
        <section className={(window.innerWidth > SIZE_THRESHOLD) ? "Body-cols" : "Body-rows"}>
          <div className={(window.innerWidth > SIZE_THRESHOLD) ? "BodyBox-Left" : "BodyBox-Mobile"}>

            {(window.innerWidth > SIZE_THRESHOLD) ?
              <div role="img" aria-label="Image of multiple student groups working during NeuraHack 2022" Style={"display: inline-flex; border-radius: 0.5rem; border: solid white 0.2rem; background-image: url(assets/Neurahack.jpg); width: 30vw; height: 40vw; background-position: center; background-size: cover; background-repeat: no-repeat;"} />

              :

              <div Style={"position: relative; border-radius: 0.5rem; border: solid white 0.2rem; background-image: url(assets/Neurahack.jpg); margin-left: 0rem; margin-right: 0rem; height: 50vh; background-position: center; background-size: cover; background-repeat: no-repeat;"} />
            }

          </div>

          <article className={(window.innerWidth > SIZE_THRESHOLD) ? "BodyBox-Right" : "BodyBox-Mobile"}>
            <h1>NeuraHack 2022!</h1>
            <p>
              NeuroTEC and Synaptech’s first jointly-run hackathon, occurred the weekend of April 2nd. 29 students - most of whom were new to neurotechnology - participated and gained experience with hardware. Each of the seven teams demonstrated impressive creativity in their projects: focus monitoring for studying, examining the interplay of brain signals and language, fatigue monitoring, EMG for grip strength monitoring, and painting software controlled by the Muse headset.
            </p>
            <p>
              Congratulations to Tim Li, Sunny Zheng, Yanfeng Cui for winning the hackathon! The winning team designed an automated annotator, which aimed to allow users to annotate each region of an image with their brain activity (as recorded by the Muse headset).
            </p>
          </article>
        </section>
        {/*
        <div role="separator" Style = "height: 20vh" /> */}
        {winArray[3]}

        <section className={"Body-default"}>
          <div Style={"display: flex; flex-direction: column; "}> {/* <div Style = {"display: inline-flex; flex-direction: column"}>  */} {/* top: 5rem; left: 12rem; right: 12rem; height: 50vh; position: absolute; */}
            <h2>
              Sponsors
            </h2>

            {(window.innerWidth > SIZE_THRESHOLD) ?

              <a Style="display:block; z-index: 2000;" href="https://centerforneurotech.uw.edu/">
                {/* <div Style = "height: 100%; width: 100%; background: url('../assets/CNTLogo.png'); background-position: center; background-size: cover; background-repeat: no-repeat;">
                </div> */}
                <img className="sponsor-image-small" src="../assets/CNTLogo.png" alt="A logo for the University of Washington's Center for Neurotechnology" />
              </a>
              :
              <a Style="display:block; z-index: 2000;" href="https://centerforneurotech.uw.edu/">
                {/* <div Style = "height: 100%; width: 100%; background: url('../assets/CNTLogo.png'); background-position: center; background-size: cover; background-repeat: no-repeat;">
                </div> */}
                <img className="sponsor-image-large" src="../assets/CNTLogo.png" alt="A logo for the University of Washington's Center for Neurotechnology" />
              </a>
            }

          </div>
        </section>

        {winArray[4]}
        {/* <div role="separator" Style = "height: 40vh" /> */}
      </main>


      {/* <SetPageScroll pageName = "Homepage" pageScroll = {scrollPos} /> */}

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
    </div>
  );
}

export default HomePageDesktop;

