// EmailJS Integration - Handles all form submissions
const EMAILJS_CONFIG = {
  serviceId: 'YOUR_SERVICE_ID',
  templateId: 'YOUR_TEMPLATE_ID',
  publicKey: 'YOUR_PUBLIC_KEY',
  whatsappNumber: '91XXXXXXXXXX'
};

export const sendEmail = async (formData) => {
  try {
    const emailjs = await import('@emailjs/browser');
    emailjs.init(EMAILJS_CONFIG.publicKey);

    const templateParams = {
      to_name: 'V SIGN Sales Team',
      from_name: formData.name,
      phone: formData.phone,
      email: formData.email || 'Not provided',
      project_type: formData.projectType || 'General enquiry',
      message: formData.message || formData.project,
      estimate_min: formData.estimate?.min || 'N/A',
      estimate_max: formData.estimate?.max || 'N/A',
      product_type: formData.productType || 'Not specified',
      dimensions: formData.dimensions || 'Not provided',
      source_page: formData.sourcePage || window.location.pathname,
      timestamp: new Date().toLocaleString('en-IN')
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams
    );

    return { success: true, data: response };
  } catch (error) {
    console.error('EmailJS Error:', error);
    return { success: false, error: error.message };
  }
};

export const openWhatsApp = (formData) => {
  const message = `🏗️ NEW ENQUIRY

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || 'N/A'}
Project: ${formData.project || formData.message || 'Not specified'}
Budget: ₹${formData.estimate?.min || 0} - ₹${formData.estimate?.max || 0}
Source: ${formData.sourcePage || window.location.pathname}

Sent from V SIGN Website`;

  const whatsappUrl = `https://wa.me/${EMAILJS_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
};
