export const leverageCalculation = (indexPrice: number, margin: number) => {
  return (indexPrice * 100) / margin
}