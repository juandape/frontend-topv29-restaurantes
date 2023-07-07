import Delete from '../delete/Delete'; //delete restaurant
import FormAdd from '../formadd/FormAdd'; //add restaurant
import FormEdit from '../formedit/FormEdit'; //edit restaurant
import Addfood from '../formaddfood/Addfood'; //add food
import Formularioedit from '../formularioedit/Formularioedit'; //edit food
import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import './admintools.css';
import React from 'react';

function AdminTools() {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleTabChange = (e, tabIndex) => {
    setCurrentTabIndex(tabIndex);
  };


  return (
    <>
      <React.Fragment>
        <div>
          <Box>
            <Tabs value={currentTabIndex} onChange={handleTabChange} centered>
              <Tab label='ADD RESTAURANT' />
              <Tab label='EDIT RESTAURANT' />
              <Tab label='DELETE RESTAURANT' />
              <Tab label='ADD FOOD' />
              <Tab label='EDIT FOOD' />
            </Tabs>
          </Box>
        </div>
        {currentTabIndex === 0 && (
          <Box sx={{ p: 3 }}>
            <FormAdd />
          </Box>
        )}
        {currentTabIndex === 1 && (
          <Box sx={{ p: 3 }}>
            <FormEdit />
          </Box>
        )}
        {currentTabIndex === 2 && (
          <Box sx={{ p: 3 }}>
            <Delete />
          </Box>
        )}
        {currentTabIndex === 3 && (
          <Box sx={{ p: 3 }}>
            <Addfood />
          </Box>
        )}
        {currentTabIndex === 4 && (
          <Box sx={{ p: 3 }}>
            <Formularioedit />
          </Box>
        )}
      </React.Fragment>
    </>
  );
}

export default AdminTools;
