// Requiring the two packages that we just installed
const express = require("express");
const bodyParser = require("body-parser");


// creating app const using express
const app = express();

// simple get route that just sends the browser word Hello when a user tries to access the home route
app.get("/", function (req, res) {
    // res.send("Hello"); // We pass data from our server (app.js) to the browser via this send method. 
    // This allows us to perform logic/do processing on our server side and send only response to the browser.
    // This also allows render different results to users depending on the logic that we include inside our server.
    // res.send only allows us to send one piece of data, as the server considers it final sending instruction. To send multiple pieces of data, use res.write.
    // res.send is like sending messages through messenger, while res.write is like doing so from email.

    // let's check if today is a weekend or not
    var today = new Date();
    if (today.getDay() === 6 || today.getDay() === 0) {
        // res.write("<h1>It's the weekend!!</h1>");
        // res.write("<p>Yay, I'm gonna code more, and keep myself from being miserable...</p>")
        // res.send();

        res.sendFile(__dirname + "/index.html");
        // now creating a different file for each day won't be less of a pain. So to tackle this we use html templating (where we can change certain parts of the  
        // html, depending on the logic on our server).
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