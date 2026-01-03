import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-section">
          <h4>V SIGN Enterprise</h4>
          <p>Premium signage solutions since 2013. In-house manufacturing in Vijayawada.</p>
          <div className="footer-contact">
            <p><MapPin size={16} /> Vijayawada, Andhra Pradesh</p>
            <p><Phone size={16} /> +91 XXXXXXXXXX</p>
            <p><Mail size={16} /> info@vsign.in</p>
            <p><Clock size={16} /> Mon-Sat: 10AM-7PM</p>
          </div>
        </div>

        <div className="footer-section">
          <h4>Products</h4>
          <Link to="/products">Terrace LED Signage</Link>
          <Link to="/products">ACP Hoardings</Link>
          <Link to="/products">3D Letters</Link>
          <Link to="/products">Hospital Signage</Link>
          <Link to="/products">Hotel LED Boards</Link>
        </div>

        <div className="footer-section">
          <h4>Resources</h4>
          <Link to="/blogs">Signage Guides</Link>
          <Link to="/blogs">Pricing Insights</Link>
          <Link to="/blogs">Installation Tips</Link>
          <Link to="/contact">FAQ</Link>
          <a href="/downloads/cost-guide.pdf">Free Cost Guide</a>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <Link to="/about">About V SIGN</Link>
          <Link to="/about">Our Factory</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/contact">Request Site Visit</Link>
          <Link to="/contact">Careers</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 V SIGN Enterprise Pvt. Ltd. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
