export function openWhatsApp(data) {
  const message = `
Hi, I would like to book an appointment.

Offering: ${data.offering}
Area: ${data.area} sq ft
Estimated Budget: ${data.budget}

Name: ${data.name}
Phone: ${data.phone}
Preferred Date: ${data.date}
Preferred Time: ${data.time}
`;

  const encoded = encodeURIComponent(message.trim());
  const phone = "91XXXXXXXXXX"; // replace with your WhatsApp number

  window.open(`https://wa.me/${phone}?text=${encoded}`, "_blank");
}
