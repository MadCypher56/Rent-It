import { Link } from 'react-router-dom';
import { useState, useEffect, Fragment } from 'react';
import { motion } from 'framer-motion';
import './ProductDetail.css';

export default function ProductDetail() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Simulate loading for 1.5 seconds
    return () => clearTimeout(timer);
  }, []);

  const product = {
    id: 'p1',
    title: 'Sample Product',
    imageUrl: 'https://via.placeholder.com/600x400',
    pricePerDay: 25,
    oldPricePerDay: 32,
    category: 'Cameras',
    rating: 4.6,
    reviews: 210,
    onSale: true,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  };

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
        Loading product details...
      </div>
    );
  }

  return (
    <Fragment>
    <motion.main
      className="landing"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <motion.div
          className="breadcrumbs"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Link to="/consumer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: 5 }}>
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            All Products
          </Link> / <span>{product.title}</span>
        </motion.div>

        <div className="product-detail-layout">
          {/* Left Column */}
          <motion.div
            className="product-detail-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <motion.div
              className="product-image-main"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div className="product-image-box">
                <img src={product.imageUrl} alt={product.title} />
              </motion.div>
            </motion.div>
            <motion.button
              className="btn btn-outline add-to-wishlist"
              whileHover={{ scale: 1.05, backgroundColor: '#f8f8f8' }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: 8 }}>
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/>
              </svg>
              Add to wish list
            </motion.button>

            <motion.div
              className="product-description-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <h2>Product Description</h2>
              <p>
                {product.description}
              </p>
              <a href="#" className="read-more">Read More </a>
            </motion.div>

            <motion.div
              className="share-links-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.5 }}
            >
              <h2>Share</h2>
              <div className="share-icons">
                <motion.a href="#" className="share-icon" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="currentColor"/>
                  </svg>
                </motion.a>
                <motion.a href="#" className="share-icon" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" fill="currentColor"/>
                  </svg>
                </motion.a>
                <motion.a href="#" className="share-icon" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" fill="currentColor"/>
                  </svg>
                </motion.a>
              </div>
            </motion.div>

            
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="product-detail-right"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.h1
              className="product-name"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >{product.title}</motion.h1>
            <motion.p
              className="product-price"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <span className="p-price">${product.pricePerDay}/day</span>
            </motion.p>

            <motion.div
              className="rental-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <div className="rental-period">
                <div className="date-picker-group">
                  <label htmlFor="from-date">From:</label>
                  <input type="date" id="from-date" className="date-input" />
                </div>
                <div className="date-picker-group">
                  <label htmlFor="to-date">To:</label>
                  <input type="date" id="to-date" className="date-input" />
                </div>
              </div>

              <div className="quantity-selector">
                <div className="quantity-controls">
                  <motion.button
                    className="btn btn-quantity"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >-</motion.button>
                  <input type="number" value="1" readOnly className="quantity-input" />
                  <motion.button
                    className="btn btn-quantity"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >+</motion.button>
                </div>
              </div>

              <motion.button
                className="btn add-to-cart"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: 8 }}>
                  <path d="M6 6h15l-1.5 8.5a2 2 0 0 1-2 1.5H9a2 2 0 0 1-2-1.5L5 3H2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="10" cy="20" r="1.4" fill="currentColor"/>
                  <circle cx="17" cy="20" r="1.4" fill="currentColor"/>
                </svg>
                Add to Cart
              </motion.button>
            </motion.div>

            <motion.div
              className="coupon-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              <label htmlFor="coupon-code">Apply Coupon</label>
              <div className="coupon-input-group">
                <input type="text" id="coupon-code" placeholder="Coupon Code" className="coupon-input" />
                <motion.button
                  className="btn btn-apply-coupon"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >Apply</motion.button>
              </div>
            </motion.div>

            <motion.div
              className="terms-conditions-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <h2>Terms & Conditions</h2>
              <p>
                Please read our rental terms and conditions carefully before proceeding. By renting this item, you agree to abide by all terms outlined.
              </p>
            </motion.div>

            
          </motion.div>
        </div>
        
        
      </div>
    </motion.main>
    </Fragment>
  )
}