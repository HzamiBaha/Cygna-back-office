import React from 'react'
import Login from './Login'
import "./auth.css"
import Register from './register'

import { useState } from 'react';

const Auth = () => {
    const [isAuthorized, setIsAuthorized] = useState(false);

    function toggleAuthorized() {
        setIsAuthorized(!isAuthorized);
    }

    return (
        <div className="auth-layout">
            <div className="auth-image">

            </div>
            <div className="auth-container">
                {isAuthorized ? <Register isAuthorized={isAuthorized} toggleAuthorized={toggleAuthorized} /> : <Login isAuthorized={isAuthorized} toggleAuthorized={toggleAuthorized} />}

            </div>
        </div>
    )
}

export default Auth