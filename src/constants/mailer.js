export const EMAIL_TYPE = {
    VERIFY: "VERIFY",
    RESET: "RESET"
}

export const EMAIL_SUBJECT = {
    VERIFY: "Verify Your Email",
    RESET: "Reset Your Password"
}

export const verifyMailHTML = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verify Your Email</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: center;
        }
        h2 {
            color: #333;
        }
        p {
            color: #555;
            font-size: 16px;
        }
        .btn {
            display: inline-block;
            padding: 12px 20px;
            background-color: #007bff;
            color: #ffffff;
            text-decoration: none;
            border-radius: 5px;
            font-size: 16px;
            margin-top: 20px;
        }
        .btn:hover {
            background-color: #0056b3;
        }
        .footer {
            margin-top: 20px;
            font-size: 14px;
            color: #777;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Verify Your Email</h2>
        <p>Hello <strong>[USER_NAME]</strong>,</p>
        <p>Thank you for signing up for <strong>POPCORN.AI</strong>! Please verify your email address by clicking the button below:</p>
        <a href="[VEARIFICATION_LINK]" class="btn">Verify Email</a>
        <p>If the button doesn’t work, copy and paste this link into your browser:</p>
        <p><a href="[VEARIFICATION_LINK]">[VEARIFICATION_LINK]</a></p>
        <p>This link will expire in <strong>1 hour</strong>. If you didn’t create this account, please ignore this email.</p>
        <p class="footer">Best, <br> <strong>Popcorn.ai Team</strong> <br> <a href="popcorn.ai">Popcorn.ai</a></p>
    </div>
</body>
</html>
`