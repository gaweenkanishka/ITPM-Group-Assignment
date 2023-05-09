const express = require("express");
const {
  createEduAdvertiestment,
  getEduAdvertiestments,
  getEduAdvertiestment,
  deleteEduAdvertiestment,
  updateEduAdvertiestment,
} = require("../controllers/eduAdvertiestmentController");

const router = express.Router();

//Get all eduAdvertiestments
router.get("/", getEduAdvertiestments); // this is the last part on the endpoind & final URL is localhost:8000/api/advertisement/

//Get a single eduAdvertiestment
router.get("/:id", getEduAdvertiestment); // this :id is a dynamic value .it will cpature the id send by the user.so  we can access using id variable.

//Post a new eduAdvertiestment
router.post("/", createEduAdvertiestment);

//Delete a eduAdvertiestment
router.delete("/:id", deleteEduAdvertiestment);

//Update a eduAdvertiestment
router.patch("/:id", updateEduAdvertiestment);

module.exports = router;
