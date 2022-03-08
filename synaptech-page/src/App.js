import React, { useEffect, useState } from 'react';
import useScrollPosition from './useScrollPosition';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import ThreeScene from './Homepage_Background';
import Carousel from './Carousel';
import Carousel2 from './Carousel2';
import { Vector3 } from 'three';
import StoreText from './StoreText';
import BrainWindow from './Homepage_Background_Window';

function App() {
  const numWindows = 5;
  const winArray = [];
  const refArray = [];
  const thresholds = [];
  const raycasts = [];

  for (let i = 0; i < numWindows; i++) {
    winArray.push(<BrainWindow
      setRefFunc = {
        (ra) => refArray.push(ra)
      }
    />);
  }

  raycasts[0] = {x : 0.1, y: 0.05};
  raycasts[1] = {x : 0.1, y: 0.05};
  raycasts[2] = {x : 0.2, y: -0.19};
  raycasts[3] = {x : 0.2, y: -0.19};
  raycasts[4] = {x : -0.3, y: -0.03};
  raycasts[5] = {x : -0.3, y: -0.03};
  raycasts[6] = {x : -0.15, y: 0};
  raycasts[7] = {x : -0.15, y: 0};
  raycasts[8] = {x : 0, y: 0};
  raycasts[9] = {x : 0, y: 0};

  const targetVecs = new Array(2*numWindows);
  const vecZ = 10;
  const vecZ2 = 3;
  targetVecs[0] = (new Vector3(0, 0, vecZ));
  targetVecs[1] = (new Vector3(0, 2, vecZ2));
  targetVecs[2] = (new Vector3(0, 0, vecZ));
  targetVecs[3] = (new Vector3(0, 2, -vecZ2));
  targetVecs[4] = (new Vector3(0, 0, vecZ));
  targetVecs[5] = (new Vector3(0, -2, vecZ2));
  targetVecs[6] = (new Vector3(0, 0, vecZ));
  targetVecs[7] = (new Vector3(1, 1, vecZ2));
  targetVecs[8] = (new Vector3(0, 0, vecZ));
  targetVecs[9] = (new Vector3(-1, 1, vecZ2));
  targetVecs[10] = (new Vector3(0, 0, vecZ));

  var windowsRendered = false;

  useEffect(() => {
    if (refArray.length === numWindows ) {
      windowsRendered = true;
    }
  }, [refArray.length]);

  // MAKE SURE TO MAKE THIS UPDATE ON RESIZE AS WELL
  function setThresholds() {
    if (windowsRendered === true) {
      for (let i = 0; i < numWindows; i++) {
        const element = refArray[i].current
        const threshStart = (element.offsetTop - window.innerHeight/2 + element.clientHeight/5);
        const threshEnd = (element.offsetTop - window.innerHeight/2 + element.clientHeight);
        thresholds[ i*2 ] =  threshStart; //[threshStart, threshEnd];
        thresholds[ (i*2) +1 ] = threshEnd;
        console.log(thresholds[i]);

        //TEST PROPERTIES, THESE WILL NEED TO BE MANUALLY SET LATER
        // targetVecs[ i*2 ] = (new Vector3(0, 0, 3));
        // targetVecs[ (i*2) +1  ] = (new Vector3(0, 2, 3));

        //const cast = new Vector2();
        //cast.x = 0.1;
        //cast.y = 0.1;
        //raycasts[i * 2] = cast;
       // raycasts[(i * 2) + 1] = cast;
      }
    }
  }
  const [ introClass, setIntroClass ] = useState("Welcome");
  useEffect(() => setThresholds(), [windowsRendered]);
  const [userScroll, setUserScroll] = useState(0);
  window.addEventListener('resize', setThresholds);
  const scrollPos = useScrollPosition();
  useEffect(() => {
    console.log(scrollPos)
    if (scrollPos > 1) {
      setIntroClass("Welcome-Scrolled");
    } else {
      setIntroClass("Welcome");
    }
  }, [scrollPos]);
  const testText = [];
  testText[0] = <p>The fitnessgram pacer test is a multistage</p>;
  return (
    <>
     {/* Change props to list of vectors with varying points, maybe I can do a list of like x and y
    values instead. Otherwise, we'll also need to pass in a couple waypoints, being the y value of
    the other elements in the return. Getting these y values is the next step. Then we just
    have to evaluate the step in the array and move forward or backward depending on the evaluation
     */}
    <ThreeScene userScroll = {(scrolly) => {setUserScroll(scrolly)}} targets = {targetVecs} thresholds = {thresholds} rays = {raycasts} />


    {/* New goal here is to get a homepage logo in, preferrably a menu bar though it may not function
    and start getting some text into the page.  */}
    {<div className={introClass}>
      {/* Make this header slide upwards quickly as soon as the scrollY !==0 */}
      <header className="App-header">
        <img src={"/assets/dark_synaptech_logo_transparent.png"} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* <Carousel2 /> */}
    </div> }
    { winArray[0] }
    {/* INSTEAD OF USING DIV BACKGROUNDS, CHANGE THE LIGHT LEVELS WHEN A USER
    SCROLLS IN AND OUT OF THRESHOLDS! THAT WAY THINGS CAN BE COHESIVE AND SMOOTH */}
    <StoreText title = {"testTitle"} elems = {testText}>
    </StoreText>
    <div className = "Body">
    </div>
    { winArray[1] }
    <div className = "Body">
    </div>
    { winArray[2] }
    <div className = "Body">
    </div>
    { winArray[3] }
    <div className = "Body">
    </div>
    { winArray[4] }
    <div className = "Body">
    </div>

    </>
  );
}

export default App;
