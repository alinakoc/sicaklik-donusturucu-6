import React, { useState } from 'react';
import './App.css';

function App() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    setFahrenheit(celsiusToFahrenheit(value));
  };

  const celsiusToFahrenheit = (celsius) => {
    return (celsius * 9 / 5) + 32;
  };

  return (
    <div className="App">
      <div className="calculator">
        <h1>Sıcaklık Birimi Dönüştürücü</h1>
        <label>
          Celsius:
          <input
            type="number"
            value={celsius}
            onChange={handleCelsiusChange}
            placeholder="değer girin"
          />
        </label>
        <br />
        <label>
          Fahrenheit:
          <input
            type="text"
            value={fahrenheit}
            readOnly
            placeholder="sonuç"
          />
        </label>
      </div>
      
      
    </div>
  );
}

export default App;