import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';
import Google from '../Google/Google';

const Signup = () => {
    const [checked, setChecked] = React.useState(false);
    return (
      <div className='buyer-reg'>
        <div className="register-form">
          <form>
            <h2 className="tag">Buyer Registration</h2>
            <div className="input-container">
              <label className="labeling">Fullname </label>
              <input
                className="input"
                placeholder="enter username"
                type="text"
                name="uname"
                required
              />
            </div>
            <div className="input-container">
              <label id="email" className="labeling">
                Email
              </label>
              <input
                className="input"
                placeholder="enter your email address"
                type="text"
                name="uname"
                required
              />
            </div>
            <div className="input-container">
              <label className="labeling">Password </label>
              <input
                className="input"
                placeholder="enter a password"
                type="password"
                name="pass"
                required
              />
            </div>
            <div className="input-container">
              <label id="confirm" className="labeling">
                Confirm Password
              </label>
              <input
                className="input"
                placeholder="enter a password again"
                type="password"
                name="pass"
                required
              />
            </div>

            <div className="input-container">
              <label id="confirm" className="labeling">
                Enter NID number
              </label>
              <input
                className="input"
                placeholder="enter your nid number"
                type="number"
                name="number"
                required
              />
            </div>

            <input id="file" type="file" required />
            <button className="btn">
                <Link to="/home/buyerDashboard">SignUp</Link>
            </button>
          </form>
          <p>
            Already have an account? 
          </p>
          <Google></Google>
        </div>
      </div>
    );
};

export default Signup;