import {Route} from 'react-router-dom';
import GalleryPage from '../pages/GalleryPage';
import ImageModal from '../components/ImageModal';
import PageNotFound from '../pages/PageNotFound';

const routes = [
  {
    path: '/gallery',
    component: GalleryPage,
    routes: {
      path: '/gallery/:id',
      component: ImageModal,
    }
  },
  {
    path: '*',
    component: PageNotFound,
  }
];

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes}/>
      )}
    />
  );
}

export {
  routes, RouteWithSubRoutes
};

