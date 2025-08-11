import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Login from './pages/Login.jsx'
import RegisterLender from './pages/RegisterLender.jsx'
import Signup from './pages/Signup.jsx'
import LenderLogin from './pages/LenderLogin.jsx'
import ConsumerLanding from './pages/ConsumerLanding.jsx'
import ProductDetail from './pages/ProductDetail.jsx' // Import ProductDetail

function Landing() {
  return (
    <main className="landing">
      <div className="container">
        <header className="brand">
          <div className="logo-circle">R</div>
          <div>
            <h1 className="title">RentIt</h1>
            <p className="subtitle">Rent what you need. Lend what you have.</p>
          </div>
        </header>

        <section className="actions">
          <Link className="card action" to="/login">
            <div className="action-title">Log in</div>
            <p className="action-desc">Access your rentals and continue where you left off.</p>
          </Link>

          <Link className="card action" to="/register-lender">
            <div className="action-title">Join as Lender</div>
            <p className="action-desc">List your items and start earning by lending them out.</p>
          </Link>

          <Link className="card action" to="/signup">
            <div className="action-title">Sign up</div>
            <p className="action-desc">Create a consumer account to browse and book items.</p>
          </Link>
        </section>
      </div>
    </main>
  )
}

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
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register-lender" element={<RegisterLender />} />
        <Route path="/lender/login" element={<LenderLogin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/consumer" element={<ConsumerLanding />} />
        <Route path="/product/:productId" element={<ProductDetail />} /> {/* New Route */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
