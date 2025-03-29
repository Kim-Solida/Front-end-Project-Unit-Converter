import React, { useState } from "react";

function Area() {
  const [value, setValue] = useState(1);
  const [unit1, setUnit1] = useState("Square Kilometer");
  const [unit2, setUnit2] = useState("Square Meter");
  const [result, setResult] = useState(0);
  const [formula, setFormula] = useState("");

  // Conversion factors relative to 1 Square Meter
  const conversionRates = {
    "Square Kilometer": 1e6,
    "Square Meter": 1,
    "Square Mile": 2.59e6,
    "Square Yard": 0.836127,
    "Square Foot": 0.092903,
    "Square Inch": 0.00064516,
    "Hectare": 10000,
    "Acre": 4046.86,
  };

  const handleConvert = () => {
    const numValue = parseFloat(value);
    if (isNaN(numValue)) {
      setResult("Invalid input");
      setFormula("");
      return;
    }

    // Convert input unit to square meters first
    const valueInSquareMeters = numValue * conversionRates[unit1];

    // Convert square meters to target unit
    const convertedValue = valueInSquareMeters / conversionRates[unit2];

    // Generate formula explanation
    const conversionFormula = `Multiply by ${conversionRates[unit1] /
      conversionRates[unit2]}`;

    setResult(convertedValue);
    setFormula(conversionFormula);
  };

  return (
    <div>
      <h2>Area Converter</h2>

      <div className="unit">
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <select value={unit1} onChange={(e) => setUnit1(e.target.value)}>
          {Object.keys(conversionRates).map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
      </div>

      <h3>=</h3>

      <div className="unit">
        <input type="text" value={result} readOnly />
        <select value={unit2} onChange={(e) => setUnit2(e.target.value)}>
          {Object.keys(conversionRates).map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
      </div>

      <button onClick={handleConvert}>Convert</button>
      <p>Formula: {formula}</p>
    </div>
  );
}

export default Area;
