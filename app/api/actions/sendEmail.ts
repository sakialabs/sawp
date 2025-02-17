"use server";

import sgMail from "@sendgrid/mail";
import { validateString, validateEmail, getErrorMessage } from "@/lib/utils";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendEmail = async (formData: EmailData) => {
  const { name, email, subject, message } = formData;

  // Validate form data
  if (!validateString(name, 1, 100)) {
    return { error: "Name should be between 1 and 100 characters" };
  }
  if (!validateEmail(email)) {
    return { error: "Invalid email address" };
  }
  if (!validateString(subject, 1, 200)) {
    return { error: "Subject should be between 1 and 200 characters" };
  }
  if (!validateString(message, 1, 5000)) {
    return { error: "Message should be between 1 and 5000 characters" };
  }

  const htmlContent = `
    <h1>Contact Form Submission</h1>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `;

  const verifiedEmail = process.env.SENDGRID_VERIFIED_SENDER;
  const recipientEmail = process.env.RECIPIENT_EMAIL || verifiedEmail;

  if (!verifiedEmail) {
    console.error("SENDGRID_VERIFIED_SENDER is not set in environment variables");
    return { error: "Email configuration error" };
  }

  if (!recipientEmail) {
    console.error("Recipient email is not set");
    return { error: "Email configuration error" };
  }

  const msg = {
    to: recipientEmail,
    from: verifiedEmail,
    subject: subject,
    html: htmlContent,
    replyTo: email,
  };

  try {
    await sgMail.send(msg);
    return { data: "Email sent successfully" };
  } catch (error: unknown) {
    console.error("SendGrid error:", error);
    return {
      error: getErrorMessage(error),
    };
  }
};