import React from 'react'
import './cards.css'
import cardLogoOne from '../../assets/card-logo1.png'
import cardLogoTwo from '../../assets/card-logo2.png'
import cardLogoThree from '../../assets/card-logo3.png'
import cardLogoFour from '../../assets/card-logo4.png'
import cardLogoFive from '../../assets/card-logo5.png'
const Cards = () => {
  return (
    <section id="cards">
    <div className="container">
        <div className="row g-5">
            <div className="col-lg-4 col-sm-6 col-6">
                <div className="cards-content">
                    <h3>What We Do</h3>
                    <p>We are now a team of strategists, engineers, designers, and marketers who both use and develop technology </p>
                    <div className="cards-btn">
                        <button>Contact Us</button>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-6 text-center">
                <div className="card1">
                    <div className="card-logo">
                        <img src={cardLogoOne} alt="card-logo1"/>
                    </div>
                    <h3>web Design & Dev </h3>
                    <p>Social Media has changed the way we interact & do business while creating</p>
                    <div className="read-btn">
                        <h4>Read more</h4>
                        <div className="btn-shape"></div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-6 text-center">
                <div className="card1">
                    <div className="card-logo">
                        <img src={cardLogoTwo} alt="card-logo2"/>
                    </div>
                    <h3>Software Dev</h3>
                    <p>Content Marketing is the other fold of online advertisement. If you are looking to build</p>
                    <div className="read-btn">
                        <h4>Read more</h4>
                        <div className="btn-shape"></div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-6 text-center">
                <div className="card1">
                    <div className="card-logo">
                        <img src={cardLogoThree} alt="card-logo3"/>
                    </div>
                    <h3>Content Writing</h3>
                    <p>Social Media has changed the way we interact & do business while creating a new avenue.</p>
                    <div className="read-btn">
                        <h4>Read more</h4>
                        <div className="btn-shape"></div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-6 text-center">
                <div className="card1">
                    <div className="card-logo">
                        <img src={cardLogoFour} alt="card-logo4"/>
                    </div>
                    <h3>Digital Marketing</h3>
                    <p>Social Media has changed the way we interact & do business while creating a new avenue.</p>
                    <div className="read-btn">
                        <h4>Read more</h4>
                        <div className="btn-shape"></div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-6 text-center">
                <div className="card1">
                    <div className="card-logo">
                        <img src={cardLogoFive} alt="card-logo5"/>
                    </div>
                    <h3>Support & Training</h3>
                    <p>Content Marketing is the other fold of online advertisement. If you are looking to build</p>
                    <div className="read-btn">
                        <h4>Read more</h4>
                        <div className="btn-shape"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Cards