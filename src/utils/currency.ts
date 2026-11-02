/**
 * Indian Rupee (INR) Currency Utility for ArvinSoftware
 * Uses Intl.NumberFormat with 'en-IN' locale and Indian number grouping (lakhs & crores).
 */

export const formatINR = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

export const formatINRWithDecimals = (amount: number, fractionDigits = 2): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  }).format(amount);
};

/**
 * Standard Budget Options in Indian Rupees for client inquiry forms
 */
export const INR_BUDGET_OPTIONS = [
  'Below ₹10,000',
  '₹10,000 – ₹25,000',
  '₹25,000 – ₹50,000',
  '₹50,000 – ₹1,00,000',
  '₹1,00,000 – ₹5,00,000',
  'Above ₹5,00,000',
  'Not decided yet',
] as const;
