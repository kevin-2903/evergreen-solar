import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Zap, Settings } from 'lucide-react';
import { projects, projectFilters } from '../data/projects';
import { images } from '../data/images';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import Reveal from '../components/Reveal';
import Button from '../components/Button';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <PageHero
        eyebrow="Our Projects"
        title="Powering Real Places With Solar"
        subtitle="A showcase of solar installations across residential, commercial and industrial properties."
        image={images.heroProjects}
      />

      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          {/* Filter buttons */}
          <Reveal>
            <div className="flex flex-wrap justify-center gap-2.5 mb-12">
              {projectFilters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    filter === f
                      ? 'bg-forest text-white shadow-soft'
                      : 'bg-white text-forest hover:bg-forest/10 shadow-soft'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Project grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                >
                  <ProjectCard project={p} onClick={() => setSelected(p)} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <p className="text-center text-sm text-charcoal/50 mt-10 italic">
            Projects shown are sample / illustrative data and can be replaced with real project information.
          </p>
        </div>
      </section>

      {/* Project detail modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[60] bg-forest/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-card"
            >
              <div className="relative h-64 sm:h-72 overflow-hidden rounded-t-3xl">
                <img src={selected.image} alt={`${selected.name} solar project`} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/60 to-transparent" />
                <button
                  onClick={() => setSelected(null)}
                  aria-label="Close"
                  className="absolute top-4 right-4 flex items-center justify-center w-9 h-9 rounded-full glass text-forest hover:bg-gold transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gold text-forest">{selected.category}</span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold glass text-forest">{selected.capacity}</span>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-extrabold text-forest">{selected.name}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5">
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-5 h-5 text-gold-600 shrink-0" />
                    <div>
                      <p className="text-xs text-charcoal/50 uppercase tracking-wide">Location</p>
                      <p className="text-sm font-semibold text-forest">{selected.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Zap className="w-5 h-5 text-gold-600 shrink-0" />
                    <div>
                      <p className="text-xs text-charcoal/50 uppercase tracking-wide">Capacity</p>
                      <p className="text-sm font-semibold text-forest">{selected.capacity}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Settings className="w-5 h-5 text-gold-600 shrink-0" />
                    <div>
                      <p className="text-xs text-charcoal/50 uppercase tracking-wide">System Type</p>
                      <p className="text-sm font-semibold text-forest">{selected.systemType}</p>
                    </div>
                  </div>
                </div>
                <p className="mt-5 text-charcoal/75 leading-relaxed">{selected.description}</p>
                <Button to="/contact" variant="primary" size="md" className="mt-6 w-full sm:w-auto">
                  Request a Similar Installation
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
