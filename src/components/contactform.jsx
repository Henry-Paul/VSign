import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Phone, Mail, MessageSquare, CheckCircle, Loader } from 'lucide-react';
import { sendEmail, openWhatsApp } from '../utils/emailjs';

const ContactForm = ({ 
  showBudget = false, 
  prefillProject = '',
  sourcePage = 'contact',
  className = ''
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    project: prefillProject,
    budgetRange: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitMethod, setSubmitMethod] = useState(null); // 'email' or 'whatsapp'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitMethod('email');

    // Send via EmailJS
    const result = await sendEmail({
      ...formData,
      sourcePage,
      projectType: showBudget ? 'Budget Enquiry' : 'General Enquiry'
    });

    if (result.success) {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', phone: '', email: '', project: '', budgetRange: '' });
        setSubmitted(false);
      }, 5000);
    }

    setSubmitting(false);
  };

  const handleWhatsAppSubmit = () => {
    if (!formData.name || !formData.phone) {
      alert('Please fill at least Name and Phone to continue on WhatsApp');
      return;
    }

    setSubmitMethod('whatsapp');
    // Send to EmailJS first, then open WhatsApp
    sendEmail({
      ...formData,
      sourcePage: `${sourcePage}_whatsapp`,
      projectType: 'WhatsApp Lead'
    });

    openWhatsApp({
      ...formData,
      sourcePage
    });
  };

  if (submitted && submitMethod === 'email') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="form-success card-premium"
      >
        <CheckCircle size={48} color="#10b981" />
        <h3>Message Sent Successfully!</h3>
        <p>Our team will contact you within 24 hours.</p>
        <p>Alternatively, <strong>chat with us now on WhatsApp</strong> for faster response:</p>
        <button onClick={() => openWhatsApp(formData)} className="btn-whatsapp">
          Continue on WhatsApp
        </button>
      </motion.div>
    );
  }

  return (
    <form className={`contact-form ${className}`} onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">
          <User size={16} /> Full Name *
        </label>
        <input
          id="name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          placeholder="Enter your name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">
          <Phone size={16} /> Phone Number *
        </label>
        <input
          id="phone"
          type="tel"
          required
          value={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
          placeholder="+91 98765 43210"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">
          <Mail size={16} /> Email (optional)
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          placeholder="you@company.com"
        />
      </div>

      <div className="form-group">
        <label htmlFor="project">
          <MessageSquare size={16} /> Project Details *
        </label>
        <textarea
          id="project"
          required
          rows={4}
          value={formData.project}
          onChange={(e) => setFormData({...formData, project: e.target.value})}
          placeholder="Tell us about your signage needs (size, location, timeline)"
        />
      </div>

      {showBudget && (
        <div className="form-group">
          <label htmlFor="budget">Budget Range (optional)</label>
          <input
            id="budget"
            type="text"
            value={formData.budgetRange}
            onChange={(e) => setFormData({...formData, budgetRange: e.target.value})}
            placeholder="e.g., 50k-1L"
          />
        </div>
      )}

      <div className="form-actions">
        <button 
          type="submit" 
          className="btn-primary"
          disabled={submitting}
        >
          {submitting ? (
            <>
              <Loader size={16} className="spinning" />
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </button>

        <button 
          type="button"
          onClick={handleWhatsAppSubmit}
          className="btn-whatsapp"
          disabled={submitting}
        >
          <MessageSquare size={16} />
          Send via WhatsApp
        </button>
      </div>

      <p className="form-privacy">
        By submitting, you agree to our privacy policy. 
        Your data will only be used to contact you about your enquiry.
      </p>
    </form>
  );
};

export default ContactForm;
