import { motion } from 'framer-motion';

export default function ProjectCard({ title, description, tech, link }) {
  return (
    <motion.div
      className="bg-slate-800 rounded-lg p-6 shadow-lg transition-transform transition-shadow duration-300 cursor-pointer"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(99,102,241,0.25)' }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t) => (
          <span key={t} className="px-2 py-1 bg-indigo-600 rounded text-sm">{t}</span>
        ))}
      </div>
      {link && (
        <a
          href={link}
          className="inline-block text-indigo-400 hover:text-indigo-300 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver proyecto
        </a>
      )}
    </motion.div>
  );
}
