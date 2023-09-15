import React from 'react'
import './Content.css'
import contentCorner from '../../assets/content-corner.png'
const Content = () => {
  return (
    <section id="content">
    <div className="content-corner">
    <img src={contentCorner} alt="content-corner"/>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-sm-6 col-6">
                <div className="content-box">
                    <div className="content-wrapper">
                        <div className="round"></div>
                        <div className="round-one"></div>
                    <div className="content-text">
                        <p>We solve real-world problems through people and the web.</p>
                    </div>
                    </div>
                </div>
                <div className="content-box">
                    <div className="content-wrapper">
                        <div className="round"></div>
                        <div className="round-one"></div>
                    <div className="content-text">
                        <p>We make processes and technology work efficiently together.</p>
                    </div>
                    </div>
                </div>
                <div className="content-box">
                    <div className="content-wrapper">
                        <div className="round"></div>
                        <div className="round-one"></div>
                    <div className="content-text">
                        <p>We advance improve existing technology through research and development.</p>
                    </div>
                    </div>
                </div>
                <div className="content-box">
                    <div className="content-wrapper">
                        <div className="round"></div>
                        <div className="round-one"></div>
                    <div className="content-text">
                        <p>We develop long-lasting and scalable solutions, relationships partnerships.</p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-sm-6 col-6 ps-5 m-sm-none">
                <div className="choose-wrapper">
                    <div className="choose-text">
                        <h3>Why Choose Us</h3>
                        <p>We are now a team of strategists, engineers, designers, and marketers who both use and develop technology for a variety of client needs.</p>
                    </div>
                    <div className="choose-btn">
                        <button>Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
  )
}

export default Content