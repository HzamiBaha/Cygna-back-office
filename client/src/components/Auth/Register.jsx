import React, { useState } from 'react';
import axios from 'axios';
import "./auth.css"

const Register = (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    function handleClick() {
        props.toggleAuthorized();
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('//localhost:3000/api/user/register', { name, email, password });
            console.log(response.data);
            // Redirect to login page
            props.toggleAuthorized();
        } catch (error) {
            console.log(error.response.data);
            setError(error.response.data.message);
        }
    };

    return (
        <div className='context'>
            <h2>Register</h2>
            <form className='form' onSubmit={handleSubmit}>
                <label className='auth-label'>
                    Name
                    <input className='auth-input' type="text" value={name} onChange={(event) => setName(event.target.value)} />
                </label>
                <br />
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
                <button className='auth-button' type="submit">Register</button>
                {error && <p>{error}</p>}
                <p className='redirect'>
                    Don't have an account ?{' '}

                    <button onClick={handleClick} className='redirect-button' >Login</button>

                </p>
            </form>
        </div>
    )
}

export default Register