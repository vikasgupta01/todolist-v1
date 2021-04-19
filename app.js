// 7/22-EJS : The concept of scope in the context of javascript

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// need to define item here to increase it's scope and be able to use in app.get as well as in app.post
let items = ["Buy Food", "Cook Food", "Eat Food", "Shit Food"];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

// follow 1-6 to understand general code flow and logic formation.
// 1. HomePage tha gets loaded first
app.get("/", function (req, res) {

    let today = new Date();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("en-US", options);

    //2. after passing through steps above, we render list.ejs passing in two variables (first contains date info, and second has items array) which get read there.
    res.render("list", { kindOfDay: day, newListItems: items });
});

app.post("/", function (req, res) {
    // 5. when we're inside this block of code, we grab hold of value of newItem (entered through UI input), we save it to a variable 'item'
    let item = req.body.newItem;

    // add that item to our array items
    items.push(item);

    // redirect to the home route. Taking us back to app.get method, with added element in items array.
    res.redirect("/");
    // 6. now we're able to render list again, and pass over now updated array to the list.ejs
});


// listen on port 3000 and console log that our server has been started.
app.listen(3000, function () {
    console.log("Server started on port 3000");
});


// Lecture Specific comments : 

    // We use three keywords to initiate variables in JS (1. Var, 2. let, 3. const)
    // Inside a function - all three (var, let, const) have a LOCAL SCOPE.
    // Outside a function - all three have GLOBAL SCOPE.
    // inside a loop (for ex : if-else, while, do-while etc) var has global scope and other two have local scope. (call it one of the JS pecularities)
    // And this is the reason we'll avoid using var in JS as much as we can. And there will be rare cases where we have to use them.

    // see course material for more reading material on topics var, let and const. (https://www.appbrewery.co/p/web-development-course-resources/)