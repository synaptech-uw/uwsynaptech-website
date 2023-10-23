import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {HashRouter, Routes, Route} from "react-router-dom"
import Navbar from "./Components/Navbar.js";
import HomePageMobile from './pages/Homepage_Mobile.js';
import OurTeamMobile from './pages/OurTeam_Mobile.js';
import HomePageDesktop from './pages/Homepage_Desktop.js';
import OurTeamDesktop from './pages/OurTeam_Desktop.js';
// import ProjectsPageDesktop from './pages/Projects_Desktop';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';






// import reportWebVitals from './reportWebVitals';
const routeElems = (isMobile) ? <>
                                  <Route index element = {<HomePageMobile />} title = "Synaptech Home" />
                                  <Route path="OurTeam" element = { <OurTeamMobile/> } title = "Our Team"/>
                                  <Route path="404" element = {<HomePageMobile/>} title = "Synaptech Home" />
                                </>
                                :     
                                <>
                                  <Route index element = {<HomePageDesktop />} title = "Synaptech Home" />
                                  <Route path="OurTeam" element = { <OurTeamDesktop/> } title = "Our Team"/>
                                  <Route path="404" element = {<HomePageDesktop />} title = "Synaptech Home" />
                                  {/* <Route path="Projects" element = {<ProjectsPageDesktop/>} title = "Projects"/> */}
                                </>
export default function App() {
  return (

    <HashRouter>
      <Routes path="/" element = {<Navbar /> }>
       { routeElems }
      </Routes>
    </HashRouter>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
