import '../styles/Styles.css';
import React, { useLayoutEffect, useRef, useState } from 'react';
import { isMobile } from 'react-device-detect';

// Gap kept between the blurb and the bottom of the screen, on top of its own height.
const MIN_GAP_VH = 2;

function StoreText(props) {
  const boxRef = useRef(null);
  const [boxHeight, setBoxHeight] = useState(0);

  // Measure the rendered height (offsetHeight ignores the flip transform) so the bottom offset can
  // be raised to at least the blurb's own height. Re-measure when the text or the window changes.
  useLayoutEffect(() => {
    const measure = () => setBoxHeight(boxRef.current ? boxRef.current.offsetHeight : 0);
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [props.title, props.elems]);

  // Configured bottom offset (from the page's BLURB_COORDS_CONFIG), then enforce
  // bottom >= blurb height + gap so the box always sits at least its own height off the bottom edge.
  const vh = window.innerHeight / 100;
  const configuredBottomPx = ((props.coords.y + 0.995) * 50 + 4) * vh;
  const bottomPx = Math.max(configuredBottomPx, boxHeight + MIN_GAP_VH * vh);

  // Cap the height so bottom + height still clears the fixed navbar (~5rem) at the top.
  const styleStr =
    " bottom: " + String(Math.round(bottomPx)) + "px;" +
    " max-height: calc(50vh - 3rem);" +
    (isMobile
      ? " left: 4vw; right: 4vw; width: auto;"
      : " left: " + String((props.coords.x + 1) * 50) + "vw; width: 33%;");

  return (
    <div ref={boxRef} className={props.showClass} Style={styleStr}>
      <h2 className="storeTextTitle">{props.title}</h2>
      {props.elems}
    </div>
  );
}

export default StoreText;
