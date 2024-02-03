// import { EmailTemplate } from "../components/email-template";
import { Resend } from "resend";

// Initialize the 'resend' instance
const resend = new Resend(process.env.RESEND_API_KEY);

const domain = process.env.NEXT_PUBLIC_APP_URL;

// Function to send a verification email
export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;

  // Send the verification email
  const { data, error } = await resend.emails.send({
    from: `${domain}`,
    to: email,
    subject: "Confirm your email",
    html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`,
  });

  // Return a success result with the data (if any) from the email sending process
  return { success: true, data };
};
