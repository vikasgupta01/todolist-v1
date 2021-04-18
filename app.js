// Requiring the two packages that we just installed
const express = require("express");
const bodyParser = require("body-parser");


// creating app const using express
const app = express();

// simple get route that just sends the browser word Hello when a user tries to access the home route
app.get("/", function (req, res) {

    // let's check if today is a weekend or not
    var today = new Date();
    if (today.getDay() === 6 || today.getDay() === 0) {
        res.sendFile(__dirname + "/index.html");
    } else {
        res.write("<h1>It's a working day!!</h1>");
        res.write("<p>Yay, I'm gonna watch more content and work less...</p>")
        res.send();
    }
});


// then we listen on port 3000 and console log that our server has been started.
app.listen(3000, function () {
    console.log("Server started on port 3000");
});