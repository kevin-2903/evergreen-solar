import { Star } from 'lucide-react';
import Reveal from './Reveal';

export default function TestimonialCard({ testimonial, index = 0 }) {
  return (
    <Reveal delay={index * 0.1} className="h-full">
      <figure className="h-full flex flex-col border-l-2 border-gold/30 pl-5 py-2">
        <div className="flex gap-1 mb-3">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
          ))}
        </div>
        <blockquote className="text-charcoal/80 leading-relaxed flex-1 text-[0.95rem]">
          “{testimonial.text}”
        </blockquote>
        <figcaption className="mt-4 pt-4 border-t border-forest/10">
          <p className="font-bold text-forest text-sm">{testimonial.name}</p>
          <p className="text-xs text-sage mt-0.5">{testimonial.location}</p>
          <p className="text-xs text-gold font-semibold mt-1">{testimonial.propertyType}</p>
        </figcaption>
      </figure>
    </Reveal>
  );
}
