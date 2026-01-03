import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const PhoneFloat = () => {
  const phoneNumber = "91XXXXXXXXXX";
  
  return (
    <motion.a
      href={`tel:${phoneNumber}`}
      className="phone-float"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Call V SIGN"
    >
      <Phone size={24} />
    </motion.a>
  );
};

export default PhoneFloat;
