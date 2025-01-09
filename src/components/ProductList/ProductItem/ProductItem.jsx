import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductItem.css';

const ProductItem = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [customizations, setCustomizations] = useState({
    color: 'default',
    tyre: 'default',
    interior: 'default',
  });

  const defaultImage = 'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT356,$PR01,$W38A,$IPB2&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=2&crop=0,0,0,0&overlay=0&';

  const additionalImages = [
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT356,$PR01,$W38A,$IPB2&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=2&crop=0,0,0,0&overlay=0&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT356,$PR01,$W38A,$IPB2&view=STUD_SIDEVIEW&model=m3&size=1920&bkba_opt=2&crop=0,0,0,0&overlay=0&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT356,$PR01,$W38A,$IPB2&view=STUD_REAR34&model=m3&size=1920&bkba_opt=2&crop=0,0,0,0&overlay=0&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT356,$PR01,$W38A,$IPB2&view=STUD_RIMCLOSEUP&model=m3&size=1920&bkba_opt=2&crop=0,0,0,0&overlay=0&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT356,$PR01,$W39S,$IPB2&view=STUD_INTERIOR&model=m3&size=1920&bkba_opt=2&crop=0,0,0,0&overlay=0&',
  ];

  useEffect(() => {
    axios.get(`/cars/${id}`)
      .then((response) => {
        setCar(response.data);
      })
      .catch((error) => console.error('Error fetching car data:', error));
  }, [id]);

  const handleImageChange = (direction) => {
    setCurrentImageIndex((prevIndex) => {
      if (direction === 'next') {
        return (prevIndex + 1) % additionalImages.length;
      } else {
        return (prevIndex - 1 + additionalImages.length) % additionalImages.length;
      }
    });
  };

  const handleCustomizationChange = (type, value) => {
    setCustomizations((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  return (
    <div className="product-item-detail">
      {car ? (
        <div className="product-detail">
          <h3>{car.model}</h3>
          <div className="product-image-carousel">
            <button className="carousel-nav left" onClick={() => handleImageChange('prev')}>&lt;</button>
            <img
              src={additionalImages[currentImageIndex] || defaultImage}
              alt={`${car.model} View`}
              className="product-image"
            />
            <button className="carousel-nav right" onClick={() => handleImageChange('next')}>&gt;</button>
          </div>
          <div className="customization-options">
            <h4>Customize</h4>
            <div className="customization-buttons">
              <button onClick={() => handleCustomizationChange('color', 'red')}>Red</button>
              <button onClick={() => handleCustomizationChange('color', 'blue')}>Blue</button>
              <button onClick={() => handleCustomizationChange('color', 'black')}>Black</button>
              <button onClick={() => handleCustomizationChange('tyre', 'sport')}>Sport Tyres</button>
              <button onClick={() => handleCustomizationChange('tyre', 'eco')}>Eco Tyres</button>
              <button onClick={() => handleCustomizationChange('interior', 'luxury')}>Luxury Interior</button>
              <button onClick={() => handleCustomizationChange('interior', 'classic')}>Classic Interior</button>
            </div>
          </div>
          <div className="product-prices">
            {Object.keys(car.price).map((key) => (
              <p key={key}>
                {key}: ${car.price[key] !== null ? car.price[key] : 'N/A'}
              </p>
            ))}
          </div>
          <p>{car.description}</p>
        </div>
      ) : (
        <p>Car not found</p>
      )}
    </div>
  );
};

export default ProductItem;
