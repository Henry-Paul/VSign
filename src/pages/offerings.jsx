import { useState } from "react";
import offerings from "../data/offerings.json";
import OfferingCard from "../components/OfferingCard";
import Modal from "../components/Modal";
import BudgetPlanner from "../components/BudgetPlanner";
import AppointmentForm from "../components/AppointmentForm";

export default function Offerings() {
  const [selected, setSelected] = useState(null);
  const [bookingContext, setBookingContext] = useState(null);

  return (
    <div className="container">
      <h1>Our Offerings</h1>

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
            onPlanBudget={() => setSelected(item)}
            onBook={() => setSelected(item)}
          />
        ))}
      </div>

      {/* Budget Planner */}
      <Modal open={!!selected && !bookingContext} onClose={() => setSelected(null)}>
        {selected && (
          <BudgetPlanner
            offering={selected}
            onBook={(data) => {
              setBookingContext({ ...data, offering: selected });
              setSelected(null);
            }}
          />
        )}
      </Modal>

      {/* Appointment Booking */}
      <Modal open={!!bookingContext} onClose={() => setBookingContext(null)}>
        {bookingContext && (
          <AppointmentForm
            context={bookingContext}
            onClose={() => setBookingContext(null)}
          />
        )}
      </Modal>
    </div>
  );
}
