import React from 'react';
import { Link } from 'react-router-dom';

const LenderNavBar = () => {
  return (
    <header className="dashboard-header d-flex flex-column md-flex-row justify-content-between align-items-center">
      <div className="d-flex align-items-center gap-md">
        <div className="icon-square">
          {/* Home Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125h9.75a1.125 1.125 0 001.125-1.125V9.75M8.25 21h8.25" />
          </svg>
        </div>
        <nav className="d-flex flex-wrap gap-sm">
          <Link to="/lender/dashboard" className="btn dashboard-nav-button">Dashboard</Link>
          <Link to="/my-listings" className="btn dashboard-nav-button">My Listings</Link>
          <Link to="/order-overview" className="btn dashboard-nav-button">Orders</Link>
          <Link to="/lender/profile" className="btn dashboard-nav-button">Profile</Link>
          <Link to="/settings" className="btn dashboard-nav-button">Settings</Link>
        </nav>
      </div>
      <div className="d-flex align-items-center gap-sm">
        <div className="avatar-circle">
          {/* Profile Avatar */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <span className="profile-name">Lender Name</span>
      </div>
    </header>
  );
};

export default LenderNavBar;
