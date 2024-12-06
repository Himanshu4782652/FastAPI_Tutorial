exports.calculateWaterUsage = (req, res) => {
 const { industryType, productionCapacity, efficiency, recyclingRate, region } = req.body;

 // Default water usage values per unit (liters/unit)
 const industryDefaults = {
  textile: 100,
  steel: 200,
  paper: 150,
 };

 const climateFactors = {
  tropical: 1.2,
  arid: 1.5,
  temperate: 1.0,
 };

 const defaultUsage = industryDefaults[industryType] || 100; // Default to 100 if unknown
 const climateFactor = climateFactors[region] || 1.0;

 // Calculation logic
 const adjustedUsage = defaultUsage * (efficiency / 100) * (1 - recyclingRate / 100);
 const totalUsage = adjustedUsage * productionCapacity * climateFactor;

 res.json({
  totalUsage: totalUsage.toFixed(2), // Rounded to 2 decimal places
  message: `Estimated water usage for ${industryType} industry is ${totalUsage.toFixed(2)} liters.`,
 });
};
