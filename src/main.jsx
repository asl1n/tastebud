import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import './components/LoginForm.module.css';
import LoginPage from './components/LoginPage.jsx';
import SignUpPage from './components/SignupPage.jsx';
import ForgotPasswordPage from './components/ForgotPasswordPage.jsx';
import ResetPasswordPage from './components/ResetPasswordPage.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx'; 
import Foods from './components/Food/Foods.jsx';
import Users from './components/Users/Users.jsx';
import Review from './components/Reviews/Review.jsx';
import Restaurants from './components/Resturants/Restaurants.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/foods" element={<Foods />} />
        <Route path="/users" element={<Users />} />
        <Route path="/review" element={<Review />} />
        <Route path="/restaurant" element={<Restaurants />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
