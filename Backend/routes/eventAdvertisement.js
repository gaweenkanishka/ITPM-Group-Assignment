const express = require("express");
const {
    getEventAdvertisements,
    getEventAdvertisement,
    createEventAdvertisement,
    deleteEventAdvertisement,
    searchEventAdvertisements,
    updatEventAdvertisement,
    getEventAdvertisementsByOrganization
} = require("../controllers/eventAdvertisementController");
const authMiddleware = require("../middlewares/authMiddleware");

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

// GET all healthAdvertisements by organization
router.get("/organization", authMiddleware,getEventAdvertisementsByOrganization);

module.exports = router;


