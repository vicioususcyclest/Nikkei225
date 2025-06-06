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

const MarginCall = ({ tabVal }: { tabVal: TabValue }) => {
  const [marginCall, setMarginCall] = useState({
    entryPrice: 31000,
    initialMargin: 170000,
    contracts: 1,
    side: 0, // side = 0: Long, side = 1: short
  });

  return (
    <CustomTabPanel value={tabVal} index={TabValue.MarginCallChecker}>
      <Grid container direction={"column"} spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant='h6' gutterBottom>
                Liquidation Price Calculator
              </Typography>
              <Box sx={{ mb: 3 }}>
                <TextField
                  fullWidth
                  label='Entry Price'
                  type='number'
                  value={marginCall.entryPrice}
                  onChange={(e) =>
                    setMarginCall({
                      ...marginCall,
                      entryPrice: Number(e.target.value),
                    })
                  }
                />
              </Box>
              <Box sx={{ mb: 3 }}>
                <TextField
                  fullWidth
                  label='Initial Margin'
                  type='number'
                  value={marginCall.initialMargin}
                  onChange={(e) =>
                    setMarginCall({
                      ...marginCall,
                      initialMargin: Number(e.target.value),
                    })
                  }
                />
              </Box>
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
                  marginCall.entryPrice,
                  marginCall.initialMargin,
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
