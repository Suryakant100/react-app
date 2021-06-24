import React from 'react';
import Common from './Common';
import aboutimg from "../src/images/about2.svg"

const About = () => {
  return (
    <>
      <Common 
      name="Welcome to About page"
       title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc mi, rhoncus vehicula metus non, egestas interdum mi. Maecenas quis dignissim dolor. "
       btnname ="Contact Us"
       link="/contact"
       imgsrc={aboutimg}
        />
       
    </>
  );
}

export default About;
