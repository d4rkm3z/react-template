import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

import theme from '~/configs/theme';
import { App } from '~/pages/app';
import { store } from '~/store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);



export const Root: FC<unknown> = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </Provider>
);
