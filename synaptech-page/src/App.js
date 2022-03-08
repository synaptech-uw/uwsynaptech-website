import React, { useEffect, useState } from "react";
import useScrollPosition from "./useScrollPosition";
import ReactDOM from "react-dom";
import logo from "./logo.svg";
import "./App.css";
import ThreeDBrain from "./Homepage_Background";
import Carousel from "./Carousel";
import Carousel2 from "./Carousel2";
import { Vector3 } from "three";
import BrainWindow from "./Homepage_Background_Window";
import Navbar from "./Navbar.js"

function App() {
  const numWindows = 5;
  const winArray = [];
  const refArray = [];
  const raycasts = [];
  const blurbCoords = [];

  const [thresh, setThresh] = useState([]);

  for (let i = 0; i < numWindows; i++) {
    winArray.push(<BrainWindow setRefFunc={(ra) => refArray.push(ra)} />);
  }

  raycasts[0] = { x: 0.1, y: 0.05 };
  raycasts[1] = { x: 0.1, y: 0.05 };
  raycasts[2] = { x: 0.2, y: -0.19 };
  raycasts[3] = { x: 0.2, y: -0.19 };
  raycasts[4] = { x: -0.2, y: -0.03 };
  raycasts[5] = { x: -0.2, y: -0.03 };
  raycasts[6] = { x: -0.15, y: 0 };
  raycasts[7] = { x: -0.15, y: 0 };
  raycasts[8] = { x: 0, y: 0 };
  raycasts[9] = { x: 0, y: 0 };
  raycasts[10] = { x: 0, y: 0 };

  blurbCoords[0] = { x: 0.5, y: 0.3 };
  blurbCoords[1] = { x: 0.5, y: 0.3 };
  blurbCoords[2] = { x: 0.5, y: -0.3 };
  blurbCoords[3] = { x: 0.5, y: -0.3 };
  blurbCoords[4] = { x: -0.5, y: -0.3 };
  blurbCoords[5] = { x: -0.5, y: -0.3 };
  blurbCoords[6] = { x: -0.5, y: 0.3 };
  blurbCoords[7] = { x: -0.5, y: 0.3 };
  blurbCoords[8] = { x: 0.5, y: 0.3 };
  blurbCoords[9] = { x: 0.5, y: 0.3 };
  blurbCoords[10] = { x: 0.5, y: 0.3 };

  const targetVecs = new Array(2 * numWindows);
  const vecZ = 8;
  const vecZ2 = 3;
  targetVecs[0] = new Vector3(0, 0, vecZ);
  targetVecs[1] = new Vector3(0, 2, vecZ2);
  targetVecs[2] = new Vector3(0, 0, vecZ);
  targetVecs[3] = new Vector3(0, 2, -vecZ2);
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
          element.offsetTop - window.innerHeight / 2 + element.clientHeight / 5;
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

  const [userScroll, setUserScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", setThresholds);
  }, []);

  const scrollPos = useScrollPosition();
  const [ headerClass, setHeaderClass ] = useState("Header-Hidden");
  useEffect(() => {
    //console.log(scrollPos)
    setUserScroll(scrollPos);
    if (scrollPos > 1) {
      setHeaderClass("Header");
      setIntroClass("Welcome-Scrolled");
    } else {
      setHeaderClass("Header-Hidden");
      setIntroClass("Welcome");
    }
  }, [scrollPos]);
  const testText = [];
  testText[0] = <p>The fitnessgram pacer test is a multistage</p>;
  return (
    <>
      <head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Bungee&display=swap');
        </style>
      </head>
      <Navbar show = { headerClass } />
      <div className={introClass}>
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
        userScroll={userScroll}
        targets={targetVecs}
        thresholds={thresh}
        rays={raycasts}
        blurb = {testText}
        blurbCoords = {blurbCoords}
      />

      {/* New goal here is to get a homepage logo in, preferrably a menu bar though it may not function
    and start getting some text into the page.  */}
      <div className="Body">
        <div Style={"height:70vh"}>
        </div>
        <p Style = {"padding:4rem; font-family:'Consolas'"}>
          Welcome to Synaptech, the University of Washington's Undergraduate Neurotechnology RSO
        </p>
      </div>
      {winArray[0]}
      {/* INSTEAD OF USING DIV BACKGROUNDS, CHANGE THE LIGHT LEVELS WHEN A USER
    SCROLLS IN AND OUT OF THRESHOLDS! THAT WAY THINGS CAN BE COHESIVE AND SMOOTH */}
      <div className="Body">
        <p>
          test
        </p>
      </div>
      {winArray[1]}
      <div className="Body"></div>
      {winArray[2]}
      <div className="Body"></div>
      {winArray[3]}
      <div className="Body"></div>
      {winArray[4]}
      <div className="Body"></div>
    </>
  );
}

export default App;