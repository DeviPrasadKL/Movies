import React from 'react';

const NotFound = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f8f8f8',
      fontFamily: 'Arial, sans-serif',
    },
    errorText: {
      fontSize: '36px',
      fontWeight: 'bold',
      color: '#333',
      textAlign: 'center',
    },
    sadEmoji: {
      fontSize: '48px',
      margin: '20px',
    },
  };

  return (
    <div style={styles.container}>
      <div>
        <div style={styles.errorText}>
          <span style={styles.sadEmoji} role="img" aria-label="Sad Face">
            😞
          </span>
          Oops! Page Not Found
        </div>
        <p style={{ textAlign: 'center', color: '#666', marginTop: '10px' }}>
          The page you are looking for might have been removed or does not exist.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
