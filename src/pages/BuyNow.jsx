import { useState } from 'react';
import { useParams, useSearchParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, ArrowRight, Minus, Plus, Check, CheckCircle2, Loader2, Lock,
} from 'lucide-react';
import { getProductById, formatPrice } from '../data/products';
import Button from '../components/Button';
import Label from '../components/Label';

// Buy Now / order page — frontend-only with clean success state.
// Structure: replace handleSubmit with a real payment/order API later.
// Do NOT pretend payment has been completed — the success state confirms
// the order was "placed", not "paid".

export default function BuyNow() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const product = getProductById(id);
  const initialQty = Math.max(1, parseInt(searchParams.get('qty') || '1', 10));

  const [qty, setQty] = useState(initialQty);
  const [status, setStatus] = useState('idle'); // idle | loading | success
  const [form, setForm] = useState({
    name: '', phone: '', email: '', address: '', city: '', pincode: '',
  });
  const [errors, setErrors] = useState({});

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

  const subtotal = product.price * qty;
  const installationEstimate = Math.round(subtotal * 0.05);
  const total = subtotal + installationEstimate;

  const handleChange = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    setErrors((er) => ({ ...er, [field]: undefined }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Required';
    if (!form.phone.trim() || !/^[+\d\s-]{8,}$/.test(form.phone)) e.phone = 'Valid phone required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email required';
    if (!form.address.trim()) e.address = 'Required';
    if (!form.city.trim()) e.city = 'Required';
    if (!form.pincode.trim() || !/^\d{6}$/.test(form.pincode)) e.pincode = 'Valid 6-digit pincode';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    // Placeholder — connect to payment/order API here.
    // Do NOT mark as "paid" — this confirms the order was "placed".
    await new Promise((r) => setTimeout(r, 1400));
    setStatus('success');
  };

  if (status === 'success') {
    return (
      <div className="bg-ivory pt-24 min-h-screen">
        <div className="max-w-2xl mx-auto px-5 sm:px-8 py-16">
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
            <div className="flex justify-center mb-5">
              <span className="flex items-center justify-center w-16 h-16 rounded-full bg-gold/10">
                <CheckCircle2 className="w-8 h-8 text-gold" />
              </span>
            </div>
            <h1 className="text-3xl font-extrabold text-forest tracking-tight">Order Placed</h1>
            <p className="text-charcoal/60 mt-3 max-w-sm mx-auto">
              Your order has been placed successfully. Our team will contact you shortly to confirm details and arrange payment and delivery.
            </p>
            <div className="mt-8 border border-forest/10 p-5 text-left bg-white">
              <div className="flex items-center gap-4">
                <img src={product.image} alt={product.name} className="w-16 h-16 object-cover" />
                <div className="flex-1">
                  <p className="font-bold text-forest text-sm">{product.name}</p>
                  <p className="text-xs text-sage">Qty: {qty} · {formatPrice(total)}</p>
                </div>
              </div>
            </div>
            <div className="mt-8 flex gap-3 justify-center">
              <Button to="/products" variant="dark" size="md">Continue Shopping</Button>
              <Button to="/" variant="link" size="md">Back to Home</Button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  const inputBase = 'w-full px-3 py-3 bg-white border text-sm text-charcoal placeholder:text-charcoal/35 focus:outline-none transition-colors';
  const borderClass = (field) => errors[field] ? 'border-red-400 focus:border-red-400' : 'border-forest/15 focus:border-gold';

  return (
    <div className="bg-ivory pt-20 min-h-screen">
      <div className="max-w-container mx-auto px-5 sm:px-8 pt-6">
        <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-sm text-sage hover:text-forest transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
      </div>

      <div className="max-w-container mx-auto px-5 sm:px-8 py-10">
        <h1 className="text-3xl font-extrabold text-forest tracking-tight mb-1">Place Your Order</h1>
        <p className="text-sm text-sage mb-8">Review your order and enter delivery details to proceed.</p>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left: product + form */}
          <div className="lg:col-span-3 space-y-8">
            {/* Product summary */}
            <div className="flex gap-4 border border-forest/10 p-4 bg-white">
              <img src={product.image} alt={product.name} className="w-24 h-24 object-cover shrink-0" />
              <div className="flex-1 min-w-0">
                <Label gold className="mb-1">{product.category}</Label>
                <h3 className="font-bold text-forest text-sm leading-snug">{product.name}</h3>
                <p className="text-xs text-sage mt-1">{product.brand}</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <p className="font-extrabold text-forest font-heading">{formatPrice(product.price)}</p>
                <div className="flex items-center border border-forest/15">
                  <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="p-1.5 hover:bg-forest/5" aria-label="Decrease">
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-10 text-center text-sm font-bold">{qty}</span>
                  <button onClick={() => setQty((q) => q + 1)} className="p-1.5 hover:bg-forest/5" aria-label="Increase">
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Delivery form */}
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <h2 className="text-lg font-bold text-forest">Delivery Details</h2>
              <div className="grid sm:grid-cols-2 gap-x-5 gap-y-4">
                <div>
                  <label className="label text-sage block mb-1.5">Full Name *</label>
                  <input type="text" value={form.name} onChange={handleChange('name')} className={`${inputBase} ${borderClass('name')}`} placeholder="Your name" />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="label text-sage block mb-1.5">Phone *</label>
                  <input type="tel" value={form.phone} onChange={handleChange('phone')} className={`${inputBase} ${borderClass('phone')}`} placeholder="+91 ..." />
                  {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label className="label text-sage block mb-1.5">Email *</label>
                  <input type="email" value={form.email} onChange={handleChange('email')} className={`${inputBase} ${borderClass('email')}`} placeholder="you@example.com" />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="label text-sage block mb-1.5">City *</label>
                  <input type="text" value={form.city} onChange={handleChange('city')} className={`${inputBase} ${borderClass('city')}`} placeholder="Your city" />
                  {errors.city && <p className="text-xs text-red-500 mt-1">{errors.city}</p>}
                </div>
              </div>
              <div>
                <label className="label text-sage block mb-1.5">Address *</label>
                <textarea rows={2} value={form.address} onChange={handleChange('address')} className={`${inputBase} ${borderClass('address')}`} placeholder="Street address, landmark..." />
                {errors.address && <p className="text-xs text-red-500 mt-1">{errors.address}</p>}
              </div>
              <div>
                <label className="label text-sage block mb-1.5">Pincode *</label>
                <input type="text" maxLength={6} value={form.pincode} onChange={handleChange('pincode')} className={`${inputBase} ${borderClass('pincode')} max-w-[200px]`} placeholder="6-digit pincode" />
                {errors.pincode && <p className="text-xs text-red-500 mt-1">{errors.pincode}</p>}
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full lg:hidden" disabled={status === 'loading'}>
                {status === 'loading' ? <><Loader2 className="w-4 h-4 animate-spin" /> Placing Order...</> : <>Place Order — {formatPrice(total)}</>}
              </Button>
            </form>
          </div>

          {/* Right: order summary */}
          <div className="lg:col-span-2">
            <div className="border border-forest/10 bg-white p-6 sticky top-24">
              <h2 className="text-lg font-bold text-forest mb-5">Order Summary</h2>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-sage">Product ({qty} × {formatPrice(product.price)})</dt>
                  <dd className="font-semibold text-forest">{formatPrice(subtotal)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sage">Installation (est.)</dt>
                  <dd className="font-semibold text-forest">{formatPrice(installationEstimate)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sage">Delivery</dt>
                  <dd className="font-semibold text-gold-600">Calculated on confirmation</dd>
                </div>
                <div className="flex justify-between pt-3 border-t border-forest/10">
                  <dt className="font-bold text-forest">Estimated Total</dt>
                  <dd className="font-extrabold text-xl text-forest font-heading">{formatPrice(total)}</dd>
                </div>
              </dl>

              <Button type="button" onClick={handleSubmit} variant="primary" size="lg" className="w-full mt-6 hidden lg:flex" disabled={status === 'loading'}>
                {status === 'loading' ? <><Loader2 className="w-4 h-4 animate-spin" /> Placing Order...</> : <>Place Order <ArrowRight className="w-4 h-4" /></>}
              </Button>

              <p className="flex items-center justify-center gap-1.5 mt-4 text-xs text-sage">
                <Lock className="w-3 h-3" /> Payment collected on order confirmation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
