import { Container } from 'react-bootstrap';

import { Header } from './components/Header';
import { NewsList } from './components/NewsList';

const App = () => (
  <Container className="p-3">
    <Header />
    <NewsList />
  </Container>
);

export default App;
