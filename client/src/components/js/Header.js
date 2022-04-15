import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Kitchen from '../images/kitchen.jpeg';
// import SpiceChartData from './SpiceChartData';
import MyKitchen from './MyKitchen';
import AddIngredient from './AddIngredient';
import AddRecipe from './AddRecipe';
import GenerateRecipe from './GenerateRecipe';

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
      {/* { selectedTab === 0 && <SpiceChartData /> } */}
      { selectedTab === 1 && <MyKitchen /> }
      { selectedTab === 2 && <AddIngredient /> }
      { selectedTab === 3 && <AddRecipe /> }
      { selectedTab === 4 && <GenerateRecipe /> }
    </React.Fragment>
  );
}

Header.propTypes = {
  onDrawerToggle: PropTypes.func.isRequired,
};

export default Header;