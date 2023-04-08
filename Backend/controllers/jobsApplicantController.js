const jobs = require('../models/jobsApplicantModels');
const mongoose = require("mongoose");


//create user
const createapplicant = async (req, res) => {
  try {
    const { firstName, 
            lastName, 
            dateOfBirth, 
            selectOption, 
            description } = req.body;

    const applicant = new applicant({
      firstName,
      lastName,
      dateOfBirth,
      selectOption,
      description
    });
    const savedApplicant = await applicant.save();
    res.status(201).json(savedExample);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get all users
const getApplicants = async (req, res) => {
  try {
    const applicant = await applicant.find({});
    res.status(200).json(applicant);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

//get applicant
const getApplicant = async (req, res) => {
  try {
    const applicant = await applicant.find();
    res.json(applicant);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

//update
const updateApplicant = async (req, res) => {
  try {
    const { firstName,
             lastName, 
             dateOfBirth, 
             selectOption, 
             description } = req.body;

    const applicant = await applicant.findById(req.params.id);
    if (!applicant) return res.status(404).json({
       error: 'Example not found' });
          applicant.firstName = firstName;
          applicant.lastName = lastName;
          applicant.dateOfBirth = dateOfBirth;
          applicant.selectOption = selectOption;
          applicant.description = description;

    const savedApplicant = await applicant.save();
    res.json(savedApplicant);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// // Search for applicants
// const searchApplicant =  async (req, res) {
//   const { query } = req.query;

//   const { query } = req.query;

//   try {
//     const applicant = await applicant.find({
//       $text: {
//         $search: query,
//       },
//     });
//     res.status(200).json(applicant);
//   } catch (error) {
//     res.status(500).json({
//       error: error.message,
//     });
//   }
// };

// Delete a user
const deleteApplicant = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      error: "Invalid user ID",
    });
  }

  try {
    const applicant = await applicant.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({
        error: "User not found",
      });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
  module.exports = {
    getApplicants,
    getApplicant,
    createapplicant,
    deleteApplicant,
    updateApplicant,
   
    
  };
};