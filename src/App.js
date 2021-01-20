import './App.scss';
import Header from './components/particials/Header';
import Footer from './components/particials/Footer';
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

import {routes, RouteWithSubRoutes} from './routes/routes';
import {AppDiv} from './styled/App';


function App() {
  return (
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
}

export default App;
