import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Mock data for the chart
const mockData = [
  { time: "09:00", price: 28000 },
  { time: "10:00", price: 28200 },
  { time: "11:00", price: 28100 },
  { time: "12:00", price: 28300 },
  { time: "13:00", price: 28400 },
  { time: "14:00", price: 28350 },
  { time: "15:00", price: 28500 },
];

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant='h2' component='h1' gutterBottom>
          Nikkei 225 Mini Futures
        </Typography>
        <Typography variant='h5' color='text.secondary' paragraph>
          Trade Japan's premier index with enhanced accessibility and
          flexibility
        </Typography>
      </Box>

      {/* Live Price Chart */}
      <Card sx={{ mb: 6 }}>
        <CardContent>
          <Typography variant='h6' gutterBottom>
            Live Nikkei 225 Mini Price
          </Typography>
          <Box sx={{ height: 400 }}>
            <ResponsiveContainer width='100%' height='100%'>
              <LineChart data={mockData}>
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='time' />
                <YAxis />
                <Tooltip />
                <Line type='monotone' dataKey='price' stroke='#1976d2' />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <Grid container spacing={3} sx={{ mb: 6 }}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant='h6' gutterBottom>
                Margin Requirements
              </Typography>
              <Typography variant='h4'>¥100,000</Typography>
              <Typography color='text.secondary'>
                Minimum margin per contract
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant='h6' gutterBottom>
                Trading Hours
              </Typography>
              <Typography variant='h4'>24/5</Typography>
              <Typography color='text.secondary'>Monday to Friday</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant='h6' gutterBottom>
                Contract Size
              </Typography>
              <Typography variant='h4'>¥100</Typography>
              <Typography color='text.secondary'>Per index point</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Call to Action */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Button variant='contained' size='large' sx={{ mr: 2 }}>
          Learn More
        </Button>
        <Button variant='outlined' size='large'>
          View Strategies
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
