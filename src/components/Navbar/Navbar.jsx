import React from 'react';
import Logo from "../../img/Logo.png";
import './navbar.scss';

function Navbar() {
  return (
    <div className="Navbar">
      <img src={Logo} alt="" className='Navbar-logo' />

      <div className="Tools">
        <a href="" className="Tools-item">Features</a>
        <a href="" className="Tools-item">Developers</a>
        <a href="" className="Tools-item">Company</a>
        <a href="" className="Tools-item">Blog</a>
        <a href="" className="Tools-item">Changelog</a>
      </div>

        <div className="Navbar-btn">
            <button className="Navbar-item">Join waitlist</button>
        </div>

    </div>
  )
}

export default Navbar;
