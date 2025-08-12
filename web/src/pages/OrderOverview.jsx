import React, { useState, useEffect, Fragment } from 'react';
import { motion } from 'framer-motion';
import LenderNavBar from '../components/LenderNavBar';
import './OrderOverview.css';

export default function OrderOverview() {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([
    {
      id: 'ord1',
      customerName: 'Alice Johnson',
      productName: 'Professional Camera Kit',
      state: 'Quotation Given',
    },
    {
      id: 'ord2',
      customerName: 'Bob Williams',
      productName: 'Heavy Duty Power Drill',
      state: 'Picked up',
    },
    {
      id: 'ord3',
      customerName: 'Charlie Brown',
      productName: 'Portable Projector',
      state: 'Reserved',
    },
    {
      id: 'ord4',
      customerName: 'Diana Prince',
      productName: 'Camping Tent 4P',
      state: 'Returned',
    },
    {
      id: 'ord5',
      customerName: 'Eve Adams',
      productName: 'Mountain Bike Elite',
      state: 'Quotation Given',
    },
  ]);

  const orderCounts = orders.reduce((acc, order) => {
    acc[order.state] = (acc[order.state] || 0) + 1;
    return acc;
  }, {
    'Quotation Given': 0,
    'Picked up': 0,
    'Reserved': 0,
    'Returned': 0,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleCreateOrder = () => {
    console.log("Create New Order");
    // Implement logic to navigate to a new order creation page or open a modal
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
        Loading orders...
      </div>
    );
  }

  return (
    <Fragment>
      <LenderNavBar />
      <motion.main
        className="order-overview-page"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container order-overview-layout">
          <div className="order-sidebar">
            <h2>Order Insights</h2>
            <div className="insight-item">
              <span>Quotation Given:</span>
              <span className="insight-count">{orderCounts['Quotation Given']}</span>
            </div>
            <div className="insight-item">
              <span>Picked up:</span>
              <span className="insight-count">{orderCounts['Picked up']}</span>
            </div>
            <div className="insight-item">
              <span>Reserved:</span>
              <span className="insight-count">{orderCounts['Reserved']}</span>
            </div>
            <div className="insight-item">
              <span>Returned:</span>
              <span className="insight-count">{orderCounts['Returned']}</span>
            </div>
          </div>
          <div className="order-content">
            <div className="order-overview-header">
              <h1>All Customer Orders</h1>
              <button className="btn btn-primary" onClick={handleCreateOrder}>
                Create New Order
              </button>
            </div>
            <div className="orders-grid">
              {orders.length === 0 ? (
                <p>No orders found.</p>
              ) : (
                orders.map((order) => (
                  <motion.div
                    key={order.id}
                    className="order-card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="order-customer-name">{order.customerName}</h3>
                    <p className="order-product-name">Product: {order.productName}</p>
                    <div className={`order-state ${order.state.toLowerCase().replace(/ /g, '-')}`}>
                      {order.state}
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </div>
      </motion.main>
    </Fragment>
  );
}