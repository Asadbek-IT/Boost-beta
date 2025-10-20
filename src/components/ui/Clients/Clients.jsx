import React from 'react';
import "./client.scss";
import Img from "../../../img/Testimonial.png";

function Clients() {
  return (
    <div className='Clients'>
      <h1 className="Clients-title">Our clients</h1>
      <p className="Clients-text">Hear firsthand how our solutions have boosted online success for users like you.</p>

      <img src={Img} alt="" className="Clients-img" />
      
      <div className="Clients-box">
        <p className='Clients-box-text'>”This product has completely transformed how I manage my projects and deadlines”</p>

        <div className="Clients-name">
          <p className="Clients-name-item1">Talia Taylor</p>
          <p className="Clients-name-item2">Digital Marketing Director @ Quantum</p>
        </div>
      </div>
    </div>
  )
}

export default Clients;
