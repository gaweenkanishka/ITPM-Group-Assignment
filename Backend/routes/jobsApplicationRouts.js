const express = require("express");
const router = express.Router();

const {
  getApplicants,
  getApplicant,
  createApplicant,
  deleteApplicant,
  updateApplicant,
  searchApplicants,
  incrViews,
  getCurrViews
} = require("../controllers/jobsApplicationController");

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

router.post("/incr/:id", incrViews);

router.get("/views/:id", getCurrViews);

module.exports = router;