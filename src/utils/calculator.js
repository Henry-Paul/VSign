export function calculateBudget({
  width,
  height,
  priceMin,
  priceMax,
  cityMultiplier = 1
}) {
  const area = width * height;

  if (!area || area <= 0) {
    return null;
  }

  const min = Math.round(area * priceMin * cityMultiplier);
  const max = Math.round(area * priceMax * cityMultiplier);

  return {
    area,
    min,
    max
  };
}
