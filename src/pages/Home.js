import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../store/context/AuthContext';
import { UseFireStore } from '../store/context/UseFireStore';
// import { auth } from '../store/context/FireContext'; // * if we will uncomment it

const Home = () => {
  const { user } = useContext(AuthContext);
  const {userInfo}=UseFireStore()
  const navigate = useNavigate();
  return user ? (
    <div>
      "hello"
      <ul>
      {userInfo.map((item) => {
        return <li  key={item.id} > {item.email}  and {item.id}</li>;
      })}
      </ul>
      </div>
  ) : (
    (setTimeout(() => navigate('/signIn')), 3000)
  );
};

export default Home;
