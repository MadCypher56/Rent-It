import React, { useState, useEffect, Fragment } from 'react';
import { motion } from 'framer-motion';
import './PaymentPage.css';

export default function PaymentPage() {
  const [loading, setLoading] = useState(true);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('creditCard');
  const [cardDetails, setCardDetails] = useState({
    nameOnCard: '',
    cardNumber: '',
    expirationDate: '',
    securityCode: '',
  });
  const [saveCardDetails, setSaveCardDetails] = useState(false);
  const [couponCode, setCouponCode] = useState('');

  const cartItemCount = 2; // Hardcoded as per request
  const username = "adam"; // Hardcoded as per request

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const calculateSummary = () => {
    const subTotal = 4000; // Hardcoded as per request
    const deliveryCharge = 0; // Assuming included in subtotal or not applicable for this summary
    const taxes = 30; // Hardcoded as per request
    const total = subTotal + taxes; // Delivery charge not explicitly added to total in request
    return { subTotal, deliveryCharge, taxes, total };
  };

  const { subTotal, deliveryCharge, taxes, total } = calculateSummary();

  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };

  const handleCardInputChange = (event) => {
    const { name, value } = event.target;
    setCardDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSaveCardDetailsChange = (event) => {
    setSaveCardDetails(event.target.checked);
  };

  const handleApplyCoupon = () => {
    console.log(`Applying coupon: ${couponCode}`);
    // Implement actual coupon logic here
  };

  const handlePayNow = () => {
    console.log('Processing payment...');
    // Implement actual payment processing logic here
  };

  if (loading) {
    return (
      <div className="loader-container">
        Loading payment page...
      </div>
    );
  }

  return (
    <Fragment>
      <motion.main
        className="payment-page"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        {/* Top Navigation Bar */}
        <nav className="top-nav">
          <div className="nav-left">
            <button className="icon-button home-icon" aria-label="Home">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 10.5L12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-10.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <div className="nav-center">
            <button className="nav-button">Home</button>
            <button className="nav-button">Rental Shop</button>
            <button className="nav-button">Wishlist</button>
          </div>
          <div className="nav-right">
            <div className="cart-icon-container">
              <button className="icon-button cart-icon" aria-label="Shopping Cart">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 6h15l-1.5 8.5a2 2 0 0 1-2 1.5H9a2 2 0 0 1-2-1.5L5 3H2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="10" cy="20" r="1.4" fill="currentColor"/>
                  <circle cx="17" cy="20" r="1.4" fill="currentColor"/>
                </svg>
              </button>
              <span className="cart-badge">{cartItemCount}</span>
            </div>
            <div className="user-profile">
              <button className="icon-button profile-icon" aria-label="User Profile">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-5 0-8 2.5-8 5v1h16v-1c0-2.5-3-5-8-5Z" fill="currentColor"/>
                </svg>
              </button>
              <span className="username">{username}</span>
            </div>
            <button className="contact-button">Contact us</button>
          </div>
        </nav>

        {/* Breadcrumb Navigation */}
        <div className="breadcrumb-nav">
          <p className="breadcrumb-text">Review Order &gt; Delivery &gt; Payment</p>
          <h2 className="confirm-order-text">Confirm Order</h2>
        </div>

        <div className="container payment-container">
          <div className="payment-layout">
            {/* Left Column – Payment Method Form */}
            <div className="left-column">
              <h2>Choose a payment method</h2>
              <div className="payment-methods">
                <label className="radio-label">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="creditCard"
                    checked={selectedPaymentMethod === 'creditCard'}
                    onChange={handlePaymentMethodChange}
                  />
                  Credit Card
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="debitCard"
                    checked={selectedPaymentMethod === 'debitCard'}
                    onChange={handlePaymentMethodChange}
                  />
                  Debit Card
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="upiPay"
                    checked={selectedPaymentMethod === 'upiPay'}
                    onChange={handlePaymentMethodChange}
                  />
                  UPI Pay
                </label>
              </div>

              {(selectedPaymentMethod === 'creditCard' || selectedPaymentMethod === 'debitCard') && (
                <div className="card-details-form">
                  <input
                    type="text"
                    name="nameOnCard"
                    placeholder="Name on Card"
                    className="payment-input full-width"
                    value={cardDetails.nameOnCard}
                    onChange={handleCardInputChange}
                  />
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="•••• •••• •••• ••••"
                    className="payment-input full-width"
                    value={cardDetails.cardNumber}
                    onChange={handleCardInputChange}
                  />
                  <div className="card-row">
                    <input
                      type="text"
                      name="expirationDate"
                      placeholder="MM/YY"
                      className="payment-input small-size"
                      value={cardDetails.expirationDate}
                      onChange={handleCardInputChange}
                    />
                    <input
                      type="text"
                      name="securityCode"
                      placeholder="CVV"
                      className="payment-input small-size"
                      value={cardDetails.securityCode}
                      onChange={handleCardInputChange}
                    />
                  </div>
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={saveCardDetails}
                      onChange={handleSaveCardDetailsChange}
                    />
                    Save my card details
                  </label>
                </div>
              )}

              {selectedPaymentMethod === 'upiPay' && (
                <div className="upi-details-form">
                  <input
                    type="text"
                    name="upiId"
                    placeholder="Enter UPI ID"
                    className="payment-input full-width"
                    // You might want to add state for upiId and handleUpiInputChange
                  />
                  <button className="verify-upi-button">Verify UPI ID</button>
                </div>
              )}
            </div>

            {/* Right Column – Order Summary Box */}
            <div className="right-column">
              <div className="summary-box">
                <h2 className="summary-title">Order Summary</h2>
                <p className="summary-items-count">{cartItemCount} Items – ₹{subTotal}</p>
                <div className="summary-line red-text">
                  <span>Delivery Charge –</span>
                  <span>₹{deliveryCharge.toFixed(2)}</span>
                </div>
                <div className="summary-line red-text">
                  <span>Sub Total</span>
                  <span>₹{subTotal.toFixed(2)}</span>
                </div>
                <div className="horizontal-separator red-border"></div>
                <div className="summary-line red-text">
                  <span>Taxes</span>
                  <span>₹{taxes.toFixed(2)}</span>
                </div>
                <div className="summary-line total-line red-text">
                  <span>Total</span>
                  <span>₹{total.toFixed(2)}</span>
                </div>

                <div className="coupon-input-section">
                  <label htmlFor="coupon-code">Apply Coupon</label>
                  <div className="coupon-input-group">
                    <input
                      type="text"
                      id="coupon-code"
                      placeholder="Coupon Code"
                      className="coupon-input"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                    />
                    <button className="apply-coupon-button" onClick={handleApplyCoupon}>Apply</button>
                  </div>
                </div>

                <button className="pay-now-button" onClick={handlePayNow}>Pay Now</button>
              </div>
            </div>
          </div>
        </div>
      </motion.main>
    </Fragment>
  );
}