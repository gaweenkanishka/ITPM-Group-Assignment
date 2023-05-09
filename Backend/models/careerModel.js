const mongoose =require('mongoose');
const Schema= mongoose.Schema;

const careerSchema =new Schema({
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

    file:{
        type:File
    }
});

module.exports=mongoose.model('career',careerSchema);