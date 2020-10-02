const sale = require("../controllers/sale.controller.js");
module.exports = (router) => {
    
    // Create a new sale
    router.post("/", sale.park);
  
    // Update a sale with id and make slot available
    router.put("/:id", sale.unpark);
    
    return router;
  };