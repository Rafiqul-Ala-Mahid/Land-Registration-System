import React from 'react';
import './DashboardCard.css'
import { FaUsers, FaLandmark, FaClipboardList } from 'react-icons/fa';

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
  return (
    <div className="dashboard">
      <Card icon={<FaUsers />} title="Total Buyers" value="500"  />
      
      
      <Card icon={<FaLandmark />} title="Registered Land Counts" value="200" />
      
      <Card icon={<FaClipboardList />} title="Land Requests" value="50" />
      
    </div>
  );
  
};


export default Dashboard ;
