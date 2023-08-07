// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import AuthForm from './components/AuthForm';

function App() {
  const [authDetails, setAuthDetails] = useState([]);

  const addAuthDetails = (details) => {
    setAuthDetails([...authDetails, details]);
  };

  useEffect(() => {
    const storedAuthDetails = JSON.parse(localStorage.getItem('authDetails'));
    if (storedAuthDetails) {
      setAuthDetails(storedAuthDetails);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('authDetails', JSON.stringify(authDetails));
  }, [authDetails]);

  return (
    <div className="app">
      <h1>Authentication Details</h1>
      <AuthForm addAuthDetails={addAuthDetails} />
      <div className="auth-details">
        {authDetails.map((auth, index) => (
          <div className="auth" key={index}>
            <p>{`Email: ${auth.email}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
