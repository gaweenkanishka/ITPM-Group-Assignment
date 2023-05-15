const Applicant = require('../models/jobsApplicationModels');
const mongoose = require('mongoose');

// create applicant
const createApplicant = async (req, res) => {
  try {
    const { jobTitle,type,location,receive,jobDescription,openFor,companyName,Image } = req.body;

    const newApplicant = new Applicant({
      jobTitle,type,location,receive,jobDescription,openFor,companyName,Image,
    });

    const savedApplicant = await newApplicant.save();

    res.status(201).json(savedApplicant);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get all applicants
const getApplicants = async (req, res) => {
  try {
    const applicants = await Applicant.find({});

    res.status(200).json(applicants);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// Get an applicant by ID
const getApplicant = async (req, res) => {
  try {
    const applicant = await Applicant.findById(req.params.id);

    if (!applicant) {
      return res.status(404).json({
        error: 'Applicant not found',
      });
    }

    res.json(applicant);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Update an applicant by ID
const updateApplicant = async (req, res) => {
  try {
    const {  jobTitle,type,location,receive,jobDescription,openFor,companyName,Image } = req.body;

    const applicant = await Applicant.findById(req.params.id);

    if (!applicant) {
      return res.status(404).json({
        error: 'Applicant not found',
      });
    }

    applicant.jobTitle=jobTitle;
    applicant.type =type;
    applicant.location = location;
    applicant.receive =receive;
    applicant.jobDescription= jobDescription;
    applicant.openFor=openFor;
    applicant.companyName=companyName;
    applicant.Image=Image;
    
    const savedApplicant = await Applicant.save();

    res.json(savedApplicant);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete an applicant by ID
const deleteApplicant = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      error: 'Invalid applicant ID',
    });
  }

  try {
    const deletedApplicant = await Applicant.findByIdAndDelete(id);

    if (!deletedApplicant) {
      return res.status(404).json({
        error: 'Applicant not found',
      });
    }

    res.status(200).json(deletedApplicant);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = {
  getApplicants,
  getApplicant,
  createApplicant,
  deleteApplicant,
  updateApplicant,
};