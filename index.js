const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

//Public static path
const staticPath = path.join(__dirname, "./public");
const template_path = path.join(__dirname, "./templates/views");
const partials_path = path.join(__dirname, "./templates/partials");

//Set App Engine
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.use(express.static(staticPath));

//Routes
app.get("", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/weather", (req, res) => {
  res.render("weather");
});

app.get("*", (req, res) => {
  res.render("404error", {
    errorMsg: "Oops! Page Not Found ",
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`${PORT} Connected`));
