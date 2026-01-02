import { useParams, Link } from "react-router-dom";

export default function BlogDetail() {
  const { slug } = useParams();

  return (
    <div className="container">
      <h1>Blog Article</h1>

      <p style={{ color: "var(--muted)", marginTop: "12px" }}>
        This article explains how signage pricing works and why measurements,
        materials, and location matter.
      </p>

      <p style={{ marginTop: "20px" }}>
        Signage pricing is not fixed. It depends on width, height, materials,
        installation complexity, and city-specific costs.
      </p>

      <Link to="/offerings">
        <button style={{ marginTop: "24px" }}>
          Plan Your Budget
        </button>
      </Link>
    </div>
  );
}
