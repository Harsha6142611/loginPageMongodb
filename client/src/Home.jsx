import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate('/login');
    }
    const navigateToRegister = () => {
        navigate('/register');
    }
  return (
    <div>
      <button onClick={navigateToLogin}>Login</button>
      <button onClick={navigateToRegister}>SignIn</button>
    </div>
  );
}

export default Home;
