import { Switch, useLocation, Route } from 'react-router-dom';
import { Hash, LocationKey, Pathname, Search } from 'history';

import { Footer, Header, ImageModal } from './components';

import { routes, RouteWithSubRoutes } from './routes/routes';
import { AppDiv } from './styled/App';
import './App.scss';

type ILocationState = {
  pathname: Pathname;
  search: Search;
  state?: any;
  hash: Hash;
  key?: LocationKey;
};

type bgT = {
  background: string;
};

const App = () => {
  const location: ILocationState | bgT = useLocation();
  const backgroundPage = location.state && location.state.background;

  return (
    <AppDiv>
      <Header />
      <main>
        <Switch location={backgroundPage || location}>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
        {backgroundPage && (
          <Route path="/gallery/:id" children={<ImageModal />} />
        )}
      </main>
      <Footer />
    </AppDiv>
  );
};

export default App;
