import React from 'react';
import './Product.css';

const Product = ({ product }) => {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <img src={product.imageUrl} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price}</p>
      <a href='https://wa.me/+919255255652'><button type="button">Contact Me</button></a>
    </div>
  );
};

export default Product;
