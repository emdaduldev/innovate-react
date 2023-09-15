import React from 'react'
import './Slider.css'
import testiImg from '../../assets/testimonial-img.png'
const slider = () => {
  return (
    <section id="slider">
    <div className="container">
        <div className="row">
            <div className="col-lg-8 m-auto">
                <div className="slider-heading">
                    <h3>What The People Thinks About Us </h3>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12 text-center">
                <div className="testimonial">
                    <div className="test-img">
                        <img className="img-fluid" src={testiImg} alt="testimonial-img"/>
                    </div>
                    <div className="test-star">
                        <div className="stars"></div>
                        <div className="stars"></div>
                        <div className="stars"></div>
                        <div className="stars"></div>
                        <div className="stars"></div>
                    </div>
                    <div className="test-text">
                        <p>Lesser Replenish bearing they’re him cattle kind dominion. You 
                            which fill place. Land she’d subdue divided gathering blessed
                            seasons it. Without, wherein days.</p>
                            <h3>Lukan Depina</h3>
                            <h4>Ceo And Head Of Idea</h4>
                    </div>
                    <div className="prev-arrow">
                        <h3>.</h3>
                    </div>
                    <div className="next-arrow">
                        <h3>.</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
  )
}

export default slider