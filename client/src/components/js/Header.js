import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Kitchen from '../images/kitchen.jpeg';
import SpiceChart from './SpiceChart';
import MyKitchen from './MyKitchen';
import AddIngredients from './AddIngredients';
import AddRecipe from './AddRecipe';
import GenerateRecipe from './GenerateRecipe';

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
          <Tab label="Add Ingredients" />
          <Tab label="Add Recipe" />
          <Tab label="Generate Recipe" />
        </Tabs>
      </AppBar>
      { selectedTab === 0 && <SpiceChart /> }
      { selectedTab === 1 && <MyKitchen /> }
      { selectedTab === 2 && <AddIngredients /> }
      { selectedTab === 3 && <AddRecipe /> }
      { selectedTab === 4 && <GenerateRecipe /> }
    </React.Fragment>
  );
}

Header.propTypes = {
  onDrawerToggle: PropTypes.func.isRequired,
};

export default Header;