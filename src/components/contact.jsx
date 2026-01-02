import { useState } from "react";
import { sendEmail } from "../utils/email";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async () => {
    await sendEmail(form);
    alert("Message sent successfully");
  };

  return (
    <div className="container">
      <h1>Contact Us</h1>

      <div className="card" style={{ maxWidth: "500px" }}>
        <label>Name</label>
        <input
          style={input}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />

        <label>Email</label>
        <input
          style={input}
          onChange={e => setForm({ ...form, email: e.target.value })}
        />

        <label>Message</label>
        <textarea
          style={input}
          onChange={e => setForm({ ...form, message: e.target.value })}
        />

        <button onClick={handleSubmit} style={{ marginTop: "16px" }}>
          Send Message
        </button>
      </div>
    </div>
  );
}

const input = {
  width: "100%",
  padding: "10px",
  marginBottom: "12px",
  borderRadius: "8px",
  border: "1px solid var(--border)"
};
