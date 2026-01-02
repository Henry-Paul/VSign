import offerings from "../data/offerings.json";
import OfferingCard from "../components/OfferingCard";

export default function Offerings() {

  const handlePlanBudget = (item) => {
    console.log("Plan budget for:", item);
    // Next step: open BudgetPlanner modal
  };

  const handleBookAppointment = (item) => {
    console.log("Book appointment for:", item);
    // Next step: open Appointment form
  };

  return (
    <div className="container">
      <h1>Our Offerings</h1>

      <p style={{ marginTop: "10px", color: "var(--muted)", maxWidth: "700px" }}>
        Explore our signage products and services. Plan your budget using
        real measurements and book an appointment when you’re ready.
      </p>

      <div
        style={{
          marginTop: "30px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px"
        }}
      >
        {offerings.map((item) => (
          <OfferingCard
            key={item.id}
            item={item}
            onPlanBudget={handlePlanBudget}
            onBook={handleBookAppointment}
          />
        ))}
      </div>
    </div>
  );
}
