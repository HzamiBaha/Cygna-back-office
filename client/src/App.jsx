import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Auth from './components/Auth/Auth'
import Dashboard from './components/Dashboard/Dashboard';
import axios from 'axios';
import Allposts from './components/Dashboard/Allposts';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      setIsLoggedIn(false)
      console.log('no token')
    } else {
      console.log(token)
      setIsLoggedIn(true)

    }
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <Navigate to="/dashboard" />
              ) : (
                <Auth />
              )
            }
          />

        </Routes>
        <Dashboard >
          <Routes>

            <Route
              path="/dashboard"
              element={
                <Allposts />
              }
            />
      


          </Routes>
        </Dashboard>
      </Router>
    </div>
  );
}

export default App;
