const mongoose = require ('mongoose');
const Schema= mongoose.Schema;

const CareerSchema =new Schema({
    name:{
        type:String,
        require:true

    },

    email:{
        type:String
    },

    phoneNumber:{
        type:Number
    },

    // file:{
    //     type: File
    // }
});

module.exports=mongoose.model('Career',CareerSchema);