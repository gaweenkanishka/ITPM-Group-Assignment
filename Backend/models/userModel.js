const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  //     Full name
  // Date of birth
  // Contact information (phone number, email, address)
  // Nationality/citizenship
  // Marital status
  // Education level
  // Employment status and history
  // Income level
  // Family size and composition
  // Health status and medical history (such as blood type and allergies)
  // Language proficiency
  // Emergency contact information
  // Job skills and qualifications (if applicable)
  // Transportation mode
  // Source of income
  // Housing status
  // Dependents (if applicable)
  // Criminal history (if applicable)
  // Immigration status (if applicable)
  // Disability status (if applicable)

  //user id should be generated automatically
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  phone: {
    type: Number,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
  },
  maritalStatus: {
    type: String,
    required: true,
  },
  educationLevel: {
    type: String,
    required: false,
  },
  employmentStatus: {
    type: String,
    required: false,
  },
  incomeLevel: {
    type: String,
    required: false,
  },
  familySize: {
    type: Number,
    required: false,
  },
  healthStatus: {
    type: String,
    required: false,
  },
  languageProficiency: {
    type: String,
    required: false,
  },
  emergencyContact: {
    type: String,
    required: false,
  },
  jobSkills: {
    type: String,
    required: false,
  },
  dependents: {
    type: Number,
    required: false,
  },
  immigrationStatus: {
    type: String,
    required: false,
  },
  disabilityStatus: {
    type: String,
    required: false,
  },
  bloodGroup: {
    type: String,
    required: false,
  },
  note: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("User", userSchema);
