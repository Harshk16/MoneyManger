const express = require("express");
const winston = require("winston");
const app = express();

require("./RestApi.Domain/Logger/log")();
require("./RestApi.Web.Startup/routes/routes")(app);
require("./RestApi.Domain/Database/db")();

const port = process.env.PORT || 5000;

app.listen(port, () => winston.info(`server running on port ${port}`));

app.response.write("It's alive!");
