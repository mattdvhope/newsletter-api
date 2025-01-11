// functions/helpers/sendEmailWithMailgun.js

import formData from 'form-data';
import Mailgun from 'mailgun.js';
import { emailContent } from './email-content.js'; // Import email subject and body

// Initialize Mailgun with form data
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
    username: 'api',
    key: process.env.MAILGUN_API_KEY || 'key-yourkeyhere', // Replace 'key-yourkeyhere' with your test Mailgun key for now
});

// Function to send an email
const sendEmailWithMailgun = async (name, email) => {
    try {
        // Inject the email into the unsubscribe link
        const personalizedBody = emailContent.body
            .replace(/{{email}}/g, encodeURIComponent(email))
            .replace(/{{first_name_or_nickname}}/g, encodeURIComponent(name));

        const personalizedSubject = emailContent.subject
            .replace(/{{first_name_or_nickname}}/g, encodeURIComponent(name));

        await mg.messages.create(process.env.MAILGUN_DOMAIN || 'soaw4life@gmail.com', {
            from: `Matt Malone - Author <info@${process.env.MAILGUN_DOMAIN || 'soaw4life@gmail.com'}>`,
            to: [email],
            subject: emailContent.subject, // Use subject from emailContent
            text: "Thank you for signing up for the newsletter!", // Plain text fallback
            html: personalizedBody, // Use personalized HTML body
        });
        console.log("Email sent successfully");
    } catch (error) {
        console.error("Error sending email:", error);
        throw error; // Rethrow the error to handle it in the calling function
    }
};

export default sendEmailWithMailgun;