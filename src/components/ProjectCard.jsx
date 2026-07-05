import { motion } from 'framer-motion';

export default function ProjectCard({ title, description, tech, link }) {
  const isExternalLink = Boolean(link) && /^https?:\/\//.test(link);

  return (
    <motion.div
      className="rounded-lg border border-slate-200 bg-white p-6 text-slate-900 shadow-lg transition-transform transition-shadow duration-300 cursor-pointer dark:border-slate-700 dark:bg-slate-800 dark:text-white"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(34,211,238,0.35)' }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-700 dark:text-cyan-100 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t) => (
          <span key={t} className="px-2 py-1 bg-cyan-500 rounded text-sm">{t}</span>
        ))}
      </div>
      {link && (
        <a
          href={link}
          className="inline-block text-cyan-300 hover:text-cyan-200 underline"
          target={isExternalLink ? '_blank' : undefined}
          rel={isExternalLink ? 'noopener noreferrer' : undefined}
        >
          Ver proyecto
        </a>
      )}
    </motion.div>
  );
}
