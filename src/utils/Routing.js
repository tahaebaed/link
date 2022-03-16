import { Route, Routes } from 'react-router-dom';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import LogIn from '../pages/LogIn';
import NotFound from '../pages/NotFound';

function Routing() {
  return (
    <Routes>
      <Route path='/signUp' element={<SignUp />} />
      <Route path='/signIn' element={<LogIn />} />
      <Route exact path='/' element={<Home />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default Routing;
