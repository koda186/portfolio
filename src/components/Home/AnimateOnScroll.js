import React from 'react';

import { motion } from "framer-motion";


export default function AnimateOnScroll({ children }) {
  return (
    <motion.div
      initial={{opacity: 0, x: '-150vw'}}
      animate={{opacity: 1, x: 0}}
      transition={{delay: 0, type: 'spring', damping: 10, stiffness: 200}}
      exit={{ opacity: 0, y: '-150vw' }}
    >
      {children}
    </motion.div>
  );
}
