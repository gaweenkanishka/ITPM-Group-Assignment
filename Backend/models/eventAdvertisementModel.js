const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventAdvertisementSchema = new Schema({

location: {
    type: String,
    required: true,
  },

userID: {
    type: String,
    required: true,
    },

venue: {
    type: String,
    required: true,
},

image: {
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

email: {
    type: String,
    required: true,
    },

name: {
    type: String,
    required: true,
    },
    
phone: {
    type: String,
    required: true,
    },

date: {
    type: Date,
    required: true,
    },

time: {
    type: String,
    required: true,
    },

},
    {
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    }
    
);

module.exports = mongoose.model("EventAdvertisement", eventAdvertisementSchema);