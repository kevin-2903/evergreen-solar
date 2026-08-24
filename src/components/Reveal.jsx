import { motion } from 'framer-motion';

// Subtle scroll-reveal animation wrapper.
export default function Reveal({ children, delay = 0, y = 20, className = '', once = true, duration = 0.6 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-50px' }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
