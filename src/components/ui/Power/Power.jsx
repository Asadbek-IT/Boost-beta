import React from 'react';
import "./power.scss";
import Img1 from "../../../img/UserFriendly.png";
import Img2 from "../../../img/Visualreports.png";
import CardImg1 from "../../../img/Visual(1).png";
import CardImg2 from "../../../img/Visual.png";


function Power() {
  return (
    <div className='Power'>
      <h1 className='Power-title'>Harness the power of AI, making search engine optimization intuitive and effective for all skill levels.</h1>

      <div className="Power-box">
        <div className="Power-card">
          <img src={CardImg1} alt="" className='Power-img' />

          <h1 className='Power-card-title'>SEO goal setting</h1>
          <p className='Power-card-text'>Helps you set and achieve SEO goals with guided assistance.</p>
        </div>

        <img src={Img1} alt="" className='Power-card-img'/>
      </div>

      <div className="Power-box">
        <img src={Img2} alt="" className='Power-card-img'/>

        <div className="Power-card">
          <img src={CardImg2} alt="" className='Power-img' />

          <h1 className='Power-card-title'>Smart Keyword Generator</h1>
          <p className='Power-card-text'>Automatic suggestions and the best keywords to target.</p>
        </div>
      </div>
    </div>
  )
}

export default Power;
