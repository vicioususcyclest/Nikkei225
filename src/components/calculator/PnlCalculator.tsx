import {
  Box,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { TabValue } from "../../pages/Calculator";
import { useState } from "react";
import pnlCalculation from "../../../utils/calculation/pnl";
import CustomTabPanel from "../global/TabPanel";

const PnlCalculator = ({ tabVal }: { tabVal: TabValue }) => {
  const [pnl, setPnl] = useState({
    contract: 1,
    enterPrice: 29000,
    exitPrice: 29100,
  });

  return (
    <CustomTabPanel value={tabVal} index={TabValue.PnL}>
      <Grid spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant='h6' gutterBottom>
                Profit & Loss (P&L) Calculator
              </Typography>
              <Box sx={{ mb: 3 }}>
                <TextField
                  fullWidth
                  label='Enterance Price'
                  type='number'
                  value={pnl.enterPrice}
                  onChange={(e) =>
                    setPnl({
                      ...pnl,
                      enterPrice: Number(e.target.value),
                    })
                  }
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label='Exit Price'
                  type='number'
                  value={pnl.exitPrice}
                  onChange={(e) =>
                    setPnl({
                      ...pnl,
                      exitPrice: Number(e.target.value),
                    })
                  }
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label='Number of Contracts'
                  type='number'
                  value={pnl.contract}
                  onChange={(e) =>
                    setPnl({
                      ...pnl,
                      contract: Number(e.target.value),
                    })
                  }
                />
              </Box>
              <Typography variant='h6' gutterBottom>
                Potential Profit/Loss (Without transaction cost)
              </Typography>
              <Typography
                variant='h4'
                color={
                  pnlCalculation(pnl.exitPrice, pnl.enterPrice, pnl.contract) >=
                  0
                    ? "primary"
                    : "red"
                }>
                {pnlCalculation(pnl.exitPrice, pnl.enterPrice, pnl.contract) >=
                0
                  ? "Gaining "
                  : "Losing "}
                ¥{pnlCalculation(pnl.exitPrice, pnl.enterPrice, pnl.contract)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </CustomTabPanel>
  );
};

export default PnlCalculator;
