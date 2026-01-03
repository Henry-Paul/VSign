import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { blogData, getBlogBySlug, getRelatedBlogs } from '../data/blogData';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();
  const blog = getBlogBySlug(slug);
  
  if (!blog) {
    return <div>Blog not found</div>;
  }

  const relatedBlogs = getRelatedBlogs(slug, blog.category);

  return (
    <>
      <SEO 
        title={blog.title}
        description={blog.metaDescription}
        keywords={blog.keywords}
        ogImage={blog.image}
      />

      {/* Back Button */}
      <div className="container">
        <Link to="/blogs" className="back-link">
          <ArrowLeft size={16} /> Back to Articles
        </Link>
      </div>

      {/* Blog Header */}
      <article className="blog-post">
        <div className="container">
          <motion.header 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="blog-header"
          >
            <div className="blog-meta">
              <span className="category-badge">{blog.category}</span>
              <span><Calendar size={14} /> {blog.date}</span>
              <span><Clock size={14} /> {blog.readTime}</span>
              <span><User size={14} /> {blog.author}</span>
            </div>
            <h1>{blog.title}</h1>
            <p className="blog-excerpt">{blog.excerpt}</p>
          </motion.header>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="blog-image"
          >
            <img src={blog.image} alt={blog.title} />
          </motion.div>

          {/* Blog Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Author Box */}
          <div className="author-box card-premium">
            <div className="author-image">
              <img src="/assets/author-rakesh.jpg" alt={blog.author} />
            </div>
            <div className="author-info">
              <h4>{blog.author}</h4>
              <p>{blog.author.includes('Rakesh') 
                ? 'Founder & Chief Engineer at V SIGN. 11+ years in signage manufacturing.' 
                : 'Co-Founder & Head of Business Development at V SIGN.'
              }</p>
            </div>
          </div>

          {/* CTAs */}
          <div className="blog-ctas">
            <h3>Ready to Start Your Signage Project?</h3>
            <div className="cta-buttons">
              <Link to="/calculator" className="btn-primary">
                🧮 Calculate Budget
              </Link>
              <Link to="/contact" className="btn-secondary">
                📞 Talk to Our Team
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedBlogs.length > 0 && (
        <section className="related-blogs">
          <div className="container">
            <h2>Related Articles</h2>
            <div className="related-grid">
              {relatedBlogs.map(blog => (
                <motion.article
                  key={blog.slug}
                  className="related-card card-premium"
                  whileHover={{ y: -4 }}
                >
                  <img src={blog.image} alt={blog.title} />
                  <div className="related-content">
                    <h3>{blog.title}</h3>
                    <p>{blog.excerpt}</p>
                    <Link to={`/blog/${blog.slug}`}>Read More →</Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default BlogPost;
