import { Link } from 'react-router-dom'
import { useState } from 'react'
import { products } from '../data/products.js'

export default function ConsumerLanding() {
  const [view, setView] = useState('card') // 'card' | 'list'
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('rating') // Default sort by rating
  return (
    <main className="landing">
      <div className="container">
        <section className="hero">
          <div className="hero-content">
            <h2>Weekend deals: up to 25% off</h2>
            <p>Top-rated cameras, tools, and mobility gear for less.</p>
            <a className="btn" href="#deals">Shop deals</a>
          </div>
        </section>

        <nav className="topnav">
          <div className="nav-left">
            <Link to="/consumer" className="icon-btn" aria-label="Home">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M3 10.5L12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-10.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
              </svg>
              <span>Home</span>
            </Link>
            <button type="button" className="text-btn">Wishlist</button>
            <button type="button" className="icon-btn" aria-label="Cart">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M6 6h15l-1.5 8.5a2 2 0 0 1-2 1.5H9a2 2 0 0 1-2-1.5L5 3H2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="10" cy="20" r="1.4" fill="currentColor"/>
                <circle cx="17" cy="20" r="1.4" fill="currentColor"/>
              </svg>
            </button>
          </div>
          <div className="nav-right">
            <Link to="/login" className="text-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{marginRight:8}}>
                <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-5 0-8 2.5-8 5v1h16v-1c0-2.5-3-5-8-5Z" fill="currentColor"/>
              </svg>
              Profile
            </Link>
          </div>
        </nav>

        <div className="category-menu container">
          <button type="button" className="category-btn active">All</button>
          <button type="button" className="category-btn">Cameras</button>
          <button type="button" className="category-btn">Drones</button>
          <button type="button" className="category-btn">Tools</button>
          <button type="button" className="category-btn">Action Cams</button>
          <button type="button" className="category-btn">Mobility</button>
        </div>

        <div className="product-controls container">
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

        <section className={`grid-products ${view === 'list' ? 'list' : ''}`} id="deals">
          {products.map((p) => (
            <Link to={`/product/${p.id}`} key={p.id} className={`product-card cat-${p.category?.toLowerCase().replace(/\s+/g,'-')}`}>
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
          ))}
        </section>
      </div>
    </main>
  )
}


