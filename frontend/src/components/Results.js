import React from 'react';
import './Results.css'

const Results = ({ result }) => {
 return (
  <div className="results">
   {result && (
    <>
     <h3>Calculation Result</h3>
     <p>{result.message}</p>
     <p>Total Water Usage: {result.totalUsage} liters</p>
    </>
   )}
  </div>


 );
};

export default Results;
