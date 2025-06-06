export function liquidationPrice(
  entryPrice: number,
  initialMargin: number,
  contracts: number,
  isLong: number,
  maintenancePercent: number = 0.75 // 75% maintenance margin
): number {
  const maintenanceMargin = initialMargin * maintenancePercent;
  const priceChange = (initialMargin - maintenanceMargin) / (contracts * 100);
  return isLong === 0 ? entryPrice - priceChange : entryPrice + priceChange;
}