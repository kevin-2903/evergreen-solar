import { motion } from 'framer-motion';

// Editorial project card — for project gallery grid.
export default function ProjectCard({ project, onClick, index = 0, large = false }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      whileHover={{ y: -4 }}
      className={`group relative block overflow-hidden text-left bg-forest ${large ? 'col-span-2 row-span-2 min-h-[500px]' : 'min-h-[320px]'}`}
    >
      <img
        src={project.image}
        alt={`${project.name} — ${project.category} solar installation`}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />

      <div className="relative h-full flex flex-col justify-end p-5 sm:p-6">
        <p className="label text-gold mb-2">{project.category}</p>
        <h3 className={`font-heading font-bold text-ivory tracking-tight ${large ? 'text-2xl sm:text-3xl' : 'text-lg'}`}>
          {project.name}
        </h3>
        <div className="flex items-center gap-3 mt-2 text-sm text-ivory/70">
          <span>{project.capacity}</span>
          <span className="w-1 h-1 rounded-full bg-gold" />
          <span>{project.location}</span>
        </div>
      </div>
    </motion.button>
  );
}
