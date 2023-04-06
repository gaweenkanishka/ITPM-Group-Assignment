const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ExampleSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  selectOption: {
    type: String,
    enum: ['Option1', 'Option2', 'Option3'],
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

module.exports =  mongoose.model('jobs', jobsSchema);


