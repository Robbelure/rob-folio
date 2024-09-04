import React from 'react';
import { AppBar, Tabs, Tab } from '@mui/material';


const Navbar = () => {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
  
    return (
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Home" />
          <Tab label="About" />
          <Tab label="Projects" />
          <Tab label="Contact" />
        </Tabs>
      </AppBar>
    );
  };
  
  export default Navbar;