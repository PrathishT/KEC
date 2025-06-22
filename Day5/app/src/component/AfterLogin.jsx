import React from 'react';

const AfterLogin = ({ username, onLogout }) => {
  const handleLogout = () => {
    alert("Logging out...");
    onLogout();
  };

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      position: 'fixed',
      top: 0,
      left: 0,
    }}>
      <div style={{
        backgroundColor: '#fff',
        padding: '40px',
        borderRadius: '15px',
        boxShadow: '0 0 20px rgba(0,0,0,0.1)',
        textAlign: 'center',
        width: '90%',
        maxWidth: '500px'
      }}>
        <h1>Welcome Back, {username}!</h1>
        <p>You have successfully logged in.</p>

        

        <button
          onClick={handleLogout}
          style={{
            marginTop: '30px',
            padding: '10px 25px',
            fontSize: '16px',
            border: 'none',
            borderRadius: '6px',
            backgroundColor: '#007bff',
            color: '#fff',
            cursor: 'pointer'
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AfterLogin;