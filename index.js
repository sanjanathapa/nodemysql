//setting up express web server

const express = require("express");  //for building the rest apis
const bodyParser =  require("body-parser");
const sequelize = require("./config/db");
var router = require("./routes/userroutes");

const app = express();
  // parse requests of content-type - application/json
app.use(bodyParser.json());
    // parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));
sequelize.sync();
app.use('/', router);

  //test DB
  sequelize._modelauthenticate()
  .then(() => {
    console.log('Database connected successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  
  // simple route
  app.get("/", (req, res) => {
    res.json({ message: "Welcome to NodeJS application." });
  });

  // set port, listen for requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});