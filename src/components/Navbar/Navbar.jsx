import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src= {logo} alt="logo"/>
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Service</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Price</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Blog</a>
              </li>
            </ul>
            <div className="nav-btn">
                <button>Contact Us</button>
            </div>
          </div>
          </div>
       
      </nav>
  )
}

export default Navbar