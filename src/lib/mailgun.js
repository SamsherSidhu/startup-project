import formData from 'form-data';
import Mailgun from 'mailgun.js';

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
    username: 'api',
    key: process.env.MAILGUN_API_KEY,
});

export const sendEmail = async ({ to, subject, text, html }) => {
    try {
        const msg = await mg.messages.create(process.env.MAILGUN_DOMAIN, {
            from: `Your App <noreply@${process.env.MAILGUN_DOMAIN}>`,
            to,
            subject,
            text,
            html,
        });
        return msg;
    } catch (error) {
        throw new Error(`Error sending email: ${error.message}`);
    }
};