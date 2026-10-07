import React, { useEffect, useRef } from "react";
import "../styles/Styles.css";

// Minimal page scrollbar pinned to the left edge. The native scrollbar is hidden site-wide
// (html::-webkit-scrollbar), so this is the only scroll position cue. It is purely visual:
// a translucent track with a thumb whose size and position mirror the window's scroll state.
function ScrollIndicator() {
  const trackRef = useRef(null);
  const thumbRef = useRef(null);

  useEffect(() => {
    const update = () => {
      const track = trackRef.current;
      const thumb = thumbRef.current;
      if (!track || !thumb) return;

      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      if (scrollable <= 0) {
        track.style.opacity = "0";
        return;
      }
      track.style.opacity = "1";

      const trackHeight = track.clientHeight;
      const thumbHeight = Math.max(24, (window.innerHeight / doc.scrollHeight) * trackHeight);
      const thumbTop = (window.scrollY / scrollable) * (trackHeight - thumbHeight);
      thumb.style.height = thumbHeight + "px";
      thumb.style.transform = "translateY(" + thumbTop + "px)";
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    // Page height changes as routes switch and the 3D scene and images load in.
    const observer = new MutationObserver(update);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="scroll-indicator" ref={trackRef} aria-hidden="true">
      <div className="scroll-indicator-thumb" ref={thumbRef} />
    </div>
  );
}

export default ScrollIndicator;
