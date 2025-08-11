import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
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

function Placeholder({ heading, note }) {
  return (
    <div className="placeholder">
      <h2>{heading}</h2>
      <p>{note}</p>
      <Link className="back" to="/">Back to Landing</Link>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register-lender" element={<RegisterLender />} />
        <Route path="/lender/login" element={<LenderLogin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/consumer-landing" element={<ConsumerLanding />} />
        <Route path="/product/:productId" element={<ProductDetail />} /> {/* New Route */}
        <Route path="/order-overview" element={<OrderOverview />} />
        <Route path="/add-to-cart" element={<AddToCartPage />} />
        <Route path="/delivery" element={<DeliveryPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
