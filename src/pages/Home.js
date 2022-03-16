import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../store/context/AuthContext';
// import { auth } from '../store/context/FireContext'; // * if we will uncomment it

const Home = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  return user ? (
    <div>"hello"</div>
  ) : (
    (setTimeout(() => navigate('/signIn')), 3000)
  );
};

export default Home;
