import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { products } from '../data/products'; // Assuming products.js is in data folder

export default function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = products.find(p => p.id === productId);
    setProduct(foundProduct);
  }, [productId]);

  if (!product) {
    return (
      <main className="landing">
        <div className="container">
          <h1>Product Not Found</h1>
          <p>The product you are looking for does not exist.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="landing">
      <div className="container">
        <Link to="/consumer" className="back-to-products">← Back to Products</Link>
        <div className="product-detail-card">
          <div className="product-detail-image">
            <img src={product.imageUrl} alt={product.title} />
          </div>
          <div className="product-detail-meta">
            <h1 className="product-detail-title">{product.title}</h1>
            <p className="product-detail-category">{product.category}</p>
            <div className="product-detail-rating">
              <span className="rating">★ {product.rating.toFixed(1)}</span> ({product.reviews} reviews)
            </div>
            <p className="product-detail-price">
              <span className="p-price">${product.pricePerDay}/day</span>
              {product.oldPricePerDay > product.pricePerDay && (
                <span className="p-old">${product.oldPricePerDay}/day</span>
              )}
            </p>
            <p className="product-detail-description">
              {/* Placeholder for description, as products.js doesn't have one */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="btn product-detail-cta">Rent Now</button>
          </div>
        </div>
      </div>
    </main>
  );
}
