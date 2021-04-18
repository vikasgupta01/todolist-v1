// Section 22 : Lec 4 : Creating your first EJS Templates

// Requiring the two packages that we just installed
const express = require("express");
const bodyParser = require("body-parser");


// creating app const using express
const app = express();

// visit ejs general documentation {https://ejs.co/} & documentation on how to use it with express. {https://github.com/mde/ejs/wiki/Using-EJS-with-Express}
// install ejs in project directory using command 'npm install ejs' in terminal
// check for ejs dependency in package.json file.
// create a 'views' folder in project where you'll keep all the views.
// make sure to put this after declaring app. Otherwise you'll be using app before initializing it and will get error.
app.set('view engine', 'ejs');

// simple get route that just sends the browser word Hello when a user tries to access the home route
app.get("/", function (req, res) {

    // let's check if today is a weekend or not
    var today = new Date();
    var currentDay = today.getDay();
    var day = "";

    // if (currentDay === 6 || currentDay === 0) {
    //     day = "Weekend";
    // } else {
    //     day = "Weekday";
    // }


    switch (currentDay) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
            day = "Default triggered, which means our code broke. Check console and app.js file";
            console.log("Error : Current day is equal to : " + currentDay);
            break;
    }


    // we'll use res.render method in app.js instead of res.send or res.sendFile (see https://github.com/mde/ejs/wiki/Using-EJS-with-Express)
    res.render("list", { kindOfDay: day });
    // kindOfDay variable is used for clarity on variable assignment. Usually, we'll use name 'day' for both.
});


// then we listen on port 3000 and console log that our server has been started.
app.listen(3000, function () {
    console.log("Server started on port 3000");
});