import React, { useContext,useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Signup.css';
import { NewContext } from "../context/Context.jsx";

const Signup = () => {
  const { createBuyers } = useContext(NewContext);
  const navigate = useNavigate();
  const [object, setObject] = useState();
  const buyerSubmit = async(event) => {
    event.preventDefault();
    event.target.reset();
    const res = await createBuyers(object);
    if (res.hash) {
      navigate("/home/buyerDashboard");
    } else {
      alert("Something going wrong.")
    }
    
  }
  
  const handleBlur = (event) => {
    const value = event.target.value;
    const field = event.target.name;
    const newUser = { ...object };
    newUser[field] = value;
    setObject(newUser);
  };


    return (
      <div className="buyer-reg">
        <div className="register-form">
          <form onSubmit={buyerSubmit}>
            <h2 className="tag">Buyer Registration</h2>
            <div className="input-container">
              <label className="labeling">Fullname </label>
              <input
                onBlur={handleBlur}
                className="input"
                placeholder="enter username"
                type="text"
                name="name"
                required
              />
            </div>
            <div className="input-container">
              <label id="email" className="labeling">
                Email
              </label>
              <input
                onBlur={handleBlur}
                className="input"
                placeholder="enter your email address"
                type="text"
                name="email"
                required
              />
            </div>
            {/* <div className="input-container">
              <label className="labeling">Enter Age</label>
              <input
                onBlur={handleBlur}
                className="input"
                placeholder="enter your age"
                type="number"
                name="age"
                required
              />
            </div> */}

            <div className="input-container">
              <label id="confirm" className="labeling">
                Enter NID number
              </label>
              <input
                onBlur={handleBlur}
                className="input"
                placeholder="enter your nid number"
                type="text"
                name="nid"
                required
              />
            </div>
            {/* <Link to="/home/buyerDashboard"> */}
            <button className="btn">SignUp</button>
            {/* </Link> */}
          </form>
        </div>
      </div>
    );
};

export default Signup;