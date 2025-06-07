import {
  Box,
  Card,
  CardContent,
  Grid,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import TabPanel from "../global/TabPanel";
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Line,
  Tooltip,
} from "recharts";
import { useState } from "react";
import { StrategiesTab } from "../../pages/Strategies";

const Straddle = ({ tabVal }: { tabVal: StrategiesTab }) => {
  const [straddle, setStraddle] = useState({
    strikePrice: 28000,
    volatility: 20,
    daysToExpiry: 30,
  });

  // Generate P&L data for straddle
  const generateStraddleData = () => {
    const data = [];
    const range = 2000;
    const step = 100;
    for (
      let price = straddle.strikePrice - range;
      price <= straddle.strikePrice + range;
      price += step
    ) {
      const callPnl =
        Math.max(price - straddle.strikePrice, 0) - straddle.volatility * 100;
      const putPnl =
        Math.max(straddle.strikePrice - price, 0) - straddle.volatility * 100;
      data.push({
        price,
        pnl: callPnl + putPnl,
      });
    }
    return data;
  };
  return (
    <TabPanel value={tabVal} index={StrategiesTab.Straddle}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant='h6' gutterBottom>
                Straddle/Strangle Simulator
              </Typography>
              <Box sx={{ mb: 3 }}>
                <TextField
                  fullWidth
                  label='Strike Price'
                  type='number'
                  value={straddle.strikePrice}
                  onChange={(e) =>
                    setStraddle({
                      ...straddle,
                      strikePrice: Number(e.target.value),
                    })
                  }
                  sx={{ mb: 2 }}
                />
                <Typography gutterBottom>Volatility (%)</Typography>
                <Slider
                  value={straddle.volatility}
                  onChange={(_, value) =>
                    setStraddle({ ...straddle, volatility: value as number })
                  }
                  min={10}
                  max={50}
                  step={1}
                  sx={{ mb: 2 }}
                />
                <Typography gutterBottom>Days to Expiry</Typography>
                <Slider
                  value={straddle.daysToExpiry}
                  onChange={(_, value) =>
                    setStraddle({
                      ...straddle,
                      daysToExpiry: value as number,
                    })
                  }
                  min={1}
                  max={90}
                  step={1}
                />
              </Box>
              <Box sx={{ height: 300 }}>
                <ResponsiveContainer width='100%' height='100%'>
                  <LineChart data={generateStraddleData()}>
                    <CartesianGrid strokeDasharray='3 3' />
                    <XAxis dataKey='price' />
                    <YAxis />
                    <Tooltip />
                    <Line type='monotone' dataKey='pnl' stroke='#1976d2' />
                  </LineChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant='h6' gutterBottom>
                Strategy Explanation
              </Typography>
              <Typography paragraph>
                A straddle involves buying both a call and put option at the
                same strike price. This strategy profits from significant price
                movement in either direction.
              </Typography>
              <Typography variant='subtitle1' gutterBottom>
                When to Use:
              </Typography>
              <Typography component='div'>
                <ul>
                  <li>Before major market events</li>
                  <li>When expecting high volatility</li>
                  <li>When direction is uncertain but movement is expected</li>
                </ul>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </TabPanel>
  );
};

export default Straddle;
