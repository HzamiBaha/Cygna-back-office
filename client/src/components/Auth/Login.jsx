import React, { useState } from 'react';
import axios from 'axios';
import "./auth.css"
import { useNavigate } from 'react-router-dom';


const Login = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  function handleClick() {
    props.toggleAuthorized();
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('//localhost:3000/api/user/login', { email, password });
      const token = response.data;
      localStorage.setItem('token', token);
      // Redirect to dashboard
      navigate('/dashboard');

    } catch (error) {
      console.log(error.response.data);
      setError(error.response.data);
    }
  };

  return (
    <div className='context'>
      <h2>Login</h2>
      <form className='form' onSubmit={handleSubmit}>
        <label className='auth-label'>
          Email
          <input className='auth-input' type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <br />
        <label className='auth-label'>
          Password
          <input className='auth-input' type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <br />
        <button className='auth-button' type="submit">Login</button>
        {error && <p>{error}</p>}
        <p className='redirect'>
          Don't have an account ?{' '}

          <button onClick={handleClick} className='redirect-button' >Register</button>

        </p>
      </form>
    </div>
  );
};

export default Login;
