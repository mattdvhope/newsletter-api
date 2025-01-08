const body = `

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Man of Destiny</title>
        <style>
            /* Email-specific styles */
            body {
                margin: 0;
                padding: 0;
                background-color: #f4f4f4;
                font-family: Arial, sans-serif;
            }

            .email-container {
                max-width: 600px;
                margin: 20px auto;
                background: #ffffff;
                padding: 20px;
                border-radius: 8px;
                border: 1px solid #dddddd;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                box-sizing: border-box;
            }

            h1 {
                font-family: Georgia, serif;
                font-size: 28px;
                color: #333333;
                text-align: center;
                margin-bottom: 20px;
                font-style: italic;
            }

            .link-container {
                text-align: center;
                margin: 40px 0;
            }

            .cta-link {
                font-size: 22px;
                color: #ffffff;
                text-decoration: none;
                font-weight: bold;
                padding: 12px 24px;
                background-color: #007acc;
                border-radius: 4px;
                display: inline-block;
            }

            .cta-link:hover {
                background-color: #005f99;
            }

            .footer {
                font-family: Courier Prime, monospace;
                font-size: 42px;
                line-height: 1.5;
                text-align: center;
                color: #9b031b;
                margin-top: 40px;
            }

            .footer p {
                font-style: italic;
                font-weight: bold;
            }

            .copyright {
                font-size: 15px;
                text-align: center;
                margin-top: 30px;
                color: #777777;
            }

            /* Fallback styles for email clients */
            a {
                text-decoration: none;
                color: inherit;
            }
        </style>
    </head>
    <body>
        <div class="email-container">
            <!-- Main Link Section -->
            <div class="link-container">
                <a href="https://www.sourceofallwealth.com/man-of-destiny/?first_name_or_nickname={{first_name_or_nickname}}&email={{email}}" target="_blank" class="cta-link">Tap here to view the latest "Man of Destiny" letter!</a>
            </div>

            <!-- Additional Content -->
            <div class="footer">
                <p>
                    If you want to get the full skinny on how to magnetize a Proverbs 31 woman like a giant electromagnetic tractor beam, read my book, 
                    "<a href="https://www.sourceofallwealth.com/get-p-thirty-one/?first_name_or_nickname={{first_name_or_nickname}}&email={{email}}" target="_blank" style="text-decoration: underline; font-style: italic; font-weight: bold; color: inherit;">How to Find the Ideal Wife: A Proverbs 31 Woman!</a>"
                    NOW! I'll show you how I, as a flat broke, super-shy, pencil-neck geek, found my "Proverbs 31 Wife!" ...and how YOU can too, {{first_name_or_nickname}}!!
                </p>
            </div>

            <div class="copyright">
                © 2025 Man of Destiny Newsletter | All rights reserved.
            </div>
        </div>
    </body>
    </html>

`;


export { body };
