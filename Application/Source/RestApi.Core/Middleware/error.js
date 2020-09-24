const winston = require("winston");

// Error-Handling Middleware
module.exports = function(err, req, res, next) {
    winston.error(err.message, err);
    console.log("middleware error status....", err.status);
    res.status(500).send({
        status: err.status || 500,
        message: err.message,
        error: {}
    });
};