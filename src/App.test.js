import App from './App';
import { BrowserRouter } from 'react-router-dom';

const setUp = () => render(<BrowserRouter><App /></BrowserRouter>);
let component;

beforeEach(() => {
  component = setUp();
});

describe('APP COMPONENT', () => {
  it('SNAPSHOT', () => {
    expect(component).toMatchSnapshot();
  });
});

