const slots = require("../controller/slots.controller.js");

module.exports = (router) => {  
    // Create a new slot
    router.post(`/`, slots.create);
  
    // Retrieve all slots
    router.get(`/`, slots.findAll);
  
    // Retrieve all available slots
    router.get(`/available`, slots.findAllAvailable);

    // Update a slot with id
    router.put(`/:id/maintainance`, slots.updateMaintain);
  
    return router;
  };