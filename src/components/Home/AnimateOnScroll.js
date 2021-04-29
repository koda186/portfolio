import React from 'react';

import { motion, AnimatePresence } from "framer-motion";


export default function AnimateOnScroll({ children }) {
  return (
    <motion.div
      initial={{opacity: 0, x: '-250vw'}}
      animate={{opacity: 1, x: 0}}
      transition={{delay: 0, type: 'spring', stiffness: 125}}
      exit={{ opacity: 0, x: '-250vw' }}
    >
      {children}
    </motion.div>
  );
}
