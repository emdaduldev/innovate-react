import React from 'react'
import './blog.css'
import blogCorner from '../../assets/blog-corner.png'
const blog = () => {
  return (
<section id="blog">
        <div className="blog-corner">
            <img src={blogCorner} alt="blog-corner-img"/>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-5">
                    <div className="blog-title">
                        <h3>You May Also Like </h3>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-5 col-sm-6  ms-lg-5">
                    <div className="blog-box"></div>
                </div>
                <div className="col-lg-5 col-sm-6">
                    <div className="blog-text">
                       <ul>
                        <li className="text-1">News</li>
                        <li>By</li>
                        <li>Tomas Nikelson</li>
                        <li>Posted</li>
                        <li>5 Hours Ago</li>
                       </ul>
                        <p>Punto Pago Allows Quick And Secure 
                            Payments For Services In Panama</p>
                            <div className="read-btn">
                                <h4>Read more</h4>
                                <div className="btn-shape"></div>
                            </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-5 col-sm-6  ms-lg-5">
                    <div className="blog-box"></div>
                </div>
                <div className="col-lg-5">
                    <div className="blog-text">
                        <ul>
                         <li className="text-1">News</li>
                         <li>By</li>
                         <li>Tomas Nikelson</li>
                         <li>Posted</li>
                         <li>5 Hours Ago</li>
                        </ul>
                         <p>Punto Pago Allows Quick And Secure 
                             Payments For Services In Panama</p>
                             <div className="read-btn">
                                 <h4>Read more</h4>
                                 <div className="btn-shape"></div>
                             </div>
                     </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-5 col-sm-6  ms-lg-5">
                    <div className="blog-box"></div>
                </div>
                <div className="col-lg-5">
                    <div className="blog-text">
                        <ul>
                            <li className="text-1">News</li>
                            <li>By</li>
                            <li>Tomas Nikelson</li>
                            <li>Posted</li>
                            <li>5 Hours Ago</li>
                           </ul>
                        <p>Punto Pago Allows Quick And Secure 
                            Payments For Services In Panama</p>
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

export default blog