import emailjs from "@emailjs/browser";

export function sendEmail(data) {
  return emailjs.send(
    "YOUR_SERVICE_ID",
    "YOUR_TEMPLATE_ID",
    data,
    "YOUR_PUBLIC_KEY"
  );
}
