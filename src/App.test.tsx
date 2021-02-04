import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { render } from 'enzyme';

let component: cheerio.Cheerio;
const setUp = () => render(<BrowserRouter><App /></BrowserRouter>);

beforeEach(() => {
  component = setUp();
});

describe('App component', () => {
  it('should take snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});

