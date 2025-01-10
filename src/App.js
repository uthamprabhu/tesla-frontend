import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/Home/Home';
import ProductList from './components/ProductList/ProductList';
import ProductItem from './components/ProductList/ProductItem/ProductItem';
import BuildAndPrice from './components/BuildAndPrice/BuildAndPrice'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductItem />} />
        <Route path="/product/buildAndPrice" element={<BuildAndPrice />} />
      </Routes>
    </Router>
  );
};

export default App;
