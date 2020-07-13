const express = require("express");
const morgan = require("morgan");
const routes = require("./src/routes/routes");
const app = express();

//Settings
app.set("port", process.env.PORT || 4000);

//Middleware
app.use(morgan("dev"));

//CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json"
  );
  next();
});

//Routes
app.use(routes);

//Server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
