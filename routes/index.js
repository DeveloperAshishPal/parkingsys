var router = require("express").Router();
var slots = require('./slots.route');
var sale = require('./sale.route');

module.exports = (mount,app) => {    
    // loading routes
    app.use(`${mount}/sale`, slots(router))
    app.use(`${mount}/slots`,sale(router))

  };