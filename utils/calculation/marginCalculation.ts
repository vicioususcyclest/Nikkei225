// type OSEMarginInput = {
//   contracts: number;                   // Number of OSE Mini contracts
//   marginPerContract?: number;          // Optional: defaults to ¥170,000
// };

export function calculateOSEMargin(
  contracts: number,
  marginPerContract: number

): number {
  return contracts * marginPerContract;
}