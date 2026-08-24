import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Send, Loader2 } from 'lucide-react';
import { propertyTypes } from '../utils/solarCalculations';
import Button from './Button';

// Modular enquiry/contact form. The submit handler is a placeholder that
// simulates an async submission — connect it to EmailJS, Formspree, Google
// Sheets, or a custom API by replacing the logic inside handleSubmit.

const initialForm = {
  name: '', phone: '', email: '', city: '',
  propertyType: '', monthlyBill: '', interestedSolution: '', message: '',
};

export default function QuoteForm({ prefill = {}, compact = false }) {
  const [form, setForm] = useState({ ...initialForm, ...prefill });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const handleChange = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    setErrors((er) => ({ ...er, [field]: undefined }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Required';
    if (!form.phone.trim() || !/^[+\d\s-]{8,}$/.test(form.phone)) e.phone = 'Valid phone required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email required';
    if (!form.city.trim()) e.city = 'Required';
    if (!form.propertyType) e.propertyType = 'Select type';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    await new Promise((r) => setTimeout(r, 1200));
    setStatus('success');
  };

  const reset = () => {
    setForm({ ...initialForm, ...prefill });
    setStatus('idle');
  };

  if (status === 'success') {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
        <div className="flex justify-center mb-4">
          <span className="flex items-center justify-center w-14 h-14 rounded-full bg-gold/10">
            <CheckCircle2 className="w-7 h-7 text-gold" />
          </span>
        </div>
        <h3 className="text-xl font-bold text-forest">Thank You</h3>
        <p className="text-charcoal/60 mt-2 max-w-sm mx-auto text-sm">
          Your request has been received. Our solar team will contact you shortly.
        </p>
        <Button onClick={reset} variant="link" size="sm" className="mt-5">Submit Another Request</Button>
      </motion.div>
    );
  }

  const inputBase = 'w-full px-0 py-2.5 bg-transparent border-0 border-b text-charcoal placeholder:text-charcoal/35 focus:outline-none focus:ring-0 transition-colors text-sm';
  const borderClass = (field) => errors[field] ? 'border-red-400' : 'border-forest/15 focus:border-gold';

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
        <div>
          <label className="label text-sage block mb-1">Full Name *</label>
          <input type="text" value={form.name} onChange={handleChange('name')} className={`${inputBase} ${borderClass('name')}`} placeholder="Your name" />
          {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="label text-sage block mb-1">Phone *</label>
          <input type="tel" value={form.phone} onChange={handleChange('phone')} className={`${inputBase} ${borderClass('phone')}`} placeholder="+91 ..." />
          {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
        <div>
          <label className="label text-sage block mb-1">Email *</label>
          <input type="email" value={form.email} onChange={handleChange('email')} className={`${inputBase} ${borderClass('email')}`} placeholder="you@example.com" />
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="label text-sage block mb-1">City *</label>
          <input type="text" value={form.city} onChange={handleChange('city')} className={`${inputBase} ${borderClass('city')}`} placeholder="Your city" />
          {errors.city && <p className="text-xs text-red-500 mt-1">{errors.city}</p>}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
        <div>
          <label className="label text-sage block mb-1">Property Type *</label>
          <select value={form.propertyType} onChange={handleChange('propertyType')} className={`${inputBase} ${borderClass('propertyType')}`}>
            <option value="">Select</option>
            {propertyTypes.map((p) => <option key={p.id} value={p.id}>{p.label}</option>)}
          </select>
          {errors.propertyType && <p className="text-xs text-red-500 mt-1">{errors.propertyType}</p>}
        </div>
        <div>
          <label className="label text-sage block mb-1">Monthly Bill (₹)</label>
          <input type="number" min="0" value={form.monthlyBill} onChange={handleChange('monthlyBill')} className={`${inputBase} ${borderClass('monthlyBill')}`} placeholder="e.g. 5000" />
        </div>
      </div>
      {!compact && (
        <div>
          <label className="label text-sage block mb-1">Interested Solution</label>
          <select value={form.interestedSolution} onChange={handleChange('interestedSolution')} className={`${inputBase} ${borderClass('interestedSolution')}`}>
            <option value="">Select (optional)</option>
            <option value="Solar Panels">Solar Panels</option>
            <option value="Inverters">Inverters</option>
            <option value="Batteries">Batteries</option>
            <option value="Complete System">Complete System</option>
            <option value="Not sure">Not sure / Need guidance</option>
          </select>
        </div>
      )}
      <div>
        <label className="label text-sage block mb-1">Message</label>
        <textarea rows={3} value={form.message} onChange={handleChange('message')} className={`${inputBase} ${borderClass('message')}`} placeholder="Tell us about your requirements..." />
      </div>
      <Button type="submit" variant="primary" size="lg" className="w-full" disabled={status === 'loading'}>
        {status === 'loading' ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</> : <><Send className="w-4 h-4" /> Request a Free Quote</>}
      </Button>
    </form>
  );
}
