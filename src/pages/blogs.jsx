import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { blogData } from '../data/blogData';

const Blogs = () => {
  const featuredBlog = blogData[0]; // Most recent
  
  return (
    <>
      <SEO 
        title="Signage Guides & Industry Insights"
        description="Expert blogs on signage planning, pricing, compliance, and installation. Written for builders, facility managers, and business owners in Andhra Pradesh & Telangana."
        keywords={["signage blog", "LED sign guide", "building signage tips", "signage cost India"]}
      />

      {/* Hero */}
      <section className="blogs-hero">
        <div className="container">
          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Signage <span className="text-gradient">Insights</span>
          </motion.h1>
          <p>Expert guidance for builders, facility managers, and business owners</p>
        </div>
      </section>

      {/* Featured Blog */}
      <section className="featured-blog">
        <div className="container">
          <motion.article 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="featured-card card-premium"
          >
            <div className="featured-image">
              <img src={featuredBlog.image} alt={featuredBlog.title} />
              <span className="category-badge">{featuredBlog.category}</span>
            </div>
            <div className="featured-content">
              <div className="blog-meta">
                <span>{featuredBlog.author}</span> • <span>{featuredBlog.date}</span> • <span>{featuredBlog.readTime}</span>
              </div>
              <h2>{featuredBlog.title}</h2>
              <p className="excerpt">{featuredBlog.excerpt}</p>
              <Link to={`/blog/${featuredBlog.slug}`} className="btn-primary">
                Read Full Article →
              </Link>
            </div>
          </motion.article>
        </div>
      </section>

      {/* All Blogs Grid */}
      <section className="blogs-grid">
        <div className="container">
          <h2>Latest Articles</h2>
          <div className="blog-list">
            {blogData.map((blog, i) => (
              <motion.article
                key={blog.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="blog-card card-premium"
              >
                <div className="blog-card-image">
                  <img src={blog.image} alt={blog.title} loading="lazy" />
                </div>
                <div className="blog-card-content">
                  <div className="blog-meta">
                    <span className="category">{blog.category}</span>
                    <span>{blog.readTime}</span>
                  </div>
                  <h3>{blog.title}</h3>
                  <p className="excerpt">{blog.excerpt}</p>
                  <Link to={`/blog/${blog.slug}`} className="read-more">
                    Read More →
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="blogs-cta">
        <div className="container">
          <div className="cta-card card-premium">
            <h2>Need Personalized Signage Advice?</h2>
            <p>Talk directly with our founders. Get a free site visit for your project.</p>
            <div class="cta-buttons">
              <Link to="/contact" className="btn-primary">Schedule Free Consultation</Link>
              <Link to="/calculator" className="btn-secondary">Calculate Budget</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
