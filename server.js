const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

app.use(morgan("tiny"));
app.use(bodyparser.json());

app.use(require("./routes/main"));
app.get("/express_backend", (req, res) => {
  res.send({ express: "Express отправил вам это сообщение" });
});

app.use(error_handler);

function error_handler(err, req, res, next) {
  res.status(500);
  res.json({ error: err.message });
}

mongoose.connect("mongodb://localhost/pizzasoft").then(async () => {
  app.listen(port, () => console.log(`Listening on port ${port}`));
});
