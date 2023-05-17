const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const healthAdvertisementSchema = new Schema({

    type: {
        type: String,
        required: true,
        },

    userID: {
        type: String,
        required: true,
        },

    location: {
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

    photos: {
        type: String,
        required: false,
        },

    name: {
        type: String,
        required: true,
        },
        
    phone: {
        type: String,
        required: true,
        },

},

        {
            timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
        }

);

module.exports = mongoose.model("HealthAdvertisement", healthAdvertisementSchema);