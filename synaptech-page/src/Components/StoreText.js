import '../styles/Styles.css';
import React from 'react';
import { isMobile } from 'react-device-detect';

function StoreText(props) {
  // Height is left to the stylesheet (fit-content) so the box sizes to its text.
  // Lifted slightly off the bottom edge so it doesn't sit flush with the viewport.
  // On mobile the box is pinned to both side edges with a small gutter (box-sizing: border-box in
  // CSS), and max-height keeps the top of the box below the fixed navbar whatever the screen size.
  const bottomVh = (props.coords.y + 0.995) * 50 + 4;
  const styleStr =
    " bottom: " + String(bottomVh) + "vh;" +
    " max-height: calc(" + String(100 - bottomVh) + "vh - 5rem);" +
    (isMobile
      ? " left: 4vw; right: 4vw; width: auto;"
      : " left: " + String((props.coords.x + 1) * 50) + "vw; width: 33%;");

  return (
    <div className={props.showClass} Style={styleStr}>
      <h2 className="storeTextTitle">{props.title}</h2>
      {props.elems}
    </div>
  );
}

export default StoreText;
