import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {HashRouter, Routes, Route} from "react-router-dom"
import Navbar from "./Components/Navbar.js";
import HomePage from './pages/Homepage.js';
import OurTeam from './pages/OurTeam.js';
// import reportWebVitals from './reportWebVitals';

export default function App() {
  return (
    <HashRouter>
      <Routes path="/" element = {<Navbar /> }>
        <Route index element = {<HomePage />} />
        <Route path="OurTeam" element = { <OurTeam/> } />
      </Routes>
    </HashRouter>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
