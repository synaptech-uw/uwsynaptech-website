import './Carousel.css'

function Carousel(props) {

  const oldcode = (

    <div class="row">
      <div class="col-md- align-center">
        <img src="img/NTX_Logo-1.png" alt="neurotech x logo" />
      </div>
      <div class="col">
        <h4>NeurotechX</h4>
        <p>Each year NTX organizes its famous NTX Student Club Competition where 20+ student clubs submit their project(s). Over the past few years we’ve been impressed with the increasing quality of projects and this year we’re challenging ourselves, as an organization, to put forward the best competition to date.</p>
        <p>The theme of the competition, this year, is Visual BCI for Communication. There will be two (2) parts; the Offline Part and the Online Part. The offline part consists of a similar format than previous years were the clubs will submit their project in a video format with their code and relevant files. The online part consists of a live virtual event (e.g. Zoom) where the clubs will have to use their BCI live over the Internet to communicate with the jury. This has never been done before in such a format and especially not with undergraduate students. This is an exciting challenge for us as organizers as much as it is for the students and our partners to be part of history.</p>
      </div>
    </div>
  );


  return (
    <div className="carousel-holder">
      <div className="carousel-page">
        <button className="carousel-button-left"><p> </p></button>
        <img src="assets/NTX_Logo-1.png" alt="neurotech x logo" className="carousel-image" />
        <div className="carousel-text">
          <h4>NeurotechX</h4>
          <p>Each year NTX organizes its famous NTX Student Club Competition where 20+ student clubs submit their project(s). Over the past few years we’ve been impressed with the increasing quality of projects and this year we’re challenging ourselves, as an organization, to put forward the best competition to date.</p>
          <p>The theme of the competition, this year, is Visual BCI for Communication. There will be two (2) parts; the Offline Part and the Online Part. The offline part consists of a similar format than previous years were the clubs will submit their project in a video format with their code and relevant files. The online part consists of a live virtual event (e.g. Zoom) where the clubs will have to use their BCI live over the Internet to communicate with the jury. This has never been done before in such a format and especially not with undergraduate students. This is an exciting challenge for us as organizers as much as it is for the students and our partners to be part of history.</p>
        </div>
        <button className="carousel-button-right"><p>  </p></button>
      </div>
    </div>

  );
}

export default Carousel;