//package imports
var express = require("express");
var path = require("path");
var logger = require("morgan");
var cors = require("cors");
var bodyParser = require("body-parser");
// const validate = require('./middleware/validate-schema')
app = express();
const { param } = require('express-validator');

const passport =require('passport');
require('./midddleware/passport')(passwort)

require("./global_functions.js");
models = require("./models/index.js");
app.use(cors());
app.use(logger("dev"));
app.use(express.json({ limit: 1024 * 1024 * 200 }));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
// support parsing of application/json type post data
app.use(bodyParser.json({ limit: "200mb" }));
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true, limit: "200mb", parameterLimit: 50000 }));
const { v4: uuidv4 } = require("uuid");
/*Sync schemas and tables*/
models.sequelize
    .authenticate()
    .then(() => {
        console.log("Connected to SQL database:", CONFIG.db_name);
        const shema = models.schemaCreate.then(() => {
            models.sequelize.sync().then(async () => {

            });
        });
    })
    .catch((err) => {
        console.error(
            "Unable to connect to Postgres database:",
            CONFIG.db_name,
            err.message
        );
    });


app.use(function (req, res, next) {
    res.locals.startEpoch = Date.now();
    res.locals.requestId = uuidv4();
    next();
});

if (process.env.NODE_ENV && process.env.NODE_ENV == '.env.development') {
    // console.log("INFO - Development Environment Configuration Setup");
    require("dotenv").config({ path: path.join(__dirname, `/${process.env.NODE_ENV}`) });
  }
  else if (process.env.NODE_ENV && process.env.NODE_ENV == '.env.test') {
    // console.log("INFO - Development Environment Configuration Setup");
    require("dotenv").config({ path: path.join(__dirname, `/${process.env.NODE_ENV}`) });
  }
  else {
    require("dotenv").config();
  }

// error handler
app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = err;
    res.status(err.status || 500);
    res.render("error");
});
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST,PUT, , OPTIONS");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With, content-type, Authorization, Content-Type"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("Cache-Control", "no-cache ,no-store");
    next();
});

app.use( require('./controller/book/book.controller.js').router);
app.use( require('./controller/user/patron.controller.js').router);
app.use( require('./controller/user/user.controller.js').router);

module.exports = app;
