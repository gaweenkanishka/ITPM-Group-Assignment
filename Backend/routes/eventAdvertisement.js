const express = require("express");
const {
    getEventAdvertisements,
    getEventAdvertisement,
    createEventAdvertisement,
    deleteEventAdvertisement,
    searchEventAdvertisements,
    updatEventAdvertisement,
} = require("../controllers/eventAdvertisementController");

const router = express.Router();

// GET all healthAdvertisements
router.get("/", getEventAdvertisements);

// GET a single healthAdvertisement
router.get("/:id", getEventAdvertisement);

// POST a new healthAdvertisement
router.post("/",  createEventAdvertisement);

// DELETE a healthAdvertisement
router.delete("/:id", deleteEventAdvertisement);

// UPDATE a healthAdvertisement
router.patch("/:id", updatEventAdvertisement);

// SEARCH for healthAdvertisements
router.get("/search", searchEventAdvertisements);

module.exports = router;


