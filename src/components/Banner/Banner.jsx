import React from 'react'
import './Banner.css'
import bannerFlow from '../../assets/banner-flow.png'
import bannerDot from '../../assets/banner-dot.png'
const Banner = () => {
  return (
    <section id="banner">
        <div className="container">
            <div className="row">
                <div className="col-lg-10 m-auto">
                    <div className="banner-text">
                        <h1>You’re Unique.Your Website Should be too</h1>
                        <p>A beautiful website passionately crafted for your small business.  Our Digital Agency development has changed the way brands and businesses use technology for growing business.</p>
                    </div>
                    <div className="banner-btn text-center">
                        <button className="btn1"><p>Get Free Quoto</p></button>
                        <button className="btn2"><p>Learn More</p></button>
                    </div>
                </div>
            </div>
        </div>
        <div className="banner-flow">
            <img src={bannerFlow} alt="banner-flow"/>
        </div>
        <div className="banner-dot">
            <img src={bannerDot} alt="banner-dot"/>
        </div>
      </section>
  )
}

export default Banner