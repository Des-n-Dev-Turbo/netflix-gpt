import { createBrowserRouter } from 'react-router-dom';

import Browse from '@components/Browse';
import Login from '@components/Login';

import UnauthenticatedRoutes from './UnauthenticatedRoutes';
import AuthenticatedRoutes from './AuthenticatedRoutes';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <UnauthenticatedRoutes>
        <Login />
      </UnauthenticatedRoutes>
    ),
  },
  {
    path: '/browse',
    element: (
      <AuthenticatedRoutes>
        <Browse />
      </AuthenticatedRoutes>
    ),
  },
]);

export default router;
