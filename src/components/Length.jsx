import React, { useState } from "react";

function Length() {
  const [value, setValue] = useState(1);
  const [unit1, setUnit1] = useState("Kilometer");
  const [unit2, setUnit2] = useState("Meter");
  const [result, setResult] = useState(0);
  const [formula, setFormula] = useState("");

  // Conversion factors relative to 1 Meter
  const conversionRates = {
    Kilometer: 1000,
    Meter: 1,
    Centimeter: 0.01,
    Millimeter: 0.001,
    Nanometer: 1e-9,
    Mile: 1609.34,
    Yard: 0.9144,
    Foot: 0.3048,
    Inch: 0.0254,
    "Nautical Mile": 1852,
  };

  const handleConvert = () => {
    const numValue = parseFloat(value);
    if (isNaN(numValue)) {
      setResult("Invalid input");
      setFormula("");
      return;
    }

    // Convert input unit to meters first
    const valueInMeters = numValue * conversionRates[unit1];

    // Convert meters to target unit
    const convertedValue = valueInMeters / conversionRates[unit2];

    // Generate formula explanation
    const conversionFormula = `Multiply by ${conversionRates[unit1] /
      conversionRates[unit2]}`;

    setResult(convertedValue);
    setFormula(conversionFormula);
  };

  return (
    <div>
      <h2>Length Converter</h2>

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

export default Length;
