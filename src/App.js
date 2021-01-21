import {
  Switch, useLocation, Route
} from 'react-router-dom';

import {Footer, Header, ImageModal} from './components';

import {routes, RouteWithSubRoutes} from './routes/routes';
import {AppDiv} from './styled/App';
import './App.scss';

const App = () => {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <AppDiv className="App">
      <Header/>
      <main>
        <Switch location={background || location}>
          {routes.map((route, i) =>
            (<RouteWithSubRoutes key={i} {...route}/>))
          }
        </Switch>
        {background && <Route path="/gallery/:id" children={<ImageModal/>}/>}
      </main>
      <Footer/>
    </AppDiv>
  );
};

export default App;
