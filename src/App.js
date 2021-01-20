import './App.scss';
import Header from './components/particials/Header';
import Footer from './components/particials/Footer';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

import {routes, RouteWithSubRoutes} from './routes/routes';


const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

function App() {
  return (
    <Router>
      <StyledDiv className="App">
        <Header/>
        <main>
          <Switch>
            {routes.map((route, i) =>
              (<RouteWithSubRoutes key={i} {...route}/>))
            }
          </Switch>
        </main>
        <Footer/>
      </StyledDiv>
    </Router>
  );
}

export default App;
