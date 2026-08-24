import { motion } from 'framer-motion';
import Reveal from './Reveal';

// Reusable cinematic hero for interior pages.
export default function PageHero({ eyebrow, title, subtitle, image, children }) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest/90 via-forest/75 to-forest/50" />
      </div>
      <div className="relative max-w-container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          {eyebrow && (
            <Reveal>
              <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-gold mb-3">
                {eyebrow}
              </span>
            </Reveal>
          )}
          <Reveal delay={0.05}>
            <motion.h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight text-balance">
              {title}
            </motion.h1>
          </Reveal>
          {subtitle && (
            <Reveal delay={0.1}>
              <p className="mt-5 text-lg text-cream/85 leading-relaxed max-w-xl">{subtitle}</p>
            </Reveal>
          )}
          {children && (
            <Reveal delay={0.15}>
              <div className="mt-8">{children}</div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
