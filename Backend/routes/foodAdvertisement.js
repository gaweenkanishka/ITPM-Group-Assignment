const express = require("express");
const {
  createFoodAdvertiestment,
  getFoodAdvertiestmentsByOrganization,
  getFoodAdvertiestments,
  getFoodAdvertiestment,
  deleteFoodAdvertiestment,
  updateFoodAdvertiestment,
} = require("../controllers/foodAdvertiestmentController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

//Get all foodAdvertiestments
router.get("/", getFoodAdvertiestments); // this is the last part on the endpoind & final URL is localhost:8000/api/advertisement/

//Get all foodAdvertiestments by organization
router.get(
  "/organization",
  authMiddleware,
  getFoodAdvertiestmentsByOrganization
);

//Get a single foodAdvertiestment
router.get("/:id", getFoodAdvertiestment); // this :id is a dynamic value .it will cpature the id send by the user.so  we can access using id variable.

//Post a new foodAdvertiestment
router.post("/", authMiddleware, createFoodAdvertiestment);

//Delete a foodAdvertiestment
router.delete("/:id", authMiddleware, deleteFoodAdvertiestment);

//Update a foodAdvertiestment
router.patch("/:id", authMiddleware, updateFoodAdvertiestment);

module.exports = router;
