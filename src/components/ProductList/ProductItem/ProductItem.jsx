import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams hook
import './ProductItem.css';

const ProductItem = () => {
  const { id } = useParams(); // Extract car ID from the URL

  // Dummy data for car products
  const carData = [
    { id: 1, model: 'Tesla Model S', price: '$79,990', description: 'Description for Model S.' },
    { id: 2, model: 'Tesla Model 3', price: '$39,990', description: 'Description for Model 3.' },
    { id: 3, model: 'Tesla Model X', price: '$89,990', description: 'Description for Model X.' },
    { id: 4, model: 'Tesla Model Y', price: '$59,990', description: 'Description for Model Y.' },
    { id: 5, model: 'Tesla Roadster', price: '$200,000', description: 'Description for Roadster.' },
  ];

  // Find the car by ID
  const car = carData.find(car => car.id === parseInt(id));

  return (
    <div className="product-item-detail">
      {car ? (
        <div className="product-detail">
          <h3>{car.model}</h3>
          <p>{car.price}</p>
          <p>{car.description}</p>
        </div>
      ) : (
        <p>Car not found</p>
      )}
    </div>
  );
};

export default ProductItem;
