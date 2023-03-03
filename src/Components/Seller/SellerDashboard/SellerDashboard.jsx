import React, {} from 'react'
// import Dashboard from './DashboardCards';
import "./SellerDashboard.css";
import Sidebar from './Sidebar';
import Dashboard from './DashboardCards'

const SellerDashboard = () => {
  return (
    <div>
      <div>
        <nav className="seller-navbar">Seller Dashboard</nav>
      </div>
      <div className="sellers">
        <div className="sellers-sidebar">
          <Sidebar />
        </div>
        <div className="seller-cards">
          <Dashboard/>
        </div>
      </div>
    </div>
  );
}

export default SellerDashboard;
