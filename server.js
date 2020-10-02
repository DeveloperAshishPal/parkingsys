const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require("./routes")('/api/v1',app);
// parsing content-type - application/json
app.use(bodyParser.json());

// parsing content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./model");

let syncOptions = { force: false };

if (process.env.NODE_ENV === "development") {
  syncOptions.force = true;
}

db.sequelize.sync(syncOptions).then(()=>{
    console.log("connect to database")
}).catch(err=>{
    console.log(err);
});

// Health Check Route
app.get("/", (req, res) => {
  res.json({ message: "application running successfully" });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports = app;