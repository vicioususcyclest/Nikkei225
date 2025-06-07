import {
  Box,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import TabPanel from "../global/TabPanel";
import { useState } from "react";
import { StrategiesTab } from "../../pages/Strategies";

export const CalendarSpread = ({ tabVal }: { tabVal: StrategiesTab }) => {
  const [calendarSpread, setCalendarSpread] = useState({
    nearMonth: 28000,
    farMonth: 28200,
    contracts: 1,
  });
  return (
    <TabPanel value={tabVal} index={StrategiesTab.CalendarSpread}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant='h6' gutterBottom>
                Calendar Spread Simulator
              </Typography>
              <Box sx={{ mb: 3 }}>
                <TextField
                  fullWidth
                  label='Near Month Price'
                  type='number'
                  value={calendarSpread.nearMonth}
                  onChange={(e) =>
                    setCalendarSpread({
                      ...calendarSpread,
                      nearMonth: Number(e.target.value),
                    })
                  }
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label='Far Month Price'
                  type='number'
                  value={calendarSpread.farMonth}
                  onChange={(e) =>
                    setCalendarSpread({
                      ...calendarSpread,
                      farMonth: Number(e.target.value),
                    })
                  }
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label='Number of Contracts'
                  type='number'
                  value={calendarSpread.contracts}
                  onChange={(e) =>
                    setCalendarSpread({
                      ...calendarSpread,
                      contracts: Number(e.target.value),
                    })
                  }
                />
              </Box>
              <Typography variant='h6' gutterBottom>
                Potential Profit/Loss
              </Typography>
              <Typography variant='h4' color='primary'>
                ¥
                {(
                  (calendarSpread.farMonth - calendarSpread.nearMonth) *
                  100 *
                  calendarSpread.contracts
                ).toLocaleString()}
              </Typography>
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
                A calendar spread involves buying a longer-term contract and
                selling a shorter-term contract at the same strike price. This
                strategy profits from time decay and differences in implied
                volatility between the two expiration dates.
              </Typography>
              <Typography variant='subtitle1' gutterBottom>
                When to Use:
              </Typography>
              <Typography component='div'>
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
  );
};
