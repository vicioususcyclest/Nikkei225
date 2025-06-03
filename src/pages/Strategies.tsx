import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Slider,
  Tabs,
  Tab,
} from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`strategy-tabpanel-${index}`}
      aria-labelledby={`strategy-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const Strategies = () => {
  const [value, setValue] = useState(0);
  const [calendarSpread, setCalendarSpread] = useState({
    nearMonth: 28000,
    farMonth: 28200,
    contracts: 1,
  });
  const [straddle, setStraddle] = useState({
    strikePrice: 28000,
    volatility: 20,
    daysToExpiry: 30,
  });

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // Generate P&L data for straddle
  const generateStraddleData = () => {
    const data = [];
    const range = 2000;
    const step = 100;
    for (let price = straddle.strikePrice - range; price <= straddle.strikePrice + range; price += step) {
      const callPnl = Math.max(price - straddle.strikePrice, 0) - straddle.volatility * 100;
      const putPnl = Math.max(straddle.strikePrice - price, 0) - straddle.volatility * 100;
      data.push({
        price,
        pnl: callPnl + putPnl,
      });
    }
    return data;
  };

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Trading Strategies
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={value} onChange={handleChange} aria-label="strategy tabs">
          <Tab label="Calendar Spread" />
          <Tab label="Straddle/Strangle" />
          <Tab label="Margin Calculator" />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Calendar Spread Simulator
                </Typography>
                <Box sx={{ mb: 3 }}>
                  <TextField
                    fullWidth
                    label="Near Month Price"
                    type="number"
                    value={calendarSpread.nearMonth}
                    onChange={(e) =>
                      setCalendarSpread({ ...calendarSpread, nearMonth: Number(e.target.value) })
                    }
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    fullWidth
                    label="Far Month Price"
                    type="number"
                    value={calendarSpread.farMonth}
                    onChange={(e) =>
                      setCalendarSpread({ ...calendarSpread, farMonth: Number(e.target.value) })
                    }
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    fullWidth
                    label="Number of Contracts"
                    type="number"
                    value={calendarSpread.contracts}
                    onChange={(e) =>
                      setCalendarSpread({ ...calendarSpread, contracts: Number(e.target.value) })
                    }
                  />
                </Box>
                <Typography variant="h6" gutterBottom>
                  Potential Profit/Loss
                </Typography>
                <Typography variant="h4" color="primary">
                  ¥{((calendarSpread.farMonth - calendarSpread.nearMonth) * 100 * calendarSpread.contracts).toLocaleString()}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Strategy Explanation
                </Typography>
                <Typography paragraph>
                  A calendar spread involves buying a longer-term contract and selling a shorter-term
                  contract at the same strike price. This strategy profits from time decay and
                  differences in implied volatility between the two expiration dates.
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  When to Use:
                </Typography>
                <Typography component="div">
                  <ul>
                    <li>When expecting sideways market movement</li>
                    <li>To take advantage of time decay</li>
                    <li>When near-term volatility is higher than long-term</li>
                  </ul>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Straddle/Strangle Simulator
                </Typography>
                <Box sx={{ mb: 3 }}>
                  <TextField
                    fullWidth
                    label="Strike Price"
                    type="number"
                    value={straddle.strikePrice}
                    onChange={(e) =>
                      setStraddle({ ...straddle, strikePrice: Number(e.target.value) })
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
                      setStraddle({ ...straddle, daysToExpiry: value as number })
                    }
                    min={1}
                    max={90}
                    step={1}
                  />
                </Box>
                <Box sx={{ height: 300 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={generateStraddleData()}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="price" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="pnl" stroke="#1976d2" />
                    </LineChart>
                  </ResponsiveContainer>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Strategy Explanation
                </Typography>
                <Typography paragraph>
                  A straddle involves buying both a call and put option at the same strike price.
                  This strategy profits from significant price movement in either direction.
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  When to Use:
                </Typography>
                <Typography component="div">
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

      <TabPanel value={value} index={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Margin Calculator
                </Typography>
                <Box sx={{ mb: 3 }}>
                  <TextField
                    fullWidth
                    label="Contract Price"
                    type="number"
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    fullWidth
                    label="Number of Contracts"
                    type="number"
                    sx={{ mb: 2 }}
                  />
                  <Button variant="contained" fullWidth>
                    Calculate Required Margin
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Margin Requirements
                </Typography>
                <Typography paragraph>
                  Margin requirements for Nikkei 225 Mini futures are calculated based on:
                </Typography>
                <Typography component="div">
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
      </TabPanel>
    </Box>
  );
};

export default Strategies; 