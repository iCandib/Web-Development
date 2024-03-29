// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// const port = 4220; // Choose a port number

// // Serve static files from the current directory
// app.use(express.static(__dirname));
// app.use(bodyParser.urlencoded({ extended: true }));


// app.get("/", function (req, res) {
//     res.sendFile(__dirname + '/index.html');
// });



// // Start the server
// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}/`);
// });


const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 4220; // Choose a port number

// Serve static files from the current directory
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + '/home.html');
});



// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
