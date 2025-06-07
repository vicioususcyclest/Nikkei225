import { useState } from "react";
import { StrategiesTab } from "../../pages/Strategies";
import TabPanel from "../global/TabPanel";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Box,
} from "@mui/material";
import { compareNormalizedNikkeiContracts } from "../../../utils/calculation/compareNormalizedNikkeiContracts";

const ContractComparator = ({ tabVal }: { tabVal: StrategiesTab }) => {
  const [quantoSpread, setQuantoSpread] = useState({
    nikkeiPrice: 37500,
    cmePrice: 38005,
    usdjpy: 150,
  });

  const result = compareNormalizedNikkeiContracts(
    quantoSpread.cmePrice,
    quantoSpread.nikkeiPrice,
    quantoSpread.usdjpy
  );

  return (
    <TabPanel value={tabVal} index={StrategiesTab.CmeOseComparison}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant='h6' gutterBottom>
                CME Macro Nikkei & OSE Nikkei 225 Mini's contract Comparator
              </Typography>
              <Box sx={{ mb: 3 }}>
                <TextField
                  fullWidth
                  label='Nikkei 225 Mini Contract Price'
                  type='number'
                  value={quantoSpread.nikkeiPrice}
                  onChange={(e) =>
                    setQuantoSpread({
                      ...quantoSpread,
                      nikkeiPrice: Number(e.target.value),
                    })
                  }
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label='CME Micro Nikkei 225 Future Price'
                  type='number'
                  value={quantoSpread.cmePrice}
                  onChange={(e) =>
                    setQuantoSpread({
                      ...quantoSpread,
                      cmePrice: Number(e.target.value),
                    })
                  }
                  sx={{ mb: 2 }}
                />
              </Box>
              {/* <Typography variant='body1'>
                Quanto Spread: {result.spreadJPY.toFixed(0)}
              </Typography> */}
              <Typography variant='body1'>
                OSE:CME Expose Ratio: {result.oseCmeRatio.toFixed(4)}
              </Typography>
              <Typography variant='body1'>
                CME Micro contract price needed to match OSE notional: $
                {result.scaledCmeIndexNeeded.toFixed(0)} USD
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </TabPanel>
  );
};

export default ContractComparator;
