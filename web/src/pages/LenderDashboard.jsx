import React from 'react';
import { Link } from 'react-router-dom';
import LenderNavBar from '../components/LenderNavBar';
import './LenderDashboard.css';

const LenderDashboard = () => {
  const statCards = [
    { title: "Total Sales", value: 5200 },
    { title: "Current Rentals", value: 15 },
    { title: "Quotations", value: 8 },
  ];

  return (
    <div className="dashboard-container">
      <LenderNavBar />

      {/* Search Bar */}
      <section className="d-flex flex-column md-flex-row justify-content-between align-items-center gap-md">
        <div className="flex-grow-1 w-full md-w-auto position-relative">
          <input
            type="text"
            placeholder="Search your listings..."
            className="input-field"
          />
          {/* Search Icon */}
          <span className="search-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </span>
        </div>
        <button className="btn btn-secondary">
          Filter Options
        </button>
      </section>

      {/* Basic Insights (Stats Row) */}
      <section className="grid grid-cols-1 md-grid-cols-3 gap-md">
        {statCards.map((card, index) => (
          <div
            key={index}
            className="dashboard-stat-card"
          >
            <h4 className="stat-title">{card.title}</h4>
            <h2 className="stat-value">{card.value}</h2>
          </div>
        ))}
      </section>

      {/* Analytics Sections */}
      <section className="analytics-grid gap-md">
        {/* Top Left: Product Category Revenue */}
        <div className="card">
          <h3 className="card-title">Revenue by Product Category</h3>
          <table className="dashboard-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Revenue</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Electronics</td>
                <td>$2,500</td>
              </tr>
              <tr>
                <td>Tools</td>
                <td>$1,800</td>
              </tr>
              <tr>
                <td>Vehicles</td>
                <td>$900</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Top Right: Specific Product Revenue */}
        <div className="card">
          <h3 className="card-title">Revenue by Specific Product</h3>
          <table className="dashboard-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Revenue</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Drone X1</td>
                <td>$1,200</td>
              </tr>
              <tr>
                <td>Power Drill Pro</td>
                <td>$750</td>
              </tr>
              <tr>
                <td>Mountain Bike Elite</td>
                <td>$600</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Bottom Left: Items Ordered & Revenue */}
        <div className="card">
          <h3 className="card-title">Items Ordered & Revenue Generated</h3>
          <table className="dashboard-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Orders</th>
                <th>Revenue</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Camera Lens Kit</td>
                <td>12</td>
                <td>$1,500</td>
              </tr>
              <tr>
                <td>Portable Projector</td>
                <td>8</td>
                <td>$1,000</td>
              </tr>
              <tr>
                <td>Camping Tent 4P</td>
                <td>20</td>
                <td>$800</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Bottom Right: Top Customers & Revenue */}
        <div className="card">
          <h3 className="card-title">Top Customers by Revenue</h3>
          <table className="dashboard-table">
            <thead>
              <tr>
                <th>Customer</th>
                <th>Revenue</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alice Johnson</td>
                <td>$850</td>
              </tr>
              <tr>
                <td>Bob Williams</td>
                <td>$720</td>
              </tr>
              <tr>
                <td>Charlie Brown</td>
                <td>$500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default LenderDashboard;