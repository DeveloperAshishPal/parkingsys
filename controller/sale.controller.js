const moment = require("moment");
const db = require("../models");
const Sale = db.sale;
const Slot = db.slots;

// Create and Save a new Sale
exports.park = (req, res) => {
  // Validate request
  if (!req.body.slot_no ) {
    res.status(400).send({
      message: "slot no can not be empty!"
    });
    return;
  }

  // Create a Sale
  const sale = {
    name: req.body.name,
    vehicle_no: req.body.vehicle_no,
    vehicle_name: req.body.vehicle_name,
    slot_no : req.body.slot_no
  };

  // Save Sale in the database
  Sale.create(sale)
    .then(data => {
        return Slot.update({is_available:false}, {
            where: { id: id }
        }).then(()=>{
            res.send(data);
        })
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Sale."
      });
    });
};

// Update a Sale amount and free a slot
exports.unpark = (req, res) => {
  const id = req.params.id;

  // find the sale 
  // calculate the amount from time * price
  // update slot for availability
  Sale.find({ where: { slot_no: id } }).then(data=>{
    let startTime = moment(data[0].created_at);
    var duration = moment.duration(moment().diff(startTime));
    var hours = duration.asHours();
    let parking_fee = Math.ceil(hours) * 10;
    return Slot.update({is_available:true}, {
        where: { id: id }
    }).then(()=>{
        res.send({parking_fee:parking_fee});
    })
  }).catch(err => {
      res.status(500).send({
        message: "Error updating Sale with id=" + id
      });
    });
};