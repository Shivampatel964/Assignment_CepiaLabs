import React, { useState } from 'react';
import './App.css';

export function App() {
  const [isOn, setIsOn] = useState(false);
  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="App">
      <div className="toggle-container">
        <h1>Toggle Switch App</h1>
        
        <div className={`status ${isOn ? 'on' : 'off'}`}>
          {isOn ? 'ON' : 'OFF'}
        </div>
        <button 
          className={`toggle-btn ${isOn ? 'on' : 'off'}`}
          onClick={handleToggle}
        >
          Switch {isOn ? 'OFF' : 'ON'}
        </button>
        <div className="indicator">
          <div className={`light ${isOn ? 'active' : ''}`}></div>
          <span>Status: {isOn ? 'ACTIVE' : 'INACTIVE'}</span>
        </div>
      </div>
    </div>
  );
}

export default App;