import Routing from './utils/Routing';
import NavBar from './layout/NavBar';
import { Container } from 'react-bootstrap';
import './App.scss';

function App() {
  return (
    <Container >
      <NavBar />
      <Routing />
    </Container>
  );
}

export default App;
