import React, { createContext, useContext, useState } from 'react';
import './DashboardCard.css'
import { FaUsers, FaLandmark, FaClipboardList } from 'react-icons/fa';
import {Link} from 'react-router-dom'
import { NewContext } from '../../context/Context';

const Card = ({ icon, title, value }) => {
  return (
    <div className="card">
      <div className="icon">
        {icon}
      </div>
      <div className="content">
        <h2>{title}</h2>
        <p>{value}</p>
      </div>
      
    </div>
  );
};


const Dashboard = () => {
  const { result } = useContext(NewContext);
  console.log(result)
  return (
    <div>
      <div className="dashboard">
        <Card icon={<FaUsers />} title="Total Buyers" value="500" />

        <Card
          icon={<FaLandmark />}
          title="Registered Land Counts"
          value="200"
        />

        <Card icon={<FaClipboardList />} title="Land Requests" value="50" />
      </div>
      <div className="dashboard">
        <div className="dashboard-link">
          <h1>Wish to Add Land!</h1>
          <Link to="/home/addLandSeller">Add Land</Link>
        </div>
        <div className="dashboard-link">
          <h1>Profile</h1>
          <Link to="">View Profile</Link>
        </div>
        <div className="dashboard-link">
          <h1>Land Request</h1>
          <Link to="">View Land Requests</Link>
        </div>
      </div>
      <div className="seller-land-info">
        <h1 className="info-tag">Lands Info:</h1>
        <div className="info">
          <h1>#</h1>
          <h1>City</h1>
          <h1>Area(in sqm.)</h1>
          <h1>Price(BDT)</h1>
          <h1>Property ID</h1>
        </div>
        <div className='dynamic'>
          {result.map((res,index)=> (
            <div className='info'>
              <h1>{res.serial}</h1>
              <h1>{res.city}</h1>
              <h1>{res.area}</h1>
              <h1>{res.price}</h1>
              <h1>{res.property}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
};


export default Dashboard ;
