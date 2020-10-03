var router = require("express").Router();
var slots = require('./slots.route');
var sale = require('./sale.route');

module.exports = (mount,app) => {    
    // loading routes
    app.use("/api/v1/sale", sale(router))
    app.use("/api/v1/slots",slots(router))

  };