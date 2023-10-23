// DOES NOT WORK: error: "Support for the experimental syntax 'jsx' isn't currently enabled"
// third attempt at making working carousel with images and text in react
// uses https://www.npmjs.com/package/react-native-image-slider-text-box

import React from "react";
import { SliderBox } from "react-native-image-slider-box";

function Carousel3() {

  const banners = [{ 'img': require('../assets/NTX_Logo-1.png'), 'buttonText': 'buttonText1 ', 'title': 'NeurotechX' },
  { 'img': require('../assets/profilePictures/DevyanshGupta.png'), 'buttonText': 'buttonText2 ', 'title': 'Test2' },
  { 'img': require('../assets/profilePictures/HritikArasu.png'), 'buttonText': 'buttonText3 ', 'title': 'test3' }]


  return (
    <div>
      <SliderBox
        images={banners}
        // sliderBoxHeight={height}

        // parentWidth={width}
        onCurrentImagePressed={index => { console.log('index') }}
        dotColor="#FFEE58"
        inactiveDotColor="#90A4AE"
        paginationBoxVerticalPadding={20}
        autoplay
        circleLoop

        resizeMode={'cover'}
      />
    </div>
  )
}

export default Carousel3;