import React from 'react';
import "./Sidebar.css";
import { FaUserAlt, FaLandmark, FaClipboardList, FaImages } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="seller-sidebar">
      <div className='seller-list'>
        <Link className="seller-sidebar-link">
          <div className="seller-side">
            <FaUserAlt className="seller-sidebar-icon" />
            <span>Sellers Profile</span>
          </div>
        </Link>
        <Link className="seller-sidebar-link">
          <div className="seller-side">
            <FaLandmark className="seller-sidebar-icon" />
            <span>Add Lands</span>
          </div>
        </Link>
        <Link className="seller-sidebar-link">
          <div className="seller-side">
            <FaClipboardList className="seller-sidebar-icon" />
            <span>Land Requests</span>
          </div>
        </Link>
        <Link className="seller-sidebar-link">
          <div className="seller-side">
            <FaImages className="seller-sidebar-icon" />
            <span>Land Gallery</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
