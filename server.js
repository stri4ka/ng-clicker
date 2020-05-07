const express = require("express");

const app = express();

app.use(express.static("./dist/clicker-game"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/clicker-game/index.html"));
});

app.listen(process.env.PORT || 8080);
