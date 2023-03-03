import React from 'react';
import "./Sidebar.css";
import { FaUserAlt, FaLandmark, FaClipboardList, FaImages } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="buyer-sidebar">
      <ul>
        <Link className="buyer-sidebar-link">
          <div className="buyer-side">
            <FaUserAlt className="buyer-sidebar-icon" />
            <span>Buyer Profile</span>
          </div>
        </Link>
        <Link className="buyer-sidebar-link">
          <div className="buyer-side">
            <FaLandmark className="buyer-sidebar-icon" />
            <span>Add Lands</span>
          </div>
        </Link>
        <Link className="buyer-sidebar-link">
          <div className="buyer-side">
            <FaClipboardList className="buyer-sidebar-icon" />
            <span>Land Requests</span>
          </div>
        </Link>
        <Link className="buyer-sidebar-link">
          <div className="buyer-side">
            <FaImages className="buyer-sidebar-icon" />
            <span>Land Gallery</span>
          </div>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
