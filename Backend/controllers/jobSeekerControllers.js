const JobSeeker = require('../models/jobSeekerModel');
const mongoose = require ('mongoose');

//create JobSeeker

const createJobSeeker = async (req, res) => {
    try {
      const { 
       firstName,
       lastName,
       dateofBirth,
       selectanOption,
       email,
       description 
       } = req.body;
  
      const newJobSeeker = new JobSeeker({
      firstName,lastName,dateofBirth,selectanOption,email,description
      });
  
      const savedJobSeeker = await newJobSeeker.save();
  
      res.status(201).json(savedJobSeeker);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  };

  // Get all applicants
const getJobSeekers = async (req, res) => {
    try {
      const jobSeekers = await JobSeeker.find({});
  
      res.status(200).json(jobSeekers);
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  };
  
  // Get jobseeker by ID
const getJobSeeker = async (req, res) => {
    try {
      const getJobSeeker = await Applicant.findById(req.params.id);
      if (!JobSeeker) {
        return res.status(404).json({
          error: 'JobSeeker not found',
        });
      }
  
      res.status(200).json(getJobSeeker);
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  };
  
// update a job Seeker
  const updateJobSeeker = async (req, res) => {
    try {
      const {firstName,lastName,dateofBirth,selectanOption,email,description} = req.body;
  
      const jobSeeker = await JobSeeker.findById(req.params.id);
  
      if (!jobSeeker) {
        return res.status(404).json({
          error: 'Jobseeker not found',
        });
      }
  
        jobSeeker.fistName= firstName;
        jobSeeker.lastName=lastName;
        jobSeeker.dateofBirth=dateofBirth;
        jobSeeker.seelectanOption=selectanOption;
        jobSeeker.email=email;
        jobSeeker.description=description;

      const savedJobSeeker = await JobSeeker.save();
  
      res.json(savedJobSeeker);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  };

  // Delete an aJobSeeker by ID
const deleteJobSeeker = async (req, res) => {
    const { id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        error: 'Invalid JobSeeker ID',
      });
    }
  
    try {
      const deletedJobSeeker = await JobSeeker.findByIdAndDelete(id);
  
      if (!deletedJobSeeker) {
        return res.status(404).json({
          error: 'Applicant not found',
        });
      }
  
      res.status(200).json(deletedJobSeeker);
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  };
  
  module.exports={
    createJobSeeker,
    getJobSeekers,
    getJobSeeker,
    updateJobSeeker,
    deleteJobSeeker
  };