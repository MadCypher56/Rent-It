# Product Requirements Document: Rental Management (MVP)

**Version:** 1.0
**Date:** August 11, 2025
**Status:** Draft for Development

### 1. Introduction

#### 1.1. Purpose

This document outlines the functional and technical requirements for the Minimum Viable Product (MVP) of the Rental Management application. The goal is to build the leanest possible version of the product to validate the core business model: enabling businesses to manage rental products online and allowing customers to book them.

#### 1.2. Scope & Core Goal

The scope is strictly limited to the features essential for an end-to-end rental lifecycle. We will build a platform where a **Business Owner** can add and manage rentable products, and a **Customer** can browse the catalog and book a product for a specific duration.

### 2. User Roles

The MVP will support two primary roles:

* **Business Owner (Admin/Internal User):** The individual who manages the rental inventory, pricing, and orders through an internal dashboard.
* **Customer (Public User):** The individual who visits the public-facing website to browse and book products for rent.

### 3. Functional Requirements

#### 3.1. Business Owner Features (Internal Management Portal)

* **Product Management:**
    * The owner must have a simple interface to **add, view, and edit** rentable products.
    * Required product fields: `Name`, `Photo`, `Description`, `Quantity Available`.
    * The owner must be able to set a **simple, fixed price** for different rental durations (e.g., a price per day and a price per week).
* **Inventory Tracking:**
    * The system must track the total `Quantity` of each product.
    * When a product is booked for a date range, the system must ensure it is not overbooked. The available count for that period is effectively reduced.
* **Order Management:**
    * A dashboard page must list all rental orders with key details: `Customer Name`, `Product Rented`, `Rental Period (Start/End Date)`, and `Total Price`.
    * The owner must be able to manually update the status of an order (e.g., from "Booked" to "Rented Out" and "Returned").

#### 3.2. Customer Features (Public Booking Portal)

* **Product Catalog:**
    * A public page must display a grid or list of all rentable products, showing their `Name`, `Photo`, and starting `Price`.
* **Booking Process:**
    * A product detail page must show more information about the selected item.
    * A date picker must allow the customer to select their desired rental **start and end dates**.
    * The system must check the product's availability for the selected dates and display the final calculated price.
    * A simple checkout form will collect the customer's `Name` and `Contact Details` to confirm the booking. **No payment will be processed in the MVP.**

### 4. Technical Requirements

#### 4.1. General Architecture

* A full-stack web application with a separate frontend and backend.
* Communication between frontend and backend will occur via a RESTful API.

#### 4.2. Frontend

* **Framework:** A modern JavaScript framework such as **React** is required to build a dynamic user interface.
* **UI Components:**
    * For the internal Business Owner portal, a robust UI component library (e.g., **Ant Design, Material-UI**) is needed for building data tables and forms.
    * For the public Customer portal, standard HTML/CSS with the framework's component system is sufficient.
* **State Management:** A state management library (e.g., **Redux Toolkit, Zustand**) should be used to manage shared application state, such as product lists and order details.
* **Key Libraries:** A date-picker library will be required for the booking process.

#### 4.3. Backend

* **Framework:** A robust backend framework such as **Node.js with Express** or **Python with Django** is required to handle business logic.
* **API:** A well-defined RESTful API must be created with endpoints for:
    * `POST /products`, `GET /products`, `PUT /products/:id` for product management.
    * `POST /orders` for creating a new booking.
    * `GET /orders`, `PUT /orders/:id` for the owner to manage orders.
* **Authentication:** A simple session-based or token-based (JWT) authentication system is required for the Business Owner to log in to the internal management portal. The public customer portal will not require authentication.
* **Business Logic (MVP Simplifications):**
    * **Availability Check:** The logic will query all existing orders for a specific product to see if the requested date range overlaps with any confirmed bookings, considering the total quantity available.
    * **Pricing Calculation:** The logic will be a simple function that calculates the total price based on the selected duration and the pre-set daily/weekly rates.

#### 4.4. Database

* **Type:** A relational database (e.g., **PostgreSQL, MySQL**) is required.
* **Schema (MVP):**
    * `Products`: `id`, `name`, `description`, `photo_url`, `quantity`, `price_per_day`, `price_per_week`.
    * `Orders`: `id`, `product_id` (foreign key), `customer_name`, `customer_contact`, `start_date`, `end_date`, `total_price`, `status`.

### 5. Out of Scope for MVP

To maintain focus, the following features are explicitly excluded from this version:

* No Real Payments
* No Complex Pricing
* No Automated Fees or Notifications
* No Advanced Reporting
* No Complex Documents

### 6. Success Metrics

* **Primary Metric:** Number of successful bookings made via the customer portal.
* **Adoption Rate:** Number of products added by the business owner.
* **Core Loop Completion:** Percentage of orders successfully marked as "Returned."
* **Qualitative Feedback:** Direct feedback from initial business users on usability.