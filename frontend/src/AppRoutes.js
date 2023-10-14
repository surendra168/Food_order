import React, { PureComponent } from 'react'
import { Route,Routes } from 'react-router-dom'
import HomePage from './pages/home/HomePage';
import FoodPage from './pages/Food/FoodPage';
import CartPage from './pages/Cart/CartPage';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/Register/RegisterPage';


export default class AppRoutes extends PureComponent {
  render() {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search/:searchTerm" element={<HomePage />} />
        <Route path="/tag/:tag" element={<HomePage />} />
        <Route path="/food/:id" element={<FoodPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    );
  }
}
