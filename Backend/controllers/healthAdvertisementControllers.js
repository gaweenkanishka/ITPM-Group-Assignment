const HealthAdvertisement = require('../models/healthAdvertisementModel');
const mongoose = require('mongoose');

//get all Advertiestments
const getHealthAdvertisements = async (req, res) => {
    const healthAdvertisements = await HealthAdvertisement.find({}).sort({ createdAt: -1 });
  
    res.status(200).json(healthAdvertisements);
  };

//get a single Advertiestment
const getHealthAdvertisement = async (req, res) => {
    const { id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such advertiestment" });
    }
  
    const healthAdvertisement = await HealthAdvertisement.findById(id);
  
    if (!healthAdvertisement) {
      return res.status(404).json({ error: "No such advertiestment" });
    }
  
    res.status(200).json(healthAdvertisement);
  };

//create new Health Advertiestment
const createHealthAdvertisement = async (req, res) => {
    const { type, location, condition, title, description, photos, name, email, phone } = req.body;
  
    //add doc to db
    try {
      const healthAdvertiestment = await HealthAdvertisement.create({
        type,
        location,
        condition,
        title,
        description,
        photos,
        name,
        email,
        phone,
      });
      res.status(200).json(healthAdvertiestment);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  //delete a Advertiestment
const deleteHealthAdvertisement = async (req, res) => {
    const { id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such advertiestment" });
    }
  
    const healthAdvertisement = await HealthAdvertisement.findOneAndDelete({ _id: id });
  
    if (!healthAdvertisement) {
      return res.status(404).json({ error: "No such advertiestment" });
    }
  
    res.status(200).json(healthAdvertisement);
  };

// Search for healthAdvertisements
const searchHealthAdvertisements = async (req, res) => {
    const { query } = req.query;

    try {
        const healthAdvertisements = await HealthAdvertisement.find({
        $text: {
            $search: query,
        },
        });
        res.status(200).json(healthAdvertisements);
    } catch (error) {
        res.status(500).json({
        error: error.message,
        });
    }
    }

//update a Advertiestment
const updateHealthAdvertisement = async (req, res) => {
    const { id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such advertiestment" });
    }
  
    const healthAdvertisement = await HealthAdvertisement.findOneAndUpdate(
      { _id: id },
      {
        ...req.body,
      }
    );
  
    if (!healthAdvertisement) {
      return res.status(404).json({ error: "No such advertiestment" });
    }
  
    res.status(200).json(healthAdvertisement);
  };

module.exports = {
    getHealthAdvertisements,
    getHealthAdvertisement,
    createHealthAdvertisement,
    deleteHealthAdvertisement,
    searchHealthAdvertisements,
    updateHealthAdvertisement,
};