// Solar savings estimation algorithm — client-side, indicative only.
// All assumptions are centralized here so they can be tuned easily.

export const solarConstants = {
  costPerWatt: { Residential: 60, Commercial: 55, Industrial: 50 },
  generationPerKWPerDay: 4.5,
  tariffPerKWh: 8,
  co2PerKWh: 0.82,
  billOffsetPercent: 0.85,
  systemLossFactor: 0.8,
  daysPerYear: 365,
  monthsPerYear: 12,
};

export const quickBillOptions = [1000, 2500, 5000, 10000, 20000];

export const propertyTypes = [
  { id: 'Residential', label: 'Residential', icon: 'home' },
  { id: 'Commercial', label: 'Commercial', icon: 'building' },
  { id: 'Industrial', label: 'Industrial', icon: 'factory' },
];

export const indianStates = [
  'Andhra Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Delhi', 'Goa', 'Gujarat',
  'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala',
  'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
  'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
  'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
];

export function calculateSolarSavings({ monthlyBill, propertyType }) {
  const c = solarConstants;
  const pt = propertyType || 'Residential';

  const offsetBill = monthlyBill * c.billOffsetPercent;
  const monthlyEnergy = offsetBill / c.tariffPerKWh;
  const dailyEnergy = monthlyEnergy / 30;
  const recommendedKW = Math.max(1, dailyEnergy / (c.generationPerKWPerDay * c.systemLossFactor));
  const roundedKW = Math.round(recommendedKW * 10) / 10;

  const annualGeneration = Math.round(roundedKW * c.generationPerKWPerDay * c.daysPerYear * c.systemLossFactor);
  const annualSavings = Math.round(annualGeneration * c.tariffPerKWh);
  const monthlySavings = Math.round(annualSavings / c.monthsPerYear);
  const systemCost = Math.round(roundedKW * 1000 * c.costPerWatt[pt]);

  const paybackYears = systemCost / annualSavings;
  const paybackLower = Math.floor(paybackYears);
  const paybackUpper = Math.ceil(paybackYears + 1);

  const co2Reduction = (annualGeneration * c.co2PerKWh) / 1000;

  return {
    recommendedCapacity: `${roundedKW.toFixed(1)} kW`,
    annualGeneration: `${annualGeneration.toLocaleString('en-IN')} kWh`,
    monthlySavings: monthlySavings,
    annualSavings: annualSavings,
    systemCost: systemCost,
    paybackPeriod: `${paybackLower}–${paybackUpper} Years`,
    co2Reduction: `${(Math.round(co2Reduction * 10) / 10).toFixed(1)} tonnes/year`,
    _numeric: { recommendedKW: roundedKW, annualGeneration, monthlySavings, annualSavings, systemCost },
  };
}

export function formatINR(num) {
  return `₹${Number(num).toLocaleString('en-IN')}`;
}
