import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  FormControlLabel,
  Checkbox,
  Card,
  CardContent,
} from "@mui/material";
import { StrategiesTab } from "../../pages/Strategies";
import TabPanel from "../global/TabPanel";

export default function StrangleWithFuturesCalc({
  tabVal,
}: {
  tabVal: StrategiesTab;
}) {
  const [inputs, setInputs] = useState({
    includeFutures: true,
    position: "long",
    futuresEntry: 39000,
    expiryPrice: 37500,
    callStrike: 40000,
    callPremium: 350,
    putStrike: 38000,
    putPremium: 300,
    multiplier: 100,
  });

  const [result, setResult] = useState<any>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : parseFloat(value) || 0,
    }));
  };

  const handleSelectChange = (e: any) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const calculate = () => {
    const {
      includeFutures,
      position,
      futuresEntry,
      expiryPrice,
      callStrike,
      callPremium,
      putStrike,
      putPremium,
      multiplier,
    } = inputs;

    const callValue = Math.max(0, expiryPrice - callStrike) * multiplier;
    const putValue = Math.max(0, putStrike - expiryPrice) * multiplier;
    const optionPremium = (callPremium + putPremium) * multiplier;
    const optionPnL = callValue + putValue - optionPremium;

    let futuresPnL = 0;
    if (includeFutures) {
      futuresPnL =
        (position === "long"
          ? expiryPrice - futuresEntry
          : futuresEntry - expiryPrice) * multiplier;
    }

    const totalPnL = optionPnL + futuresPnL;

    setResult({ optionPnL, futuresPnL, totalPnL });
  };

  return (
    <TabPanel value={tabVal} index={StrategiesTab.Strangle}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Card>
            <CardContent>
              <Typography variant='h5' mb={3}>
                Strangle Calculator
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={inputs.includeFutures}
                        onChange={handleChange}
                        name='includeFutures'
                      />
                    }
                    label='Include Futures Position'
                  />
                </Grid>

                {inputs.includeFutures && (
                  <>
                    <Grid item xs={6} sm={4}>
                      <FormControl fullWidth>
                        <InputLabel>Futures Position</InputLabel>
                        <Select
                          value={inputs.position}
                          name='position'
                          label='Futures Position'
                          onChange={handleSelectChange}>
                          <MenuItem value='long'>Long</MenuItem>
                          <MenuItem value='short'>Short</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                      <TextField
                        fullWidth
                        label='Futures Entry Price'
                        name='futuresEntry'
                        type='number'
                        value={inputs.futuresEntry}
                        onChange={handleChange}
                      />
                    </Grid>
                  </>
                )}

                {[
                  "expiryPrice",
                  "callStrike",
                  "callPremium",
                  "putStrike",
                  "putPremium",
                ].map((key) => (
                  <Grid item xs={6} sm={4} key={key}>
                    <TextField
                      fullWidth
                      label={
                        key === "expiryPrice"
                          ? "Final settlement price"
                          : key
                              .replace(/([A-Z])/g, " $1")
                              .replace(/^./, (str) => str.toUpperCase())
                      }
                      name={key}
                      type='number'
                      value={(inputs as any)[key]}
                      onChange={handleChange}
                    />
                  </Grid>
                ))}

                <Grid item xs={12}>
                  <Button variant='contained' onClick={calculate}>
                    Calculate
                  </Button>
                </Grid>

                {result && (
                  <Grid item xs={12}>
                    <Typography variant='h6'>
                      Options P&L: ¥{result.optionPnL.toLocaleString()}
                    </Typography>
                    <Typography variant='h6'>
                      Futures P&L: ¥{result.futuresPnL.toLocaleString()}
                    </Typography>
                    <Typography variant='h5'>
                      Total P&L: ¥{result.totalPnL.toLocaleString()}
                    </Typography>
                  </Grid>
                )}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Typography variant='h5' mb={2}>
                What is Strangle
              </Typography>
              <Typography variant='body1'>
                A strangle profits from large moves in either direction, while
                costing less than a straddle. It’s good when you expect
                volatility, but not sure which way the index will move.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </TabPanel>
  );
}
