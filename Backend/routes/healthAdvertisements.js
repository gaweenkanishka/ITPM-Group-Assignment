const express = require("express");
const {
    getHealthAdvertisements,
    getHealthAdvertisement,
    createHealthAdvertisement,
    deleteHealthAdvertisement,
    updateHealthAdvertisement,
    searchHealthAdvertisements,
    getDonateAdvertisementsByOrganization
} = require("../controllers/healthAdvertisementControllers");
const authMiddleware = require("../middlewares/authMiddleware");

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

// GET all healthAdvertisements by organization
router.get("/organization", authMiddleware, getDonateAdvertisementsByOrganization);

module.exports = router;


