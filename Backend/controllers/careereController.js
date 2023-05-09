const career = require('../models/careerModel');
const mongoose=require('mongoose');

//create career
const createCareer= async(req,res)=>{
    try{
        const{name, email,phoneNumber,file}=req.body
       
        const newCareer =new Career({
                name,email,phoneNumber,file})

        const savedCareer =await newCareer.save();
        res.status(201).jason(savedCareer);
              
 }catch (err){
    console.error(err);
    res.status(500).json({error:'server error'});
 }  
};

//Get All career
    const getCareer =async (req,res)=>{
        try{
            const careers =await Career.find({});
            res.status(200).json(careers)
        }catch (error){
            res.status(500).json({
                error:error.message
            });
        }
    };

    //Get Career by Id