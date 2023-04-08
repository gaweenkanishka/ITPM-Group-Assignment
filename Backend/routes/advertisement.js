const express = require("express");
const {
  createAdvertiestment,
  getAdvertiestments,
  getAdvertiestment,
  deleteAdvertiestment,
  updateAdvertiestment,
} = require("../controllers/advertiestmentController");

const router = express.Router();

//Get all advertiestments
router.get("/", getAdvertiestments);

//Get a single advertiestment
router.get("/:id", getAdvertiestment);

//Post a new advertiestment
router.post("/", createAdvertiestment);

//Delete a advertiestment
router.delete("/:id", deleteAdvertiestment);

//Update a advertiestment
router.patch("/:id", updateAdvertiestment);

module.exports = router;
