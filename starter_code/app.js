require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const cors = require("cors");
const Movies = require("./model/Movies.js");
const data = require("./bin/seeds.js");

mongoose
  .connect("mongodb://localhost:27017/Films", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((self) => {
    console.log(`Connected to database: "${self.connection.name}"`)
    return self.connection.dropDatabase();
  })
  .then((result) => {
    return Movies.insertMany(data).then((movies) => {
      console.log(movies);
    });
  })
  .then((movies) => {
    console.log("done");
  })
  .catch((error) => {
    console.error("Error connecting to the database", error);
  });


const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

const app = express();

// Middleware Setup
app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.listen(5000, () => {
//   console.log("Express running");
// });

const index = require("./routes/routes");
app.use("/", index);
app.use("/movies", index)


module.exports = app;
const www = require("./bin/www")