import { motion } from 'framer-motion';
import { Calculator, Info } from 'lucide-react';
import { images } from '../data/images';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import SolarCalculator from '../components/SolarCalculator/SolarCalculator';

export default function SolarCalculatorPage() {
  return (
    <>
      <PageHero
        eyebrow="Solar Calculator"
        title="Calculate Your Solar Savings"
        subtitle="Find out how much solar power your property may need and estimate your potential energy savings in three simple steps."
        image={images.calculatorCta}
      />

      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="bg-white rounded-3xl shadow-card p-6 sm:p-8 lg:p-10">
              <SolarCalculator />
            </div>
          </Reveal>

          {/* Disclaimer */}
          <Reveal delay={0.1}>
            <div className="mt-6 flex gap-3 items-start rounded-2xl bg-gold/10 border border-gold/30 p-5">
              <Info className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
              <p className="text-sm text-charcoal/70 leading-relaxed">
                <strong className="text-forest">Disclaimer:</strong> Estimates are indicative only. Actual system size,
                cost, generation, savings and payback period depend on location, electricity tariff, roof conditions,
                system components, installation requirements and applicable policies/subsidies.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
