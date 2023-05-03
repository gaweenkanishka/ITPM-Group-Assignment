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
router.get("/", getAdvertiestments); // this is the last part on the endpoind & final URL is localhost:8000/api/advertisement/

//Get a single advertiestment
router.get("/:id", getAdvertiestment); // this :id is a dynamic value .it will cpature the id send by the user.so  we can access using id variable.

//Post a new advertiestment
router.post("/", createAdvertiestment);

//Delete a advertiestment
router.delete("/:id", deleteAdvertiestment);

//Update a advertiestment
router.patch("/:id", updateAdvertiestment);

module.exports = router;
