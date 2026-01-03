import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Award, Factory } from 'lucide-react';

const Hero = ({ title, subtitle, cta, image, stats }) => {
  return (
    <section className="hero">
      <div className="hero-background">
        <img src={image} alt="Premium signage" loading="lazy" />
      </div>
      
      <div className="container hero-content">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hero-text"
        >
          <h1>{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
          
          <div className="hero-actions">
            <Link to={cta.to} className="btn-primary btn-large">
              {cta.text}
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="hero-stats">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="stat-item"
              >
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="hero-image"
        >
          <img src={image} alt="Premium signage project" />
          <div className="hero-badge">
            <Award size={16} />
            <span>Since 2013</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
