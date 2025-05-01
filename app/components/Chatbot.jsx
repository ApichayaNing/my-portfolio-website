import React from 'react';

const Chatbot = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>☕ Cup of Care Chatbot 🌸</h1>
      <iframe 
        src="https://a-cup-of-care.onrender.com"
        style={{
          width: '100%',
          height: '80vh',
          border: 'none',
          borderRadius: '12px',
          marginTop: '1rem'
        }}
        title="Cup of Care Chatbot"
      ></iframe>
    </div>
  );
};

export default Chatbot;
