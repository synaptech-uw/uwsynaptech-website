import '../styles/Styles.css';
import React from 'react';
import { isMobile } from 'react-device-detect';

function StoreText(props) {
  // Height is left to the stylesheet (fit-content) so the box sizes to its text.
  // Lifted slightly off the bottom edge so it doesn't sit flush with the viewport.
  // On mobile the box spans the screen with a small side gutter (box-sizing: border-box in CSS).
  const styleStr =
    " bottom: " + String((props.coords.y + 0.995) * 50 + 4) + "vh;" +
    (isMobile
      ? " left: 4vw; width: 92vw;"
      : " left: " + String((props.coords.x + 1) * 50) + "vw; width: 33%;");

  return (
    <div className={props.showClass} Style={styleStr}>
      <h2 className="storeTextTitle">{props.title}</h2>
      {props.elems}
    </div>
  );
}

export default StoreText;
