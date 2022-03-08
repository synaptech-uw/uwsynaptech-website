import React, { useEffect, useState } from "react";
import './App.css'
function Navbar(props) {
    return(
        <header className={props.show}>
            <div className="Logo">
            </div>
            <span className = "app-title">
                <button className = "Navbar-Link">
                    OUR TEAM
                </button>
                <button className = "Navbar-Link">
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
                </button>
            </span>
        </header>
    );
}

export default Navbar;