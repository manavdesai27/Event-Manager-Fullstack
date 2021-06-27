const mongoose = require("mongoose");

const eventsSchema = new mongoose.Schema({
  text: {
    type: String,
  },
  organiser: {
    type: String,
  },
  location: {
    type: String,
  },
  date: {
    type: String,
  },

  description: {
    type: String,
  },
  registered: {
    type: Boolean,
  },
});

const event = mongoose.model("Event", eventsSchema);

module.exports = event;
