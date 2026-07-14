import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/img/LOGO.webp';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        {/* Logo */}
        <Link to="/" className="navbar__logo" onClick={closeMenu}>
          <img src={logo} alt="K D Senith Traders PVT LTD Logo" className="navbar__logo-img" />
          <div className="navbar__logo-text">
            <span className="navbar__brand-name">K D Senith Traders</span>
            <span className="navbar__brand-sub">PVT LTD</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="navbar__nav" aria-label="Main navigation">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'}>
            Home
          </NavLink>
          <NavLink to="/products" className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'}>
            Products
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'}>
            Contact
          </NavLink>
        </nav>

        {/* CTA */}
        <Link to="/contact" className="btn btn--primary btn--sm navbar__cta" id="nav-cta-btn">
          Get a Quote
        </Link>

        {/* Mobile Hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          id="hamburger-btn"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="navbar__mobile-menu" role="navigation" aria-label="Mobile navigation">
          <NavLink to="/" end className="navbar__mobile-link" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/products" className="navbar__mobile-link" onClick={closeMenu}>Products</NavLink>
          <NavLink to="/contact" className="navbar__mobile-link" onClick={closeMenu}>Contact</NavLink>
          <Link to="/contact" className="btn btn--primary navbar__mobile-cta" onClick={closeMenu} id="mobile-cta-btn">
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
