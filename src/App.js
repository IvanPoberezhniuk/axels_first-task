import Header from './components/particials/Header';
import Footer from './components/particials/Footer';
import GalleryPage from './pages/GalleryPage';

import './App.scss';
import {AppDiv} from './styled/App';

const App = () => (
  <AppDiv className="App">
    <Header/>
    <main>
      <GalleryPage/>
    </main>
    <Footer/>
  </AppDiv>
);

export default App;
