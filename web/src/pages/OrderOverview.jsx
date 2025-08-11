import React, { useState, useEffect, Fragment } from 'react';
import { motion } from 'framer-motion';
import './OrderOverview.css';

export default function OrderOverview() {
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([
    {
      id: 'p1',
      name: 'Professional Camera Kit',
      imageUrl: 'https://via.placeholder.com/100x100',
      price: 120,
      quantity: 1,
    },
    {
      id: 'p2',
      name: 'Heavy Duty Power Drill',
      imageUrl: 'https://via.placeholder.com/100x100',
      price: 45,
      quantity: 2,
    },
    {
      id: 'p3',
      name: 'Portable Projector',
      imageUrl: 'https://via.placeholder.com/100x100',
      price: 75,
      quantity: 1,
    },
  ]);
  const [couponCode, setCouponCode] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const calculateSummary = () => {
    const subTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const deliveryCharge = 15; // Example fixed delivery charge
    const taxes = subTotal * 0.10; // Example 10% tax
    const total = subTotal + deliveryCharge + taxes;
    return { subTotal, deliveryCharge, taxes, total };
  };

  const { subTotal, deliveryCharge, taxes, total } = calculateSummary();

  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const handleDelete = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleWishlist = (id) => {
    console.log(`Add item ${id} to wishlist`);
    // Implement actual wishlist logic here
  };

  const handleApplyCoupon = () => {
    console.log(`Applying coupon: ${couponCode}`);
    // Implement actual coupon logic here
  };

  const handleProceedToCheckout = () => {
    console.log('Proceeding to checkout');
    // Implement actual checkout logic here
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
        Loading order overview...
      </div>
    );
  }

  return (
    <Fragment>
      <motion.main
        className="order-overview-page"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <h1>Order Overview</h1>
          <div className="order-overview-layout">
            {/* Left Column: Product List */}
            <div className="left-column">
              <h2>Your Cart</h2>
              <div className="cart-items-list">
                {cartItems.length === 0 ? (
                  <p>Your cart is empty.</p>
                ) : (
                  cartItems.map((item) => (
                    <motion.div
                      key={item.id}
                      className="cart-item"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img src={item.imageUrl} alt={item.name} className="item-image" />
                      <div className="item-details">
                        <h3 className="item-name">{item.name}</h3>
                        <p className="item-price">${item.price.toFixed(2)}</p>
                      </div>
                      <div className="item-controls">
                        <div className="quantity-controls">
                          <motion.button
                            className="quantity-button"
                            onClick={() => handleQuantityChange(item.id, -1)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >-</motion.button>
                          <input
                            type="number"
                            value={item.quantity}
                            readOnly
                            className="quantity-input"
                          />
                          <motion.button
                            className="quantity-button"
                            onClick={() => handleQuantityChange(item.id, 1)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >+</motion.button>
                        </div>
                        <motion.button
                          className="action-button wishlist-button"
                          onClick={() => handleWishlist(item.id)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/>
                          </svg>
                        </motion.button>
                        <motion.button
                          className="action-button delete-button"
                          onClick={() => handleDelete(item.id)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" fill="currentColor"/>
                          </svg>
                        </motion.button>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            </div>

            {/* Right Column: Summary */}
            <div className="right-column">
              <h2>Order Summary</h2>
              <div className="summary-box">
                <div className="summary-line">
                  <span>Sub Total:</span>
                  <span>${subTotal.toFixed(2)}</span>
                </div>
                <div className="summary-line">
                  <span>Delivery Charge:</span>
                  <span>${deliveryCharge.toFixed(2)}</span>
                </div>
                <div className="summary-line">
                  <span>Taxes:</span>
                  <span>${taxes.toFixed(2)}</span>
                </div>
                <div className="horizontal-line"></div>
                <div className="summary-line total-line">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="coupon-section">
                <input
                  type="text"
                  placeholder="Enter coupon code"
                  className="coupon-input"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                />
                <motion.button
                  className="apply-coupon-button"
                  onClick={handleApplyCoupon}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >Apply</motion.button>
              </div>

              <motion.button
                className="proceed-to-checkout-button"
                onClick={handleProceedToCheckout}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >Proceed to checkout</motion.button>
            </div>
          </div>
        </div>
      </motion.main>
    </Fragment>
  );
}