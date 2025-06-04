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
          <Button color='inherit' component={RouterLink} to='/'>
            Home
          </Button>
          <Button color='inherit' component={RouterLink} to='/product'>
            Product
          </Button>
          <Button color='inherit' component={RouterLink} to='/strategies'>
            Strategies
          </Button>
          <Button color='inherit' component={RouterLink} to='/market-events'>
            Market Events
          </Button>
          <Button color='inherit' component={RouterLink} to='/resources'>
            Resources
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
