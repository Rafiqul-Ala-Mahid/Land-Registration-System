import React from 'react'
import "./BuyerDashboard.css";
import Sidebar from './Sidebar';
import DashboardCards from './DashboardCards'

const BuyerDashboard = () => {
  return (
    <div>
    <div>
        <nav className='buyer-navbar'>Buyer Dashboard</nav>
    </div>
    <div className='buyers'>
        <div className='buyers-sidebar'>
        <Sidebar/>
        </div>
        <div className='buyer-cards'>
        <DashboardCards/>
        </div>
        
    </div>
    {/* <div className='button'>
        <Buttons/>
    </div> */}
    </div>
  )
}

export default BuyerDashboard;
