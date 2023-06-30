import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { AppProvider } from './store';

ReactDOM.createRoot(document.getElementById('root')).render(

    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>

);
