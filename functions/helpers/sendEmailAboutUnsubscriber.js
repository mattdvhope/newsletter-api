// functions/helpers/sendEmailAboutUnsubscriber.js

import formData from 'form-data';
import Mailgun from 'mailgun.js';

// Initialize Mailgun with form data
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
    username: 'api',
    key: process.env.MAILGUN_API_KEY || 'key-yourkeyhere', // Replace with your Mailgun API key
});

// Function to send an email about an unsubscriber
const sendEmailAboutUnsubscriber = async (unsubscribedEmail) => {
    try {
        const adminEmail = 'soaw4life@gmail.com';
        const subject = 'User Unsubscribed from Newsletter';
        const body = `
            <h1>User Unsubscribed</h1>
            <p>The following user has unsubscribed from the newsletter:</p>
            <p><strong>Email:</strong> ${unsubscribedEmail}</p>
        `;

        await mg.messages.create(process.env.MAILGUN_DOMAIN || 'soaw4life@gmail.com', {
            from: `Unsubscribe Processor <info@${process.env.MAILGUN_DOMAIN || 'soaw4life@gmail.com'}>`,
            to: [adminEmail],
            subject: subject,
            text: `The following user has unsubscribed from the newsletter:\nEmail: ${unsubscribedEmail}`, // Plain text fallback
            html: body, // Use the HTML body
        });

        console.log('Admin unsubscribe notification email sent successfully');
    } catch (error) {
        console.error('Error sending admin unsubscribe notification email:', error);
        throw error; // Rethrow the error to handle it in the calling function
    }
};

export default sendEmailAboutUnsubscriber;