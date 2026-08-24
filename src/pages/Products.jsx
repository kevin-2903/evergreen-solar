import { Headphones } from 'lucide-react';
import { products } from '../data/products';
import { images } from '../data/images';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import Reveal from '../components/Reveal';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';

export default function Products() {
  return (
    <>
      <PageHero
        eyebrow="Our Products"
        title="Solar Solutions Designed for Your Energy Needs"
        subtitle="From rooftop systems to complete energy solutions, discover technology designed for efficient and reliable solar power."
        image={images.productOnGrid}
      />

      {/* Products grid */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <Reveal key={product.id} delay={(i % 3) * 0.08}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Product specs section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <SectionTitle eyebrow="Specifications" title="Technology You Can Rely On" subtitle="Key specifications for our core product categories. Detailed specs available on enquiry." />
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {products.slice(0, 4).map((product, i) => (
              <Reveal key={product.id} delay={(i % 2) * 0.1}>
                <div className="bg-cream rounded-2xl p-6 sm:p-7 shadow-soft">
                  <div className="flex items-center gap-4 mb-5">
                    <img src={product.image} alt={product.name} className="w-20 h-20 rounded-xl object-cover shrink-0" />
                    <h3 className="text-xl font-bold text-forest">{product.name}</h3>
                  </div>
                  <dl className="grid grid-cols-2 gap-4">
                    {product.specs.map((spec) => (
                      <div key={spec.label} className="border-l-2 border-gold/40 pl-3">
                        <dt className="text-xs text-charcoal/50 uppercase tracking-wide">{spec.label}</dt>
                        <dd className="text-sm font-semibold text-forest mt-0.5">{spec.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="enquire-cta" className="py-16 lg:py-24 bg-cream">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="rounded-3xl bg-forest p-10 sm:p-14 text-center shadow-card">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-balance">
                Not Sure Which Solution Is Right for You?
              </h2>
              <p className="mt-4 text-cream/85 max-w-xl mx-auto">
                Our solar experts will help you choose the best system for your energy needs and budget.
              </p>
              <Button to="/contact" variant="primary" size="lg" className="mt-8" icon={Headphones}>
                Talk to an Expert
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
