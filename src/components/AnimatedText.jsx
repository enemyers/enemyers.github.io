import { motion } from 'framer-motion';

export default function AnimatedText({ text, className = "" }) {
  return (
    <motion.div
      className={`font-bold text-4xl ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {text}
    </motion.div>
  );
}
