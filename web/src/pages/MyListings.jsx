import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import LenderNavBar from '../components/LenderNavBar';
import AddProduct from './AddProduct'; // Import AddProduct component
import './MyListings.css';

const MyListings = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([
    {
      id: 'p1',
      name: 'Professional Camera Kit',
      imageUrl: 'https://via.placeholder.com/300x200',
      price: 120,
      status: 'Active',
      category: 'Electronics',
    },
    {
      id: 'p2',
      name: 'Heavy Duty Power Drill',
      imageUrl: 'https://via.placeholder.com/300x200',
      price: 45,
      status: 'Inactive',
      category: 'Tools',
    },
    {
      id: 'p3',
      name: 'Portable Projector',
      imageUrl: 'https://via.placeholder.com/300x200',
      price: 75,
      status: 'Active',
      category: 'Electronics',
    },
    {
      id: 'p4',
      name: 'Camping Tent 4P',
      imageUrl: 'https://via.placeholder.com/300x200',
      price: 30,
      status: 'Active',
      category: 'Outdoor',
    },
    {
      id: 'p5',
      name: 'Mountain Bike Elite',
      imageUrl: 'https://via.placeholder.com/300x200',
      price: 90,
      status: 'Inactive',
      category: 'Sports',
    },
  ]);
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleEdit = (product) => {
    setEditingProduct(product);
    setShowAddProductModal(true);
  };

  const handleDelete = (productId) => {
    console.log(`Delete product: ${productId}`);
    // Implement delete logic
    setProducts(products.filter(product => product.id !== productId));
  };

  const handleAddProduct = (newProduct) => {
    // For now, just add to the list. In a real app, you'd send to backend.
    setProducts([...products, { ...newProduct, id: Date.now().toString(), status: 'Active' }]);
    setShowAddProductModal(false);
  };

  const handleUpdateProduct = (updatedProduct) => {
    setProducts(products.map(product =>
      product.id === updatedProduct.id ? updatedProduct : product
    ));
    setEditingProduct(null);
    setShowAddProductModal(false);
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
        Loading listings...
      </div>
    );
  }

  return (
    <>
      <LenderNavBar />
      <motion.main
        className="my-listings-page"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <div className="my-listings-header">
            <h1>My Product Listings</h1>
            <button className="btn btn-primary" onClick={() => setShowAddProductModal(true)}>
              Add New Product
            </button>
          </div>
          <div className="listings-grid">
            {products.length === 0 ? (
              <p>You have no products listed.</p>
            ) : (
              products.map((product) => (
                <motion.div
                  key={product.id}
                  className="listing-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={product.imageUrl} alt={product.name} className="listing-image" />
                  <div className="listing-details">
                    <h3 className="listing-name">{product.name}</h3>
                    <p className="listing-price">${product.price.toFixed(2)} / day</p>
                    <p className={`listing-status ${product.status.toLowerCase()}`}>Status: {product.status}</p>
                    <div className="listing-actions">
                      <button className="btn btn-secondary" onClick={() => handleEdit(product)}>Edit</button>
                      <button className="btn btn-danger" onClick={() => handleDelete(product.id)}>Delete</button>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </motion.main>

      {showAddProductModal && (
        <div className="modal-overlay">
          <motion.div
            className="modal-content"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <button className="modal-close-button" onClick={() => setShowAddProductModal(false)}>&times;</button>
            <AddProduct
              onProductAdd={editingProduct ? handleUpdateProduct : handleAddProduct}
              onClose={() => {
                setShowAddProductModal(false);
                setEditingProduct(null); // Clear editing product when modal closes
              }}
              initialProductData={editingProduct}
            />
          </motion.div>
        </div>
      )}
    </>
  );
};

export default MyListings;
