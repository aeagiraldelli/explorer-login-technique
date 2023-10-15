import { BrowserRouter } from 'react-router-dom';

import { useAuth } from '../hooks/auth';
import { USER_ROLE } from '../utils/userRoles';

import { AdminRoutes } from './admin.routes';
import { AuthRoutes } from './auth.routes';
import { CustomerRoutes } from './customer.routes';
import { SaleRoutes } from './sale.routes';

export function Routes() {
  const { user } = useAuth();

  function AccessRoute() {
    if (user) {
      switch (user.role) {
        case USER_ROLE.ADMIN:
          return <AdminRoutes />;

        case USER_ROLE.SALE:
          return <SaleRoutes />;

        case USER_ROLE.CUSTOMER:
        default:
          return <CustomerRoutes />;
      }
    } else {
      return <AuthRoutes />;
    }
  }

  return <BrowserRouter>{AccessRoute()}</BrowserRouter>;
}
