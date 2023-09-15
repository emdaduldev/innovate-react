import React from 'react'
import './Impact.css'
import ideaCorner from '../../assets/idea-corner.png'
import ideaIconOne from '../../assets/idea-icon1.png'
import ideaIconTwo from '../../assets/idea-icon2.png'
import ideaImages from '../../assets/idea-images.png'
const Impact = () => {
  return (
    <section id="impact">
        <div className="idea-corner">
            <img src={ideaCorner} alt="idea-corner"/>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 m-auto">
                    <div className="impact-heading">
                        <h3>We create real impact</h3>
                        <h3>We create real impact</h3>
                        <p>We design, build and support websites and apps for clients worldwide. Create beautiful, eye-catching on-page messages without the need for a developer.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 ps-5">
                    <div className="idea-part">
                        <div className="idea-icon">
                            <img src={ideaIconOne} alt="idea-icon1"/>
                            <h3>Competitive analysis</h3>
                        </div>
                        <p>With an all-new look and powerful features, Ekko is the best way to ensure success for your business.</p>
                    </div>
                    <div className="idea-part pt-5">
                        <div className="idea-icon">
                            <img src={ideaIconTwo} alt="idea-icon2"/>
                            <h3>Strategy And research</h3>
                        </div>
                        <p>Save money and start building your website using the best tools available on the market today.</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="idea-images">
                        <img src={ideaImages} alt="idea-images"/>
                    </div>
                </div>
            </div>
        </div>
      </section>
  )
}

export default Impact