import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import TestimonialSlider from '../components/TestimonialSlider';
import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';
import { Star, Award, Factory, ShieldCheck, MessageSquare } from 'lucide-react';

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "V SIGN Enterprise Pvt. Ltd.",
  "image": "/assets/hero-signage.jpg",
  "telephone": "+91XXXXXXXXXX",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Andhra Pradesh, Telangana",
    "addressCountry": "IN"
  },
  "priceRange": "₹850-₹4,000/sqft",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.6",
    "reviewCount": "300"
  }
};

const Home = () => {
  const products = [
    { name: "Terrace LED Signage", price: "₹2,000-3,500/sqft", image: "/assets/terrace-led.jpg", badge: "Builder's Choice" },
    { name: "ACP Hoardings", price: "₹1,200-2,500/sqft", image: "/assets/acp-hoarding.jpg", badge: "Weatherproof" },
    { name: "3D Brass Letters", price: "₹2,500-4,000/sqft", image: "/assets/3d-letters.jpg", badge: "Premium" }
  ];

  return (
    <>
      <SEO 
        title="Premium LED Signage & ACP Hoardings"
        description="V SIGN: Premium signage manufacturer in Andhra Pradesh & Telangana. LED boards, ACP hoardings, 3D letters. In-house production, professional installation, 10-year warranty."
        keywords={[
          "Terrace LED Signage", "High-rise Building Signage", 
          "LED Sign Board Andhra Pradesh", "ACP Hoardings Hyderabad",
          "3D Stainless Steel Letters", "Building Top Signage"
        ]}
        schema={schema}
      />

      <Hero 
        title={<>Premium Signage That <span className="text-gradient">Commands Attention</span></>}
        subtitle="Engineered for Andhra Pradesh & Telangana's skyline. 11 years of excellence."
        cta={{ text: "Calculate Project Budget", to: "/calculator" }}
        image="/assets/hero-signage.jpg"
        stats={[
          { label: "Projects Delivered", value: "300+" },
          { label: "Avg. Rating", value: "4.6★" },
          { label: "Years Experience", value: "11" }
        ]}
      />

      <section className="trust-strip">
        <div className="container">
          {[
            { icon: <Factory size={32} />, title: "100% In-House Manufacturing", desc: "Own production unit in Vijayawada" },
            { icon: <ShieldCheck size={32} />, title: "Wind Load Certified", desc: "Structural engineering for high-rises" },
            { icon: <Award size={32} />, title: "10-Year LED Warranty", desc: "Longest in South India" }
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="trust-item">
              {item.icon}
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="featured-products">
        <div className="container">
          <motion.h2 className="section-title">
            Signature <span className="accent-underline">Products</span>
          </motion.h2>
          <div className="product-grid">
            {products.map((product, i) => (
              <ProductCard key={i} {...product} />
            ))}
          </div>
        </div>
      </section>

      <section className="home-enquiry-section">
        <div className="container">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="enquiry-card card-premium">
            <div className="enquiry-content">
              <h2>Have a Question? <span className="text-gradient">Ask Our Experts</span></h2>
              <p>Get personalized advice for your signage project. Response within 24 hours.</p>
              
              <div className="enquiry-benefits">
                <div className="benefit-item">
                  <MessageSquare size={20} />
                  <span>Free Consultation</span>
                </div>
                <div className="benefit-item">
                  <Star size={20} />
                  <span>Expert Guidance</span>
                </div>
                <div className="benefit-item">
                  <Award size={20} />
                  <span>No Obligation</span>
                </div>
              </div>
            </div>

            <div className="enquiry-form">
              <ContactForm sourcePage="homepage" showBudget={false} />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="calculator-cta">
        <div className="container">
          <motion.div initial={{ scale: 0.95 }} whileInView={{ scale: 1 }} className="cta-card card-premium">
            <h2>Ready to Start Your Project?</h2>
            <p>Get an instant budget estimate in 60 seconds. No email required.</p>
            <Link to="/calculator" className="btn-primary btn-large">
              🚀 Calculate My Signage Budget
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container">
          <motion.h2 className="section-title">
            Trusted by <span className="accent-underline">300+ Businesses</span>
          </motion.h2>
          <TestimonialSlider />
        </div>
      </section>
    </>
  );
};

const ProductCard = ({ name, price, image, badge }) => {
  return (
    <motion.article whileHover={{ y: -8 }} className="product-card card-premium">
      <div className="product-image">
        <img src={image} alt={name} loading="lazy" />
        {badge && <span className="product-badge">{badge}</span>}
      </div>
      <div className="product-content">
        <h3>{name}</h3>
        <p className="price">{price}</p>
        <Link to="/calculator" className="btn-secondary">
          Calculate Budget
        </Link>
      </div>
    </motion.article>
  );
};

export default Home;
