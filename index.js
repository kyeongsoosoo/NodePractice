const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const { User } = require("./models/User");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const config = require("./config/key");

const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("mongo connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("hello worel!"));

app.listen(port, () => console.log(`listeing to port ${port}`));

app.post("/register", (req, res) => {
  const user = new User(req.body);

  user.save((err, userInto) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});
