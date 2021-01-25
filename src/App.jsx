import { Switch, useLocation, Route } from 'react-router-dom';

import { Footer, Header, ImageModal } from './components';

import { routes, RouteWithSubRoutes } from './routes/routes';
import { AppDiv } from './styled/App';
import './App.scss';

const App = () => {
  const location = useLocation();
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
