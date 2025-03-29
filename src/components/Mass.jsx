import React, { useState } from "react";

function Mass() {
  const [value, setValue] = useState(1);
  const [unit1, setUnit1] = useState("Kilogram");
  const [unit2, setUnit2] = useState("Gram");
  const [result, setResult] = useState(0);

  // Conversion factors relative to 1 Kilogram
  const conversionRates = {
    Tonne: 1000,
    Kilogram: 1,
    Gram: 0.001,
    Milligram: 1e-6,
    Microgram: 1e-9,
    "Imperial Ton": 1016.05,
    "US Ton": 907.184,
    Stone: 6.35029,
    Pound: 0.453592,
    Ounce: 0.0283495,
  };

  const handleConvert = () => {
    const numValue = parseFloat(value);
    if (isNaN(numValue)) {
      setResult("Invalid input");
      return;
    }

    // Convert to kilograms first, then to the target unit
    const valueInKilograms = numValue * conversionRates[unit1];
    const convertedValue = valueInKilograms / conversionRates[unit2];

    setResult(convertedValue);
  };

  return (
    <div>
      <h2>Mass Converter</h2>

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
    </div>
  );
}

export default Mass;
