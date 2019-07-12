import React from 'react';
import { motion } from 'framer-motion';

// eslint-disable-next-line  react/prop-types
export const ScaleUp = ({ children }) => (
  <motion.div
    initial={{ scale: 0.25 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.6 }}
  >
    {children}
  </motion.div>
);
