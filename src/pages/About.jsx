import {
  ArrowRight, ShieldCheck, Wrench, Eye, Headphones, Gauge, Leaf,
  Search, ClipboardCheck, PencilRuler, HardHat, MonitorCheck,
} from 'lucide-react';
import { images } from '../data/images';
import Reveal from '../components/Reveal';
import Label from '../components/Label';
import Button from '../components/Button';

const features = [
  { icon: ShieldCheck, title: 'Quality Products', text: 'High-quality solar components built for performance and longevity.' },
  { icon: Wrench, title: 'Expert Installation', text: 'Experienced team ensures safe, precise and professional installation.' },
  { icon: Eye, title: 'Transparent Guidance', text: 'Clear, honest advice so you understand your options before you invest.' },
  { icon: Headphones, title: 'Reliable Support', text: 'Ongoing support and maintenance to keep your system running smoothly.' },
  { icon: Gauge, title: 'Energy Efficiency', text: 'Systems designed to maximise generation and minimise waste.' },
  { icon: Leaf, title: 'Sustainable Solutions', text: 'Clean energy that reduces your carbon footprint and energy bills.' },
];

const timeline = [
  { icon: Search, title: 'Consultation', text: 'We understand your energy needs, goals and budget.' },
  { icon: ClipboardCheck, title: 'Site Assessment', text: 'Our team visits your site to assess roof, shading and feasibility.' },
  { icon: PencilRuler, title: 'System Design', text: 'We design a custom solar system tailored to your property.' },
  { icon: HardHat, title: 'Installation', text: 'Professional installation with quality components and safety standards.' },
  { icon: MonitorCheck, title: 'Monitoring & Support', text: 'Ongoing monitoring and support to ensure optimal performance.' },
];

export default function About() {
  return (
    <div className="bg-ivory pt-20">
      {/* ============ HERO ============ */}
      <section className="relative">
        <div className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden">
          <img src={images.aboutFull} alt="Solar panel installation team at work" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />
        </div>
        <div className="absolute bottom-8 left-0 right-0">
          <div className="max-w-container mx-auto px-5 sm:px-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-heading font-extrabold text-ivory tracking-tightest text-[2.5rem] sm:text-[4rem] lg:text-[5rem] leading-[0.95] max-w-3xl"
            >
              Building a cleaner<br />energy future.
            </motion.h1>
          </div>
        </div>
      </section>

      {/* ============ OUR STORY ============ */}
      <section className="py-20 lg:py-32">
        <div className="max-w-container mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <Label gold className="block mb-5">Our Story</Label>
              <h2 className="font-heading font-extrabold text-forest tracking-tightest text-[2.25rem] sm:text-[3rem] leading-[1.05]">
                About Evergreen Solar.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <Reveal>
                <div className="space-y-4 text-charcoal/75 leading-relaxed text-base">
                  <p>
                    Evergreen Solar provides solar energy systems for residential, commercial and industrial customers. We believe clean energy should be accessible, reliable and built to last.
                  </p>
                  <p>
                    From rooftop solar systems to hybrid and backup solutions, our team works closely with each customer to design, install and maintain solar systems that reduce energy costs and support a more sustainable future.
                  </p>
                  <p className="text-sm text-sage italic pt-2">
                    [ Company-specific details — history, certifications and achievements — are editable placeholders. ]
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="mt-8 aspect-[16/10] overflow-hidden">
                  <img src={images.aboutStory} alt="Solar installation team working on a rooftop" className="w-full h-full object-cover" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MISSION & VISION ============ */}
      <section className="py-20 bg-forest">
        <div className="max-w-container mx-auto px-5 sm:px-8">
          <div className="grid md:grid-cols-2 gap-px bg-ivory/10">
            <Reveal>
              <div className="bg-forest p-10 lg:p-14">
                <Label gold className="block mb-4">Our Mission</Label>
                <p className="font-heading text-2xl lg:text-3xl font-bold text-ivory tracking-tight leading-tight">
                  Make clean, reliable and affordable solar energy accessible to more people.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="bg-forest p-10 lg:p-14">
                <Label gold className="block mb-4">Our Vision</Label>
                <p className="font-heading text-2xl lg:text-3xl font-bold text-ivory tracking-tight leading-tight">
                  A future powered by clean, sustainable and dependable energy.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ WHY EVERGREEN ============ */}
      <section className="py-20 lg:py-32">
        <div className="max-w-container mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-10 mb-12">
            <div className="lg:col-span-5">
              <Label gold className="block mb-5">Why Evergreen</Label>
              <h2 className="font-heading font-extrabold text-forest tracking-tightest text-[2.25rem] sm:text-[3rem] leading-[1.05]">
                What sets us<br />apart.
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-forest/10">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 0.08}>
                <div className="bg-ivory p-7 h-full">
                  <span className="flex items-center justify-center w-10 h-10 bg-forest/5 text-forest mb-4">
                    <f.icon className="w-5 h-5" />
                  </span>
                  <h3 className="text-lg font-bold text-forest mb-2">{f.title}</h3>
                  <p className="text-sm text-charcoal/65 leading-relaxed">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ OUR APPROACH — VERTICAL TIMELINE ============ */}
      <section className="py-20 lg:py-32 bg-forest">
        <div className="max-w-container mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <Label gold className="block mb-5">Our Approach</Label>
              <h2 className="font-heading font-extrabold text-ivory tracking-tightest text-[2.25rem] sm:text-[3rem] leading-[1.05] mb-6">
                How we work.
              </h2>
              <p className="text-ivory/60 leading-relaxed max-w-sm">
                A clear, step-by-step approach to going solar — from first conversation to long-term support.
              </p>
            </div>
            <div className="lg:col-span-8">
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-5 top-0 bottom-0 w-px bg-ivory/15" />
                <div className="space-y-8">
                  {timeline.map((s, i) => (
                    <Reveal key={s.title} delay={i * 0.1}>
                      <div className="relative flex gap-6">
                        <span className="relative z-10 flex items-center justify-center w-10 h-10 bg-forest border border-gold/40 shrink-0">
                          <s.icon className="w-5 h-5 text-gold" />
                        </span>
                        <div className="pt-1.5">
                          <p className="label text-gold mb-1">Step {i + 1}</p>
                          <h3 className="text-xl font-bold text-ivory mb-1">{s.title}</h3>
                          <p className="text-sm text-ivory/60 leading-relaxed">{s.text}</p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="py-20 lg:py-32">
        <div className="max-w-container mx-auto px-5 sm:px-8">
          <div className="border-t border-forest/15 pt-16">
            <div className="grid lg:grid-cols-2 gap-8 items-end">
              <h2 className="font-heading font-extrabold text-forest tracking-tightest text-[2.25rem] sm:text-[3.5rem] leading-[0.95]">
                Let's build a cleaner<br />future together.
              </h2>
              <Button to="/contact" variant="primary" size="lg" iconRight={ArrowRight} className="lg:justify-self-end">
                Talk to Our Solar Experts
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { motion } from 'framer-motion';
