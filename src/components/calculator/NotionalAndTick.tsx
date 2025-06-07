import { TabValue } from "../../pages/Calculator";
import CustomTabPanel from "../global/TabPanel";
import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import {
  notionalCalculation,
  tickCalculation,
} from "../../../utils/calculation/notional";

const NotionalAndTick = ({ tabVal }: { tabVal: TabValue }) => {
  const [contractSize, setContractSize] = useState(1);
  const [notionalPrice, setNotionalPrice] = useState(31000);

  return (
    <CustomTabPanel value={tabVal} index={TabValue.NotionanNdTick}>
      <Grid container direction={"column"} spacing={3}>
        <Grid item container direction={"column"}>
          <Typography variant='h6'>Contract Size</Typography>
          <TextField
            value={contractSize}
            onChange={(e) => setContractSize(Number(e.target.value))}
          />
        </Grid>

        <Grid container item spacing={2}>
          <Grid item xs={6}>
            <Card>
              <CardContent>
                <Typography variant='h6' gutterBottom>
                  Tick Calculator
                </Typography>
                <Box sx={{ mb: 3 }}></Box>
                <Typography variant='h6' gutterBottom>
                  Tick Value
                </Typography>
                <Typography variant='h4' color={"primary"}>
                  ¥{tickCalculation(contractSize)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardContent>
                <Typography variant='h6' gutterBottom>
                  Tick Value
                </Typography>
                <Typography variant='body1'>
                  Understand price movement impact, given that tick size of
                  Nikkei 225 Mini is ¥5
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid container item spacing={2}>
          <Grid item xs={6}>
            <Card>
              <CardContent>
                <Typography variant='h6' gutterBottom>
                  Notional Calculator
                </Typography>
                <Box sx={{ mb: 3 }}>
                  <TextField
                    fullWidth
                    label='Contract Price'
                    type='number'
                    value={notionalPrice}
                    onChange={(e) => setNotionalPrice(Number(e.target.value))}
                  />
                </Box>
                <Typography variant='h6' gutterBottom>
                  Total Notional Value
                </Typography>
                <Typography variant='h4' color={"primary"}>
                  ¥{notionalCalculation(notionalPrice, contractSize)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardContent>
                <Typography variant='h6' gutterBottom>
                  Notional Value
                </Typography>
                <Typography variant='body1'>
                  Total market exposure, calculated by 100x of price.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </CustomTabPanel>
  );
};

export default NotionalAndTick;
