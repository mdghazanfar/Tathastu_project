import React from 'react';
import Common from './Common';
import abt from "../images/abt.png";

function About() {
  return (
    <>
      <Common name="Welcome to About page"
        imgsrc={abt}
        visit="/contact"
        btname="Contact Now" />
    </>
  );
};

export default About;
