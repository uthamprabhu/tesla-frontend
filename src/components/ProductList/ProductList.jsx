import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import './ProductList.css';

const ProductList = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({ make: '', year: '' }); // Example filters: make, year

  const defaultImage = 'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT356,$PR01,$W38A,$IPB2&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=2&crop=0,0,0,0&overlay=0&';

  useEffect(() => {
    axios
      .get(`/cars?page=${page}`)
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
      return (
        (car.model?.toLowerCase().includes(searchQuery.toLowerCase()) || car.description?.toLowerCase().includes(searchQuery.toLowerCase())) &&
        (filters.make ? car.make?.toLowerCase() === filters.make.toLowerCase() : true) &&
        (filters.year ? car.year?.toString() === filters.year : true)
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
        <h2 className="product-list-title">Explore Our Cars</h2>
        <Link to="/" className="home-button">
          Home
        </Link>
      </header>

      {/* Search and Filters */}
      <div className="filters-container">
        <input
          type="text"
          placeholder="Search by model or description..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-bar"
        />
        <select name="make" value={filters.make} onChange={handleFilterChange} className="filter-dropdown">
          <option value="">All Makes</option>
          <option value="Tesla">Tesla</option>
          <option value="Ford">Ford</option>
          <option value="Toyota">Toyota</option>
        </select>
        <select name="year" value={filters.year} onChange={handleFilterChange} className="filter-dropdown">
          <option value="">All Years</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
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
