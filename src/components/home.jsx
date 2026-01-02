import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <h1>Plan your signage budget with confidence</h1>

      <p style={{ maxWidth: "700px", color: "var(--muted)", marginTop: "12px" }}>
        Explore signage products and services, calculate budgets using real
        measurements, and book appointments instantly.
      </p>

      <div style={{ marginTop: "24px", display: "flex", gap: "16px" }}>
        <Link to="/offerings">
          <button>Plan Budget</button>
        </Link>
        <Link to="/contact">
          <button className="secondary">Contact Us</button>
        </Link>
      </div>

      <div style={{ marginTop: "50px" }} className="card">
        <h3>Why V SIGN?</h3>
        <ul>
          <li>✔ Measurement-based pricing</li>
          <li>✔ Products & services combined</li>
          <li>✔ WhatsApp & Email booking</li>
          <li>✔ Built for AP & Telangana</li>
        </ul>
      </div>
    </div>
  );
}
