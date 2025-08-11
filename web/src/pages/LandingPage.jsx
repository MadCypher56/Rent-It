import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../App.css'; // For general styles and animations

const LandingPage = () => {
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);
  const [isSignupDropdownOpen, setIsSignupDropdownOpen] = useState(false);

  const handleLoginMouseEnter = () => setIsLoginDropdownOpen(true);
  const handleLoginMouseLeave = () => setIsLoginDropdownOpen(false);
  const handleSignupMouseEnter = () => setIsSignupDropdownOpen(true);
  const handleSignupMouseLeave = () => setIsSignupDropdownOpen(false);

  const handleLinkClick = () => {
    setIsLoginDropdownOpen(false);
    setIsSignupDropdownOpen(false);
  };

  // Animation variants for Framer Motion
  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3, ease: "easeOut" } },
  };

  const sloganVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.6, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <div className="landing-container">
      <nav className="top-nav">
        <div className="nav-brand">
          <Link to="/" className="app-title-small" onClick={handleLinkClick}>Rent-It</Link>
        </div>
        <div className="nav-links">
          <div
            className="dropdown"
            onMouseEnter={handleLoginMouseEnter}
            onMouseLeave={handleLoginMouseLeave}
          >
            <button className="nav-link dropdown-toggle">
              Login <span className="dropdown-arrow">▼</span>
            </button>
            {isLoginDropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/login" className="dropdown-item" onClick={handleLinkClick}>Consumer Login</Link>
                <Link to="/lender/login" className="dropdown-item" onClick={handleLinkClick}>Lender Login</Link>
              </div>
            )}
          </div>

          <div
            className="dropdown"
            onMouseEnter={handleSignupMouseEnter}
            onMouseLeave={handleSignupMouseLeave}
          >
            <button className="nav-link dropdown-toggle primary-btn">
              Sign Up <span className="dropdown-arrow">▼</span>
            </button>
            {isSignupDropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/signup" className="dropdown-item" onClick={handleLinkClick}>Consumer Sign Up</Link>
                <Link to="/register-lender" className="dropdown-item" onClick={handleLinkClick}>Lender Sign Up</Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      <motion.header
        className="landing-header"
        initial="hidden"
        animate="visible"
        variants={headerVariants}
      >
        <motion.h1 className="app-title" variants={titleVariants}>Rent-It</motion.h1>
        <motion.p className="app-slogan" variants={sloganVariants}>Unlock a world of possibilities. Rent what you need, lend what you have, and connect with your community.</motion.p>
      </motion.header>

      <main className="landing-main">
        <section className="value-proposition">
          <motion.div
            className="value-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
          >
            <h2>Sustainable Living</h2>
            <p>Reduce waste and promote a circular economy by renting items instead of buying new ones. Save money and the planet!</p>
          </motion.div>

          <motion.div
            className="value-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
            transition={{ delay: 0.2 }}
          >
            <h2>Earn Extra Income</h2>
            <p>Monetize your unused belongings. List your items for rent and turn them into a source of passive income.</p>
          </motion.div>

          <motion.div
            className="value-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
            transition={{ delay: 0.4 }}
          >
            <h2>Community Connection</h2>
            <p>Connect with people in your local area. Share resources, build trust, and foster a vibrant sharing community.</p>
          </motion.div>
        </section>
      </main>

      <footer className="landing-footer">
        <p>&copy; 2025 Rent-It. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;