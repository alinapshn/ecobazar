export function calcDiscount(priceCents, discountPriceCents) {
  if (!discountPriceCents || discountPriceCents >= priceCents) {
    return null;
  }

  const discount = ((priceCents - discountPriceCents) / priceCents) * 100;
  return `${Math.round(discount)}%`;
}
