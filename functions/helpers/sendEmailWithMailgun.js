import formData from 'form-data';
import Mailgun from 'mailgun.js';

// Initialize Mailgun with form data
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY || 'key-yourkeyhere', // Replace 'key-yourkeyhere' with your test Mailgun key for now
});

// Function to send an email
const sendEmailWithMailgun = async (email) => {
    const subject = "Welcome to the Newsletter!";
    const body = `
        <h1>Welcome!</h1>
        <p>Thank you for signing up for the Man of Destiny Newsletter. Stay tuned for amazing updates!</p>
    `;

    try {
        await mg.messages.create(process.env.MAILGUN_DOMAIN || 'yourdomain.mailgun.org', {
            from: `Matt Malone - Author <info@${process.env.MAILGUN_DOMAIN || 'yourdomain.mailgun.org'}>`,
            to: [email],
            subject,
            text: "Thank you for signing up for the newsletter!", // Plain text fallback
            html: body, // Styled HTML email
        });
        console.log("Email sent successfully");
    } catch (error) {
        console.error("Error sending email:", error);
        throw error; // Rethrow the error to handle it in the calling function
    }
};

export default sendEmailWithMailgun;
