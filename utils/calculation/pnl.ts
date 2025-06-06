const pnlCalculation = (exitPrice: number, entryNumber: number, totalContracts: number) => {
  return (exitPrice - entryNumber) * 100 * totalContracts
}

export default pnlCalculation