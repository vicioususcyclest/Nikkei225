import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          Nikkei 225 Mini
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button color='inherit' component={RouterLink} to='/Nikkei225/'>
            Home
          </Button>
          <Button color='inherit' component={RouterLink} to='/Nikkei225/product'>
            Product
          </Button>
          <Button color='inherit' component={RouterLink} to='/Nikkei225/calculator'>
            Calculators
          </Button>
          <Button color='inherit' component={RouterLink} to='/Nikkei225/strategies'>
            Strategies
          </Button>
          <Button color='inherit' component={RouterLink} to='/Nikkei225/market-events'>
            Market Events
          </Button>
          <Button color='inherit' component={RouterLink} to='/Nikkei225/resources'>
            Resources
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
