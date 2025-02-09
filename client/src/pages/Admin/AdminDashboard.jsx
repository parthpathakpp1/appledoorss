import React from 'react';
import Header from '../../components/Header/Header';
import LandingFooter from '../../components/Footer/Footer';
import AdminMenu from '../../components/AdminMenu/AdminMenu';
import './AdminDashboard.css'; // Import the CSS file
import { useAuth } from "../../context/auth";

const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <>
      <Header />

      <div className="dashboard-container">
        <div className="dashboard-sidebar">
          <AdminMenu />
        </div>
        <div className="dashboard-content">
        <div className="card">
                            <h3> Admin Name : {auth?.user?.name}</h3>
                            <h3> Admin Email : {auth?.user?.email}</h3>
                            <h3> Admin Contact : {auth?.user?.phone}</h3>
                        </div>
        </div>
      </div>

      <LandingFooter />
    </>
  );
};

export default AdminDashboard;
