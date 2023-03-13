import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NewContext } from "../context/Context";
import "../SignUp/Signup.css";

const SellerRegistry = () => {
  const { createSellers } = useContext(NewContext);
  const navigate = useNavigate();
  const [sellers, setSeller] = useState();
  const sellerSubmit = async (event) => {
    event.preventDefault();
    event.target.reset();
    const res = await createSellers(sellers);
    if (res.hash) {
      navigate("/home/sellerDashboard");
    } else {
      alert("Something is wrong..");
    }
  };

  const handleSellerBlur = (event) => {
    const value = event.target.value;
    const field = event.target.name;
    const newUser = { ...sellers };
    newUser[field] = value;
    setSeller(newUser);
  };
  return (
    <div>
      <div className="register-form">
        <form onSubmit={sellerSubmit}>
          <h2 className="tag">Seller Registration</h2>
          <div className="input-container">
            <label className="labeling">Fullname </label>
            <input
              onBlur={handleSellerBlur}
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
              onBlur={handleSellerBlur}
              className="input"
              placeholder="enter your email address"
              type="text"
              name="email"
              required
            />
          </div>
          {/* <div className="input-container">
            <label className="labeling">Enter Age </label>
            <input
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
              onBlur={handleSellerBlur}
              className="input"
              placeholder="enter your nid number"
              type="text"
              name="nid"
              required
            />
          </div>
          {/* <Link to='/home/sellerDashboard'> */}
          <button className="btn">SignUp</button>
          {/* </Link> */}
        </form>
      </div>
    </div>
  );
};

export default SellerRegistry;
