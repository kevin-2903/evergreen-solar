import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft, Check, Minus, Plus, ShoppingBag, Mail, Shield, Wrench, Truck,
} from 'lucide-react';
import { getProductById, getRelatedProducts, formatPrice } from '../data/products';
import Button from '../components/Button';
import Label from '../components/Label';
import ProductCard from '../components/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);
  const [activeImage, setActiveImage] = useState(0);
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ivory">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-forest mb-4">Product Not Found</h1>
          <Button to="/products" variant="dark" size="md">Back to Products</Button>
        </div>
      </div>
    );
  }

  const related = getRelatedProducts(product, 4);
  const gallery = product.gallery || [product.image];

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'specs', label: 'Specifications' },
    { id: 'warranty', label: 'Warranty' },
    { id: 'installation', label: 'Installation' },
  ];

  return (
    <div className="bg-ivory pt-20">
      {/* Breadcrumb */}
      <div className="max-w-container mx-auto px-5 sm:px-8 pt-6">
        <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-sm text-sage hover:text-forest transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
      </div>

      {/* Main product section */}
      <section className="max-w-container mx-auto px-5 sm:px-8 py-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Image gallery */}
          <div>
            <motion.div
              key={activeImage}
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-square bg-forest/5 overflow-hidden"
            >
              <img src={gallery[activeImage]} alt={`${product.name} — view ${activeImage + 1}`} className="w-full h-full object-cover" />
              {!product.available && (
                <span className="absolute top-4 right-4 px-3 py-1.5 text-xs font-semibold bg-charcoal text-ivory/70">Out of Stock</span>
              )}
            </motion.div>
            {gallery.length > 1 && (
              <div className="flex gap-2 mt-3">
                {gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`w-20 h-20 overflow-hidden border-2 transition-colors ${activeImage === i ? 'border-gold' : 'border-forest/10 hover:border-forest/30'}`}
                  >
                    <img src={img} alt={`${product.name} thumbnail ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product info */}
          <div className="flex flex-col">
            <Label gold className="mb-2">{product.category}</Label>
            <p className="text-sm text-sage mb-2">{product.brand}</p>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-forest tracking-tight">{product.name}</h1>

            {/* Price */}
            <div className="mt-6 pb-6 border-b border-forest/10">
              <p className="text-xs text-sage mb-1">Price</p>
              <p className="text-3xl font-extrabold text-forest font-heading">{formatPrice(product.price)}</p>
              <p className="text-xs text-sage mt-1">Prices inclusive of all taxes</p>
            </div>

            {/* Quick specs */}
            <div className="grid grid-cols-3 gap-4 py-5 border-b border-forest/10">
              {[
                { label: 'Power', value: product.wattage },
                { label: 'Efficiency', value: product.efficiency },
                { label: 'Warranty', value: product.warranty },
              ].map((s) => (
                <div key={s.label}>
                  <p className="label text-sage mb-1">{s.label}</p>
                  <p className="text-sm font-bold text-forest">{s.value}</p>
                </div>
              ))}
            </div>

            {/* Features */}
            <ul className="py-5 space-y-2 border-b border-forest/10">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-charcoal/75">
                  <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" /> {f}
                </li>
              ))}
            </ul>

            {/* Quantity + actions */}
            <div className="pt-6 flex items-center gap-4">
              <div className="flex items-center border border-forest/15">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="p-3 hover:bg-forest/5 transition-colors" aria-label="Decrease quantity">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center text-sm font-bold">{qty}</span>
                <button onClick={() => setQty((q) => q + 1)} className="p-3 hover:bg-forest/5 transition-colors" aria-label="Increase quantity">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              {product.available ? (
                <Link to={`/products/${product.id}/buy?qty=${qty}`} className="flex-1">
                  <Button variant="primary" size="lg" className="w-full" iconRight={ShoppingBag}>
                    Buy Now — {formatPrice(product.price * qty)}
                  </Button>
                </Link>
              ) : (
                <Button variant="dark" size="lg" className="flex-1" disabled>
                  Out of Stock
                </Button>
              )}
            </div>

            {/* Secondary actions */}
            <div className="mt-3">
              <Button to="/contact" variant="link" size="sm">Add to Enquiry</Button>
            </div>

            {/* Trust badges */}
            <div className="mt-6 pt-6 border-t border-forest/10 grid grid-cols-3 gap-4">
              {[
                { icon: Shield, label: 'Genuine Products' },
                { icon: Truck, label: 'Fast Delivery' },
                { icon: Wrench, label: 'Expert Support' },
              ].map((t) => (
                <div key={t.label} className="flex flex-col items-center text-center gap-1.5">
                  <t.icon className="w-5 h-5 text-gold" />
                  <span className="text-xs text-sage">{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tabs section */}
      <section className="max-w-container mx-auto px-5 sm:px-8 py-12 border-t border-forest/10">
        <div className="flex gap-6 border-b border-forest/10 mb-6 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3 text-sm font-semibold whitespace-nowrap transition-colors ${
                activeTab === tab.id ? 'text-forest border-b-2 border-gold' : 'text-sage hover:text-forest'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="max-w-3xl">
          {activeTab === 'description' && (
            <p className="text-charcoal/75 leading-relaxed">{product.description}</p>
          )}
          {activeTab === 'specs' && (
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
              {product.specs.map((spec) => (
                <div key={spec.label} className="flex justify-between py-3 border-b border-forest/10">
                  <dt className="text-sm text-sage">{spec.label}</dt>
                  <dd className="text-sm font-semibold text-forest">{spec.value}</dd>
                </div>
              ))}
            </dl>
          )}
          {activeTab === 'warranty' && (
            <div className="space-y-3 text-charcoal/75">
              <p><strong className="text-forest">Warranty:</strong> {product.warranty}</p>
              <p>This product is covered by the manufacturer's warranty against defects in materials and workmanship. Warranty claims are subject to the manufacturer's terms and conditions.</p>
            </div>
          )}
          {activeTab === 'installation' && (
            <div className="space-y-3 text-charcoal/75">
              <p>Evergreen Solar provides professional installation services for all our products. Our certified technicians ensure safe, compliant and efficient setup.</p>
              <p><strong className="text-forest">Installation support includes:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Site assessment and feasibility check</li>
                <li>Professional mounting and wiring</li>
                <li>System testing and commissioning</li>
                <li>Post-installation support and monitoring setup</li>
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="max-w-container mx-auto px-5 sm:px-8 py-12 border-t border-forest/10">
          <h2 className="text-2xl font-extrabold text-forest tracking-tight mb-8">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
