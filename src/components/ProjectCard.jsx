import { motion } from 'framer-motion';

export default function ProjectCard({ title, description, tech, link }) {
  const isExternalLink = Boolean(link) && /^https?:\/\//.test(link);

  return (
    <motion.div
      className="bg-slate-800 rounded-lg p-6 shadow-lg transition-transform transition-shadow duration-300 cursor-pointer"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(34,197,94,0.25)' }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-emerald-200 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t) => (
          <span key={t} className="px-2 py-1 bg-emerald-600 rounded text-sm">{t}</span>
        ))}
      </div>
      {link && (
        <a
          href={link}
          className="inline-block text-emerald-400 hover:text-emerald-300 underline"
          target={isExternalLink ? '_blank' : undefined}
          rel={isExternalLink ? 'noopener noreferrer' : undefined}
        >
          Ver proyecto
        </a>
      )}
    </motion.div>
  );
}
