const express = require("express");

const app = express();
const PORT = 4040;

app.get("/", (req, res) => {
  res.send("salam");
});

app.listen(PORT, () => {
  console.log(`app is runing at ${PORT} port`);
});
