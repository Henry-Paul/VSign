import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';
import { Star, Award, ShieldCheck, MessageSquare, Check } from 'lucide-react';

const products = [
  {
    slug: 'terrace-led-signage',
    name: 'Terrace LED Signage for Builders',
    priceRange: '₹2,000 – ₹3,500 / sq ft',
    image: '/assets/terrace-led.jpg',
    description: 'High-rise building top signage engineered for 150km/h wind load. Complete structural stability certificate provided.',
    applications: ['Builder Projects', 'Apartment Complexes', 'Commercial Towers'],
    features: ['Wind Load Certified', '10-Year Warranty', 'AMC Available', 'Site Consultancy Included'],
    cta: 'Get Builder Quote'
  },
  {
    slug: 'acp-hoardings',
    name: 'ACP Hoardings',
    priceRange: '₹1,200 – ₹2,500 / sq ft',
    image: '/assets/acp-hoarding.jpg',
    description: 'Weatherproof outdoor signage with UV-resistant coating. Perfect for highway-facing buildings.',
    applications: ['Outdoor Branding', 'Highway Facing', 'Building Facades'],
    features: ['UV Resistant', 'Weatherproof', '5-Year Warranty', 'Professional Installation'],
    cta: 'Calculate Budget'
  },
  {
    slug: '3d-brass-letters',
    name: '3D Brass Letters',
    priceRange: '₹2,500 – ₹4,000 / sq ft',
    image: '/assets/3d-letters.jpg',
    description: 'Premium dimensional letters for luxury brand presentation. Available in brass, stainless, titanium.',
    applications: ['Corporate Offices', 'Hotel Lobbies', 'Luxury Retail'],
    features: ['Premium Finish', 'Backlit Option', '20-Year Lifespan', 'Custom Fonts'],
    cta: 'Design My Letters'
  },
  {
    slug: 'hospital-signage',
    name: 'Hospital Signage Boards',
    priceRange: '₹1,200 – ₹2,200 / sq ft',
    image: '/assets/hospital-signage.jpg',
    description: 'Compliance-ready signage for healthcare facilities. Fire-rated, photoluminescent emergency signs.',
    applications: ['Hospitals', 'Clinics', 'Medical Colleges'],
    features: ['Fire Rated', 'Photoluminescent', 'Braille Signs', 'DNV Compliant'],
    cta: 'Get Healthcare Quote'
  },
  {
    slug: 'hotel-led-boards',
    name: 'Hotel LED Name Boards',
    priceRange: '₹1,500 – ₹2,800 / sq ft',
    image: '/assets/hotel-led.jpg',
    description: 'Elegant illuminated signage for hospitality sector. Energy-efficient with premium aesthetics.',
    applications: ['Hotels', 'Resorts', 'Restaurants', 'Cafés'],
    features: ['Energy Efficient', 'Premium Aesthetics', '3-Year Warranty', 'Custom Design'],
    cta: 'Get Hospitality Quote'
  },
  {
    slug: 'school-college-signage',
    name: 'School & College Signage',
    priceRange: '₹1,000 – ₹2,000 / sq ft',
    image: '/assets/school-signage.jpg',
    description: 'Wayfinding and branding solutions for educational institutions. Durable and vandal-resistant.',
    applications: ['Schools', 'Colleges', 'Universities', 'Training Centers'],
    features: ['Vandal Resistant', 'Wayfinding', 'Large Format', 'Budget Friendly'],
    cta: 'Get Education Quote'
  }
];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <SEO 
        title="Premium Signage Products"
        description="Complete range of LED boards, ACP hoardings, 3D letters. In-house manufacturing in Vijayawada. Serving builders, hospitals, hotels across Andhra Pradesh & Telangana."
        keywords={[
          'ACP LED Sign Board', 'Stainless Steel 3D Letters', 'Brass Letters Signage',
          'LED Backlit Letters', 'Hotel LED Name Board', 'Hospital Signage Board',
          'Terrace Signage', 'Building Top Signage'
        ]}
      />

      <section className="products-hero">
        <div className="container">
          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Signage <span className="text-gradient">Products</span>
          </motion.h1>
          <p>Engineered, manufactured, and installed by V SIGN</p>
        </div>
      </section>

      <section className="products-grid-section">
        <div className="container">
          {products.map((product, i) => (
            <motion.article
              key={product.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="product-detail-card card-premium"
            >
              <div className="product-image">
                <img src={product.image} alt={product.name} loading="lazy" />
                <div className="product-badge">{product.features[0]}</div>
              </div>

              <div className="product-content">
                <h2>{product.name}</h2>
                <p className="price">{product.priceRange}</p>
                <p className="description">{product.description}</p>

                <div className="applications">
                  <strong>Perfect for:</strong>
                  {product.applications.map(app => (
                    <span key={app} className="app-tag">{app}</span>
                  ))}
                </div>

                <div className="features-list">
                  {product.features.map(feature => (
                    <div key={feature} className="feature-item">
                      <Check size={16} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="product-actions">
                  <Link to="/calculator" className="btn-primary">
                    {product.cta}
                  </Link>
                  <button onClick={() => setSelectedProduct(product.name)} className="btn-secondary">
                    <MessageSquare size={16} />
                    Quick Enquiry
                  </button>
                </div>

                {selectedProduct === product.name && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="product-enquiry-form"
                  >
                    <h4>Quick Enquiry: {product.name}</h4>
                    <ContactForm
                      sourcePage={`product_${product.slug}`}
                      showBudget={true}
                      prefillProject={`Interested in: ${product.name}`}
                      className="compact-form"
                    />
                  </motion.div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="bulk-enquiry-section">
        <div className="container">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} className="bulk-card card-premium">
            <h2>Need Multiple Signages?</h2>
            <p>Get special pricing for builder projects, hospital complexes, or hotel chains.</p>
            <ContactForm
              sourcePage="products_bulk"
              showBudget={true}
              prefillProject="Bulk enquiry for multiple signage units"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Products;
