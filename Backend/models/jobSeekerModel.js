const mongoose= require ('mongoose');
const Schema = mongoose.Schema;

const jobSeekerSchema= new Schema({
   fistName:{
        type:String,
        required:true
    },

    lastName:{
        type:String,
        required:true
    },
   
    dateofBirth:{
        type:Date,
        required:true
    },

    seelectanOption:{
        type:String,
        enum:['have E-mail', `Don't Have E-mail`],
        required:true
    },

    email:{
        type:String
    },

    description:{
        type:String,
        required: true
    },
     
});

module.exports = mongoose.model('jobSeeker',jobSeekerSchema)

