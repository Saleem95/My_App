import React from 'react';
import {Routes,  Route } from 'react-router-dom';
import Home from '../Components/Home/Home';
import About from '../Components/About/About';
import Signin from '../Components/Signin/Signin';
import ResponsiveAppBar from '../Components/NavBar/NavLinks';
import SignUp from '../Components/Signup/SignUp';

function Routings(props) {
    return (
        <div>
          {/* <NavLinks /> */}
          <ResponsiveAppBar />

        <Routes>
        <Route path="/" exact element={<Signin />} />
        <Route path="/signup" exact element={<SignUp />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="/about" element={<About/>} />
        {/* <Route path="/contact" component={<contct/>} /> */}
        </Routes>
      </div>
    );
}

export default Routings;