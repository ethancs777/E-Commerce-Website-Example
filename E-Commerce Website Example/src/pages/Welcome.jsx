
import React, { useState } from 'react';
import '../css/welcome.css';

function Welcome({ onNameSubmit }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onNameSubmit(name.trim());
    }
  };

  return (
    <div className="welcome-container">
      <h1 className="welcome-title">Welcome!</h1>
      <form className="welcome-form" onSubmit={handleSubmit}>
        <input
          className="welcome-input"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button className="welcome-button" type="submit">
          Continue
        </button>
      </form>
    </div>
  );
}

export default Welcome;
