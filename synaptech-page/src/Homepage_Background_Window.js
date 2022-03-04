import React, { useRef, useEffect } from "react";
import "./App.css"

function BrainWindow(props) {
    const winRef = useRef();
    useEffect(() => {
        props.setRefFunc(winRef);
    }, []);
    return(
        <div ref = {winRef} className = "BrainWindow">
            { props.el }
        </div>
    )
}

export default BrainWindow;