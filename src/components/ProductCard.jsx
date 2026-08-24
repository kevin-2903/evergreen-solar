import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';
import { formatPrice } from '../data/products';

// Editorial product card — ecommerce style, minimal UI, strong photography.
export default function ProductCard({ product, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="group flex flex-col bg-ivory border border-forest/8 hover:border-forest/20 transition-colors"
    >
      {/* Image */}
      <Link to={`/products/${product.id}`} className="relative block overflow-hidden aspect-[4/3] bg-forest/5">
        <img
          src={product.image}
          alt={`${product.name} — ${product.category}`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.available ? (
          <span className="absolute top-3 left-3 px-2.5 py-1 text-[0.65rem] font-semibold tracking-wide uppercase bg-forest text-ivory">
            In Stock
          </span>
        ) : (
          <span className="absolute top-3 left-3 px-2.5 py-1 text-[0.65rem] font-semibold tracking-wide uppercase bg-charcoal text-ivory/70">
            Out of Stock
          </span>
        )}
      </Link>

      {/* Info */}
      <div className="flex flex-col flex-1 p-5">
        <p className="label text-gold mb-1">{product.category}</p>
        <p className="text-xs text-sage mb-2">{product.brand}</p>
        <Link to={`/products/${product.id}`}>
          <h3 className="text-base font-bold text-forest leading-snug group-hover:text-gold-600 transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Spec line */}
        <div className="flex flex-wrap gap-x-3 gap-y-1 mt-3 text-xs text-charcoal/60">
          {product.wattage !== '—' && <span>{product.wattage}</span>}
          {product.efficiency !== '—' && <span>· {product.efficiency}</span>}
          <span>· {product.warranty}</span>
        </div>

        {/* Price + actions */}
        <div className="mt-auto pt-4 flex items-end justify-between">
          <div>
            <p className="text-xs text-sage">Price</p>
            <p className="text-xl font-extrabold text-forest font-heading">{formatPrice(product.price)}</p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <Link to={`/products/${product.id}`} className="text-xs font-semibold text-charcoal/60 hover:text-forest transition-colors gold-line">
              View Details
            </Link>
            {product.available && (
              <Link to={`/products/${product.id}/buy`} className="inline-flex items-center gap-1.5 px-4 py-2 bg-gold text-forest text-xs font-bold tracking-wide hover:bg-gold-500 transition-colors">
                Buy Now <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
