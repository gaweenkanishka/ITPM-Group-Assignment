const mongoose= require ('mongoose');
const Schema = mongoose.Schema;

const jobSeekerSchema= new Schema({
   firstName:{
        type:String,
        required:true
    },

    lastName:{
        type:String,
        required:true
    },
   
    dateofBirth:{
        type:Date,     
    },

    selectanOption:{
        type:String,
        enum:['Have E-mail', 'Not have E-mail'],
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

