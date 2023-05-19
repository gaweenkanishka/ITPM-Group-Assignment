const express = require("express");
const router = express.Router();

const {
  getJobSeeker,
  getJobSeekers,
  createJobSeeker,
  updateJobSeeker,
  deleteJobSeeker,
  searchApplicants,
} = require("../controllers/jobSeekerControllers");

// Get all applicants
router.get("/", getJobSeekers);

// Get a single applicant
router.get("/:id",getJobSeeker);

// Create an applicant
router.post("/", createJobSeeker);

// Update an JobSeeker
router.put("/:id", updateJobSeeker);

// Delete an JobSeeker
router.delete("/:id", deleteJobSeeker);

module.exports = router;