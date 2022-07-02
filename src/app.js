const path = require("path");
const express = require("express");
const app = express();
const hbs = require("hbs");

const geocode = require("./utils/geocode");
const forcast = require("./utils/forecast");

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./../templates/views"));
hbs.registerPartials(path.join(__dirname, "./../templates/partials"));
app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Sachin",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({ error: "Please provide an address" });
  }

  const address = req.query.address;

  geocode(address, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return res.send({ error });
    }
    forcast(latitude, longitude, (error, forecastData) => {
      res.send({
        latitude,
        longitude,
        location,
        forecast: forecastData,
      });
    });
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "Sachin",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    name: "Sachin",
    message: "something to help",
  });
});

app.get("/help/*", (req, res) => {
  res.render("notFound", {
    title: 404,
    message: "help article not found",
    name: "Sachin",
  });
});
app.get("*", (req, res) => {
  res.render("notFound", {
    title: 404,
    message: "Page not found",
    name: "Sachin",
  });
});

app.listen(3000, () => {
  console.log("server up!");
});
