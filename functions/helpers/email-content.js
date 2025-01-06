// functions/helpers/email-content.js

import { body } from './body.js';

const emailContent = {
    subject: "Welcome to the Man of Destiny Newsletter!",
    body: `${body}
    <p style="font-size: 14px; color: #777; text-align: center; margin-top: 20px;">
        If you no longer wish to receive these emails, you can 
        <a href="https://www.sourceofallwealth.com/p-thirty-one-unsubscribe/?email={{email2}}" 
           style="color: #007acc; text-decoration: none;">unsubscribe here</a>.
    </p>`
};

export { emailContent };
