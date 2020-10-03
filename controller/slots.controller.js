const db = require("../model");
const Slots = db.slots;

// Create and Save a new Slots
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "title can not be empty!"
    });
    return;
  }

  // Create a Slots
  const slots = {
    title: req.body.title,
    location: req.body.location,
    price: req.body.price
  };

  // Save Slots in the database
  Slots.create(slots)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Slots."
      });
    });
};

// Retrieve all Slots from the database.
exports.findAll = (req, res) => {
  Slots.findAll({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Slots."
      });
    });
};

// Update a Slots by the id in the request
exports.updateMaintain = (req, res) => {
  const id = req.params.id;

  Slots.update({is_under_maintance:true}, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Slots was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Slots with id=${id}. Maybe Slots was not found`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Slots with id=" + id
      });
    });
};

// find all available Slots
exports.findAllAvailable = (req, res) => {
  Slots.findAll({ where: { is_available: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Slots."
      });
    });
};