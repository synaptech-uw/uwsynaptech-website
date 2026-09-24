import React from "react";

// Homepage blurb copy, shared by the desktop and mobile homepages.
// blurbId is the index into the scroll-threshold arrays (two thresholds per window).
export const BLURB_CONTENT_CONFIG = [
  {
    id: 0,
    blurbId: 0,
    title: "About us",
    content: [
      "Synaptech is UW's neuroengineering RSO, open to all majors - no experience required! We meet on Friday evenings for hands-on mini projects and guest speakers from labs around campus. Outside of meetings, student-led project groups build everything from EEG-adaptive focus timers to BCI-controlled exo-arms.",
    ],
  },
  {
    id: 1,
    blurbId: 2,
    title: "Who are we?",
    content: [
      "Neurotechnology is interdisciplinary, and so are we: neuroscientists, programmers, and engineers who share a passion for making cool stuff with brains and tech. If that's you, you're in the right place.",
    ],
  },
  {
    id: 2,
    blurbId: 4,
    title: "Hardware",
    // Plain-text copy of the blurb for the screen-reader label (content below contains a link).
    plainText:
      "Synaptech lends students hardware for group and personal projects. Hack your muscles with EMG or your brain with EEG! To check out any of our hardware, use the request form on our hardware site (hardware.synaptechuw.org). Our hardware managers are happy to help!",
    content: [
      <>
        Synaptech lends students hardware for group and personal projects. Hack your muscles with EMG or
        your brain with EEG! To check out any of our hardware, use the request form on our{" "}
        <a id="formlink" href="https://hardware.synaptechuw.org/" target="_blank" rel="noreferrer">
          hardware site
        </a>
        . Our hardware managers are happy to help!
      </>,
    ],
  },
  {
    id: 3,
    blurbId: 6,
    title: "Want to sponsor us?",
    content: [
      "That's awesome! We'd love to chat - reach out to synaptechuw@gmail.com for more information.",
    ],
  },
];
