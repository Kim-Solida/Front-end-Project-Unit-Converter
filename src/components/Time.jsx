import React, { useState } from "react";

function Time() {
  const [value, setValue] = useState(1);
  const [unit1, setUnit1] = useState("Second");
  const [unit2, setUnit2] = useState("Minute");
  const [result, setResult] = useState(0);

  const conversionRates = {
    Nanosecond: 1,
    Microsecond: 1e3,
    Millisecond: 1e6,
    Second: 1e9,
    Minute: 6e10,
    Hour: 3.6e12,
  };

  const handleConvert = () => {
    const inNanoseconds = value * conversionRates[unit1]; // Convert to Nanoseconds
    const convertedValue = inNanoseconds / conversionRates[unit2]; // Convert to Target Unit
    setResult(convertedValue);
  };

  return (
    <div>
      <h2>Time Converter</h2>

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

export default Time;
