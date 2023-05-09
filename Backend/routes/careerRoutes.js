const expresss=require('express');
const router=express.Router();

const{
    getCareer,
    getcareers,
    createCareer,
    updateCareer,
    deleteCareer,
}=require("../controllers/careereController");
const{getCareer,getcareers}=require("../controllers/careereController");

//get all Careers
router.get("/",getcareers);

//get Career by Id
router.get("/:id",getCareer);

//create career
router.create("/",createCareer);

//update career
router.update("/:id",updateCareer);

//delete career
router.delete("/:id",deleteCareer);

module.exports=router;

