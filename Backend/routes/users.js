const express = require("express");
const {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
  searchUsers,
} = require("../controllers/userControllers");

const router = express.Router();

// GET all users
router.get("/", getUsers);

// GET a single user
router.get("/:id", getUser);

// POST a new user
router.post("/", createUser);

// DELETE a user
router.delete("/:id", deleteUser);

// UPDATE a user
router.patch("/:id", updateUser);

// SEARCH for users
router.get("/search", searchUsers);

module.exports = router;
