import React from "react";
import '../styles/Styles.css';
import {Outlet, Link} from "react-router-dom";

function Navbar(props) {
    function refreshPage() {
        setTimeout(()=>{
            window.location.reload(false);
        }, 1);
    }

    return(
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
    );
}

export default Navbar;