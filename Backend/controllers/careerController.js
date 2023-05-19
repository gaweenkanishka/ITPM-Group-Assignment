const Career = require('../models/careerModel');
const mongoose = require('mongoose');

//create career
const createCareer= async(req,res)=>{
    try{
        const{name, 
              email,
              phoneNumber,
              file}=req.body
       
        const newCareer =new Career({
                name,email,phoneNumber,file})

        const savedCareer =await newCareer.save();
        res.status(201).json(savedCareer);
              
 }catch (err){
    console.error(err);
    res.status(500).json({error:'server error'});
 }  
};

//Get All career
    const getcareers =async (req,res)=>{
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
    const getCareer = async (req, res)=>{
        const {id} = req.params;
        console.log(id);
      
          try {
            const getCareer = await Career.findById(id);
            if (!Career) {
              return res.status(404).json({
                error: 'Career not found',
              });
            }
        
            res.status(200).json(getCareer);
          } catch (error) {
            res.status(500).json({
              error: error.message,
            });
          }
        };
    
        //update career by Id
         const updateCareer =async(req,res)=>{
            try{
                const{name,email,phoneNumber} = req.body;
                const career = await Career.findById(req.params.id);

                if(!career){
                    return res.status(404).json({
                      error: 'Career not found',
                    });
                  }
                  const updatedCareer = {name,email,phoneNumber};

                  const savedCareer = await Career.findByIdAndUpdate(req.params.id, updatedCareer);
              
                  res.status(200).send('Updated !')
                } catch (err) {
                  console.error(err);
                  res.status(500).json({ error: 'Server error' });
                }
              };

    //Delete a career
    const deleteCareer =async(req,res) =>{
              const {id} =req.params;

              if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({
                  error: 'Invalid career ID',
                });
              }
    
          try{
            const deleteCareer = await Career.findByIdAndDelete(id);
            if(!deleteCareer){
                return res.status(404).json({
                    error: 'Career not found',
                  });
            }
          
      res.status(200).send('Deleted !');
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }    
    };
    
    module.exports={
        createCareer,
        updateCareer,
        getcareers,
        getCareer,
        deleteCareer

    };