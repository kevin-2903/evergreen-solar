import Reveal from './Reveal';

// Reusable section heading with eyebrow, title, and optional subtitle.
// align: 'left' | 'center'

export default function SectionTitle({ eyebrow, title, subtitle, align = 'center', light = false, className = '' }) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  const titleColor = light ? 'text-white' : 'text-forest';
  const subColor = light ? 'text-cream/80' : 'text-charcoal/70';

  return (
    <div className={`${alignClass} max-w-3xl ${className}`}>
      {eyebrow && (
        <Reveal>
          <span
            className={`inline-block text-xs font-bold uppercase tracking-[0.18em] mb-3 ${
              light ? 'text-gold' : 'text-gold-600'
            }`}
          >
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className={`text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold leading-tight ${titleColor}`}>
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className={`mt-4 text-base sm:text-lg leading-relaxed ${subColor}`}>{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
