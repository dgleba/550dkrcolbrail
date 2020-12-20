var express = require("express");
var cors = require("cors");
var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var bodyParser = require("body-parser");

var book = require("./routes/book");
var app = express();
var auth = require("./routes/auth");

app.use(cors());

var mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
mongoose
  .connect("mongodb://localhost/mevn-secure", {
    promiseLibrary: require("bluebird")
  })
  .then(() => console.log("connection succesful"))
  .catch(err => console.error(err));

// CORS middleware
//   // // cors from https://scotch.io/tutorials/vue-authentication-and-route-handling-using-vue-router
// const allowCrossDomain = function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "*");
//   res.header("Access-Control-Allow-Headers", "*");

//   next();
// };
// app.use(allowCrossDomain);

app.use(logger("dev"));

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   // // cors from https://scotch.io/tutorials/vue-authentication-and-route-handling-using-vue-router
//   // res.header("Access-Control-Allow-Origin", "*");
//   // res.header("Access-Control-Allow-Methods", "*");
//   // res.header("Access-Control-Allow-Headers", "*");
//   // // next();
//   var err = new Error("Not Found");
//   err.status = 404;
//   next(err);
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: "false" }));
app.use(express.static(path.join(__dirname, "dist")));
app.use("/books", express.static(path.join(__dirname, "dist")));
app.use("/book", book);
app.use("/api/auth", auth);

// restful api error handler
app.use(function(err, req, res, next) {
  // cors from https://scotch.io/tutorials/vue-authentication-and-route-handling-using-vue-router
  // res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Methods", "*");
  // res.header("Access-Control-Allow-Headers", "*");
  // // next();

  console.log(err);

  if (req.app.get("env") !== "development") {
    delete err.stack;
  }

  res.status(err.statusCode || 500).json(err);
});

module.exports = app;
