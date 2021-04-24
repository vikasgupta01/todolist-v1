const express = require("express");
const bodyParser = require("body-parser");

const date = require(__dirname + "/date.js");
// we can use this function wherever we need it now.

const app = express();

const items = [];
const workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));
// Created new folder named public to keep CSS and browser side JS. See comment on branch 8/22-EJS for details.

// follow 1-6 to understand general code flow and logic formation.
// 1. HomePage tha gets loaded first
app.get("/", function (req, res) {

    // now we have option of using either of below two date variables. One will give only day, and other will give day and date both.

    const day = date.getDate();

    //2. after passing through steps above, we render list.ejs passing in two variables (first contains date info, and second has items array) which get read there.
    res.render("list", { listTitle: day, newListItems: items });
});


app.post("/", function (req, res) {
    // 5. when we're inside this block of code, we grab hold of value of newItem (entered through UI input), we save it to a variable 'item'
    const item = req.body.newItem;

    // add that item to our array items and redirect to required route.
    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }
    // 6. now we're able to render list again, and pass over now updated array to the list.ejs
});


app.get("/work", function (req, res) {
    res.render("list", { listTitle: "Work List", newListItems: workItems });
})

app.post("/work", function (req, res) {
    const item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
})

app.get("/about", function (req, res) {
    res.render("about");
})


// listen on port 3000 and console log that our server has been started.
app.listen(3000, function () {
    console.log("Server started on port 3000");
});
