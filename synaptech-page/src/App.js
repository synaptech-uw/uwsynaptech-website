import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import ThreeScene from './Homepage_Background';
import Carousel from './Carousel';
import Carousel2 from './Carousel2';
import { Vector3 } from 'three';
import StoreText from './StoreText';
import BrainWindow from './Homepage_Background_Window';
import { Vector2 } from 'three';

function App() {
  const numWindows = 5;
  const winArray = [];
  const refArray = [];
  const thresholds = [];
  const raycasts = [];

  for (let i = 0; i < numWindows; i++) {
    winArray.push(<BrainWindow
      el = { <p>TEST HELLO</p> }
      setRefFunc = {
        (ra) => refArray.push(ra)
      }
    />);
  }

  raycasts[0] = {x : 0, y: 0};

  const targetVecs = new Array(2*numWindows);
  targetVecs[0] = (new Vector3(0, 0, 3));
  targetVecs[1] = (new Vector3(0, 2, 3));
  targetVecs[2] = (new Vector3(0, 0, 3));
  targetVecs[3] = (new Vector3(0, 2, -3));
  targetVecs[4] = (new Vector3(0, 0, 3));
  targetVecs[5] = (new Vector3(0, -2, 3));
  targetVecs[6] = (new Vector3(0, 0, 3));
  targetVecs[7] = (new Vector3(1, 1, 3));
  targetVecs[8] = (new Vector3(0, 0, 3));
  targetVecs[9] = (new Vector3(-1, 1, 3));

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
        const threshStart = (element.offsetTop - window.innerHeight/2 + element.clientHeight/3);
        const threshEnd = (element.offsetTop - window.innerHeight/2 + element.clientHeight);
        thresholds[ i*2 ] =  threshStart; //[threshStart, threshEnd];
        thresholds[ (i*2) +1 ] = threshEnd;
        //console.log(thresholds[i]);

        //TEST PROPERTIES, THESE WILL NEED TO BE MANUALLY SET LATER
        // targetVecs[ i*2 ] = (new Vector3(0, 0, 3));
        // targetVecs[ (i*2) +1  ] = (new Vector3(0, 2, 3));

        const cast = new Vector2();
        cast.x = 0.1;
        cast.y = 0.1;
        raycasts[i * 2] = cast;
        raycasts[(i * 2) + 1] = cast;
      }
    }
  }

  useEffect(() => setThresholds(), [windowsRendered]);
  window.addEventListener('resize', setThresholds);

  return (
    <>
     {/* Change props to list of vectors with varying points, maybe I can do a list of like x and y
    values instead. Otherwise, we'll also need to pass in a couple waypoints, being the y value of
    the other elements in the return. Getting these y values is the next step. Then we just
    have to evaluate the step in the array and move forward or backward depending on the evaluation
     */}
    <ThreeScene targets = {targetVecs} thresholds = {thresholds} rays = {raycasts} />
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
    </div>
    { winArray[0] }
    { winArray[1] }
    { winArray[2] }
    { winArray[3] }
    { winArray[4] }

    </>
  );
}

export default App;
