import { Link } from 'react-router-dom'
import { useState, useEffect, Fragment } from 'react'
import { motion } from 'framer-motion'
import { products } from '../data/products.js'
import './ConsumerLanding.css' // Import the new CSS file

export default function ConsumerLanding() {
  const [view, setView] = useState('card') // 'card' | 'list'
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('rating') // Default sort by rating
  const [loading, setLoading] = useState(true); // New loading state
  const [showScroll, setShowScroll] = useState(false); // New scroll state

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6; // Changed to 6 products per page

  // Calculate products for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Calculate total pages
  const totalPages = Math.ceil(products.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    // Simulate a network request
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Show loader for 1.5 seconds
    return () => clearTimeout(timer);
  }, []);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop);

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };

  const pageTransition = {
    type: "tween",
    ease: "easeOut",
    duration: 0.4
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
        Loading...
      </div>
    );
  }

  return (
    <Fragment>
    <motion.main
      className="landing"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <section className="hero full-width-container">
        <div className="container-inner">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >Weekend deals: up to 25% off</motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >Top-rated cameras, tools, and mobility gear for less.</motion.p>
          <motion.a
            className="btn"
            href="#deals"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >Shop deals</motion.a>
        </div>
      </section>

      <nav className="topnav full-width-container">
        <div className="container-inner">
          <div className="nav-left">
            <Link to="/consumer" className="icon-btn" aria-label="Home">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M3 10.5L12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-10.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
              </svg>
              <span>Home</span>
            </Link>
            <button type="button" className="text-btn">Wishlist</button>
            <Link to="/add-to-cart" className="icon-btn" aria-label="Cart">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M6 6h15l-1.5 8.5a2 2 0 0 1-2 1.5H9a2 2 0 0 1-2-1.5L5 3H2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="10" cy="20" r="1.4" fill="currentColor"/>
                <circle cx="17" cy="20" r="1.4" fill="currentColor"/>
              </svg>
            </Link>
          </div>
          <div className="nav-right">
            <Link to="/login" className="text-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{marginRight:8}}>
                <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-5 0-8 2.5-8 5v1h16v-1c0-2.5-3-5-8-5Z" fill="currentColor"/>
              </svg>
              Profile
            </Link>
          </div>
        </div>
      </nav>

      <div className="category-menu full-width-container">
        <div className="container-inner">
          <button type="button" className="category-btn active">All</button>
          <button type="button" className="category-btn">Cameras</button>
          <button type="button" className="category-btn">Drones</button>
          <button type="button" className="category-btn">Tools</button>
          <button type="button" className="category-btn">Action Cams</button>
          <button type="button" className="category-btn">Mobility</button>
        </div>
      </div>

      <div className="container">
        <div className="product-controls">
          <input
            type="text"
            placeholder="Search products..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="sort-by-container">
            <label htmlFor="sort-by" className="sort-by-label">Sort by:</label>
            <select
              id="sort-by"
              className="sort-by-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="rating">Rating</option>
              <option value="price">Price</option>
              <option value="title">Title</option>
            </select>
          </div>
          <div className="view-controls">
            <div className="view-toggle" role="group" aria-label="Toggle view">
              <button
                type="button"
                className={`toggle-btn ${view === 'card' ? 'active' : ''}`}
                aria-pressed={view === 'card'}
                onClick={() => setView('card')}
                title="Card view"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <rect x="3" y="4" width="8" height="7" rx="1.5" stroke="currentColor"/>
                  <rect x="13" y="4" width="8" height="7" rx="1.5" stroke="currentColor"/>
                  <rect x="3" y="13" width="8" height="7" rx="1.5" stroke="currentColor"/>
                  <rect x="13" y="13" width="8" height="7" rx="1.5" stroke="currentColor"/>
                </svg>
              </button>
              <button
                type="button"
                className={`toggle-btn ${view === 'list' ? 'active' : ''}`}
                aria-pressed={view === 'list'}
                onClick={() => setView('list')}
                title="List view"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="3" rx="1.5" fill="currentColor"/>
                  <rect x="3" y="10.5" width="18" height="3" rx="1.5" fill="currentColor"/>
                  <rect x="3" y="16" width="18" height="3" rx="1.5" fill="currentColor"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <section id="deals">
          <motion.div
            className={`grid-products ${view === 'list' ? 'list' : ''}`}
            variants={{
              hidden: { opacity: 1 },
              visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
            }}
            initial="hidden"
            animate="visible"
          >
            {currentProducts.map((p) => (
              <motion.div
                key={p.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link to={`/product/${p.id}`} className={`product-card cat-${p.category?.toLowerCase().replace(/\s+/g,'-')}`}>
                  {p.onSale && <div className="badge sale">SALE</div>}
                  <div className="thumb">
                    <img src={p.imageUrl} alt={p.title} loading="lazy" />
                  </div>
                  <div className="meta">
                    <h3 className="p-title">{p.title}</h3>
                    <p className="p-sub">{p.category} • <span className="rating">★ {p.rating.toFixed(1)}</span> ({p.reviews})</p>
                    <div className="p-bottom">
                      <div>
                        <span className="p-price">${p.pricePerDay}/day</span>
                        {p.oldPricePerDay > p.pricePerDay && (
                          <span className="p-old">${p.oldPricePerDay}/day</span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <div className="pagination">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={currentPage === index + 1 ? 'active' : ''}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </motion.main>
      {showScroll && (
        <motion.button
          onClick={scrollTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            fontSize: '1.5em',
            cursor: 'pointer',
            boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
            zIndex: 1000
          }}
        >
          ↑
        </motion.button>
      )}
    </Fragment>
  )
}