const express = require("express");
const cors = require("cors");
const https = require('https')
const app = express();


const db = require("./models");
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
  const { exec } = require('child_process');

   new Promise((resolve, reject) => {
    const migrate = exec(
      'sequelize db:seed:all',
      { env: process.env },
      err => (err ? reject(err) : resolve())
    );

    // Forward stdout+stderr to this process
    migrate.stdout.pipe(process.stdout);
    migrate.stderr.pipe(process.stderr);
  });
});



app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

require("./routes/user.routes")(app);
require("./routes/category.routes")(app);
require("./routes/product.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});