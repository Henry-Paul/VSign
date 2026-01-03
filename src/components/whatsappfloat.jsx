import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppFloat = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const phoneNumber = "91XXXXXXXXXX"; // Replace with actual number

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="whatsapp-widget"
          >
            <div className="widget-header">
              <h4>💬 V SIGN Support</h4>
              <button onClick={() => setIsOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <div className="widget-body">
              <p>Hello! How can we help?</p>
              <a href={`https://wa.me/${phoneNumber}?text=Hello%20V%20SIGN,%20I%20need%20signage%20assistance`} target="_blank">
                Start Chat
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="whatsapp-float"
        whileHover={{ scale: 1.1 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageCircle size={28} />
      </motion.button>
    </>
  );
};

export default WhatsAppFloat;
