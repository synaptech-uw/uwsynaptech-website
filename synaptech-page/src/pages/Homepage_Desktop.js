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
import { arrToParaArr } from "../utils";
import { BLURB_CONTENT_CONFIG } from "../data/homepageBlurbs";

const RAYCASTS_CONFIG = [
  { id: 0, x: 0.15, y: 0.05 },
  { id: 2, x: 0.2, y: -0.1 },
  { id: 4, x: -0.2, y: -0.03 },
  { id: 6, x: -0.15, y: 0 },
  { id: 8, x: -0.05, y: 0.2 },
];

// x/y are -1..1 screen coordinates for the blurb's bottom-left corner. The y values are
// deliberately staggered (and fixed, so every visitor sees the same layout) so the blurbs
// don't all sit at the bottom of the screen.
const BLURB_COORDS_CONFIG = [
  { id: 0, x: 0.30, y: -0.55 },
  { id: 2, x: -1, y: -0.9 },
  { id: 4, x: 0.30, y: -0.35 },
  { id: 6, x: -1, y: -0.7 },
  { id: 8, x: 0.30, y: -1 },
];

const SIZE_THRESHOLD = 1064;
const NUM_WINDOWS = BLURB_CONTENT_CONFIG.length;

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
        content={BLURB_CONTENT_CONFIG[i].plainText || BLURB_CONTENT_CONFIG[i].content}
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
        {/* Projects / upcoming events section removed (out of date). A live calendar integration is planned. */}
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
            <p className="sponsor-note">
              Funded by the UW <a id="formlink" href="https://uwstf.org/">Student Technology Fee</a> (STF).
            </p>
          </div>
        </section>
        <div Style="height: 30vh" role="separator" />
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
