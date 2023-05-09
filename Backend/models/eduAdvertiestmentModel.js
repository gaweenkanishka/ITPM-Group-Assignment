const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eduAdvertiestmentSchema = new Schema({
  org_id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  location: {
    type: String,
    required: true,
  },
  closing_date: {
    type: Date,
  },
  contact_number: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("eduAdvertiestment", eduAdvertiestmentSchema);
