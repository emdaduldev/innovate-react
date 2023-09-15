import React from 'react'
import './plan.css'
import emojiOne from '../../assets/emoji1.png'
import emojiTwo from '../../assets/emoji2.png'
import emojiThree from '../../assets/emoji3.png'
function plan() {
  return (
    <section id="plan">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 m-auto text-center">
                <div className="plan-haeding">
                    <h3>Choose The Right Plan</h3>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-4 col-sm-4 pb-3 text-center">
                <div className="emoji-card">
                    <h3>Basic</h3>
                    <div className="emoji1">
                        <img src={emojiOne} alt="emoji1"/>
                    </div>
                    <div className="money">
                        <h4>$</h4>
                        <h2>160</h2>
                    </div>
                    <p>Responsive Design
                        Dynamic Elements
                        Service Pages
                        Custom Design & Features</p>
                </div>
            </div>
            <div className="col-lg-4 col-sm-4 pb-3 text-center">
                <div className="emoji-card">
                    <h3>Professional</h3>
                    <div className="emoji1">
                        <img src={emojiTwo} alt="emoji2"/>
                    </div>
                    <div className="money">
                        <h4>$</h4>
                        <h2>240</h2>
                    </div>
                    <p>Responsive Design
                        Dynamic Elements
                        Service Pages
                        Custom Design & Features</p>
                </div>
            </div>
            <div className="col-lg-4 col-sm-4 text-center">
                <div className="emoji-card">
                    <h3>Exclusive</h3>
                    <div className="emoji1">
                        <img src={emojiThree} alt="emoji3"/>
                    </div>
                    <div className="money">
                        <h4>$</h4>
                        <h2>325</h2>
                    </div>
                    <p>Responsive Design
                        Dynamic Elements
                        Service Pages
                        Custom Design & Features</p>
                </div>
            </div>
        </div>
    </div>
  </section>
  )
}

export default plan