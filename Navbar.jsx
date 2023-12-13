import { AppBar, Button, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link from React Router
import React from 'react';

function Navbar() {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Button variant='contained' color='error'>
            <Link to={'/loaddata'} style={{color : 'black'}}>
              Load Data
            </Link>
          </Button>
          &nbsp;&nbsp;
          <Button variant='contained' color='error'>
            <Link to= {'/'} style={{color : 'black'}}>
              Home
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
