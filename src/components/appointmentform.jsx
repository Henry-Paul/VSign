import { useState } from "react";
import { sendEmail } from "../utils/email";
import { openWhatsApp } from "../utils/whatsapp";

export default function AppointmentForm({ context, onClose }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const payload = {
      ...form,
      offering: context.offering.name,
      area: context.area,
      budget: `₹${context.min} – ₹${context.max}`
    };

    try {
      await sendEmail(payload);
      alert("Appointment request sent successfully.");
    } catch (err) {
      alert("Email failed. Please try WhatsApp.");
    }

    openWhatsApp(payload);
    onClose();
  };

  return (
    <div>
      <h2>Book Appointment</h2>
      <p style={{ color: "var(--muted)", marginBottom: "16px" }}>
        {context.offering.name} · Estimated {context.budget}
      </p>

      <label>Name</label>
      <input name="name" onChange={handleChange} style={input} />

      <label>Phone</label>
      <input name="phone" onChange={handleChange} style={input} />

      <label>Preferred Date</label>
      <input type="date" name="date" onChange={handleChange} style={input} />

      <label>Preferred Time</label>
      <input type="time" name="time" onChange={handleChange} style={input} />

      <button style={{ width: "100%", marginTop: "16px" }} onClick={handleSubmit}>
        Confirm Appointment
      </button>
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
