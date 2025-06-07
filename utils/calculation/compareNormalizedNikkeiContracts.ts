/**
 * Compares OSE and CME Micro Nikkei 225 Futures using normalized notional value.
 * Returns both JPY spread and OSE:CME notional ratio.
 *
 * @param oseIndex - OSE Mini index price (JPY)
 * @param cmeIndex - CME index price (should be same index, in points)
 * @param fxRate - USD/JPY exchange rate
 * @param oseMultiplier - OSE Mini multiplier (default = 100)
 * @param cmeMultiplier - CME Micro multiplier (default = 0.5)
 * @returns { spreadJPY, oseCmeRatio }
 */
export const compareNormalizedNikkeiContracts = (
  oseIndex: number,
  cmeIndex: number,
  fxRate: number,
  oseMultiplier: number = 100,
  cmeMultiplier: number = 0.5
) => {
  const oseNotionalJPY = oseIndex * oseMultiplier;
  const cmeNotionalJPY = cmeIndex * cmeMultiplier * fxRate;

  const spreadJPY = cmeNotionalJPY - oseNotionalJPY;
  const oseCmeRatio = oseNotionalJPY / cmeNotionalJPY;

  const scaledCmeIndexNeeded = oseNotionalJPY / (cmeMultiplier * fxRate);

  return {
    spreadJPY,
    oseCmeRatio,
    scaledCmeIndexNeeded
  };
}
