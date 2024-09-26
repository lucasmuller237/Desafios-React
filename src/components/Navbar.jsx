import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/Logo.jpg';
import CartWidget from './CartWidget';

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/" className="logo-link">
        <img src={logo} alt="Logo meramente ilustrativa" className="logo" />
      </Link>
      <ul className="nav-list">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/produtos" className="nav-link">Produtos</Link></li>
        <li><Link to="/carrinho" className="nav-link">Carrinho</Link></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default Navbar;''