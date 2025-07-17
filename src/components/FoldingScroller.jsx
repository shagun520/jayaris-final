import React from 'react';
import { motion } from 'framer-motion';

const FoldingScroller = ({ children }) => {
  return (
    <div className="folding-scroller flex flex-col">
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          className="folding-section min-h-screen w-full flex items-center justify-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
};

export default FoldingScroller;
