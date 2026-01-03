import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, User, Phone, Mail, MessageSquare, HelpCircle } from 'lucide-react';
import { sendEmail, openWhatsApp } from '../utils/emailjs';

const WhatsAppFloat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState('welcome');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    question: ''
  });

  const startChat = () => {
    if (!formData.name || !formData.phone) {
      alert('Please enter your name and phone to continue');
      return;
    }

    sendEmail({
      ...formData,
      sourcePage: 'whatsapp_chatbot',
      projectType: 'WhatsApp Chatbot Lead'
    });

    const message = `Hi V SIGN, I'm ${formData.name} (${formData.phone}). ${formData.question || 'I need signage assistance.'}`;
    openWhatsApp({ ...formData, message });
    setIsOpen(false);
  };

  const goDirect = () => {
    sendEmail({
      name: 'Direct User',
      phone: 'N/A',
      message: 'User chose direct WhatsApp from chatbot',
      sourcePage: 'whatsapp_direct',
      projectType: 'Direct WhatsApp'
    });
    
    openWhatsApp({ message: 'Hi, I need signage assistance' });
    setIsOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="whatsapp-widget card-premium"
          >
            <div className="widget-header">
              <div className="widget-title">
                <MessageCircle size={20} />
                <div>
                  <h4>V SIGN Support</h4>
                  <span>Typically replies in 2 hours</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} aria-label="Close chat">
                <X size={18} />
              </button>
            </div>

            <div className="widget-body">
              <AnimatePresence mode="wait">
                {step === 'welcome' && (
                  <motion.div key="welcome" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
                    <div className="welcome-message">
                      <h3>Hello! 👋</h3>
                      <p>I can help you with:</p>
                      <ul>
                        <li>✅ Budget estimation</li>
                        <li>✅ Site visit booking</li>
                        <li>✅ Technical questions</li>
                        <li>✅ Design consultation</li>
                      </ul>
                    </div>
                    <div className="widget-options">
                      <button onClick={() => setStep('form')} className="option-btn primary">Start Chat (Share Details)</button>
                      <button onClick={goDirect} className="option-btn secondary">Go Direct to WhatsApp</button>
                    </div>
                  </motion.div>
                )}

                {step === 'form' && (
                  <motion.div key="form" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="chatbot-form">
                    <div className="form-header">
                      <HelpCircle size={18} />
                      <span>Quick Details Before Chat</span>
                    </div>

                    <div className="form-group">
                      <label><User size={14} /> Your Name *</label>
                      <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="e.g., Rakesh" />
                    </div>

                    <div className="form-group">
                      <label><Phone size={14} /> Phone Number *</label>
                      <input type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} placeholder="+91 98765 43210" />
                    </div>

                    <div className="form-group">
                      <label><Mail size={14} /> Email (optional)</label>
                      <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="you@company.com" />
                    </div>

                    <div className="form-group">
                      <label><MessageSquare size={14} /> Your Question</label>
                      <textarea rows={3} value={formData.question} onChange={(e) => setFormData({...formData, question: e.target.value})} placeholder="What would you like to know?" />
                    </div>

                    <button onClick={startChat} className="btn-whatsapp" disabled={!formData.name || !formData.phone}>
                      <Send size={16} /> Start WhatsApp Chat
                    </button>

                    <button onClick={() => setStep('welcome')} className="btn-secondary btn-small">← Back</button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="widget-footer">
              <p>Powered by V Sign Enterprise</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="whatsapp-float"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          setIsOpen(true);
          setStep('welcome');
        }}
        aria-label="Open WhatsApp chat"
      >
        <MessageCircle size={28} />
        <span className="notification-badge">1</span>
      </motion.button>
    </>
  );
};

export default WhatsAppFloat;
