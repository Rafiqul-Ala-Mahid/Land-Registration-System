import React from 'react';
import "./Sidebar.css";
import { FaUserAlt, FaLandmark, FaClipboardList, FaImages } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="#">
            <FaUserAlt /> Sellers Profile
          </a>
        </li>
        <li>
          <a href="#">
            <FaLandmark /> Add Lands
          </a>
        </li>
        <li>
          <a href="#">
            <FaClipboardList /> Land Requests
          </a>
        </li>
        <li>
          <a href="#">
            <FaImages /> Land Gallery
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
