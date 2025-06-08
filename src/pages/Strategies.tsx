import React, { useState } from "react";
import { Box, Typography, Tabs, Tab } from "@mui/material";
import Straddle from "../components/strategies/Straddle";
import ContractComparator from "../components/strategies/ContractComparator";
import BearPutHedgeCalculator from "../components/strategies/BearPut";

export enum StrategiesTab {
  BearPut,
  Straddle,
  CmeOseComparison,
}

const Strategies = () => {
  const [value, setValue] = useState<StrategiesTab>(StrategiesTab.BearPut);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Typography variant='h4' component='h1' gutterBottom>
        Trading Strategies
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 3 }}>
        <Tabs value={value} onChange={handleChange} aria-label='strategy tabs'>
          <Tab label='Bear Put' />
          <Tab label='Straddle/Strangle' />
          <Tab label='CME Macro & OSE Mini Comparison' />
        </Tabs>
      </Box>

      <BearPutHedgeCalculator tabVal={value} />
      <Straddle tabVal={value} />
      <ContractComparator tabVal={value} />

      {/* generated margin calculator initially */}
      {/* <TabPanel value={value} index={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant='h6' gutterBottom>
                  Margin Calculator
                </Typography>
                <Box sx={{ mb: 3 }}>
                  <TextField
                    fullWidth
                    label='Contract Price'
                    type='number'
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    fullWidth
                    label='Number of Contracts'
                    type='number'
                    sx={{ mb: 2 }}
                  />
                  <Button variant='contained' fullWidth>
                    Calculate Required Margin
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant='h6' gutterBottom>
                  Margin Requirements
                </Typography>
                <Typography paragraph>
                  Margin requirements for Nikkei 225 Mini futures are calculated
                  based on:
                </Typography>
                <Typography component='div'>
                  <ul>
                    <li>Contract price</li>
                    <li>Number of contracts</li>
                    <li>Market volatility</li>
                    <li>Account type</li>
                  </ul>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel> */}
    </Box>
  );
};

export default Strategies;
