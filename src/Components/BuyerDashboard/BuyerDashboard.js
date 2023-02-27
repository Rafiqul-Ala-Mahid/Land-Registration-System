import React, { useState } from 'react';
import './BuyerDashboard.css'
import { MdDashboard, MdEmojiPeople } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import { FaLandmark } from "react-icons/fa";
import { BiHelpCircle } from "react-icons/bi";
import { IoIosPeople, IoMdNotifications } from "react-icons/io";

const BuyerDashboard = () => {
    const [sellers, setSellers] = useState(2);
    const [lands, setLands] = useState(5);
    const [requests, setRequests] = useState(23);
    return (
      <div>
        <h2>Buyer Dashboard</h2>
        <div className="buyer-dashboard">
          <div className="dashboard-chart">
            <div className="decorate">
              <MdDashboard className="icon" />
              <h6>Dashboard</h6>
            </div>
            <div className="decorate">
              <MdEmojiPeople className="icon" />
              <h6>Buyer Profile</h6>
            </div>
            <div className="decorate">
              <GrGallery className="icon" />
              <h6>Land Gallery</h6>
            </div>
            <div className="decorate">
              <FaLandmark className="icon" />
              <h6>Owned Lands</h6>
            </div>
            <div className="decorate">
              <BiHelpCircle className="icon" />
              <h6>Help</h6>
            </div>
          </div>
          <div className="others">
            <div className="collection">
              <div id='box1' className="box">
                <IoIosPeople className="icon2" />
                <h2>Total Sellers</h2>
                <h4>{sellers}</h4>
              </div>
              <div id='box2' className="box">
                <FaLandmark className="icon2" />
                            <h2>Registered Lands Count</h2>
                            <h4>{lands}</h4>
              </div>
              <div id='box3' className="box">
                <IoMdNotifications className="icon2"/>
                            <h2>Total Requests</h2>
                            <h4>{requests}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default BuyerDashboard;