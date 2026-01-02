import emailjs from '@emailjs/browser';

export function sendEmail(templateParams) {
  return emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    templateParams,
    'YOUR_PUBLIC_KEY'
  );
}
