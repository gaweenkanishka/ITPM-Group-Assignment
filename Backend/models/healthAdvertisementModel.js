const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const healthAdvertisementSchema = new Schema({

    type: {
        type: String,
        required: true,
        },

    location: {
        type: String,
        required: true,
      },

    condition: {
        type: String,
        required: false,
      },

    tittle: {
        type: String,
        required: true,
        },
    
    description: {	
        type: String,   
        required: true,
        },

    photos: {
        type: String,
        required: true,
        },

    name: {
        type: String,
        required: true,
        },
    
    email: {
        type: String,
        required: true,
        },
    
    phone: {
        type: String,
        required: true,
        },
    

});

module.exports = mongoose.model("User", healthAdvertisementSchema);