const express = require("express");

const app = express();
const path = require("path");

app.use(express.static("./dist/clicker-game"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/clicker-game/index.html"));
});

app.listen(process.env.PORT || 8080);
