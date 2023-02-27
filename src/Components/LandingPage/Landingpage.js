import React from 'react';
import { Link } from 'react-router-dom';
import logo from './land-image.gif'
import './Landingpage.css'

const Landingpage = () => {
    return (
      <div className="landing">
        <div className="land">
          <h1>
            RegiLands
          </h1>
          <p className="p1">
            You can buy and sell your properties in a blink of
          </p>
          <p className="p2">an eye</p>
          <Link className="link-btn" to="/home/signup">
            Get Started As Buyer
          </Link>
          <Link id='btn-2' className="link-btn" to="/home/sellerSignUp">
            Get Started As Seller
          </Link>
        </div>
        <div className="gif">
          <img className="gif-img" src={logo} alt="loading..." />
        </div>
      </div>
    );
};

export default Landingpage;