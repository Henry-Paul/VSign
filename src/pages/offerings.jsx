import { useState } from "react";
import offerings from "../data/offerings.json";
import OfferingCard from "../components/OfferingCard";
import Modal from "../components/Modal";
import BudgetPlanner from "../components/BudgetPlanner";

export default function Offerings() {
  const [selected, setSelected] = useState(null);

  const handlePlanBudget = (item) => {
    setSelected(item);
  };

  const handleBookAppointment = (data) => {
    console.log("Book appointment with data:", data);
    // Next step: Appointment form + EmailJS + WhatsApp
  };

  return (
    <div className="container">
      <h1>Our Offerings</h1>

      <p style={{ color: "var(--muted)", maxWidth: "700px" }}>
        Plan your signage budget using real measurements and book an appointment instantly.
      </p>

      <div style={{
        marginTop: "30px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "24px"
      }}>
        {offerings.map(item => (
          <OfferingCard
            key={item.id}
            item={item}
            onPlanBudget={handlePlanBudget}
            onBook={handlePlanBudget}
          />
        ))}
      </div>

      <Modal open={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <BudgetPlanner
            offering={selected}
            onBook={handleBookAppointment}
          />
        )}
      </Modal>
    </div>
  );
}
