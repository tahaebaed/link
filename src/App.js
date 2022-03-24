import Routing from './utils/Routing';
import NavBar from './layout/NavBar';
import './App.scss';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <NavBar />
      <Routing />
    </Container>
  );
}

export default App;
