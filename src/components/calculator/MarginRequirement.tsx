import { useState } from "react";
import { TabValue } from "../../pages/Calculator";
import CustomTabPanel from "../global/TabPanel";
import {
  Box,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { calculateOSEMargin } from "../../../utils/calculation/marginCalculation.ts";

const MarginRequirement = ({ tabVal }: { tabVal: TabValue }) => {
  const [margin, setMargin] = useState({
    contracts: 1,
    marginPerContract: 170000,
  });

  return (
    <CustomTabPanel value={tabVal} index={TabValue.MarginRequirement}>
      <Grid spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant='h6' gutterBottom>
                Required Margin Calculator
              </Typography>
              <Box sx={{ mb: 3 }}>
                <TextField
                  fullWidth
                  label='Number of Contracts'
                  type='number'
                  value={margin.contracts}
                  onChange={(e) =>
                    setMargin({ ...margin, contracts: Number(e.target.value) })
                  }
                />
              </Box>
              <Typography variant='h6' gutterBottom>
                Required Margin
              </Typography>
              <Typography variant='h4' color={"primary"}>
                ¥
                {calculateOSEMargin(margin.contracts, margin.marginPerContract)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </CustomTabPanel>
  );
};

export default MarginRequirement;
