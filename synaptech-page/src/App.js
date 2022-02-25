import logo from './logo.svg';
import './App.css';
import ThreeScene from './ThreeScene.js';
import Carousel from './Carousel';
import { Vector3 } from 'three';

function App() {
  const targetVecs = [];
  targetVecs[0] = (new Vector3(0, 1, 3));
  targetVecs[1] = (new Vector3(0, 1, 3));
  targetVecs[2] = (new Vector3(2, 2, 3));
  targetVecs[3] = (new Vector3(-3, 2, 2));

  const thresholds = [];
  thresholds[0] = 0;
  thresholds[1] = 1000;
  thresholds[2] = 1200;
  thresholds[3] = 4000;

  return (
    <>
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

    {/* Change props to list of vectors with varying points, maybe I can do a list of like x and y
    values instead. Otherwise, we'll also need to pass in a couple waypoints, being the y value of
    the other elements in the return. Getting these y values is the next step. Then we just
    have to evaluate the step in the array and move forward or backward depending on the evaluation
     */}
    <ThreeScene targets = {targetVecs} thresholds = {thresholds} />
    </>
  );
}

export default App;
