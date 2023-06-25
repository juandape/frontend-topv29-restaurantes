import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import './navbarcardrest.css';
import MenuRest from '../menurest/Menurest';
import Booking from '../booking/Booking';
import Feedback from '../feedback/Feedback';
import RestOverview from '../restoverview/Restoverview';

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
      {currentTabIndex === 2 && <Box sx={{ p: 3 }}></Box>}
      {currentTabIndex === 3 && (
        <Box sx={{ p: 3 }}>
          <div className='cardrest__logo'>
        <img
          src='../public/images/mapa.jpg'
          alt='img'
          className='cardrest__img'
            />
            </div>
        </Box>)}
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

{
  /* <div>
        <nav className='cardrest__nav'>
          <div className='cardrest__nav--title'>ORDER ONLINE</div>
          <div className='cardrest__nav--title'>OVERVIEW</div>
          <div className='cardrest__nav--title'>GALLERY</div>
            <div className='cardrest__nav--title'>LOCATION</div>
          <NavLink to='/booking'>
            <div className='cardrest__nav--title'>BOOK A TABLE</div>
          </NavLink>
          <div>
            <NavLink to='/feedback'>
              <div className='cardrest__nav--title'>REVIEWS</div>
            </NavLink>
          </div>
        </nav>
      </div> */
}
