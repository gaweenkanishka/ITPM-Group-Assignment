const HealthAdvertisement = require('../models/healthAdvertisementModel');
const mongoose = require('mongoose');

// Get all healthAdvertisements
const getHealthAdvertisements = async (req, res) => {
    try {
        const healthAdvertisements = await HealthAdvertisement.find({});
        res.status(200).json(healthAdvertisements);
    } catch (error) {
        res.status(500).json({
        error: error.message,
        });
    }
    }

// Get one healthAdvertisement
const getHealthAdvertisement = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
        error: "No such Advertisement",
        });
    }

    try {
        const healthAdvertisement = await HealthAdvertisement.findById(id);
        if (!healthAdvertisement) {
        return res.status(404).json({
            error: "Advertisement not found",
        });
        }
        res.status(200).json(healthAdvertisement);
    } catch (error) {
        res.status(500).json({
        error: error.message,
        });
    }
    }

// Create one healthAdvertisement
const createHealthAdvertisement = async (req, res) => {
    const {
        type,
        location,
        condition,
        tittle,
        description,
        photos,
        name,
        email,
        phone,
    } = req.body;

    if (!type || !location || !tittle || !description || !photos || !name || !email || !phone) {
        return res.status(400).json({
        error: "Missing required fields",
        });
    }
    try {
        const healthAdvertisement = await HealthAdvertisement.create(req.body);
        res.status(201).json(healthAdvertisement);
    } catch (error) {
        res.status(500).json({
        error: error.message,
        });
    }
    }

// Delete one healthAdvertisement
const deleteHealthAdvertisement = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
        error: "Invalid Advertisement ID",
        });
    }

    try {
        const healthAdvertisement = await HealthAdvertisement.findByIdAndDelete(id);
        if (!healthAdvertisement) {
        return res.status(404).json({
            error: "Advertisement not found",
        });
        }
        res.status(200).json(healthAdvertisement);
    } catch (error) {
        res.status(500).json({
        error: error.message,
        });
    }
    }

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

//update healthAdvertisement
const updateHealthAdvertisement = async (req, res) => {
    const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      error: "No such Advertisement",
    });
  }

  const healthAdvertisement = await HealthAdvertisement.findOneAndUpdate(
    {
      _id: id,
    },
    {
      ...req.body,
    }
  );

  if (!healthAdvertisement) {
    return res.status(400).json({
      error: "No such Advertisement",
    });
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