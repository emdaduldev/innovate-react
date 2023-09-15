import React from 'react'
import './Gallery.css'
// import './Common.css'
import GalleryRight from '../../assets/gallery-right.png'
const Gallery = () => {
  return (
    <section id="gallery">
    <div className="gallery-right">
        <img src={GalleryRight} alt="gallery-right"/>
    </div>
    <div className="container">
        <div className="row g-0">
            <div className="col-lg-3 col-sm-6 col-6">
                <div className="gallery-text  text-center">
                    <h3><span className="one">53</span>k</h3>
                    <p>Happy client</p>
                    <div className="gallery-shape"></div>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-6">
                <div className="gallery-text text-center">
                    <h3><span className="one">10</span>k</h3>
                    <p>Projects Done</p>
                    <div className="gallery-shape"></div>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-6">
                <div className="gallery-text text-center">
                    <h3 className="one">120</h3>
                    <p>Gets Award</p>
                    <div className="gallery-shape"></div>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-6">
                <div className="gallery-text text-center">
                    <h3 className="one">16</h3>
                    <p>Operated Years</p>
                </div>
            </div>
        </div>
    </div>
  </section>
  )
}

export default Gallery