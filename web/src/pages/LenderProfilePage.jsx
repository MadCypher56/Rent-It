import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import LenderNavBar from '../components/LenderNavBar';
import './LenderProfilePage.css';

const LenderProfilePage = () => {
  const [loading, setLoading] = useState(true);
  const [profileData, setProfileData] = useState({
    name: 'Lender Name',
    email: 'lender.email@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main St, Anytown, USA',
    memberSince: 'January 2023',
    totalListings: 25,
    activeRentals: 5,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '2em',
        color: '#333'
      }}>
        Loading profile...
      </div>
    );
  }

  return (
    <>
      <LenderNavBar />
      <motion.main
        className="lender-profile-page"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <h1>Lender Profile</h1>
          <div className="profile-card">
            <div className="profile-avatar">
              {/* Placeholder for avatar image or icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="profile-details">
              <p><strong>Name:</strong> {profileData.name}</p>
              <p><strong>Email:</strong> {profileData.email}</p>
              <p><strong>Phone:</strong> {profileData.phone}</p>
              <p><strong>Address:</strong> {profileData.address}</p>
              <p><strong>Member Since:</strong> {profileData.memberSince}</p>
              <p><strong>Total Listings:</strong> {profileData.totalListings}</p>
              <p><strong>Active Rentals:</strong> {profileData.activeRentals}</p>
            </div>
            <div className="profile-actions">
              <button className="btn btn-primary">Edit Profile</button>
            </div>
          </div>
        </div>
      </motion.main>
    </>
  );
};

export default LenderProfilePage;