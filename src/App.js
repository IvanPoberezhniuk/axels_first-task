import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

import {Footer, Header} from './components';

import {routes, RouteWithSubRoutes} from './routes/routes';
import {AppDiv} from './styled/App';
import './App.scss';

const App = () => (
  <Router>
    <AppDiv className="App">
      <Header/>
      <main>
        <Switch>
          {routes.map((route, i) =>
            (<RouteWithSubRoutes key={i} {...route}/>))
          }
        </Switch>
      </main>
      <Footer/>
    </AppDiv>
  </Router>
);

export default App;
