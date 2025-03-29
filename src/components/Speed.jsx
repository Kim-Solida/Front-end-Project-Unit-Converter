import React, { useState } from "react";

function Speed() {
  const [value, setValue] = useState(1);
  const [unit1, setUnit1] = useState("Kilometer/Hour");
  const [unit2, setUnit2] = useState("Miles/Hour");
  const [result, setResult] = useState(0);

  // Conversion factors relative to 1 Meter/Second
  const conversionRates = {
    "Miles/Hour": 2.23694,
    "Foot/Second": 3.28084,
    "Meter/Second": 1,
    "Kilometer/Hour": 3.6,
    "Knot": 1.94384,
  };

  const handleConvert = () => {
    const numValue = parseFloat(value);
    if (isNaN(numValue)) {
      setResult("Invalid input");
      return;
    }

    // Convert to meters/second first, then to the target unit
    const valueInMetersPerSecond = numValue / conversionRates[unit1];
    const convertedValue = valueInMetersPerSecond * conversionRates[unit2];

    setResult(convertedValue);
  };

  return (
    <div>
      <h2>Speed Converter</h2>

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

export default Speed;
