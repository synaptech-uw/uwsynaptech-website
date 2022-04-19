import React, { useEffect } from "react";
import '../styles/Styles.css';
import {Outlet, Link} from "react-router-dom";

function Navbar(props) {
    function refreshPage() {
        setTimeout(()=>{
            window.location.reload(false);
        }, 1);
    }
    return(
    <>
        <head>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Bungee&family=Inconsolata&family=Open+Sans:wght@800&family=Roboto:wght@400;900&display=swap');
            </style>
                <meta http-equiv='cache-control' content='no-cache'/>
                <meta http-equiv='expires' content='0'/>
                <meta http-equiv='pragma' content='no-cache'/>
        </head>
        <header className={props.show}>
            <Link Style = "" to = "/" onClick={refreshPage}>
                <div className="Logo">
                </div>
            </Link>
            <span className = "app-title">
                <Link className = "Navbar-Link" to = "/OurTeam" onClick={refreshPage}>
                    OUR TEAM
                </Link>
                {/* <button className = "Navbar-Link">
                    PROJECTS
                </button>
                <button className = "Navbar-Link">
                    RESOURCES
                </button>
                <button className = "Navbar-Link">
                    CALENDAR
                </button>
                <button className = "Navbar-Link">
                    CONTACT
                </button> */}
            </span>
            <Outlet />
        </header>
        </>
    );
}

export default Navbar;