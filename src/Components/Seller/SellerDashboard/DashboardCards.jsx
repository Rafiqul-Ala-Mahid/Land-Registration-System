import React, { createContext, useContext, useState } from 'react';
import './DashboardCard.css'
import { FaUsers, FaLandmark, FaClipboardList } from 'react-icons/fa';
import {Link} from 'react-router-dom'
import { NewContext } from '../../context/Context';

const Card = ({ icon, title, value }) => {
  return (
    <div className="seller-card">
      <div className="seller-icon">{icon}</div>
      <div className="seller-content">
        <h2>{title}</h2>
        <p>{value}</p>
      </div>
    </div>
  );
};


const Dashboard = () => {
  const { lands,buyers } = useContext(NewContext);
  return (
    <div>
      <div className="seller-dashboard">
        <Card icon={<FaUsers />} title="Total Buyers" value={buyers.length} />
        <Card
          icon={<FaLandmark />}
          title="Registered Land Counts"
          value={lands.length}
        />

        <Card icon={<FaClipboardList />} title="Sold Lands" value="0" />
      </div>
      <div className="seller-dashboard">
        <div className="seller-dashboard-link">
          <h1>Wish to Add Land!</h1>
          <Link to="/home/addLandSeller">Add Land</Link>
        </div>
        <div className="seller-dashboard-link">
          <h1>Profile</h1>
          <Link to="">View Profile</Link>
        </div>
        <div className="seller-dashboard-link">
          <h1>Land Request</h1>
          <Link to="">View Land Requests</Link>
        </div>
      </div>
      <div className="seller-land-info">
        <h1 className="seller-info-tag">Lands Info:</h1>
        <div className="seller-info">
          <h1>#-Serial Id</h1>
          <h1>City Name</h1>
          <h1>Area-(in sqm.)</h1>
          <h1>Price-(BDT)</h1>
          <h1>Property ID</h1>
        </div>
        <div className="seller-dynamic">
          {lands.map((land, index) => (
            <div className="seller-info">
              <h1>{index + 1}</h1>
              <h1>{land.city}</h1>
              <h1>{parseInt(land.area._hex)}</h1>
              <h1>{parseInt(land.price._hex)}</h1>
              <h1>{parseInt(land.property._hex)}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

};


export default Dashboard ;
