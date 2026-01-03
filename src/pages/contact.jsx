import React from 'react';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <>
      <SEO 
        title="Contact V SIGN"
        description="Get in touch with V SIGN for premium signage solutions in Andhra Pradesh & Telangana. Schedule site visits, request quotes, or visit our factory."
        keywords={["contact V SIGN", "signage site visit", "signage quote Andhra Pradesh"]}
      />

      <section className="contact-hero">
        <div className="container">
          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Get in <span className="text-gradient">Touch</span>
          </motion.h1>
          <p>Let's discuss your signage project</p>
        </div>
      </section>

      <section className="contact-main">
        <div className="container contact-grid">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} className="contact-info">
            <h2>Contact Information</h2>
            
            <div className="info-item">
              <MapPin size={24} />
              <div>
                <h4>Address</h4>
                <p>Vijayawada, Andhra Pradesh<br />India - 520001</p>
              </div>
            </div>

            <div className="info-item">
              <Phone size={24} />
              <div>
                <h4>Phone</h4>
                <p>+91 XXXXXXXXXX<br />Mon-Sat: 10AM-7PM</p>
              </div>
            </div>

            <div className="info-item">
              <Mail size={24} />
              <div>
                <h4>Email</h4>
                <p>info@vsign.in<br />sales@vsign.in</p>
              </div>
            </div>

            <div className="info-item">
              <Clock size={24} />
              <div>
                <h4>Business Hours</h4>
                <p>Monday - Saturday<br />10:00 AM - 7:00 PM</p>
              </div>
            </div>

            <div className="whatsapp-direct">
              <MessageSquare size={20} />
              <div>
                <strong>Prefer WhatsApp?</strong>
                <p>Chat directly for faster response:</p>
                <a href="https://wa.me/91XXXXXXXXXX" className="btn-whatsapp">
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} className="contact-form-wrapper">
            <h2>Send Us a Message</h2>
            <p>Fill out the form and we'll get back to you within 24 hours.</p>
            <ContactForm sourcePage="contact_page" showBudget={true} className="full-form" />
          </motion.div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} className="map-card card-premium">
            <h2>Visit Our Factory</h2>
            <p>See our in-house manufacturing process</p>
            <div className="map-embed">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.156922459146!2d80.6480!3d16.5062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f1b7b7b7b7b7%3A0xb7b7b7b7b7b7b7b7!2sVijayawada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1704204204204"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="V SIGN Factory Location"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
