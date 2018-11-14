const winston = require('winston'),
expressWinston = require('express-winston');

var printMessage = info => `${info.level}: ${info.message}`;

module.exports = () => expressWinston.logger({
    transports: [
      new winston.transports.Console()
    ],
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.printf(printMessage)
    ),
    meta: false, // optional: control whether you want to log the meta data about the request (default to true)
    msg: "{{res.statusCode}} {{req.method}} {{req.url}} {{res.responseTime}}ms", // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
    expressFormat: false, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
    colorize: true, // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
    ignoreRoute: function (req, res) { return false; } // optional: allows to skip some log messages based on request and/or response
  });