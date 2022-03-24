import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../store/context/FireContext';
import logIn_img from "../assets/mobile-login-concept-illustration_114360-83.webp" 

const initialState = { email: '', password: '' };

const LogIn = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [input, setInput] = useState(initialState);

  const handleChange = ({ target }) => {
    setInput({ ...input, [target.name]: target.value });
    setError('');
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(input.email, input.password);
      setInput(initialState);
      navigate('/');
    } catch (error) {
      const err = error.message.split(': ')[1].split(' (');
      setError(err[0]);
      console.log(error.message);
    }
  };
  return (
    <div className='row align-items-center'>
      <div className='login__img col-6' >
    <img src={logIn_img} alt='' className='w-100'/>
      </div>
      <form onSubmit={handleSubmit} className="col-6 ">
        <div className='mb-3'>
          <label htmlFor='exampleInputEmail1' className='form-label'>
            Email address
          </label>
          <input
            type='email'
            name='email'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            onChange={handleChange}
          />
          <div id='emailHelp' className='form-text'>
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleInputPassword1' className='form-label'>
            Password
          </label>
          <input
            type='password'
            name='password'
            className='form-control'
            id='exampleInputPassword1'
            onChange={handleChange}
          />
        </div>
        <div className='mb-3 form-check'>
          <input
            type='checkbox'
            className='form-check-input'
            id='exampleCheck1'
          />
          <label className='form-check-label' htmlFor='exampleCheck1'>
            Check me out
          </label>
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
        <p className='form__error'>{error}</p>
      </form>
    </div>
  );
};

export default LogIn;
