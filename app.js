// 6/22-EJS : Passing data from your webpage to your server
// Fundamentals of templating explaining passing data from server to template and to server from template.

const express = require("express");
const bodyParser = require("body-parser");


// creating app const using express
const app = express();

// need to define item here to increase it's scope and be able to use in app.get as well as in app.post
var items = ["Buy Food", "Cook Food", "Eat Food", "Shit Food"];
// made it a collection to be able to store multiple inputs

// make sure to put this after declaring app. Otherwise you'll be using app before initializing it and will get error.
app.set('view engine', 'ejs');

// telling our app to use bodyparser
app.use(bodyParser.urlencoded({ extended: true }));

// follow 1-6 to get an idea of general flow of code.
// 1. HomePage tha gets loaded first
app.get("/", function (req, res) {

    // let's check if today is a weekend or not
    var today = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options);

    //2. after passing through steps above, we render list.ejs passing in two variables (first contains date info, and second has items array) which get read there.
    res.render("list", { kindOfDay: day, newListItems: items });
    // day gets passed over to list.ejs as a variable kindOfDay
});

app.post("/", function (req, res) {
    // 5. when we're inside this block of code, we grab hold of value of newItem (entered through UI input), we save it to a variable 'item'
    var item = req.body.newItem;

    // and we add that item to our array items
    items.push(item);
    // res.render("list", { newListItem: item });

    // and then we redirect to the home route. Taking us back to app.get method, with added element in items array.
    res.redirect("/");
    // 6. now we're able to render list again, and pass over now updated array to the list.ejs
});


// then we listen on port 3000 and console log that our server has been started.
app.listen(3000, function () {
    console.log("Server started on port 3000");
});