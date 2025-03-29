import React, { useState } from "react";

function Temperature() {
  const [value, setValue] = useState(1);
  const [unit1, setUnit1] = useState("C");
  const [unit2, setUnit2] = useState("F");
  const [result, setResult] = useState(0);

  const convertTemperature = (value, from, to) => {
    let temp = parseFloat(value);
    if (isNaN(temp)) return "Invalid input";

    if (from === to) return temp; // Same unit, no conversion needed

    if (from === "C") {
      if (to === "F") return (temp * 9) / 5 + 32;
      if (to === "K") return temp + 273.15;
    } else if (from === "F") {
      if (to === "C") return ((temp - 32) * 5) / 9;
      if (to === "K") return ((temp - 32) * 5) / 9 + 273.15;
    } else if (from === "K") {
      if (to === "C") return temp - 273.15;
      if (to === "F") return ((temp - 273.15) * 9) / 5 + 32;
    }
  };

  const handleConvert = () => {
    setResult(convertTemperature(value, unit1, unit2));
  };

  return (
    <div>
      <h2>Temperature Converter</h2>

      <div className="unit">
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <select value={unit1} onChange={(e) => setUnit1(e.target.value)}>
          <option value="C">Celsius (°C)</option>
          <option value="F">Fahrenheit (°F)</option>
          <option value="K">Kelvin (K)</option>
        </select>
      </div>

      <h3>=</h3>

      <div className="unit">
        <input type="text" value={result} readOnly />
        <select value={unit2} onChange={(e) => setUnit2(e.target.value)}>
          <option value="C">Celsius (°C)</option>
          <option value="F">Fahrenheit (°F)</option>
          <option value="K">Kelvin (K)</option>
        </select>
      </div>

      <button onClick={handleConvert}>Convert</button>
    </div>
  );
}

export default Temperature;
