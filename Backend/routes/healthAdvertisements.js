const express = require("express");
const {
    getHealthAdvertisements,
    getHealthAdvertisement,
    createHealthAdvertisement,
    deleteHealthAdvertisement,
    updateHealthAdvertisement,
    searchHealthAdvertisements,
} = require("../controllers/healthAdvertisementControllers");

const router = express.Router();

// GET all healthAdvertisements
router.get("/", getHealthAdvertisements);

// GET a single healthAdvertisement
router.get("/:id", getHealthAdvertisement);

// POST a new healthAdvertisement
router.post("/", createHealthAdvertisement);

// DELETE a healthAdvertisement
router.delete("/:id", deleteHealthAdvertisement);

// UPDATE a healthAdvertisement
router.patch("/:id", updateHealthAdvertisement);

// SEARCH for healthAdvertisements
router.get("/search", searchHealthAdvertisements);

module.exports = router;


