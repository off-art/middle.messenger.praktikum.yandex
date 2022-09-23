const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.static(__dirname + "/dist"));

const navLinks = [
  "/",
  "/login",
  "/signup",
  "/profile",
  "/changepass",
  "/500",
  "/incorrectName",
];

navLinks.forEach((link) => {
  app.get(link, (req, res) => {
    res.sendFile(__dirname + "/dist/index.html");
  });
});

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
