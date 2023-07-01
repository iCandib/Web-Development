const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 4220; // Choose a port number

// Serve static files from the current directory
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));

// Configure nodemailer
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: true,
    auth: {
        user: 'isaaccandib@gmail.com',
        pass: 'campbaco1',
    },
});

app.get("/", function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post("/send_email", (req, res) => {
    const { firstName, lastName, email, message } = req.body;

    const mailOptions = {
        from: 'isaaccandib@gmail.com',
        to: 'isaaccandib@gmail.com',
        subject: 'Consultation Form Submission',
        text: `First Name: ${firstName}\n` +
            `Last Name: ${lastName}\n` +
            `Email: ${email}\n` +
            `Message: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Failed to send the email.');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Email sent successfully.');
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
