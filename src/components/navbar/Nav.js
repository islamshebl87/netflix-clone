import React, { useState, useEffect } from 'react'
import logo from './../../images/logo.jpg';
import logo2 from './../../images/logo.png';
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);

useEffect(() => {
    window.addEventListener(
        "scroll", ()=>{
            if(window.scrollY > 150){
                handleShow(true);
            }else handleShow(false);
        }
    );

    return () => {
        window.removeEventListener("scroll")
    };
}, []);


    return (
      <div className={`nav ${show && "nav__black"}`}>
        <img
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
        />
        <img className="nav__avatar" src={logo} alt="Netflix avatar" />
        <img className="nav__avatar__center" src={logo2} alt="Netflix avatar" />
        {/* <div className="nav__fade"></div> */}
      </div>
    );
}

export default Nav
