import React, { useState } from 'react';
import CalculatorForm from './components/CalculatorForm';
import Results from './components/Results';
import './App.css';

const App = () => {
  const [result, setResult] = useState(null);

  const handleCalculate = async (formData) => {
    try {
      const response = await fetch('http://localhost:5000/api/calculator', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Error calculating water usage:', error);
    }
  };

  return (
    <div className="App">
      <h1>Water Usage Calculator</h1>
      <CalculatorForm onCalculate={handleCalculate} />
      <Results result={result} />
    </div>
  );
};

export default App;
