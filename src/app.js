const express = require("express");
const app = express();

const path = require("path");
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "someone",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "someone",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    message: "something to help",
  });
});

// app.get("/weather", (req, res) => {
//   res.send("weather");
// });

app.listen(3000, () => {
  console.log("server up!");
});
