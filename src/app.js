const path = require("path");
const express = require("express");
const app = express();
const hbs = require("hbs");
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./../templates/views"));
hbs.registerPartials(path.join(__dirname, "./../templates/partials"));
app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Gippi",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "Gippi",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    name: "Gippi",
    message: "something to help",
  });
});

app.get("/help/*", (req, res) => {
  res.render("notFound", {
    title: 404,
    message: "help article not found",
    name: "Gippi",
  });
});
app.get("*", (req, res) => {
  res.render("notFound", {
    title: 404,
    message: "Page not found",
    name: "Gippi",
  });
});

app.listen(3000, () => {
  console.log("server up!");
});
