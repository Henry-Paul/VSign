export default function Footer() {
  return (
    <footer style={footer}>
      <div className="container">
        <p style={{ color: "var(--muted)" }}>
          © {new Date().getFullYear()} V SIGN — Signage Budget Planner
        </p>
      </div>
    </footer>
  );
}

const footer = {
  borderTop: "1px solid var(--border)",
  marginTop: "60px",
  padding: "24px 0",
  background: "#f9fafb"
};
