import GalleryPage from './pages/GalleryPage';

import {Footer, Header} from './components';

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
