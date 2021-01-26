import { Route, Redirect } from 'react-router-dom';

import GalleryPage from '../pages/GalleryPage';
import PageNotFound from '../pages/PageNotFound';

const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to='/gallery' />
  },
  {
    path: '/gallery',
    component: GalleryPage,
    exact: true
  },
  {
    path: '*',
    component: PageNotFound
  }
];

const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={(props) => <route.component {...props} />} />
);

export { routes, RouteWithSubRoutes };
