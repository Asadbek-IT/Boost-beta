import React from 'react';
import "./intro.scss";
import IntroImg from "../../../img/Intro.png";
import IntroShade from "../../../img/Shade.png"

function intro() {
  return (
    <div className='Intro'>
      <div className="Integration">

        <div className="New">NEW</div>

        <p className='Integration-text'>Latest integration just arrived</p>

      </div>

      <h1 className="Intro-title">Boost your rankings with AI.</h1>

      <p className="Intro-text">Elevate your site’s visibility effortlessly with AI, where smart technology meets user-friendly SEO tools.</p>

      <div className="Intro-btn">
        <button className="Intro-item">
            Start for free
        </button>
      </div>

      <img src={IntroImg} alt="" className='Intro-img'/>
      <img src={IntroShade} alt="" className='Intro-img2'/>
    </div>
  )
}

export default intro;
