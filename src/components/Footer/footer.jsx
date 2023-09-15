import React from 'react'
import './footer.css'
import logo from '../../assets/logo.png'
const footer = () => {
  return (
    <section id="footer">
    <div className="container">
        <div className="row">
            <div className="col-lg-5">
               <div className="footer1">
                <div className="footer-logo">
                    <img src={logo} alt="footer-logo"/>
                </div>
                <p>Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.</p>
               </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-4">
                <div className="footer2">
                    <h3>Features</h3>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Benifit</li>
                        <li>Pricing</li>
                        <li>Blog</li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-3 col-sm-4 col-4">
                <div className="footer2">
                    <h3>Products</h3>
                    <ul>
                        <li>Task Management</li>
                        <li>Company growth</li>
                        <li>Time tracking</li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-4">
                <div className="footer4">
                    <h3>Support</h3>
                    <ul>
                        <li>Customer service</li>
                        <li>Accessibility</li>
                        <li>Contact us</li>
                    </ul>
                </div>
            </div>
        </div>
       <div className="row">
        <div className="container">
            <div className="col-lg-12 col-sm-12">
                <div className="copyright">
                    <div className="copy1">
                        <p>@20201 Innovate.All rights reserved.</p>
                    </div>
                    <div className="copy-2">
                        <p>Privacy policy</p>
                        <p>Terms & condition</p>
                    </div>
                </div>
            </div>
        </div>
       </div>
    </div>

  </section>
  )
}

export default footer