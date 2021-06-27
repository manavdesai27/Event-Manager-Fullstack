const Event = require("../models/models");

const createEvent = (req, res) => {
    console.log(req.body);
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      message: "Empty Body",
    });
  }
  const event = new Event(body);
  if (!event) {
    return res.status(400).json({ success: false, error: "Event not created" });
  }

  event.save().then(() => {
    return res
      .status(200)
      .json({
        success: true,
        id: event._id,
        message: "Event created successfully",
        data: event,
      })
      
  }).catch((err) => {
    return res
      .status(400)
      .json({ success: false, error: err, message: "No success" });
  });;
};

const deleteEvent= async (req, res) => {
    await Event.findOneAndDelete({ _id: req.params.id }, (err, event) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!event) {
            return res
                .status(404)
                .json({ success: false, error: `Event not found` })
        }

        return res.status(200).json({ success: true, data: event })
    }).catch(err => console.log(err))
}

const getEvents = async (req, res) => {
  await Event.find({}, (err, event) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    return res.status(200).json({ success: true, data: event });
  }).catch((err) => console.log(err));
};

module.exports = { createEvent, getEvents };