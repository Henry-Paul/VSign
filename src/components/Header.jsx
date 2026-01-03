import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calculator } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    isMenuOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';
  }, [isMenuOpen]);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'Calculator', path: '/calculator' },
    { label: 'About', path: '/about' },
    { label: 'Blogs', path: '/blogs' },
    { label: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="logo">
          <strong>V SIGN</strong>
          <span>Enterprise Pvt. Ltd.</span>
        </Link>

        <nav className="nav-desktop">
          {navItems.map(item => (
            <Link 
              key={item.path} 
              to={item.path} 
              className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/calculator" className="btn-primary btn-small">
            <Calculator size={18} />
            Budget
          </Link>
        </nav>

        <button 
          className="burger-btn" 
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="mobile-menu-overlay"
            >
              <div className="mobile-menu">
                <div className="mobile-menu-header">
                  <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
                    <X size={24} />
                  </button>
                </div>
                <nav className="nav-mobile">
                  {navItems.map(item => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`nav-link-mobile ${isActive(item.path) ? 'active' : ''}`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
