import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import "./dashboard.css"
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import logo from "/logo.png"
import Allposts from './Allposts';

const Dashboard = ({ children }) => {

    const navigate = useNavigate();



    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/');
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    }

    return (
        <div className='dashboard-layout'>
            <div className="dashboard-nav">
                <img src="logo.png" className='dashboard-home-button' />
                <button onClick={handleLogout}> <ExitToAppIcon /> </button>
            </div>
            <div className="dashboard-container">
                {children}
            </div>
        </div>
    );
};

export default Dashboard;


