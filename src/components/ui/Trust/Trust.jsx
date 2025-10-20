import React from 'react';
import "./trust.scss";
import img1 from "../../../img/Psonsor1.png";
import img2 from "../../../img/Psonsor2.png";
import img3 from "../../../img/Psonsor3.png";
import img4 from "../../../img/Psonsor4.png";
import img5 from "../../../img/Psonsor5.png";
import img6 from "../../../img/Psonsor6.png";
import img7 from "../../../img/Psonsor7.png";
import img8 from "../../../img/Psonsor8.png";

function Trust() {
  return (
    <div className='Trust'>
        <h1 className='Trust-title'>Trusted by the world’s most innovative teams</h1>

        <div className="Trust-box">
            <div className="Trust-top">
                <div className="Trust-item">
                    <img src={img1} alt="" />
                </div>

                <div className="Trust-item">
                    <img src={img2} alt="" />
                </div>

                <div className="Trust-item">
                    <img src={img3} alt="" />
                </div>

                <div className="Trust-item">
                    <img src={img4} alt="" />
                </div>
            </div>

            <div className="Trust-bottom">
                <div className="Trust-item">
                    <img src={img5} alt="" />
                </div>

                <div className="Trust-item">
                    <img src={img6} alt="" />
                </div>

                <div className="Trust-item">
                    <img src={img7} alt="" />
                </div>

                <div className="Trust-item">
                    <img src={img8} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Trust;
