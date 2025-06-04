import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Tabs,
  Tab,
} from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`product-tabpanel-${index}`}
      aria-labelledby={`product-tab-${index}`}
      {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const Product = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Typography variant='h4' component='h1' gutterBottom>
        Product Overview
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 3 }}>
        <Tabs value={value} onChange={handleChange} aria-label='product tabs'>
          <Tab label='Overview' />
          <Tab label='History' />
          <Tab label='Specifications' />
          <Tab label='Market Data' />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant='h6' gutterBottom>
                  What is Nikkei 225 Mini?
                </Typography>
                <Typography paragraph>
                  The Nikkei 225 Mini is a futures contract that tracks the
                  Nikkei 225 Stock Average, Japan's premier stock market index.
                  It offers traders a more accessible way to participate in the
                  Japanese equity market with smaller contract sizes and lower
                  margin requirements compared to the standard Nikkei 225
                  futures.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant='h6' gutterBottom>
                  Key Benefits
                </Typography>
                <Typography component='div'>
                  <ul>
                    <li>Lower margin requirements</li>
                    <li>24/5 trading hours</li>
                    <li>High liquidity</li>
                    <li>Direct exposure to Japanese market</li>
                    <li>Hedging capabilities</li>
                  </ul>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Timeline>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant='h6'>2010</Typography>
              <Typography>Launch of Nikkei 225 Mini futures</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant='h6'>2015</Typography>
              <Typography>
                Introduction of electronic trading platform
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant='h6'>2020</Typography>
              <Typography>
                Record trading volume and market participation
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant='h6' gutterBottom>
                  Contract Specifications
                </Typography>
                <Typography component='div'>
                  <ul>
                    <li>Contract Size: ¥100 per index point</li>
                    <li>Minimum Margin: ¥100,000</li>
                    <li>Trading Hours: 24/5 (Monday to Friday)</li>
                    <li>Contract Months: March, June, September, December</li>
                    <li>Last Trading Day: Second Friday of contract month</li>
                  </ul>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant='h6' gutterBottom>
                  Trading Requirements
                </Typography>
                <Typography component='div'>
                  <ul>
                    <li>Margin Account Required</li>
                    <li>Minimum Account Balance: ¥500,000</li>
                    <li>Risk Disclosure Agreement</li>
                    <li>Market Knowledge Assessment</li>
                  </ul>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={value} index={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant='h6' gutterBottom>
                  Market Statistics
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <Typography variant='subtitle1'>
                      Average Daily Volume
                    </Typography>
                    <Typography variant='h4'>50,000+</Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Typography variant='subtitle1'>Open Interest</Typography>
                    <Typography variant='h4'>100,000+</Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Typography variant='subtitle1'>
                      Market Participants
                    </Typography>
                    <Typography variant='h4'>1,000+</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>
    </Box>
  );
};

export default Product;
