import './App.scss';
import Header from './components/particials/Header';
import Footer from './components/particials/Footer';
import styled from 'styled-components';
import GalleryPage from './pages/GalleryPage';


const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

function App() {
  return (
    <StyledDiv className="App">
      <Header/>
      <main>
        <GalleryPage/>
      </main>
      <Footer/>
    </StyledDiv>
  );
}

export default App;
