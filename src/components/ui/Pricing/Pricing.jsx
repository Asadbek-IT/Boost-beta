import React from 'react';
import "./pricing.scss";

const Pricing = () => {
  return (
    <div className='Pricing'>
        <h1 className="Pricing-title">Pricing</h1>
        <p className="Pricing-text">Choose the right plan to meet your SEO needs and start optimizing today.</p>

        <div className="Pricing-box">
            <div className="Pricing-card">
                <div className="Pricing-card-text-box">
                    <p className="Pricing-card-title">Pricing</p>
                    <p className="Pricing-card-priice">$29/mo</p>
                </div>

                <div className="Pricing-item-box">
                    <p className="Pricing-card-item">✅Keyword optimization</p>
                    <p className="Pricing-card-item">✅Automated meta tags</p>
                    <p className="Pricing-card-item">✅SEO monitoring</p>
                    <p className="Pricing-card-item">✅Monthly reports</p>
                </div>

                <button className="Pricing-btn">Join waitlist</button>
            </div>

            <div className="Pricing-card">
                <div className="Pricing-card-text-box">
                    <p className="Pricing-card-title">Pro</p>
                    <p className="Pricing-card-priice">$79/mo</p>
                </div>

                <div className="Pricing-item-box">
                    <p className="Pricing-card-item">✅Keyword optimization</p>
                    <p className="Pricing-card-item">✅Automated meta tags</p>
                    <p className="Pricing-card-item">✅SEO monitoring</p>
                    <p className="Pricing-card-item">✅Monthly reports</p>
                    <p className="Pricing-card-item">✅Content suggestions</p>
                    <p className="Pricing-card-item">✅Link optimization</p>
                </div>

                <button className="Pricing-btn">Join waitlist</button>
            </div>

            <div className="Pricing-card">
                <div className="Pricing-card-text-box">
                    <p className="Pricing-card-title">Business</p>
                    <p className="Pricing-card-priice">$149/mo</p>
                </div>

                <div className="Pricing-item-box">
                    <p className="Pricing-card-item">✅Keyword optimization</p>
                    <p className="Pricing-card-item">✅Automated meta tags</p>
                    <p className="Pricing-card-item">✅SEO monitoring</p>
                    <p className="Pricing-card-item">✅Monthly reports</p>
                    <p className="Pricing-card-item">✅Content suggestions</p>
                    <p className="Pricing-card-item">✅Link optimization</p>
                    <p className="Pricing-card-item">✅Multi-user access</p>
                    <p className="Pricing-card-item">✅API integration</p>
                </div>

                <button className="Pricing-btn">Join waitlist</button>
            </div>
        </div>
    </div>
  )
}

export default Pricing;
