import { Link } from 'react-router-dom';

export default function ProductDetail() {
  const product = {
    id: 'p1',
    title: 'Sample Product',
    imageUrl: 'https://via.placeholder.com/600x400',
    pricePerDay: 25,
    oldPricePerDay: 32,
    category: 'Cameras',
    rating: 4.6,
    reviews: 210,
    onSale: true
  };

  return (
    <main className="landing">
      <div className="container">
        <div className="breadcrumbs">
          <Link to="/consumer">All Products</Link> / <span>{product.title}</span>
        </div>

        <div className="product-detail-layout">
          {/* Left Column */}
          <div className="product-detail-left">
            <div className="product-image-main">
              <img src={product.imageUrl} alt={product.title} />
            </div>
            <button className="btn btn-outline add-to-wishlist">Add to wish list</button>

            <div className="product-description-section">
              <h2>Product Description</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <a href="#" className="read-more">Read More ></a>
            </div>
          </div>

          {/* Right Column */}
          <div className="product-detail-right">
            <h1 className="product-name">{product.title}</h1>
            <p className="product-price">
              <span className="p-price">${product.pricePerDay}/day</span>
            </p>

            <div className="rental-actions">
              <div className="rental-period">
                <div className="date-picker-group">
                  <label htmlFor="from-date">From:</label>
                  <input type="date" id="from-date" className="date-input" />
                </div>
                <div className="date-picker-group">
                  <label htmlFor="to-date">To:</label>
                  <input type="date" id="to-date" className="date-input" />
                </div>
              </div>

              <div className="quantity-selector">
                <div className="quantity-controls">
                  <button className="btn btn-quantity">-</button>
                  <input type="number" value="1" readOnly className="quantity-input" />
                  <button className="btn btn-quantity">+</button>
                </div>
              </div>

              <button className="btn add-to-cart">Add to Cart</button>
            </div>

            <div className="coupon-section">
              <label htmlFor="coupon-code">Apply Coupon</label>
              <div className="coupon-input-group">
                <input type="text" id="coupon-code" placeholder="Coupon Code" className="coupon-input" />
                <button className="btn btn-apply-coupon">Apply</button>
              </div>
            </div>

            <div className="terms-conditions-section">
              <h2>Terms & Conditions</h2>
              <p>
                Please read our rental terms and conditions carefully before proceeding. By renting this item, you agree to abide by all terms outlined.
              </p>
            </div>

            <div className="share-links-section">
              <h2>Share</h2>
              <div className="share-icons">
                {/* Placeholder for share icons */}
                <a href="#" className="share-icon">Facebook</a>
                <a href="#" className="share-icon">Twitter</a>
                <a href="#" className-="share-icon">Email</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}