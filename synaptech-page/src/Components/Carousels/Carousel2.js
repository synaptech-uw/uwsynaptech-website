/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Carousel2.css'

const data = [
  {
    image: require('../../assets/NTX_Logo-1.png'),
    caption: "NeurotechX",
    caption_style: "caption-dark",
    description: "A competition",
    description_style: "description"
  },
  // current text wayyyyy too long (see below)
  // Each year NTX organizes its famous NTX Student Club Competition where 20+ student clubs submit their project(s). Over the past few years we’ve been impressed with the increasing quality of projects and this year we’re challenging ourselves, as an organization, to put forward the best competition to date. The theme of the competition, this year, is Visual BCI for Communication. There will be two (2) parts; the Offline Part and the Online Part. The offline part consists of a similar format than previous years were the clubs will submit their project in a video format with their code and relevant files. The online part consists of a live virtual event (e.g. Zoom) where the clubs will have to use their BCI live over the Internet to communicate with the jury. This has never been done before in such a format and especially not with undergraduate students. This is an exciting challenge for us as organizers as much as it is for the students and our partners to be part of history.
  {
    image: require('../../assets/profilePictures/DevyanshGupta.png'),
    caption: "Test2",
    caption_style: "caption",
    description: "Test 2 Description Here",
    description_style: "description"
  },
  {
    image: require('../../assets/profilePictures/HritikArasu.png'),
    caption: "Test 3",
    caption_style: "caption-dark",
    description: "Test 3 Description Here",
    description_style: "description-dark"
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
              <Carousel.Caption>
                <h3 className={slide.caption_style}>{slide.caption}</h3>
                <p className={slide.description_style}>{slide.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}

      </Carousel>
    </div>
  );
}
export default Carousel2;