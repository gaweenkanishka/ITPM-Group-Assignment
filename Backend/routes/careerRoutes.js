const express = require('express');
const router=express.Router();

const{
    getCareer,
    getcareers,
    createCareer,
    updateCareer,
    deleteCareer,
}=require("../controllers/careerController");
// const{getCareer,getcareers}=require("../controllers/careerController");

//get all Careers
router.get("/",getcareers);

//get Career by Id
router.get("/:id",getCareer);

//create career
router.post("/",createCareer);

//update career
router.put("/:id",updateCareer);

//delete career
router.delete("/:id",deleteCareer);

module.exports=router;

