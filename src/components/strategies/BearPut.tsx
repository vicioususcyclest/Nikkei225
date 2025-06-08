import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Card,
  CardContent,
} from "@mui/material";
import { StrategiesTab } from "../../pages/Strategies";
import TabPanel from "../global/TabPanel";

export default function BearPutHedgeCalculator({
  tabVal,
}: {
  tabVal: StrategiesTab;
}) {
  const [inputs, setInputs] = useState({
    position: "long",
    futuresEntry: 39000,
    longPutStrike: 39000,
    shortPutStrike: 38000,
    longPutPremium: 600,
    shortPutPremium: 300,
    expiryPrice: 37500,
    multiplier: 100,
  });

  const [result, setResult] = useState<any>(null);

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: parseFloat(value) || 0 }));
  };

  const handleSelectChange = (e: SelectChangeEvent) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name!]: value }));
  };

  const calculate = () => {
    const {
      position,
      futuresEntry,
      longPutStrike,
      shortPutStrike,
      longPutPremium,
      shortPutPremium,
      expiryPrice,
      multiplier,
    } = inputs;

    const futuresPnL =
      (position === "long"
        ? expiryPrice - futuresEntry
        : futuresEntry - expiryPrice) * multiplier;

    const longPutValue = Math.max(0, longPutStrike - expiryPrice) * multiplier;
    const shortPutValue =
      Math.max(0, shortPutStrike - expiryPrice) * multiplier;
    const optionPremium = (longPutPremium - shortPutPremium) * multiplier;
    const optionPnL = longPutValue - shortPutValue - optionPremium;
    const totalPnL = futuresPnL + optionPnL;

    setResult({ futuresPnL, optionPnL, totalPnL });
  };

  return (
    <TabPanel value={tabVal} index={StrategiesTab.BearPut}>
      <Grid container xs={12} spacing={2}>
        <Grid item xs={8}>
          <Card>
            <CardContent>
              <Typography variant='h5' mb={3}>
                Bear Put Calculator
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6} sm={4}>
                  <FormControl fullWidth>
                    <InputLabel>Futures Position</InputLabel>
                    <Select
                      value={inputs.position}
                      name='position'
                      label='Position'
                      onChange={handleSelectChange}>
                      <MenuItem value='long'>Long</MenuItem>
                      <MenuItem value='short'>Short</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                {Object.keys(inputs)
                  .filter((key) => key !== "position" && key !== "multiplier")
                  .map((key) => (
                    <Grid item xs={6} sm={4} key={key}>
                      <TextField
                        fullWidth
                        label={key
                          .replace(/([A-Z])/g, " $1")
                          .replace(/^./, (str) => str.toUpperCase())}
                        name={key}
                        type='number'
                        value={(inputs as any)[key]}
                        onChange={handleFieldChange}
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
                      Futures P&L: ¥{result.futuresPnL.toLocaleString()}
                    </Typography>
                    <Typography variant='h6'>
                      Options P&L: ¥{result.optionPnL.toLocaleString()}
                    </Typography>
                    <Typography variant='h5'>
                      Net Result: ¥{result.totalPnL.toLocaleString()}
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
                What is Bear Put
              </Typography>
              <Typography variant='body1'>
                A low-cost option strategy that limits your downside if the
                market drops — like insurance with a deductible.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </TabPanel>
  );
}
