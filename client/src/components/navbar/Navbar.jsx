import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { BsGlobe } from 'react-icons/bs';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Book-A-Hotel
          </Typography>
          <Button color="inherit"><BsGlobe />English</Button>
          <Button color="inherit">List your property</Button>
          <Button color="inherit">Support</Button>
          <Button color="inherit">Trips</Button>
          <Button color="inherit">Sign in</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}