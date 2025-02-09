import React from 'react';
import Header from '../../components/Header/Header';
import LandingFooter from '../../components/Footer/Footer';
import './Dashboard.css'; // Import the CSS file
import UserMenu from '../../components/UserMenu/UserMenu';
import { useAuth } from '../../context/auth';

const Dashboard = () => {
  const auth = useAuth();

  return (
    <>
      <Header />

      <div className="dashboard-container">
        <div className="dashboard-sidebar">
          <UserMenu />
        </div>
        <div className="dashboard-content">
          <div className="card">
            <h3>{auth?.user?.name}</h3>
            <h3>{auth?.user?.email}</h3>
            <h3>{auth?.user?.address}</h3>
          </div>
        </div>
      </div>

      <LandingFooter />
    </>
  );
};

export default Dashboard;
