import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  IndianRupee, Home, Building2, Factory, MapPin, ArrowRight, ArrowLeft,
  Ruler, Check, Zap, Calendar, Wallet, TrendingDown, IndianRupee as Rupee,
  Clock, Leaf, ArrowDownRight,
} from 'lucide-react';
import {
  calculateSolarSavings, quickBillOptions, propertyTypes, indianStates, formatINR,
} from '../../utils/solarCalculations';
import AnimatedCounter from '../AnimatedCounter';
import Button from '../Button';

const propertyIcons = { Residential: Home, Commercial: Building2, Industrial: Factory };

const steps = [
  { num: '01', label: 'Energy' },
  { num: '02', label: 'Property' },
  { num: '03', label: 'Location' },
  { num: '04', label: 'Result' },
];

export default function SolarCalculator() {
  const [step, setStep] = useState(1);
  const [monthlyBill, setMonthlyBill] = useState(5000);
  const [propertyType, setPropertyType] = useState('');
  const [stateName, setStateName] = useState('');
  const [city, setCity] = useState('');
  const [roofArea, setRoofArea] = useState('');
  const [results, setResults] = useState(null);
  const resultsRef = useRef(null);

  const handleCalculate = () => {
    const res = calculateSolarSavings({ monthlyBill: Number(monthlyBill), propertyType });
    setResults(res);
    setStep(4);
    setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
  };

  const canProceed = () => {
    if (step === 1) return monthlyBill > 0;
    if (step === 2) return !!propertyType;
    if (step === 3) return !!stateName && !!city;
    return false;
  };

  const next = () => {
    if (step < 3) setStep(step + 1);
    else handleCalculate();
  };
  const prev = () => step > 1 && setStep(step - 1);

  return (
    <div>
      {/* Step indicator */}
      <div className="flex items-center gap-1 sm:gap-2 mb-10">
        {steps.map((s, i) => {
          const idx = i + 1;
          const done = step > idx;
          const active = step === idx;
          return (
            <div key={s.num} className="flex items-center flex-1">
              <div className={`flex items-center gap-2.5 transition-colors ${active || done ? 'text-gold' : 'text-ivory/30'}`}>
                <span className={`text-xs font-bold tracking-wider ${active ? 'text-gold' : done ? 'text-gold' : 'text-ivory/30'}`}>{s.num}</span>
                <span className={`text-xs font-semibold uppercase tracking-wider hidden sm:inline ${active || done ? 'text-ivory/80' : 'text-ivory/30'}`}>{s.label}</span>
              </div>
              {idx < 4 && <div className={`flex-1 h-px mx-2 sm:mx-4 transition-colors ${done ? 'bg-gold/40' : 'bg-ivory/10'}`} />}
            </div>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <Step key="s1" step={step}>
            <Step1Content monthlyBill={monthlyBill} setMonthlyBill={setMonthlyBill} />
          </Step>
        )}
        {step === 2 && (
          <Step key="s2" step={step}>
            <Step2Content propertyType={propertyType} setPropertyType={setPropertyType} />
          </Step>
        )}
        {step === 3 && (
          <Step key="s3" step={step}>
            <Step3Content stateName={stateName} setStateName={setStateName} city={city} setCity={setCity} roofArea={roofArea} setRoofArea={setRoofArea} />
          </Step>
        )}
      </AnimatePresence>

      {/* Nav buttons */}
      {step < 4 && (
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-ivory/10">
          <button onClick={prev} disabled={step === 1} className="flex items-center gap-2 text-sm text-ivory/60 hover:text-gold disabled:opacity-30 disabled:pointer-events-none transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <button onClick={next} disabled={!canProceed()} className="flex items-center gap-2 px-6 py-3 bg-gold text-forest text-sm font-bold tracking-wide hover:bg-gold-500 disabled:opacity-30 disabled:pointer-events-none transition-colors">
            {step === 3 ? 'Calculate' : 'Continue'} <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Results */}
      <AnimatePresence>
        {results && step === 4 && (
          <motion.div
            ref={resultsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-6"
          >
            <ResultsDashboard results={results} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Step({ children, step }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

function StepHeading({ title, sub }) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold text-ivory tracking-tight">{title}</h2>
      {sub && <p className="text-sm text-ivory/50 mt-1.5">{sub}</p>}
    </div>
  );
}

function Step1Content({ monthlyBill, setMonthlyBill }) {
  const fill = `${Math.min((monthlyBill / 25000) * 100, 100)}%`;
  return (
    <div>
      <StepHeading title="Tell Us About Your Electricity Usage" sub="Enter your average monthly electricity bill to estimate your solar potential." />
      <div className="space-y-6">
        <div>
          <label className="label text-ivory/50 block mb-3">Monthly Electricity Bill</label>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-extrabold text-gold font-heading">₹</span>
            <AnimatedCounter value={monthlyBill} format={(n) => Math.round(n).toLocaleString('en-IN')} className="text-4xl font-extrabold text-ivory font-heading" />
          </div>
        </div>
        <div>
          <input
            type="range" min="500" max="30000" step="500"
            value={monthlyBill}
            onChange={(e) => setMonthlyBill(Number(e.target.value))}
            className="es-range w-full"
            style={{ background: `linear-gradient(to right, #D9A441 ${fill}, rgba(245,242,233,0.15) ${fill})` }}
          />
          <div className="flex justify-between text-xs text-ivory/30 mt-2">
            <span>₹500</span><span>₹30,000</span>
          </div>
        </div>
        <div>
          <label className="label text-ivory/50 block mb-3">Or enter directly</label>
          <div className="relative max-w-xs">
            <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ivory/30" />
            <input
              type="number" min="0"
              value={monthlyBill}
              onChange={(e) => setMonthlyBill(Math.max(0, Number(e.target.value)))}
              className="w-full pl-9 pr-4 py-3 bg-ivory/5 border border-ivory/10 text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-gold transition-colors"
              placeholder="Enter amount"
            />
          </div>
        </div>
        <div>
          <label className="label text-ivory/50 block mb-3">Quick Select</label>
          <div className="flex flex-wrap gap-2">
            {quickBillOptions.map((amt) => (
              <button
                key={amt}
                onClick={() => setMonthlyBill(amt)}
                className={`px-4 py-2 text-sm font-medium transition-colors ${monthlyBill === amt ? 'bg-gold text-forest' : 'bg-ivory/5 text-ivory/70 border border-ivory/10 hover:border-gold/40'}`}
              >
                ₹{amt.toLocaleString('en-IN')}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Step2Content({ propertyType, setPropertyType }) {
  return (
    <div>
      <StepHeading title="What Type of Property Do You Have?" sub="Select your property type for a more accurate estimate." />
      <div className="grid sm:grid-cols-3 gap-3">
        {propertyTypes.map((p) => {
          const Icon = propertyIcons[p.id];
          const selected = propertyType === p.id;
          return (
            <button
              key={p.id}
              onClick={() => setPropertyType(p.id)}
              className={`flex flex-col items-center gap-3 p-6 border transition-all ${selected ? 'border-gold bg-gold/10' : 'border-ivory/10 hover:border-ivory/30 bg-ivory/5'}`}
            >
              <Icon className={`w-7 h-7 ${selected ? 'text-gold' : 'text-ivory/50'}`} />
              <span className={`text-sm font-semibold ${selected ? 'text-ivory' : 'text-ivory/60'}`}>{p.label}</span>
              {selected && <Check className="w-4 h-4 text-gold" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Step3Content({ stateName, setStateName, city, setCity, roofArea, setRoofArea }) {
  const inputClass = 'w-full px-4 py-3 bg-ivory/5 border border-ivory/10 text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-gold transition-colors text-sm';
  return (
    <div>
      <StepHeading title="Where Is Your Property Located?" sub="Your location helps us estimate solar generation potential." />
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="label text-ivory/50 block mb-2">State *</label>
          <select value={stateName} onChange={(e) => setStateName(e.target.value)} className={inputClass}>
            <option value="" className="bg-forest">Select state</option>
            {indianStates.map((s) => <option key={s} value={s} className="bg-forest">{s}</option>)}
          </select>
        </div>
        <div>
          <label className="label text-ivory/50 block mb-2">City *</label>
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} className={inputClass} placeholder="Your city" />
        </div>
      </div>
      <div>
        <label className="label text-ivory/50 block mb-2">Available Roof Area (sq. ft.) — <span className="text-ivory/30 normal-case tracking-normal">optional</span></label>
        <div className="relative max-w-xs">
          <Ruler className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ivory/30" />
          <input type="number" min="0" value={roofArea} onChange={(e) => setRoofArea(e.target.value)} className={`${inputClass} pl-9`} placeholder="e.g. 500" />
        </div>
      </div>
    </div>
  );
}

function ResultsDashboard({ results }) {
  const n = results._numeric;
  const metrics = [
    { icon: Calendar, label: 'Annual Generation', value: n.annualGeneration, suffix: ' kWh', format: (v) => Math.round(v).toLocaleString('en-IN') },
    { icon: Wallet, label: 'Monthly Savings', value: n.monthlySavings, prefix: '₹', format: (v) => Math.round(v).toLocaleString('en-IN') },
    { icon: TrendingDown, label: 'Annual Savings', value: n.annualSavings, prefix: '₹', format: (v) => Math.round(v).toLocaleString('en-IN') },
    { icon: Rupee, label: 'Estimated Investment', value: n.systemCost, prefix: '₹', format: (v) => Math.round(v).toLocaleString('en-IN') },
    { icon: Leaf, label: 'CO₂ Reduction', value: parseFloat(results.co2Reduction), suffix: ' t/yr', format: (v) => v.toFixed(1), raw: false },
  ];

  return (
    <div>
      {/* Recommended system — large */}
      <div className="border border-gold/30 p-8 sm:p-10 mb-6">
        <p className="label text-gold mb-3">Recommended System</p>
        <div className="flex items-baseline gap-3">
          <AnimatedCounter value={n.recommendedKW} format={(v) => v.toFixed(1)} className="text-6xl sm:text-7xl font-extrabold text-ivory font-heading tracking-tightest" />
          <span className="text-2xl text-ivory/50 font-heading font-bold">kW</span>
        </div>
        <p className="text-sm text-ivory/50 mt-3">Based on your monthly bill of {formatINR(results.monthlySavings * 12 / 12)} and {propertyTypes.find(p => true)?.label || 'residential'} property type.</p>
      </div>

      {/* Metrics grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-ivory/10 mb-6">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.08 }}
            className="bg-forest p-5 sm:p-6"
          >
            <div className="flex items-center gap-2 mb-3 text-gold/80">
              <m.icon className="w-4 h-4" />
              <span className="label text-ivory/40">{m.label}</span>
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-ivory font-heading tracking-tight">
              <AnimatedCounter
                value={m.value}
                format={m.format || ((v) => Math.round(v))}
                prefix={m.prefix || ''}
                suffix={m.suffix || ''}
              />
            </p>
          </motion.div>
        ))}
        {/* Payback — raw text */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="bg-forest p-5 sm:p-6">
          <div className="flex items-center gap-2 mb-3">
            <Clock className="w-4 h-4 text-gold/80" />
            <span className="label text-ivory/40">Estimated Payback</span>
          </div>
          <p className="text-2xl sm:text-3xl font-extrabold text-ivory font-heading tracking-tight">{results.paybackPeriod}</p>
        </motion.div>
      </div>

      {/* Disclaimer */}
      <p className="text-xs text-ivory/40 leading-relaxed mb-6">
        Estimates are indicative only. Actual system size, cost, generation, savings and payback period depend on
        location, electricity tariff, roof conditions, system components, installation requirements and applicable
        policies/subsidies.
      </p>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button to="/contact" variant="primary" size="lg" className="flex-1" iconRight={ArrowRight}>
          Get a Detailed Quote
        </Button>
        <button onClick={() => window.location.reload()} className="px-6 py-3 text-sm text-ivory/60 hover:text-gold transition-colors">
          Recalculate
        </button>
      </div>
    </div>
  );
}
