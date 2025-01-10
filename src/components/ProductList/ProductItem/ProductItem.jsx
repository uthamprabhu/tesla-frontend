import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductItem.css';
import teslaLogo from '../../../assets/tesla-logo-black.svg'

const ProductItem = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [customizations, setCustomizations] = useState({
    color: 'PN01',
    tyre: 'W38A',
    interior: 'IPB2',
  });
  const [loading, setLoading] = useState(true); // State to track loading status

  // const defaultImage = 'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT356,$PR01,$W38A,$IPB2&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=2&crop=0,0,0,0&overlay=0&';

  const additionalImages = [
    `https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT356,${customizations.color},$${customizations.tyre},$${customizations.interior}&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=2&crop=0,0,0,0&overlay=0&`,
    `https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT356,${customizations.color},$${customizations.tyre},$${customizations.interior}&view=STUD_SIDEVIEW&model=m3&size=1920&bkba_opt=2&crop=0,0,0,0&overlay=0&`,
    `https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT356,${customizations.color},$${customizations.tyre},$${customizations.interior}&view=STUD_REAR34&model=m3&size=1920&bkba_opt=2&crop=0,0,0,0&overlay=0&`,
    `https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT356,${customizations.color},$${customizations.tyre},$${customizations.interior}&view=STUD_RIMCLOSEUP&model=m3&size=1920&bkba_opt=2&crop=0,0,0,0&overlay=0&`,
    `https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT356,${customizations.color},$${customizations.tyre},$${customizations.interior}&view=STUD_INTERIOR&model=m3&size=1920&bkba_opt=2&crop=0,0,0,0&overlay=0&`,
  ];

  useEffect(() => {
    axios.get(`/cars/${id}`)
      .then((response) => {
        setCar(response.data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error('Error fetching car data:', error);
        setLoading(false); // Set loading to false in case of error as well
      });
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
      {loading ? (
        <p>Loading...</p> // Display loading message while data is being fetched
      ) : car ? (
        <div className="product-detail">
          <header className="product-list-header">
            <img src={teslaLogo} alt="Tesla Logo" className="tesla-logo" />
            <h2 className="product-list-title">{car.model}</h2>
            <Link to="/products" className="home-button">
              Back
            </Link>
          </header>
          <div className="product-image-carousel">
            <button className="carousel-nav left" onClick={() => handleImageChange('prev')}>&lt;</button>
            <img
              src={additionalImages[currentImageIndex]}
              alt={`${car.model} View`}
              className="product-image-item"
            />
            <button className="carousel-nav right" onClick={() => handleImageChange('next')}>&gt;</button>
          </div>

          <div className="customization-options">
            <h4>Customize Your Car &darr;</h4>

            {/* Color Customization */}
            <div className="customization-category">
              <h5>Color</h5>
              <div className="customization-buttons">
                <button
                  className={customizations.color === 'PN01' ? 'active' : ''}
                  onClick={() => handleCustomizationChange('color', 'PN01')}
                >
                  Stealth Grey
                </button>
                <button
                  className={customizations.color === 'PPSW' ? 'active' : ''}
                  onClick={() => handleCustomizationChange('color', 'PPSW')}
                >
                  Pearl White Multi-Coat
                </button>
                <button
                  className={customizations.color === 'PPSB' ? 'active' : ''}
                  onClick={() => handleCustomizationChange('color', 'PPSB')}
                >
                  Deep Blue Metallic
                </button>
                <button
                  className={customizations.color === 'PBSB' ? 'active' : ''}
                  onClick={() => handleCustomizationChange('color', 'PBSB')}
                >
                  Solid Black
                </button>
                <button
                  className={customizations.color === 'PR01' ? 'active' : ''}
                  onClick={() => handleCustomizationChange('color', 'PR01')}
                >
                  Ultra Red
                </button>
                <button
                  className={customizations.color === 'PN00' ? 'active' : ''}
                  onClick={() => handleCustomizationChange('color', 'PN00')}
                >
                  Quicksilver
                </button>
              </div>
            </div>

            {/* Tyre Customization */}
            <div className="customization-category">
              <h5>Tyres</h5>
              <div className="customization-buttons">
                <button
                  className={customizations.tyre === 'W38A' ? 'active' : ''}
                  onClick={() => handleCustomizationChange('tyre', 'W38A')}
                >
                  Photon Wheels
                </button>
                <button
                  className={customizations.tyre === 'W39S' ? 'active' : ''}
                  onClick={() => handleCustomizationChange('tyre', 'W39S')}
                >
                  Nova Wheels
                </button>
              </div>
            </div>

            {/* Interior Customization */}
            <div className="customization-category">
              <h5>Interior</h5>
              <div className="customization-buttons">
                <button
                  className={customizations.interior === 'IPB2' ? 'active' : ''}
                  onClick={() => handleCustomizationChange('interior', 'IPB2')}
                >
                  Black Interior
                </button>
                <button
                  className={customizations.interior === 'IPW2' ? 'active' : ''}
                  onClick={() => handleCustomizationChange('interior', 'IPW2')}
                >
                  White Interior
                </button>
              </div>
            </div>
          </div>


          <div className="product-prices">
            <h3>Pricing Details</h3>
            {Object.keys(car.price).map((key) => (
              <p key={key} className="price-item">
                <span className="price-key">{key}:</span>
                <span className="price-value">
                  {car.price[key] !== null ? `$${car.price[key]}` : 'not available'}
                </span>
              </p>
            ))}
          </div>

          <div className="product-description">
            <h3>Description</h3>
            <p>{car.description}</p>
          </div>

          <div className="call-to-action-buttons">
            <button className="cta-button build-price">Build & Price</button>
            <button className="cta-button customer-care">Customer Care</button>
          </div>

        </div>
      ) : (
        <p>Car not found</p>
      )}
    </div>
  );
};

export default ProductItem;
