import React, { createContext, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NewContext } from "../../context/Context";
import Dashboard from "../SellerDashboard/DashboardCards";
import SellerDashboard from "../SellerDashboard/SellerDashboard";
import "./AddLandSeller.css";

const AddLandSeller = () => {
  const navigate = useNavigate();
  const { result, setResult } = useContext(NewContext);
  const [users, setUsers] = useState([]);
  const [object, setObject] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    const newData = [...result, object];
    setResult(newData);
    navigate("/home/sellerDashboard");
  };
  const handleBlur = (event) => {
    const value = event.target.value;
    const field = event.target.name;
    const newUser = { ...object };
    newUser[field] = value;
    setObject(newUser);
  };
  console.log(result);
  return (
    <div className="seller-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="serial">Serial No.</label>
        <input onBlur={handleBlur} type="number" name="serial" required />
        <br></br>
        <label htmlFor="city">City</label>
        <input onBlur={handleBlur} type="text" name="city" required />
        <br></br>
        <label htmlFor="area">Area(in sqm.)</label>
        <input onBlur={handleBlur} type="number" name="area" required />
        <br></br>
        <label htmlFor="price">Price(BDT)</label>
        <input onBlur={handleBlur} type="number" name="price" required />
        <br></br>
        <label htmlFor="propertyId">Property ID</label>
        <input onBlur={handleBlur} type="number" name="property" required />
        <br></br>
        <button>Add Land</button>
        <br></br>
        </form>
    </div>
  );
};

export default AddLandSeller;
