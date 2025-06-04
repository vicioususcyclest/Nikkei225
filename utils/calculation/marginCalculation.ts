type OSEMarginInput = {
  contracts: number;                   // Number of OSE Mini contracts
  marginPerContract?: number;          // Optional: defaults to ¥170,000
};

export function calculateOSEMargin({
  contracts,
  marginPerContract = 170000,          // Default OSE Mini margin (¥170,000)
}: OSEMarginInput): number {
  return contracts * marginPerContract;
}