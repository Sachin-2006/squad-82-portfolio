import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobile, setMobile] = useState(false); 

  const toggleMenu = () => {
    setMobile(!isMobile);
  };


  return (
    <nav className="navbar-container">

      <div className="logo">
        <img className="logo-img" src="/src/assets/Logo.png" alt="Logo" />
        <span className="logo-text">82</span>
      </div>

     
      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>

     
      <div className={`navbar-links ${isMobile ? 'active' : ''}`}>
      <button className="ui-btn" onClick={()=>{setMobile(!isMobile);navigate("/")}}> <span>Home</span></button>
      <button className="ui-btn" onClick={()=>{setMobile(!isMobile);navigate("/activities")}}><span>Activities</span></button>
      <button className="ui-btn" onClick={()=>{setMobile(!isMobile);navigate("/squad")}}><span>Squad</span></button>
      <button className="ui-btn" onClick={()=>{setMobile(!isMobile);navigate("/projects")}}><span>Projects</span></button>
      <button className="ui-btn" onClick={()=>{setMobile(!isMobile);navigate("/about")}}><span>About Us</span></button>

      </div>
    </nav>
  );
};

export default Navbar;
