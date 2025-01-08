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
                width: 298px; /* Button width */
                height: 60px; /* Button height */
                display: inline-block;
                text-align: center;
                line-height: 60px; /* Align text vertically */
                border: 1px solid #df0303; /* Red border */
                border-radius: 30px; /* Rounded corners */
                padding: 12px;
                background-color: #df0303; /* Red background */
                background-image: 
                    radial-gradient(75% 60% at 50% 10%, #ffe4e4, transparent), 
                    radial-gradient(75% 45% at 50% 90%, #fc8d8d, transparent); /* Gradients for red */
                box-shadow: inset 0 -2px 4px 1px rgba(231, 17, 17, 0.6), 
                            inset 0 -4px 4px 1px #fc8d8d, 
                            inset 0 0 2px 1px rgba(255, 255, 255, 0.2), 
                            0 1px 4px 1px rgba(231, 17, 17, 0.2), 
                            0 1px 4px 1px rgba(0, 0, 0, 0.1); /* Depth and shading */
                color: #fff; /* White text */
                text-shadow: 0 1px 1px #e71111; /* Slight text shadow */
                font-size: 22px; /* Font size */
                font-family: 'Courier New', Courier, monospace; /* Font family */
                text-decoration: none; /* Remove underline */
                transition-property: border-color, transform, background-color;
                transition-duration: 0.2s;
                cursor: pointer;
                position: relative; /* For the pseudo-element */
            }

            .cta-link:hover {
                transform: scale(1.05); /* Slight grow on hover */
                background-color: #e60000; /* Slightly darker red on hover */
                border-color: #e60000; /* Match hover border */
            }

            .cta-link::after {
                content: "";
                position: absolute;
                top: 1px;
                left: 50%;
                transform: translateX(-50%);
                border-radius: 50%;
                width: 80%;
                height: 40%;
                background-image: linear-gradient(to bottom, #ffe4e4, transparent); /* Highlight */
                opacity: 0.75;
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
