const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobsApplicationSchema = new Schema({
  jobId:{
    type:String
  },
  
  jobTitle: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['FullTime', 'PartTime', 'Internship','Contract'],
    required: true
  },
  location: {
    type: String,
    required: true
  },
receive: {
    type: String,
    required: true
  },
 jobDescription: {
    type: String,
    required: true
  },
  openFor:{
    type:String,
    requuired:true
  },
  companyName:{
    type:String,
    require:true
  },
  Image:{
    type:String
  }
});

module.exports =  mongoose.model("jobsApplication", jobsApplicationSchema);


