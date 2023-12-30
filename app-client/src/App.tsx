import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

import Login from './pages/Login';
import CarList from './pages/cars/CarsList';
import CarCreate from './pages/cars/CarsCreate';
import CarDetail from './pages/cars/CarsDetail';
import CarUpdate from './pages/cars/CarsUpdate';
import { theme } from './config/theme';

const router = createBrowserRouter([
  {
    path: '/',
    element: <CarList />,
  },
  {
    path: '/detail/:id',
    element: <CarDetail />,
  },
  {
    path: '/create',
    element: <CarCreate />,
  },
  {
    path: '/update/:id',
    element: <CarUpdate />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
