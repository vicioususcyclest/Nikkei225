import {
  Box,
  Card,
  CardContent,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { TabValue } from "../../pages/Calculator";
import CustomTabPanel from "../global/TabPanel";
import { useState } from "react";
import { liquidationPrice } from "../../../utils/calculation/liquidation";
import { leverageCalculation } from "../../../utils/calculation/leverage";

const MarginCall = ({ tabVal }: { tabVal: TabValue }) => {
  const [entryPrice, setEntryPrice] = useState(33000);
  const [initialMargin, setInitialMargin] = useState(170000);
  const [marginCall, setMarginCall] = useState({
    contracts: 1,
    side: 0, // side = 0: Long, side = 1: short
  });

  return (
    <CustomTabPanel value={tabVal} index={TabValue.MarginCallChecker}>
      <Grid container direction={"column"} spacing={4}>
        <Grid item xs={12}>
          <Box>
            <TextField
              fullWidth
              label='Entry Price'
              type='number'
              value={entryPrice}
              onChange={(e) => setEntryPrice(Number(e.target.value))}
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <TextField
              fullWidth
              label='Initial Margin'
              type='number'
              value={initialMargin}
              onChange={(e) => setInitialMargin(Number(e.target.value))}
            />
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant='h6' gutterBottom>
                Leverage Ratio Calculator
              </Typography>
              <Typography variant='h4' color={"primary"}>
                ~{leverageCalculation(entryPrice, initialMargin).toFixed(1)}x
                leverage for this position
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant='h6' gutterBottom>
                Liquidation Price Calculator
              </Typography>

              <Box sx={{ mb: 3 }}>
                <TextField
                  fullWidth
                  label='Number of Contracts'
                  type='number'
                  value={marginCall.contracts}
                  onChange={(e) =>
                    setMarginCall({
                      ...marginCall,
                      contracts: Number(e.target.value),
                    })
                  }
                />
              </Box>
              <Box sx={{ mb: 3 }}>
                <Select
                  fullWidth
                  value={marginCall.side}
                  onChange={(e) =>
                    setMarginCall({
                      ...marginCall,
                      side: Number(e.target.value),
                    })
                  }>
                  <MenuItem value={0}>Long Position</MenuItem>
                  <MenuItem value={1}>Short Position</MenuItem>
                </Select>
              </Box>
              <Typography variant='h6' gutterBottom>
                Liquidation will take place when future price reached
              </Typography>
              <Typography variant='h4' color={"primary"}>
                ¥
                {liquidationPrice(
                  entryPrice,
                  initialMargin,
                  marginCall.contracts,
                  marginCall.side
                )}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </CustomTabPanel>
  );
};

export default MarginCall;
