export default function OfferingCard({ item, onPlanBudget, onBook }) {
  return (
    <div className="card">
      <h3>{item.name}</h3>

      <p style={{ marginTop: "8px", color: "var(--muted)" }}>
        {item.description}
      </p>

      <p style={{ marginTop: "12px", fontWeight: "600", color: "var(--primary)" }}>
        ₹{item.priceMin} – ₹{item.priceMax} / {item.unit}
      </p>

      <div style={{ marginTop: "16px", display: "flex", gap: "12px" }}>
        <button onClick={() => onPlanBudget(item)}>
          Plan Budget
        </button>

        <button className="secondary" onClick={() => onBook(item)}>
          Book Appointment
        </button>
      </div>
    </div>
  );
}
