import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Kitchen from '../images/kitchen.jpeg';

const lightColor = 'rgba(255, 255, 255, 0.7)';


function Header(props) {
  const { onDrawerToggle } = props;

  const [selectedTab, setSelectedTab] = React.useState(0)

  const handleTabs = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <React.Fragment>
      <img src={Kitchen} alt="Kitchen" height="450px" />
      <AppBar component="div" color="default" position="static" elevation={0} sx={{ zIndex: 0 }}>
        <Tabs value={selectedTab} onChange={handleTabs} textColor="inherit">
          <Tab label="Spice Chart" />
          <Tab label="My Kitchen" /> 
          <Tab label="Add Product" />
          <Tab label="Add Recipe" />
          <Tab label="Generate Recipe" />
        </Tabs>
      </AppBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  onDrawerToggle: PropTypes.func.isRequired,
};

export default Header;