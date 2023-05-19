import React, { useRef, useEffect } from "react";
import "../styles/Styles.css"

// Props:
//  setRefFunc: set Ref function
//  content: blurb's content
//  title: blurb's title
//  el: pass in blurb

function BrainWindow(props) {
  const winRef = useRef();
  useEffect(() => {
    props.setRefFunc(winRef);
  });
  return (
    <div ref={winRef} aria-label={props.title + " - " + props.content} className="BrainWindow">
      {props.el}

      {/* Add blurb text and aria-label info with blurb readouts */}
    </div>
  )
}

export default BrainWindow;