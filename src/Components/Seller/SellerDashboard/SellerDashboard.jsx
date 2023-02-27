import React from 'react'
import Dashboard from './DashboardCards';
import "./SellerDashboard.css";
import Sidebar from './Sidebar';
import DashboardCards from './DashboardCards'
import Buttons from './Buttons';

const SellerDashboard = () => {
  return (
    <div>
    <div>
        <nav className='navbar'>Dashboard</nav>
    </div>
    <div>
        <div className='sidebar'>
        <Sidebar/>
        </div>
    </div>
        <div>
        <div className='cards'>
        <DashboardCards/>
        </div>
        
    </div>
    {/* <div className='button'>
        <Buttons/>
    </div> */}
    
    </div>
  )
}

export default SellerDashboard;
