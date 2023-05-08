const EventAdvertisement = require('../models/eventAdvertisementModel');
const mongoose = require('mongoose');

//get all Advertiestments
const getEventAdvertisements = async (req, res) => {
    const eventAdvertisements = await EventAdvertisement.find({}).sort({ createdAt: -1 });
  
    res.status(200).json(eventAdvertisements);
  };

//get a single Advertiestment
const getEventAdvertisement = async (req, res) => {
    const { id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such advertiestment" });
    }
  
    const eventAdvertisement = await EventAdvertisement.findById(id);
  
    if (!eventAdvertisement) {
      return res.status(404).json({ error: "No such advertiestment" });
    }
  
    res.status(200).json(eventAdvertisement);
  };

//create new Event Advertiestment
const createEventAdvertisement = async (req, res) => {
    const { location, venue, title, description, email, name, phone, date, time } = req.body;
  
    //add doc to db
    try {
      const eventAdvertiestment = await EventAdvertisement.create({
        location,
        venue,
        title,
        description,
        email,
        name,
        phone,
        date,
        time,
      });
      res.status(200).json(eventAdvertiestment);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  //delete a Advertiestment
const deleteEventAdvertisement = async (req, res) => {
    const { id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such advertiestment" });
    }
  
    const eventAdvertisement = await EventAdvertisement.findOneAndDelete({ _id: id });
  
    if (!eventAdvertisement) {
      return res.status(404).json({ error: "No such advertiestment" });
    }
  
    res.status(200).json(eventAdvertisement);
  };

// Search for healthAdvertisements
const searchEventAdvertisements = async (req, res) => {
    const { query } = req.query;

    try {
        const eventAdvertisements = await EventAdvertisement.find({
        $text: {
            $search: query,
        },
        });
        res.status(200).json(eventAdvertisements);
    } catch (error) {
        res.status(500).json({
        error: error.message,
        });
    }
    }

//update a Advertiestment
const updatEventAdvertisement = async (req, res) => {
    const { id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such advertiestment" });
    }
  
    const eventAdvertisement = await EventAdvertisement.findOneAndUpdate(
      { _id: id },
      {
        ...req.body,
      }
    );
  
    if (!eventAdvertisement) {
      return res.status(404).json({ error: "No such advertiestment" });
    }
  
    res.status(200).json(eventAdvertisement);
  };

module.exports = {
    getEventAdvertisements,
    getEventAdvertisement,
    createEventAdvertisement,
    deleteEventAdvertisement,
    searchEventAdvertisements,
    updatEventAdvertisement,
};