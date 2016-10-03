require("dotenv").config();

const express = require("express");
const readFileSync = require("fs").readFileSync;

const app = express();
const port = process.env.PORT || 3141;

app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.send(readFileSync('./dist/index.html').toString());
});

app.listen(port, () => {
  console.warn(`Listening on ${port}`);
});