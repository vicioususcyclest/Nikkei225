export const notionalCalculation = (price: number, contracts: number) => {
  return price * 100 * contracts
}

export const tickCalculation = (contracts: number) => {
  return 5 * 100 * contracts
}