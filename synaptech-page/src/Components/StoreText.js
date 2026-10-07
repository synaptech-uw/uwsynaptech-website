import '../styles/Styles.css';
import React, { useLayoutEffect, useRef, useState } from 'react';
import { isMobile } from 'react-device-detect';

// Gap kept between the blurb and the bottom of the screen, on top of its own height.
const MIN_GAP_VH = 2;
// Space reserved at the top of the screen for the fixed navbar (4rem) plus breathing room.
const TOP_RESERVE_REM = 5;

function StoreText(props) {
  const boxRef = useRef(null);
  const [boxHeight, setBoxHeight] = useState(0);

  // Measure the rendered height (offsetHeight ignores the flip transform). Re-measure when the
  // text or the window changes.
  useLayoutEffect(() => {
    const measure = () => setBoxHeight(boxRef.current ? boxRef.current.offsetHeight : 0);
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [props.title, props.elems]);

  const vh = window.innerHeight / 100;
  const remPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
  const gapPx = MIN_GAP_VH * vh;
  const topReservePx = TOP_RESERVE_REM * remPx;

  // The box is sized by its content. Only when the content is taller than the screen can hold
  // (below the navbar, above the bottom gap) is it capped, and then it scrolls internally.
  const maxHeightPx = window.innerHeight - topReservePx - gapPx;

  // Bottom offset: the configured position (BLURB_COORDS_CONFIG), raised to at least the blurb's
  // own height + gap, but never so high that the box would run under the navbar.
  const configuredBottomPx = ((props.coords.y + 0.995) * 50 + 4) * vh;
  const preferredBottomPx = Math.max(configuredBottomPx, boxHeight + gapPx);
  const highestBottomPx = window.innerHeight - topReservePx - boxHeight;
  const bottomPx = Math.max(gapPx, Math.min(preferredBottomPx, highestBottomPx));

  const styleStr =
    " bottom: " + String(Math.round(bottomPx)) + "px;" +
    " max-height: " + String(Math.round(maxHeightPx)) + "px;" +
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
