import React, { useCallback, useEffect, useMemo, useState } from "react";
import useScrollPosition from "../Components/useScrollPosition";
import "../styles/Styles.css";
import ThreeDBrain from "../Components/Homepage_Background";
// import ThreeDBrainBG from "../Components/OurTeam_Background";
//import Carousel2 from "../Components/Carousel2";
// import SetPageScroll from "../Components/SetPageScroll"

import { Vector3 } from "three";
import BrainWindow from "../Components/Homepage_Background_Window";
import Navbar from "../Components/Navbar.js";
import UpcomingEvents from "../Components/UpcomingEvents.js";
import { arrToParaArr } from "../utils";

// This need to move to a config file soon
// Will be refactor in the future
const BLURB_CONTENT_CONFIG = [
  {
    id: 0,
    blurbId: 0,
    title: "About us",
    content: [
      "Synaptech is a neuroengineering focused RSO, welcome to any and all majors (no experience required!) We host weekly meetings on Friday evenings, usually focused on mini projects. Last fall (2023), we made “BioBinary” projects which involved collecting your own data using an EEG, preprocessing data, and training and deploying your own machine learning model to a web application. Sometimes, we have special events during our weekly meetings including guest speakers from research labs around campus! Outside of these meetings, we have various student-led project groups - ranging from eye-controlled cars and music generation from neural feedback!",
    ],
  },
  {
    id: 1,
    blurbId: 2,
    title: "Who are we?",
    content: [
      "The interdisciplinary nature of neurotechnology is mirrored by the diverse range of skills and majors of our members. We're a bunch of super passionate neuroscientists, programmers, and engineers!  The one thing we all have in common is enthusiasm and a desire to make cool stuff with brains and tech. If that's you, come join us!",
    ],
  },
  {
    id: 2,
    blurbId: 4,
    title: "Hardware",
    content: [
      "Synaptech supplies students with hardware that they can use to collaborate on our group projects or work on personal projects. Hack your muscles with EMG or your brain with EEG! To check out any of our hardware, you can leave a comment in the Synaptech Discord or make a request at a general meeting. Our hardware manager, Harshil, is happy to help!",
    ],
  },
  {
    id: 3,
    blurbId: 6,
    title: "Want to sponsor us?",
    content: [
      "That's awesome! We'd love to chat - reach out to ykimm4@uw.edu for more information.",
    ],
  },
  {
    id: 4,
    blurbId: 8,
    title: "Prospective members",
    content: [
      "Reach out to catraz@uw.edu with your uw.edu email, and we will send you steps to join our community!",
      "Our weekly meetings are beginner-friendly, and some of our projects are also accepting beginners! No application is required to join.",
    ],
  },
];

const RAYCASTS_CONFIG = [
  { id: 0, x: 0.15, y: 0.05 },
  { id: 2, x: 0.2, y: -0.1 },
  { id: 4, x: -0.2, y: -0.03 },
  { id: 6, x: -0.15, y: 0 },
  { id: 8, x: -0.05, y: 0.2 },
  { id: 10, x: 0, y: 0 },
];

const BLURB_COORDS_CONFIG = [
  { id: 0, x: 0.30, y: -1 },
  { id: 2, x: -1, y: -1 },
  { id: 4, x: 0.30, y: -1 },
  { id: 6, x: -1, y: -1 },
  { id: 8, x: 0.30, y: -1 },
  { id: 10, x: -1, y: -1 },
];

//dateNum, dateMon, timeString, title, loc
const eventsArray = [
  [12, "NOV", "11:00am - 8:00pm", "Neurahack", "CNT Room"],
  [12, "NOV", "11:00am - 8:00pm", "Neurahack", "CNT Room"],
  [12, "NOV", "11:00am - 8:00pm", "Neurahack", "CNT Room"],
  [12, "NOV", "11:00am - 8:00pm", "Neurahack", "CNT Room"],
];

const SIZE_THRESHOLD = 1064;
const NUM_WINDOWS = 5;

const VECZ = 5;
const VECZ2 = 2;

const TARGET_VECS_CONFIG = [
  { id: 0, x: 0, y: 0, z: VECZ },
  { id: 1, x: 0, y: 2, z: VECZ2 },
  { id: 2, x: 0, y: 0, z: VECZ },
  { id: 3, x: 3, y: 1, z: VECZ2 },
  { id: 4, x: 0, y: 0, z: VECZ },
  { id: 5, x: 0, y: -2, z: VECZ2 },
  { id: 6, x: 0, y: 0, z: VECZ },
  { id: 7, x: 1, y: 1, z: VECZ2 },
  { id: 8, x: 0, y: 0, z: VECZ },
  { id: 9, x: -3, y: 3, z: 0 },
  { id: 10, x: 0, y: 0, z: VECZ },
];

function HomePageDesktop() {
  const winArray = useMemo(() => [], []);
  const refArray = useMemo(() => [], []);
  const [raycasts, setRaycast] = useState([]);
  const [blurbCoords, setBlurbCoords] = useState([]);
  const [targetVecs, setTargetVecs] = useState([]);
  const [scrollStyle, setScrollStyle] = useState("position:absolute; right:4rem; bottom:2rem; opacity: 0; transition: opacity 1s ease-in;");

  //Blurbs will be structured as an array [title, elemsArr[]]
  //These will be passed into the background to render the different elements.

  const [blurbs, setBlurbs] = useState([]);
  const [thresh, setThresh] = useState([]);

  const [firstScroll, setFirstScroll] = useState(false);
  const [firstLockClass, setFirstLockClass] = useState("test");
  const [pageLoaded, setPageLoaded] = useState(false);
  const scrollPos = useScrollPosition();

  const memoizedTargetVecs = useMemo(() => {
    const vecs = new Array(2 * NUM_WINDOWS);
    TARGET_VECS_CONFIG.forEach((config) => {
      vecs[config.id] = new Vector3(config.x, config.y, config.z);
    });
    return vecs;
  }, []);

  const raycastsInitializationState = useMemo(() => {
    const computedRaycasts = [];
    RAYCASTS_CONFIG.forEach((e) => {
      computedRaycasts[e.id] = { x: e.x, y: e.y };
    });
    for (let n = 1; n < NUM_WINDOWS * 2; n = n + 2) {
      computedRaycasts[n] = computedRaycasts[n - 1];
    }
    return computedRaycasts;
  }, []);

  const blurbCoordsInitializationState = useMemo(() => {
    const computedBlurbCoords = [];
    BLURB_COORDS_CONFIG.forEach((e) => {
      computedBlurbCoords[e.id] = { x: e.x, y: e.y };
    });
    for (let n = 1; n < NUM_WINDOWS * 2; n = n + 2) {
      computedBlurbCoords[n] = computedBlurbCoords[n - 1];
    }
    return computedBlurbCoords;
  }, []);

  const blurbInitializationState = useMemo(() => {
    const computedBlurb = [];
    BLURB_CONTENT_CONFIG.forEach((e) => {
      computedBlurb[e.blurbId] = [e.title, arrToParaArr(e.content)];
    });
    for (let n = 1; n < NUM_WINDOWS * 2; n = n + 2) {
      computedBlurb[n] = computedBlurb[n - 1];
    }
    return computedBlurb;
  }, []);

  for (let i = 0; i < NUM_WINDOWS; i++) {
    winArray.push(
      <BrainWindow
        setRefFunc={(ra) => refArray.push(ra)}
        title={BLURB_CONTENT_CONFIG[i].title}
        content={BLURB_CONTENT_CONFIG[i].content}
      />
    ); // Pass in the related blurb to this window, so we can add aria labels to it.
  }

  useEffect(() => {
    setRaycast(raycastsInitializationState);
  }, [raycastsInitializationState]);

  useEffect(() => {
    setBlurbCoords(blurbCoordsInitializationState);
  }, [blurbCoordsInitializationState]);

  useEffect(() => {
    setBlurbs(blurbInitializationState);
  }, [blurbInitializationState]);

  useEffect(() => {
    setTargetVecs(memoizedTargetVecs);
  }, [memoizedTargetVecs]);
  //  _______________________ALEJANDRO'S TO DO LIST_________________________________________________
  // WE NEED TO ADD EACH OF THESE BLURB TEXTS TO THE ACCESSIBILITY READER STUFF, THE ARIA LABELS!
  // ALSO WE NEED TO ADD A LITTLE MARKER OR NAVBAR THING SO WE CAN GO BETWEEN SECTIONS!

  // MAKE SURE TO MAKE THIS UPDATE ON RESIZE AS WELL
  const setThresholds = useCallback(() => {
    if (refArray.length === NUM_WINDOWS) {
      const thresholds = [];
      refArray.forEach((e, i) => {
        const element = e.current;
        const threshStart = element.offsetTop - window.innerHeight / 2;
        const threshEnd =
          element.offsetTop - window.innerHeight / 2 + element.clientHeight;
        thresholds[i * 2] = threshStart; //[threshStart, threshEnd];
        thresholds[i * 2 + 1] = threshEnd;
        //TEST PROPERTIES, THESE WILL NEED TO BE MANUALLY SET LATER
        // targetVecs[ i*2 ] = (new Vector3(0, 0, 3));
        // targetVecs[ (i*2) +1  ] = (new Vector3(0, 2, 3));

        //const cast = new Vector2();
        //cast.x = 0.1;
        //cast.y = 0.1;
        //raycasts[i * 2] = cast;
        // raycasts[(i * 2) + 1] = cast;
      });
      setThresh(thresholds);
    }
  }, [refArray, setThresh]);

  useEffect(() => {
    setThresholds();
    window.addEventListener("resize", setThresholds);
    window.scrollTo(window.scrollX, 0, true);
    // window.addEventListener("pageshow", () => {setFirstScroll(false)});
    setFirstScroll(sessionStorage.getItem("previouslyVisited") === "true");
    setPageLoaded(true);
    setTimeout(() => {
      setScrollStyle("position:absolute; right:4rem; bottom:2rem; opacity: 1; transition: opacity 1s ease-in;");
    }, 2000);
    return () => {
      window.removeEventListener("resize", setThresholds);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (pageLoaded && firstScroll === false && scrollPos >= 20) {
      sessionStorage.setItem("previouslyVisited", "true");
      setFirstScroll(true);
      setFirstLockClass("test-locked");
      setScrollStyle("position:absolute; right:4rem; bottom:2rem; opacity: 0; transition: opacity 1s ease-in;");
      setTimeout(() => {
        setFirstLockClass("test");
        window.scrollTo(0, window.innerHeight);
      }, 2000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollPos]);

  // I need a boolean that tracks when the user first scrolls past the beginning of the page.

  // This boolean will be used to evaluate whether the page should be locked from scrolling for a second.

  // I can use useEffect to trigger this lock once the firstScroll statement changes.

  // const testText = [];
  // testText[0] = <p>The fitnessgram pacer test is a multistage</p>;

  return (
    <div className={firstLockClass}>
      <header>
        <Navbar
          role="navigation"
          show={scrollPos > 1 ? "Header" : "Header-Hidden"}
        />
        {/* New goal here is to get a homepage logo in, preferrably a menu bar though it may not function and start getting some text into the page.  */}
        <div className="Body-default">
          <div role="separator" Style={"height:50vh"} />
          <h1 className={firstScroll ? "Welcome-Text" : "Welcome-Text-hidden"}>
            Welcome to Synaptech, <br/> the University of Washington's
            Neurotechnology RSO
          </h1>
        </div>
      </header>
      <div
        aria-hidden="true"
        className={
          !firstScroll && !(scrollPos > 0) ? "Welcome" : "Welcome-Scrolled"
        }
      >
        {/* Make this header slide upwards quickly as soon as the scrollY !==0 */}
        <div className="App-header">
          <img
            src={"/assets/dark_synaptech_logo_transparent.png"}
            className="App-logo"
            alt="The Synaptech Logo - a blue brain overlaid with text saying Synap Tech @ UW"
          />
          <p Style = {scrollStyle}>Scroll Down</p>
        </div>
        {/* <Carousel2 /> */}
      </div>

      {/* Change props to list of vectors with varying points, maybe I can do a list of like x and y values instead. Otherwise, we'll also need to pass in a couple waypoints, being the y value of the other elements in the return. Getting these y values is the next step. Then we just have to evaluate the step in the array and move forward or backward depending on the evaluation*/}
      {/* On page load, finally load this! MUST BE LAST! */}
      {pageLoaded && (
        <ThreeDBrain
          userScroll={scrollPos}
          targets={targetVecs}
          thresholds={thresh}
          rays={raycasts}
          blurb={blurbs}
          blurbCoords={blurbCoords}
        />
      )}

      <main>
        {/* <div role="separator" Style = "height: 40vh" /> */}
        {winArray[0]}
        <div Style="height: 20vh" role="separator" />
        <section
          className={
            window.innerWidth > SIZE_THRESHOLD ? "Body-cols" : "Body-rows"
          }
        >
          <article
            className={
              window.innerWidth > SIZE_THRESHOLD
                ? "BodyBox-Left"
                : "BodyBox-Mobile"
            }
          >
            {" "}
            {/* position: absolute; left: 12rem; right: 50vw; padding-right: 2rem; */}
            <h1 Style = "text-align: center; margin: 0 auto"> 🚧</h1>
            <h2 Style="text-align: center;">Current Projects</h2>
            <ul class = "main-lists">
              <li> <strong>Truthinator 3000 </strong> &#8226; Lead: Catherine Rasgaitis </li>
              <p>Use biometrics to detect deception and mildly electrocute people.</p>
              <li> <strong>EEG Prosthetics </strong> &#8226; Lead: Derek Zhu</li>
              <p>Building a prosthetic arm that can be worn and controlled through just BCI signals and software.</p>
              <li> <strong>Looking Glass</strong> &#8226; Lead: Catherine Rasgaitis</li>
              <p>Experiment, how does eye movement change when we look at familiar versus unfamiliar faces? </p>
              <br/>
              <li><em>Propose or lead your own project <a href = "https://forms.gle/Qh4PzJ3bxPdzfPYeA" id = "formlink">here.</a></em></li>
            </ul>
          </article>
          <article
            className={
              window.innerWidth > SIZE_THRESHOLD
                ? "BodyBox-Right"
                : "BodyBox-Mobile"
            }
          >
            <h1 Style = "text-align: center; margin: 0 auto"> 🕓</h1>
            <h2 Style="text-align: center;">Upcoming events</h2>
            {/* <UpcomingEvents nextEvents={eventsArray} /> */}
            <ul class = "main-lists">
              <li>DubHacks x Synaptech - Intro to Neurotechnology wkshp, Oct 2</li>
              <li>DubHacks x Synaptech - DubHacks hackathon, Oct 11-13</li>
              <li>Grey Matters x Synaptech - Synaptic Scare, Oct 19</li>
            </ul>
            
          </article>

        </section>

        <div Style="height: 30vh" role="separator" />
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
        <div Style="height: 30vh" role="separator" />
        <section
          className={
            window.innerWidth > SIZE_THRESHOLD ? "Body-cols" : "Body-rows"
          }
        >
          <div
            className={
              window.innerWidth > SIZE_THRESHOLD
                ? "BodyBox-Left"
                : "BodyBox-Mobile"
            }
          >
            {window.innerWidth > SIZE_THRESHOLD ? (
              <div
                role="img"
                aria-label="Multiple student groups working during NeuraHack 2022"
                Style={
                  "display: inline-flex; border-radius: 0.5rem; border: solid white 0.2rem; background-image: url('https://i.imgur.com/2UPavZu.jpg'); width: 30vw; height: 40vw; background-size: cover; background-repeat: no-repeat;"
                }
              />
            ) : (
              <div
                Style={
                  "position: relative; border-radius: 0.5rem; border: solid white 0.2rem; background-image: url('https://i.imgur.com/uXUjaFI.png?2'); width:50vw; margin-left: 0rem; margin-right: 0rem; height: 80vh; background-size: cover; background-repeat: no-repeat;"

                }
              />
            )}
          </div>

          <article
            className={
              window.innerWidth > SIZE_THRESHOLD
                ? "BodyBox-Right"
                : "BodyBox-Mobile"
            }
          >
            <h1 Style = "margin: 0  auto; padding: 0">Kicking off the 2023-2024 Year!</h1>
            <p>

              Synaptech excitedly started the school year with a bang during our Dawg Daze event, "Brain Games!"
              Students had the chance to learn about EEGs and transform their brainwave activity into artistic images, using a little big of neuroscience, data science, and programming. We met over a hundred interested students!
              Super exciting to see all the interest in neurotech.       
            </p>
          </article>
        </section>
        <div Style="height: 30vh" role="separator" />
        {winArray[3]}
        <div Style="height: 30vh" role="separator" />
        <section className={"Body-default"}>
          <div Style={"display: flex; flex-direction: column; "}>
            {" "}
            {/* <div Style = {"display: inline-flex; flex-direction: column"}>  */}{" "}
            {/* top: 5rem; left: 12rem; right: 12rem; height: 50vh; position: absolute; */}
            <h2>Sponsors</h2>
            {window.innerWidth > SIZE_THRESHOLD ? (
              <a
                Style="display:block; z-index: 2000;"
                href="https://centerforneurotech.uw.edu/"
              >
                {/* <div Style = "height: 100%; width: 100%; background: url('../assets/CNTLogo.png'); background-position: center; background-size: cover; background-repeat: no-repeat;">
                </div> */}
                <img
                  className="sponsor-image-small"
                  src="../assets/CNTLogo.png"
                  alt="logo for the University of Washington's Center for Neurotechnology"
                />
              </a>
            ) : (
              <a
                Style="display:block; z-index: 2000;"
                href="https://centerforneurotech.uw.edu/"
              >
                {/* <div Style = "height: 100%; width: 100%; background: url('../assets/CNTLogo.png'); background-position: center; background-size: cover; background-repeat: no-repeat;">
                </div> */}
                <img
                  className="sponsor-image-large"
                  src="../assets/CNTLogo.png"
                  alt="logo for the University of Washington's Center for Neurotechnology"
                />
              </a>
            )}
          </div>
        </section>
        <div Style="height: 30vh" role="separator" />
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
