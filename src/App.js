import Routing from './utils/Routing';
import NavBar from './layout/NavBar';
import './App.scss';

function App() {
  return (
    <div className='container'>
      <NavBar />
      <Routing />
    </div>
  );
}

export default App;
