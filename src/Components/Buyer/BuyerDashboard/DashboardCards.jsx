import React, { useContext } from 'react';
import './DashboardCard.css'
import { FaUsers, FaLandmark, FaClipboardList } from 'react-icons/fa';
import { NewContext } from '../../context/Context';
import { Link } from 'react-router-dom';

const Card = ({ icon, title, value }) => {
  return (
    <div className="buyer-card">
      <div className="buyer-icon">{icon}</div>
      <div className="buyer-content">
        <h2>{title}</h2>
        <p>{value}</p>
      </div>
    </div>
  );
};


const Dashboard = () => {
  const { lands, sellers, buyNewLand,disable } = useContext(NewContext);
  console.log(lands);

  const buyLand = (land) => {

    const { id, city,area,price } = land;
    buyNewLand({ id, city, area, price });
  }
  return (
    <div>
      <div className="buyer-dashboard">
        <Card icon={<FaUsers />} title="Total Sellers" value={sellers.length} />

        <Card
          icon={<FaLandmark />}
          title="Registered Land Counts"
          value={lands.length}
        />

        <Card icon={<FaClipboardList />} title="Sold Lands" value="0" />
      </div>
      <div className="buyer-land-info">
        <h1 className="buyer-info-tag">Lands Info:</h1>
        <div className="buyer-info">
          <h1>#-Serial Id</h1>
          <h1>City Name</h1>
          <h1>Area-(in sqm.)</h1>
          <h1>Price-(BDT)</h1>
          <h1>Property ID</h1>
        </div>
        <div className="buyer-dynamic">
          {lands.map((land, index) =>
            disable ? (
              <div key={index} className="buyer-info">
                <h1>{index + 1}</h1>
                <h1>{land.city}</h1>
                <h1>{parseInt(land.area._hex)}</h1>
                <h1>{parseInt(land.price._hex)}</h1>
                <Link
                  className="buyer-disable-land"
                  to=""
                  // onClick={() => buyLand(land)}
                >
                  buy-land
                </Link>
              </div>
            ) : (
              <div key={index} className="buyer-info">
                <h1>{index + 1}</h1>
                <h1>{land.city}</h1>
                <h1>{parseInt(land.area._hex)}</h1>
                <h1>{parseInt(land.price._hex)}</h1>
                <Link
                  className="buyer-request-land"
                  to=""
                  onClick={() => buyLand(land)}
                >
                  buy-land
                </Link>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
  
};


export default Dashboard ;
