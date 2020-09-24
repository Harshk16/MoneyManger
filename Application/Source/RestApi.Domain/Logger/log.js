const winston = require("winston");
require("winston-mongodb");
require("express-async-errors");

module.exports = function() {
    winston.exceptions.handle(
        new winston.transports.Console({
            colorize: true,
            prettyPrint: true
        }),
        new winston.transports.File({
            filename: "uncaughtException.log"
        })
    );

    process.on("uncaughtException", function(error) {
        if (!error.isOperational) process.exit(1);
    });
    //   process.on("unhandledRejection", ex => {
    //     throw ex;
    //   });

    // Log Error
    winston.add(new winston.transports.File({
        filename: "logfile.log"
    }));

    // TODO: Winston DB log

    // winston.add(new winston.transports.MongoDB(), {
    //   db: "mongodb://test:test12345@ds017175.mlab.com:17175/grocery_site"
    // });
};