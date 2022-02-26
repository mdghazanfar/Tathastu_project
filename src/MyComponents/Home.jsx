import React from 'react';
import Common from '../MyComponents/Common';
import web from "../images/img1.png";

function Home() {
  return (
    <>
      <Common
        name="Grow Your Business With"
        imgsrc={web}
        visit="/services"
        btname="Get Started" />
    </>
  );
};

export default Home;
