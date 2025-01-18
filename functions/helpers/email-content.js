// functions/helpers/email-content.js

import { body } from './body.js';

const emailContent = {
    subject: `What Truly Draws a Proverbs 31 Woman to You, {{first_name_or_nickname}}?`,
    body: `${body}
    <p style="font-size: 14px; color: #777; text-align: center; margin-top: 20px;">
        If you no longer wish to receive these emails, you can 
        <a href="https://www.sourceofallwealth.com/p-thirty-one-unsubscribe/?email={{email}}" 
           style="color: #007acc; text-decoration: none;">unsubscribe here</a>.
    </p>`
};

export { emailContent };
