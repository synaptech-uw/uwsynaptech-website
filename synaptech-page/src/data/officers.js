import React from "react";

// 2026-2027 officer roster. Shared by the desktop and mobile Our Team pages.
// Images live in public/assets/profilePictures.
const OFFICERS = [
  {
    name: "Sebastian Hriscu",
    title: "President",
    image: "/assets/profilePictures/SebastianHriscu.jpg",
    major: "Computer Science, Neural Engineering & Bioethics",
    year: "Third Year",
    blurb: (
      <p>
        Hi, my name is Sebastian and I’m the current president of Synaptech! I’m primarily interested in
        computational biology and brain-computer interfaces, and I love the interdisciplinary aspect of
        neurotech. I’m also leading the Kairos project, where we are building a focus timer which adapts in
        real time from EEG signals.
      </p>
    ),
  },
  {
    name: "Megan Pereira",
    title: "Vice President",
    image: "/assets/profilePictures/MeganPereira.jpg",
    major: "Computer Science & Economics",
    year: "Third Year",
    blurb: (
      <p>
        Hi I’m Megan, one of Synaptech’s vice presidents for this year. I am currently a third year studying
        Computer Science and Economics and minoring in AMATH. I am also currently a part of the Kairos project.
      </p>
    ),
  },
  {
    name: "Lincoln Mansbach",
    title: "Vice President",
    image: "/assets/profilePictures/lincoln_pic.webp",
    major: "Electrical & Computer Engineering",
    year: "Fourth Year",
    blurb: (
      <p>
        Hi, I’m Lincoln, one of Synaptech’s VPs this year! I’m studying electrical and computer engineering,
        mainly with a focus on digital design, and am doing research in the area. I’ve been in Synaptech
        through all my time in college, and am looking forward to my fourth and final year here!
      </p>
    ),
  },
  {
    name: "Jonas Brown",
    title: "Treasurer",
    image: "/assets/profilePictures/JonasBrown.jpg",
    major: "MCD Biology, minor in Neural Computation",
    year: "Third Year",
    blurb: (
      <p>
        My name is Jonas. I'm studying MCD biology, minor in neural computation. I'm the treasurer for
        Synaptech. I work in glioblastoma data analysis research at Seattle Children's. I love what the future
        has for the intersection between computers and biology, and I'm excited to meet people with similar
        interests!
      </p>
    ),
  },
  {
    name: "Ameya Bhide",
    title: "Secretary",
    image: "/assets/profilePictures/AmeyaBhide.jpg",
    major: "Computer Science",
    year: "Third Year",
    blurb: (
      <p>
        Hi, I am Ameya and I am the secretary for Synaptech. I’m interested in machine learning and its
        applications to biology and neuroscience. I currently do computational genomics research in the
        Mostafavi Lab, where I work with deep learning models to analyze gene regulation and genomic data, and
        I’m excited to begin working with new projects!
      </p>
    ),
  },
  {
    name: "Abby Thorleifson",
    title: "Social Media Chair",
    image: "/assets/profilePictures/AbbyThorleifson.jpg",
    major: "Bioengineering",
    year: "Second Year",
    blurb: (
      <p>
        Hi my name is Abby and I am the social media chair for Synaptech. I am a second year student in
        Bioengineering. I plan to get a dual degree in Entrepreneurship and a minor in Neural Computation and
        Engineering. I am interested in using applications of neural engineering for brain disease research.
      </p>
    ),
  },
  {
    name: "Ahmad Alssalem",
    title: "Affiliation Representative",
    image: "/assets/profilePictures/AhmadAlssalem.jpg",
    major: "Electrical & Computer Engineering",
    year: "Second Year",
    blurb: (
      <p>
        My name is Ahmad Alssalem, and I am the ESC & Allen School Representative for Synaptech. I aspire to
        build devices and assist those with degenerative diseases in the future with the developments of
        computing and AI. In this coming year, I will be planning to bring the Exo-Arm research project back
        where we develop BCI-controlled Exo-arms for those with upper-limb impairments.
      </p>
    ),
  },
  {
    name: "David Hodack",
    title: "Hardware Manager",
    image: "/assets/profilePictures/DavidHodack.jpg",
    major: "Electrical & Computer Engineering",
    year: "Second Year",
    blurb: (
      <p>
        My name is David, and I am one of the Hardware Managers of Synaptech. I am passionate about
        Neurotechnology and its applications in medicine, VR, and understanding the brain. I’m currently
        assisting with research at the Center for Neurotechnology. I am also the hardware lead of the NeuroForge
        project, where we are interpreting brainwave data from an OpenBCI EEG with a Spiking Neural Network.
      </p>
    ),
  },
  {
    name: "Jinny Park",
    title: "Hardware Manager",
    image: "/assets/profilePictures/JinnyPark.jpg",
    major: "Computer Science & Neuroscience",
    year: "Second Year",
    blurb: (
      <p>
        Hello, I’m Jinny, the other hardware manager! I’m interested in the emerging intersection between
        computer science and neuroscience. I do work under the Kim Lab and Professor Curatolo with neurotech and
        neuropathic pain analysis, accordingly. I’m also Neuroforge’s lead where we interpret brainwaves!
      </p>
    ),
  },
  {
    name: "Alejandro Striefel",
    title: "Website Team Lead",
    image: "/assets/profilePictures/AlejandroStriefel.jpg",
    major: "Human Centered Design & Engineering",
    year: "Minor in Computational Neuroscience",
    blurb: (
      <p>
        I'm Alejandro Striefel, the web-dev for Synaptech. I've been incredibly interested in neurotechnology
        ever since highschool, which brought me immediately to Synaptech as an incoming freshman. Subscribing to
        their newsletter brought me to their first HackJam which then led into several projects working with
        them. I am particularly interested in the motor cortex and decoding motion from neural activity. I've
        been staying connected as an Alum to continue to do just that.
      </p>
    ),
  },
];

export default OFFICERS;
