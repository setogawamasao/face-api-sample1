const express = require("express");
const path = require("path");
const { get } = require("request");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/")));

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "/index.html")));
app.listen(3000, () =>
  console.log("Listening on port 3000! http://localhost:3000")
);
