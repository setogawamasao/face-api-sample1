const express = require("express");
const path = require("path");
const { get } = require("request");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/weights")));
app.use(express.static(path.join(__dirname, "/js")));
app.use(express.static(path.join(__dirname, "/images")));

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "/index.html")));
app.listen(3000, () =>
  console.log("Listening on port 3000! http://localhost:3000")
);
