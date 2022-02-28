import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import ThreeScene from './Homepage_Background';
import Carousel from './Carousel';
import { Vector3 } from 'three';
import StoreText from './StoreText';
import BrainWindow from './Homepage_Background_Window';

function App() {
  const numWindows = 4;
  const winArray = [];
  const refArray = [];
  const thresholds = [];

  for (let i = 0; i < numWindows; i++) {
    winArray.push(<BrainWindow
      setRefFunc = {
        (ra) => refArray.push(ra)
      }
    />);
  }

  const targetVecs = [];
  targetVecs[0] = (new Vector3(0, 1, 3));
  targetVecs[1] = (new Vector3(0, 2, 3));
  targetVecs[2] = (new Vector3(2, 2, 3));
  targetVecs[3] = (new Vector3(-3, 2, 2));
  targetVecs[4] = (new Vector3(-3, 2, 10));
  targetVecs[5] = (new Vector3(-3, 2, -3));

  var windowsRendered = false;

  useEffect(() => {
    if (refArray.length === numWindows ) {
      windowsRendered = true;
    }
  }, [refArray.length]);

  useEffect(() => {
    if (windowsRendered === true) {
      for (let i = 0; i < numWindows; i++) {
        const element = refArray[i].current
        thresholds[i] = element.offsetTop - window.innerHeight/2 + element.clientHeight/2;
        console.log(thresholds[i]);
      }
    }
  }, [windowsRendered]);



  return (
    <>
     {/* Change props to list of vectors with varying points, maybe I can do a list of like x and y
    values instead. Otherwise, we'll also need to pass in a couple waypoints, being the y value of
    the other elements in the return. Getting these y values is the next step. Then we just
    have to evaluate the step in the array and move forward or backward depending on the evaluation
     */}
    <ThreeScene targets = {targetVecs} thresholds = {thresholds} />
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
