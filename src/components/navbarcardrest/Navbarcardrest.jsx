import React, { useState } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import './navbarcardrest.css';
import MenuRest from '../menurest/Menurest';
import Booking from '../booking/Booking';
import Feedback from '../feedback/Feedback';
import RestOverview from '../restoverview/Restoverview';
import Restgallery from '../restgallery/Restgallery';

function NavBarCardRest() {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleTabChange = (e, tabIndex) => {
    setCurrentTabIndex(tabIndex);
  };

  return (
    <React.Fragment>
      <div>
        <Box>
          <Tabs value={currentTabIndex} onChange={handleTabChange} centered>
            <Tab label='OUR MENU' />
            <Tab label='OVERVIEW' />
            <Tab label='GALLERY' />
            <Tab label='LOCATION' />
            <Tab label='BOOK A TABLE' />
            <Tab label='REVIEWS' />
          </Tabs>
        </Box>
      </div>
      {currentTabIndex === 0 && (
        <Box sx={{ p: 3 }}>
          <MenuRest />
        </Box>
      )}
      {currentTabIndex === 1 && (
        <Box sx={{ p: 3 }}>
          <RestOverview />
        </Box>
      )}
      {currentTabIndex === 2 && (
        <Box sx={{ p: 3 }}>
          <Restgallery />
        </Box>
      )}



      {currentTabIndex === 3 && (
        <Box sx={{ p: 3 }}>

            <img src='/images/mapa.jpg' alt='img' className='location__img' />

        </Box>
      )}
      {currentTabIndex === 4 && (
        <Box sx={{ p: 3 }}>
          <Booking />
        </Box>
      )}
      {currentTabIndex === 5 && (
        <Box sx={{ p: 3 }}>
          <Feedback />
        </Box>
      )}
    </React.Fragment>
  );
}

export default NavBarCardRest;
