import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import './App.css'
import Login from './pages/Login.jsx'
import RegisterLender from './pages/RegisterLender.jsx'
import Signup from './pages/Signup.jsx'
import LenderLogin from './pages/LenderLogin.jsx'
import ConsumerLanding from './pages/ConsumerLanding.jsx'
import ProductDetail from './pages/ProductDetail.jsx' // Import ProductDetail
import LandingPage from './pages/LandingPage.jsx';
import OrderOverview from './pages/OrderOverview.jsx';
import AddToCartPage from './pages/AddToCartPage.jsx';
import PaymentPage from './pages/PaymentPage.jsx';
import DeliveryPage from './pages/DeliveryPage.jsx'; // Import DeliveryPage
import LenderDashboard from './pages/LenderDashboard.jsx';
import LenderProfilePage from './pages/LenderProfilePage.jsx';
import MyListings from './pages/MyListings.jsx';

function Placeholder({ heading, note }) {
  return (
    <div className="placeholder">
      <h2>{heading}</h2>
      <p>{note}</p>
      <Link className="back" to="/">Back to Landing</Link>
    </div>
  )
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <LandingPage />
          </motion.div>
        } />
        <Route path="/login" element={
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Login />
          </motion.div>
        } />
        <Route path="/register-lender" element={
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <RegisterLender />
          </motion.div>
        } />
        <Route path="/lender/login" element={
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <LenderLogin />
          </motion.div>
        } />
        <Route path="/signup" element={
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Signup />
          </motion.div>
        } />
        <Route path="/consumer-landing" element={
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ConsumerLanding />
          </motion.div>
        } />
        <Route path="/product/:productId" element={
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ProductDetail />
          </motion.div>
        } />
        <Route path="/order-overview" element={
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <OrderOverview />
          </motion.div>
        } />
        <Route path="/add-to-cart" element={
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <AddToCartPage />
          </motion.div>
        } />
        <Route path="/delivery" element={
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <DeliveryPage />
          </motion.div>
        } />
        <Route path="/payment" element={
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <PaymentPage />
          </motion.div>
        } />
        <Route path="/lender/dashboard" element={
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <LenderDashboard />
          </motion.div>
        } />
        <Route path="/lender/profile" element={
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <LenderProfilePage />
          </motion.div>
        } />
        <Route path="/my-listings" element={
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <MyListings />
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App
