import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, ArrowDown, Calculator, PiggyBank, Leaf, Battery, Check,
} from 'lucide-react';
import { images } from '../data/images';
import { products, productCategories, formatPrice } from '../data/products';
import { projects } from '../data/projects';
import { testimonials } from '../data/testimonials';
import AnimatedCounter from '../components/AnimatedCounter';
import Reveal from '../components/Reveal';
import Label from '../components/Label';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';
import TestimonialCard from '../components/TestimonialCard';
import { useState } from 'react';

const heroStrip = ['SOLAR PANELS', 'INVERTERS', 'BATTERIES', 'ROOFTOP SYSTEMS', 'ENERGY SOLUTIONS'];

const introStats = [
  { num: '01', label: 'Smart Energy' },
  { num: '02', label: 'Clean Power' },
  { num: '03', label: 'Long-Term Value' },
];

const whyItems = [
  { icon: PiggyBank, title: 'Reduce Electricity Costs', text: 'Generate your own clean electricity and reduce dependence on conventional power.' },
  { icon: Leaf, title: 'Clean Energy', text: 'Harness the power of the sun and reduce your environmental impact.' },
  { icon: PiggyBank, title: 'Long-Term Savings', text: 'Turn your rooftop into a long-term energy investment that pays for itself.' },
  { icon: Battery, title: 'Energy Independence', text: 'Take greater control of your energy consumption and costs.' },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All');
  const featuredProducts = products.filter((p) => activeCategory === 'All' ? true : p.category === activeCategory).slice(0, 6);
  const featuredProject = projects.find((p) => p.featured) || projects[0];
  const otherProjects = projects.filter((p) => p.id !== featuredProject.id).slice(0, 4);

  return (
    <>
      {/* ============ EDITORIAL HERO ============ */}
      <section className="relative bg-ivory pt-28 lg:pt-32 pb-0 overflow-hidden">
        <div className="max-w-container mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[85vh]">
            {/* Left: content */}
            <div className="lg:col-span-6 relative z-10">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <Label gold className="block mb-5">Evergreen Solar / Clean Energy Systems</Label>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-heading font-extrabold text-forest tracking-tightest text-[3rem] sm:text-[4rem] lg:text-[5rem] leading-[0.95]"
              >
                Power Your<br />Future.<br /><span className="text-gold">Naturally.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="mt-6 text-lg text-charcoal/70 leading-relaxed max-w-md"
              >
                Reliable solar systems designed for homes, businesses and industries.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="mt-8 flex flex-col sm:flex-row gap-3"
              >
                <Button to="/products" variant="dark" size="lg" iconRight={ArrowRight}>Explore Solar Solutions</Button>
                <Button to="/solar-calculator" variant="outline" size="lg" icon={Calculator}>Calculate Your Savings</Button>
              </motion.div>
            </div>

            {/* Right: image with floating panel */}
            <div className="lg:col-span-6 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden"
              >
                <img src={images.heroHome} alt="Solar panel installation on a rooftop" className="w-full h-full object-cover" />
              </motion.div>

              {/* Floating info panel */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute bottom-6 left-0 lg:left-auto lg:right-0 bg-forest p-5 max-w-[200px]"
              >
                <p className="label text-gold mb-2">Solar Potential</p>
                <div className="flex items-center gap-2 text-ivory">
                  <ArrowDown className="w-4 h-4 text-gold" />
                  <span className="text-sm font-semibold">Lower Energy Costs</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ HERO TRANSITION STRIP ============ */}
      <section className="bg-forest py-5 overflow-hidden">
        <div className="max-w-container mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between flex-wrap gap-x-6 gap-y-2">
            {heroStrip.map((item, i) => (
              <div key={item} className="flex items-center gap-6">
                <span className="text-xs font-bold tracking-label text-ivory/60 uppercase">{item}</span>
                {i < heroStrip.length - 1 && <span className="w-1 h-1 rounded-full bg-gold hidden sm:block" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ INTRODUCTION ============ */}
      <section className="bg-ivory py-20 lg:py-32">
        <div className="max-w-container mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left text */}
            <div className="lg:col-span-6 lg:sticky lg:top-28">
              <Label gold className="block mb-5">Why Evergreen</Label>
              <Reveal>
                <h2 className="font-heading font-extrabold text-forest tracking-tightest text-[2.5rem] sm:text-[3.5rem] leading-[1]">
                  Energy from the sun.<br />Designed for your<br />future.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 text-base text-charcoal/70 leading-relaxed max-w-md">
                  Evergreen Solar builds solar energy systems for homes, businesses and industries. We combine quality products, expert installation and ongoing support to deliver clean energy that lasts — reducing your electricity costs and your environmental impact for decades to come.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <Button to="/about" variant="link" size="md" iconRight={ArrowRight} className="mt-6">Learn More About Us</Button>
              </Reveal>
            </div>

            {/* Right: vertical image + stats */}
            <div className="lg:col-span-6">
              <Reveal>
                <div className="aspect-[3/4] overflow-hidden mb-8">
                  <img src={images.introVertical} alt="Technician carrying a solar panel on a rooftop" className="w-full h-full object-cover" />
                </div>
              </Reveal>
              <div className="grid grid-cols-3 gap-4">
                {introStats.map((s, i) => (
                  <Reveal key={s.num} delay={i * 0.08}>
                    <div className="border-t border-forest/15 pt-3">
                      <p className="text-2xl font-extrabold text-gold font-heading">{s.num}</p>
                      <p className="text-xs text-charcoal/60 mt-1 leading-snug">{s.label}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PRODUCT SHOWCASE ============ */}
      <section className="bg-forest py-20 lg:py-32">
        <div className="max-w-container mx-auto px-5 sm:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <Label gold className="block mb-4">Solar Equipment</Label>
              <h2 className="font-heading font-extrabold text-ivory tracking-tightest text-[2.5rem] sm:text-[3.5rem] leading-[1]">
                Solar Equipment,<br />Chosen for Performance.
              </h2>
              <p className="mt-4 text-ivory/60 max-w-md">
                Explore the solar equipment and energy systems available from Evergreen Solar.
              </p>
            </div>
            <Button to="/products" variant="primary" size="md" iconRight={ArrowRight}>View All Products</Button>
          </div>

          {/* Category navigation */}
          <div className="flex gap-1 overflow-x-auto no-scrollbar mb-8 border-b border-ivory/10">
            {productCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-3 text-sm font-semibold whitespace-nowrap transition-colors border-b-2 -mb-px ${
                  activeCategory === cat ? 'text-gold border-gold' : 'text-ivory/50 border-transparent hover:text-ivory/80'
                }`}
              >
                {cat === 'All' ? 'ALL' : cat.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredProducts.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY SOLAR ============ */}
      <section className="bg-ivory py-20 lg:py-32">
        <div className="max-w-container mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <Label gold className="block mb-5">Why Go Solar</Label>
              <h2 className="font-heading font-extrabold text-forest tracking-tightest text-[2.25rem] sm:text-[3rem] leading-[1.05]">
                Why make the switch?
              </h2>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-forest/10">
              {whyItems.map((item, i) => (
                <Reveal key={item.title} delay={(i % 2) * 0.08}>
                  <div className="bg-ivory p-7 h-full">
                    <span className="flex items-center justify-center w-10 h-10 bg-forest/5 text-forest mb-4">
                      <item.icon className="w-5 h-5" />
                    </span>
                    <h3 className="text-lg font-bold text-forest mb-2">{item.title}</h3>
                    <p className="text-sm text-charcoal/65 leading-relaxed">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ FEATURED PROJECT ============ */}
      <section className="bg-forest py-20 lg:py-32">
        <div className="max-w-container mx-auto px-5 sm:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <Label gold className="block mb-4">Featured Work</Label>
              <h2 className="font-heading font-extrabold text-ivory tracking-tightest text-[2.5rem] sm:text-[3.5rem] leading-[1]">
                Real installations.<br />Real impact.
              </h2>
            </div>
            <Button to="/projects" variant="outlineLight" size="md" iconRight={ArrowRight}>View All Projects</Button>
          </div>

          {/* Featured project — large */}
          <Reveal>
            <div className="grid lg:grid-cols-12 gap-6 mb-6">
              <div className="lg:col-span-8 relative overflow-hidden aspect-[16/10] group">
                <img src={featuredProject.image} alt={`${featuredProject.name} solar installation`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <Label gold className="block mb-2">{featuredProject.category}</Label>
                  <h3 className="text-3xl font-extrabold text-ivory font-heading tracking-tight">{featuredProject.name}</h3>
                  <div className="flex items-center gap-3 mt-2 text-sm text-ivory/70">
                    <span>{featuredProject.capacity}</span>
                    <span className="w-1 h-1 rounded-full bg-gold" />
                    <span>{featuredProject.location}</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 flex flex-col justify-center p-6 lg:p-8 bg-charcoal/30">
                <Label gold className="mb-4">Project Details</Label>
                <p className="text-ivory/70 text-sm leading-relaxed mb-6">{featuredProject.description}</p>
                <div className="space-y-3">
                  <div>
                    <p className="label text-ivory/40 mb-1">System Type</p>
                    <p className="text-sm text-ivory">{featuredProject.systemType}</p>
                  </div>
                  <div>
                    <p className="label text-ivory/40 mb-1">Capacity</p>
                    <p className="text-sm text-ivory">{featuredProject.capacity}</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Smaller projects — asymmetric grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {otherProjects.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.08}>
                <Link to="/projects" className="group block relative overflow-hidden aspect-square">
                  <img src={p.image} alt={`${p.name} solar installation`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <p className="label text-gold mb-1">{p.category}</p>
                    <p className="text-sm font-bold text-ivory">{p.name}</p>
                    <p className="text-xs text-ivory/60 mt-0.5">{p.capacity}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CALCULATOR CTA ============ */}
      <section className="bg-ivory py-20 lg:py-32">
        <div className="max-w-container mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <Label gold className="block mb-5">Solar Calculator</Label>
              <h2 className="font-heading font-extrabold text-forest tracking-tightest text-[2.5rem] sm:text-[3.5rem] leading-[1]">
                How much can<br />you save with<br />solar?
              </h2>
              <p className="mt-5 text-charcoal/70 leading-relaxed max-w-md">
                Find out how much solar power your property may need and estimate your potential energy savings — in under a minute.
              </p>
              <Button to="/solar-calculator" variant="primary" size="lg" className="mt-8" icon={Calculator}>
                Calculate Your Savings
              </Button>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={images.calculatorBg} alt="Solar panels at sunrise" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-forest/20" />
            </div>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="bg-forest py-20 lg:py-32">
        <div className="max-w-container mx-auto px-5 sm:px-8">
          <Label gold className="block mb-5">Testimonials</Label>
          <h2 className="font-heading font-extrabold text-ivory tracking-tightest text-[2.25rem] sm:text-[3rem] leading-[1.05] mb-12">
            What our customers say.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} testimonial={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="bg-ivory py-20 lg:py-32">
        <div className="max-w-container mx-auto px-5 sm:px-8">
          <div className="border-t border-forest/15 pt-16">
            <div className="grid lg:grid-cols-2 gap-8 items-end">
              <div>
                <h2 className="font-heading font-extrabold text-forest tracking-tightest text-[2.5rem] sm:text-[4rem] leading-[0.95]">
                  Ready to switch<br />to solar?
                </h2>
                <p className="mt-5 text-charcoal/70 leading-relaxed max-w-md">
                  Let's build a cleaner, smarter and more energy-efficient future together.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
                <Button to="/contact" variant="primary" size="lg" iconRight={ArrowRight}>Get a Free Quote</Button>
                <Button to="/contact" variant="outline" size="lg">Contact Us</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
