const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobsApplicationSchema = new Schema({
  jobId:{
    type:String
  },
  
  jobTitle: {
    type: String,
   
  },
  type: {
    type: String,
    enum: ['FullTime', 'PartTime', 'Internship','Contract'],
    
  },
  location: {
    type: String,
   
  },
receive: {
    type: String,
   
  },
 jobDescription: {
    type: String,
   
  },
  openFor:{
    type:String,
    
  },
  companyName:{
    type:String,
   
  },
  image:{
    type:String
  },
  views:{
    type: Number,
    default: 0
  }
});

module.exports =  mongoose.model("jobsApplication", jobsApplicationSchema);


