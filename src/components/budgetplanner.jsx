import { useState } from "react";
import { calculateBudget } from "../utils/calculator";

export default function BudgetPlanner({ offering, onBook }) {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [city, setCity] = useState(1);

  const result = calculateBudget({
    width,
    height,
    priceMin: offering.priceMin,
    priceMax: offering.priceMax,
    cityMultiplier: city
  });

  return (
    <div>
      <h2>Plan Budget</h2>
      <p style={{ color: "var(--muted)", marginBottom: "16px" }}>
        {offering.name}
      </p>

      <label>Width (ft)</label>
      <input
        type="number"
        value={width}
        onChange={(e) => setWidth(e.target.value)}
        placeholder="e.g. 10"
        style={inputStyle}
      />

      <label>Height (ft)</label>
      <input
        type="number"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        placeholder="e.g. 3"
        style={inputStyle}
      />

      <label>City</label>
      <select value={city} onChange={(e) => setCity(Number(e.target.value))} style={inputStyle}>
        <option value={1}>Hyderabad</option>
        <option value={1.05}>Vijayawada</option>
        <option value={1.08}>Visakhapatnam</option>
        <option value={1.04}>Guntur</option>
      </select>

      {result && (
        <div style={{ marginTop: "20px" }}>
          <p><strong>Area:</strong> {result.area} sq ft</p>
          <p style={{ fontSize: "18px", fontWeight: "600", color: "var(--primary)" }}>
            ₹{result.min.toLocaleString()} – ₹{result.max.toLocaleString()}
          </p>

          <button
            style={{ marginTop: "16px", width: "100%" }}
            onClick={() => onBook({ ...result, offering })}
          >
            Book Appointment
          </button>
        </div>
      )}
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "6px",
  marginBottom: "12px",
  borderRadius: "8px",
  border: "1px solid var(--border)"
};
