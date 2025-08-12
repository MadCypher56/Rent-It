import React, { useState, useEffect, Fragment } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import './DeliveryPage.css';

export default function DeliveryPage() {
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [invoiceAddress, setInvoiceAddress] = useState('');
  const [billingSameAsDelivery, setBillingSameAsDelivery] = useState(true);
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState('standard');
  const [couponCode, setCouponCode] = useState('');

  const navigate = useNavigate();

  // Define delivery costs
  const deliveryCosts = {
    standard: 50,
    express: 100,
    pickup: 0,
  };

  // Hardcoded summary values for now
  const subTotal = 4000;
  const taxes = 30;

  const [deliveryCharge, setDeliveryCharge] = useState(deliveryCosts.standard);
  const [total, setTotal] = useState(subTotal + taxes + deliveryCosts.standard);

  useEffect(() => {
    setDeliveryCharge(deliveryCosts[selectedDeliveryMethod]);
  }, [selectedDeliveryMethod]);

  useEffect(() => {
    setTotal(subTotal + taxes + deliveryCharge);
  }, [deliveryCharge]);

  const handleConfirm = () => {
    // Logic to save addresses and proceed to payment
    console.log('Confirming delivery details and proceeding to payment');
    navigate('/payment');
  };

  return (
    <Fragment>
      <motion.main
        className="delivery-page"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="breadcrumb-nav">
          <p className="breadcrumb-text">Review Order &gt; Delivery &gt; Payment</p>
        </div>

        <div className="container delivery-container">
          <motion.button
            className="btn"
            onClick={() => navigate('/add-to-cart')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ marginLeft: '20px', marginBottom: '20px' }}
          >&lt; Back to Cart</motion.button>
          <div className="delivery-layout">
            {/* Left Column – Main Content */}
            <div className="left-column">
              <h2>Delivery Address</h2>
              <textarea
                className="address-textarea"
                placeholder="Enter delivery address"
                value={deliveryAddress}
                onChange={(e) => setDeliveryAddress(e.target.value)}
                rows="5"
              ></textarea>

              {!billingSameAsDelivery && (
                <Fragment>
                  <h2>Invoice Address</h2>
                  <textarea
                    className="address-textarea"
                    placeholder="Enter invoice address"
                    value={invoiceAddress}
                    onChange={(e) => setInvoiceAddress(e.target.value)}
                    rows="5"
                  ></textarea>
                </Fragment>
              )}

              <label className="toggle-switch-label">
                <input
                  type="checkbox"
                  checked={billingSameAsDelivery}
                  onChange={(e) => setBillingSameAsDelivery(e.target.checked)}
                />
                <span className="slider round"></span>
                Billing address same as delivery address
              </label>

              <h2>Choose Delivery Method</h2>
              <select
                className="delivery-method-select"
                value={selectedDeliveryMethod}
                onChange={(e) => setSelectedDeliveryMethod(e.target.value)}
              >
                <option value="standard">Standard Delivery (3-5 days)</option>
                <option value="express">Express Delivery (1-2 days)</option>
                <option value="pickup">Store Pickup</option>
              </select>
            </div>

            {/* Right Column – Order Summary */}
            <div className="right-column">
              <div className="summary-box">
                <h2 className="summary-title">Order Summary</h2>
                <div className="summary-line">
                  <span>Delivery Charge:</span>
                  <span>₹{deliveryCharge.toFixed(2)}</span>
                </div>
                <div className="summary-line">
                  <span>Sub Total:</span>
                  <span>₹{subTotal.toFixed(2)}</span>
                </div>
                <div className="summary-line">
                  <span>Taxes:</span>
                  <span>₹{taxes.toFixed(2)}</span>
                </div>
                <div className="horizontal-separator"></div>
                <div className="summary-line total-line">
                  <span>Total:</span>
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
                    <button className="apply-coupon-button">Apply</button>
                  </div>
                </div>

                <motion.button
                  className="confirm-button"
                  onClick={handleConfirm}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >Confirm</motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.main>
    </Fragment>
  );
}