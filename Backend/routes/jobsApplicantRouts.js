const express = require("express");
const router = express.Router();

const {
  getApplicants,
  getApplicant,
  createApplicant,
  deleteApplicant,
  updateApplicant,
  searchApplicants,
} = require("../controllers/jobsApplicantController");

// Get all applicants
router.get("/", getApplicants);

// Get a single applicant
router.get("/:id", getApplicant);

// Create an applicant
router.post("/", createApplicant);

// Delete an applicant
router.delete("/:id", deleteApplicant);

// Update an applicant
router.put("/:id", updateApplicant);

module.exports = router;