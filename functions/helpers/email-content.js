// functions/helpers/email-content.js

import { body } from './body.js';

const emailContent = {
    subject: "Man of Destiny Newsletter! 1/9/25",
    body: `${body}
    <p style="font-size: 14px; color: #777; text-align: center; margin-top: 20px;">
        If you no longer wish to receive these emails, you can 
        <a href="https://www.sourceofallwealth.com/p-thirty-one-unsubscribe/?email={{email}}" 
           style="color: #007acc; text-decoration: none;">unsubscribe here</a>.
    </p>`
};

export { emailContent };
