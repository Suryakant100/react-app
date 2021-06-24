import React from 'react';
import { NavLink } from 'react-router-dom';
import Common from './Common';

import homeimg from "../src/images/mainhome.svg";


const Home = () => {
    return (
        <>
           <Common 
           name="Grow Your Future With "
           company="Suryakant"
           title="We are the team of Talented Developer"
           btnname ="Get Started"
           link="/service"
           imgsrc={homeimg}/>
        </>
    );
}

export default Home;