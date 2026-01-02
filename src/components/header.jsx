import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={header}>
      <div style={wrap}>
        <strong>V SIGN</strong>
        <nav style={nav}>
          <Link to="/">Home</Link>
          <Link to="/offerings">Offerings</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

const header = {
  borderBottom: "1px solid var(--border)",
  background: "white"
};

const wrap = {
  maxWidth: "1200px",
  margin: "auto",
  padding: "16px 20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const nav = {
  display: "flex",
  gap: "18px",
  color: "var(--muted)"
};
