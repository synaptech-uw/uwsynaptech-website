import React, { useEffect } from "react";
import '../styles/Styles.css';
import {Outlet, Link} from "react-router-dom";

function Navbar(props) {
    return(
        <>
            <head>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Bungee&family=Inconsolata&family=Open+Sans:wght@800&family=Roboto:wght@400;900&display=swap')
                </style>
            </head>
            <header className={props.show}>
                <Link Style = "" to = "/">
                    <div className="Logo">
                    </div>
                </Link>
                <span className = "app-title">
                    <Link className = "Navbar-Link" to = "/OurTeam">
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
    )
}

export default Navbar;