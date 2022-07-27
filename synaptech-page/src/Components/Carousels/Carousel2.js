// MOSTLY FUNCTIONAL
// my second attempt at making a functional image and text carousel - revisions have made it more successful! can now page through images and text
// separator divs used to prevent overlap with rectangle slide indicators and end of text (could probably be exchanged for padding in CSS (but I'm lazy rn))
// arrows are further down then previously (middle of the "slide"), but I think it looks ok/makes sense?


/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Carousel2.css'

const data = [
  {
    image: require('../../assets/NTX_Logo-1.png'),
    caption: "NeurotechX",
    caption_style: "caption",
    description1: "Each year NTX organizes its famous NTX Student Club Competition where 20+ student clubs submit their project(s). Over the past few years we’ve been impressed with the increasing quality of projects and this year we’re challenging ourselves, as an organization, to put forward the best competition to date.",
    description2: "The theme of the competition, this year, is Visual BCI for Communication. There will be two (2) parts; the Offline Part and the Online Part. The offline part consists of a similar format than previous years were the clubs will submit their project in a video format with their code and relevant files. The online part consists of a live virtual event (e.g. Zoom) where the clubs will have to use their BCI live over the Internet to communicate with the jury. This has never been done before in such a format and especially not with undergraduate students. This is an exciting challenge for us as organizers as much as it is for the students and our partners to be part of history.",
    description_style: "description"
  },
  {
    image: require('../../assets/profilePictures/DevyanshGupta.png'),
    caption: "Smart Music",
    caption_style: "caption",
    description1: "The project goal is to decode neural activity to tell when someone is enjoying or not enjoying music they are listening to, and use that information to train an AI to generate music that the user might enjoy! Initially we are looking to focus on MIDI music, but will expand to more extensive music generation later on. The project will be split into two teams working simultaneously; team one will learn/apply Python, Machine Learning applications, and Shared Coding skills (GitHub) to build an AI-Generated music script in Python, while team two will learn/apply Signal Processing, Hardware construction, EEG, and Machine Learning to decode neural signals into a binary or trinary \"enjoying/not enjoying/disliking\" output, which will be used to train the music generation AI.",
    description2: "The finished product will likely change in appearance as we progress, but hopefully we can build a toolkit for generating personalized music!",
    description_style: "description"
  },
  {
    image: require('../../assets/profilePictures/HritikArasu.png'),
    caption: "Neurogame",
    caption_style: "caption",
    description1: "Placeholder for information about Neurogame. Placeholder for information about Neurogame.",
    description2: "Placeholder for information about Neurogame. Placeholder for information about Neurogame. Placeholder for information about Neurogame. Placeholder for information about Neurogame.",
    description_style: "description"
  }
]

function Carousel2() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carousel-holder">
      <Carousel activeIndex={index} onSelect={handleSelect} slide={false}>
        {data.map((slide, i) => {
          return (
            <Carousel.Item>
              <img
                className="carousel-image"
                src={slide.image}
                alt="slider image"
              />
              <div role="separator" Style = "height: 2vh" />
              <h3 className={slide.caption_style}>{slide.caption}</h3>
              <p className={slide.description_style}>{slide.description1}</p>
              <p className={slide.description_style}>{slide.description2}</p>
              <div role="separator" Style = "height: 5vh" />
            </Carousel.Item>
          )
        })}

      </Carousel>
    </div>
  );
}
export default Carousel2;