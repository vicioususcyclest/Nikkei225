import {
  Box,
  // Card,
  // CardContent,
  // Grid,
  Tab,
  Tabs,
  // TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
// import TabPanel from "../components/global/TabPanel.tsx";
// import pnlCalculation from "../../utils/calculation/pnl.ts";
import PnlCalculator from "../components/calculator/PnlCalculator.tsx";
import MarginRequirement from "../components/calculator/MarginRequirement.tsx";
import NotionalAndTick from "../components/calculator/NotionalAndTick.tsx";
import MarginCall from "../components/calculator/MarginCall.tsx";

export enum TabValue {
  PnL,
  MarginRequirement,
  NotionanNdTick,
  MarginCallChecker,
}

const Calculator = () => {
  const [tabVal, setTabVal] = useState(TabValue.PnL);

  const handleTabChanged = (_event: React.SyntheticEvent, newValue: number) => {
    setTabVal(newValue);
  };

  return (
    <Box>
      <Typography variant='h4' component='h1' gutterBottom>
        Calculators
      </Typography>

      <Tabs
        value={tabVal}
        onChange={handleTabChanged}
        aria-label='strategy tabs'>
        <Tab label='Profit & Loss' />
        <Tab label='Margin Requirement' />
        <Tab label='Notional & Tick Value' />
        <Tab label='Margin Call Checker' />
      </Tabs>

      <PnlCalculator tabVal={tabVal} />
      <MarginRequirement tabVal={tabVal} />
      <NotionalAndTick tabVal={tabVal} />
      <MarginCall tabVal={tabVal} />
    </Box>
  );
};

export default Calculator;
