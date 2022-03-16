import Routing from './utils/Routing';
import './App.scss';
import NavBar from './layout/NavBar';

function App() {
  return (
    <div className='container'>
      <NavBar />
      <Routing />
    </div>
  );
}

export default App;
