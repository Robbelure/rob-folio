import React from 'react';
import { AppBar, Tabs, Tab } from '@mui/material';

const Navbar = () => {
  const [value, setValue] = React.useState(0);

  // Fjern event siden den ikke brukes
  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static">
      <Tabs value={value} onChange={(_, newValue) => handleChange(newValue)}>
        <Tab label="Home" />
        <Tab label="Projects" />
      </Tabs>
    </AppBar>
  );
};

export default Navbar;