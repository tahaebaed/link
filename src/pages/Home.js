import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../store/context/AuthContext'
import { auth } from '../store/context/FireContext';

const Home = () => {
  const {user}=useContext(AuthContext)
  const navigate=useNavigate()
  const logOut=()=>{
    auth.signOut();
    if(!user){    navigate("/signIn")  }
  }
  console.log(user,"hello from home");
  return (
    <div> "hello"
    <button onClick={logOut}>LogOut</button>
    </div>
  )
}

export default Home