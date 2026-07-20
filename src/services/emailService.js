import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_portfolio';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_portfolio';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key_portfolio';

export const sendContactEmail = async (formData) => {
  if (!formData.name || !formData.email || !formData.message) {
    throw new Error('Please fill in all required fields.');
  }

  // Client-side email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    throw new Error('Please enter a valid email address.');
  }

  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    reply_to: formData.email,
    subject: formData.subject || 'Portfolio Inquiry',
    message: formData.message,
    to_name: 'A Lohith Venkata Guptha',
  };

  return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
};

export default sendContactEmail;
