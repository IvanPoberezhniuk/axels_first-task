import './App.scss';

import styled from 'styled-components';

import Header from './components/particials/Header';
import Footer from './components/particials/Footer';
import GalleryPage from './pages/GalleryPage';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const App = () => (
  <StyledDiv className="App">
    <Header/>
    <main>
      <GalleryPage/>
    </main>
    <Footer/>
  </StyledDiv>
);

export default App;
