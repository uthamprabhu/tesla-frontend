import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import './ProductList.css';

const ProductList = () => {
  // Dummy data for car products
  const carData = [
    { id: 1, model: 'Tesla Model S', price: '$79,990' },
    { id: 2, model: 'Tesla Model 3', price: '$39,990' },
    { id: 3, model: 'Tesla Model X', price: '$89,990' },
    { id: 4, model: 'Tesla Model Y', price: '$59,990' },
    { id: 5, model: 'Tesla Roadster', price: '$200,000' },
  ];

  return (
    <div className="product-list">
      {carData.map(car => (
        <Link to={`/product/${car.id}`} key={car.id} className="product-link">
          <div className="product-item">
            <h3>{car.model}</h3>
            <p>{car.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
