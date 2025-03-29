import React, { useState } from "react";
import Area from "./components/Area";
import Length from "./components/Length";
import Mass from "./components/Mass";
import Speed from "./components/Speed";
import Temperature from "./components/Temperature";
import Time from "./components/Time";
import './App.css';

function App() {
  const [selectedUnit, setSelectedUnit] = useState("Area");

  // Handle click on unit type
  const handleUnitClick = (unit) => {
    setSelectedUnit(unit);
  };

  return (
    <div>
      <h1>UNIT CONVERTER</h1>

      <div className="selector">
        <div className="unit-options">
          {["Area", "Length", "Mass", "Speed", "Temperature", "Time"].map((unit) => (
            <div
              key={unit}
              className={`unit-option ${selectedUnit === unit ? "selected" : ""}`}
              onClick={() => handleUnitClick(unit)}
            >
              {unit}
            </div>
          ))}
        </div>
      </div>

      {/* Conditionally render the corresponding component */}
      <div className="unit-container">
        {selectedUnit === "Area" && <Area />}
        {selectedUnit === "Length" && <Length />}
        {selectedUnit === "Mass" && <Mass />}
        {selectedUnit === "Speed" && <Speed />}
        {selectedUnit === "Temperature" && <Temperature />}
        {selectedUnit === "Time" && <Time />}
      </div>

    </div>
  );
}



export default App;