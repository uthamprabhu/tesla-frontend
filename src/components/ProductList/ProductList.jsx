import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import './ProductList.css';
import teslaLogo from '../../assets/tesla-logo-black.svg'

const ProductList = () => {
  const navigate = useNavigate()
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    priceRange: '',
    seatingCapacity: '',
  });

  const defaultImage = 'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT356,$PR01,$W38A,$IPB2&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=2&crop=0,0,0,0&overlay=0&';

  const homePageNav = () => {
    navigate('/')
  }

  useEffect(() => {
    axios
      .get(`https://tesla-clone-app-e1ebd2301b9b.herokuapp.com/cars?page=${page}`)
      .then((response) => {
        setCars((prevCars) => {
          const newCars = response.data.filter((car) => !prevCars.some((prevCar) => prevCar._id === car._id));
          return [...prevCars, ...newCars];
        });
        if (response.data.length === 0) {
          setHasMore(false);
        }
      })
      .catch((error) => {
        console.error('Error fetching car data:', error);
        setHasMore(false);
      });
  }, [page]);

  useEffect(() => {
    const filtered = cars.filter((car) => {
      const priceBase = car.price?.Base || 0;
      const [minPrice, maxPrice] = filters.priceRange.split('-').map(Number);

      return (
        car.model?.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (filters.priceRange ? priceBase >= minPrice && priceBase <= maxPrice : true) &&
        (filters.seatingCapacity ? car.others?.seatingCapacity === filters.seatingCapacity : true)
      );
    });
    setFilteredCars(filtered);
  }, [cars, searchQuery, filters]);

  const fetchMoreData = () => {
    if (hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div className="product-list-container">
      <header className="product-list-header">
        <img onClick={homePageNav} src={teslaLogo} alt="Tesla Logo" className="tesla-logo" />
        <h2 className="product-list-title">Explore Our Cars</h2>
        <Link to="/" className="home-button">
          Home
        </Link>
      </header>

      {/* Search and Filters */}
      <div className="filters-container">
        <input
          type="text"
          placeholder="Search by model..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-bar"
        />
        <select name="priceRange" value={filters.priceRange} onChange={handleFilterChange} className="filter-dropdown">
          <option value="">All Prices</option>
          <option value="0-50000">Up to $50,000</option>
          <option value="50001-100000">$50,001 - $100,000</option>
          <option value="100001-150000">$100,001 - $150,000</option>
        </select>
        <select name="seatingCapacity" value={filters.seatingCapacity} onChange={handleFilterChange} className="filter-dropdown">
          <option value="">All Seating Capacities</option>
          <option value="5 Adults">5 Adults</option>
          <option value="7 Adults">7 Adults</option>
        </select>
      </div>

      <InfiniteScroll
        dataLength={filteredCars.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<div className="loader">Loading...</div>}
        endMessage={<div className="end-message">You've reached the end!</div>}
      >
        <div className="product-grid">
          {filteredCars.map((car) => (
            <Link to={`/product/${car._id}`} key={car._id} className="product-link">
              <div className="product-item">
                <div className="product-image">
                  <img src={car.image || defaultImage} alt={car.model || 'Car'} />
                </div>
                <div className="product-info">
                  <h3>{car.model}</h3>
                  <p>{car.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default ProductList;
