// src/components/Navbar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/authSlice';

const Navbar = () => {
  const location = useLocation();
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="logo">GATE Tracker</div>
      <div className="nav-links">
        <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
          Daily Planner
        </Link>
        <Link to="/subjects" className={`nav-link ${isActive('/subjects') ? 'active' : ''}`}>
          Subjects
        </Link>
        <Link to="/pyqs" className={`nav-link ${isActive('/pyqs') ? 'active' : ''}`}>
          PYQs
        </Link>
      </div>
      <div className="auth-section">
        {currentUser ? (
          <>
            <span className="username">Hi, {currentUser.name}</span>
            <button className="logout-btn" onClick={() => dispatch(logout())}>
              Logout
            </button>
          </>
        ) : (
          <button 
            className="login-btn"
            onClick={() => dispatch(login({ id: 'user123', name: 'GATE Aspirant' }))}
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;