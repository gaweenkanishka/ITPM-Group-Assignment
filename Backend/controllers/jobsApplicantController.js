const jobs = require('../models/jobsApplicantModels');
const mongoose = require("mongoose");


//create user
exports.createapplicant = async (req, res) => {
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
const getApplicant = async (req, res) => {
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
exports.getApplicant = async (req, res) => {
  try {
    const applicant = await applicant.find();
    res.json(applicant);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

//update
exports.updateApplicant = async (req, res) => {
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

// Delete a user
const deleteApplicant = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      error: "Invalid user ID",
    });
  }

  try {
    const user = await applicant.findByIdAndDelete(id);
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
};





// exports.deleteExample = async (req, res) => {
//   try {
//     const example = await Example.findById(req.params.id);
//     if (!example) return res.status(404).json({ error: 'Example not found' });
//     await example.remove();
//     res.json({ message: 'Example deleted' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Server error' });
//   }
// };
