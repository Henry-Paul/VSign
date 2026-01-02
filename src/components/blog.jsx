import { Link } from "react-router-dom";

const blogs = [
  {
    id: "signage-cost",
    title: "How signage costs are calculated",
    summary: "Understand the real factors that affect signage pricing."
  },
  {
    id: "led-vs-acp",
    title: "LED vs ACP signage",
    summary: "Which signage type fits your business better?"
  }
];

export default function Blog() {
  return (
    <div className="container">
      <h1>Blog & Insights</h1>

      <div style={{ marginTop: "30px", display: "grid", gap: "20px" }}>
        {blogs.map(b => (
          <div key={b.id} className="card">
            <h3>{b.title}</h3>
            <p style={{ color: "var(--muted)" }}>{b.summary}</p>
            <Link to={`/blog/${b.id}`} style={{ color: "var(--primary)" }}>
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
