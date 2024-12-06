import React, { useState } from 'react';
import './CalculatorForm.css';

const CalculatorForm = ({ onCalculate }) => {
 const [formData, setFormData] = useState({
  industryType: 'textile',
  productionCapacity: 0,
  efficiency: 0,
  recyclingRate: 0,
  region: 'tropical',
 });

 const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  onCalculate(formData);
 };

 return (
  <form onSubmit={handleSubmit}>
   <label>
    Industry Type:
    <select name="industryType" value={formData.industryType} onChange={handleChange}>
     <option value="textile">Textile</option>
     <option value="steel">Steel</option>
     <option value="paper">Paper</option>
    </select>
   </label>
   <label>
    Production Capacity:
    <input type="number" name="productionCapacity" value={formData.productionCapacity} onChange={handleChange} />
   </label>
   <label>
    Water Efficiency (%):
    <input type="number" name="efficiency" value={formData.efficiency} onChange={handleChange} />
   </label>
   <label>
    Water Recycling Rate (%):
    <input type="number" name="recyclingRate" value={formData.recyclingRate} onChange={handleChange} />
   </label>
   <label>
    Geographical Location:
    <select name="region" value={formData.region} onChange={handleChange}>
     <option value="tropical">Tropical</option>
     <option value="arid">Arid</option>
     <option value="temperate">Temperate</option>
    </select>
   </label>
   <button type="submit">Calculate</button>
  </form>
 );
};

export default CalculatorForm;
