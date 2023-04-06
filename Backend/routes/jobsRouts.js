const express= require('express')


const router= express.Router()

//all workouts
router.get('/',(req, res) =>{
    res.json({msg:'Get all workouts'})
})

//get 
router.get('/:id',(req, res)=>{
    res.json({msg: 'get a single workout'})
})

//post 
router.post('/', async (req, res) => {
    const {title, load, reps} = req.body
    
    try {
      const workout = await Workout.create({title, load, reps})
      res.status(200).json(workout)
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  })

//delete
router.delete('/:id',(req,res)=>{
    res.json({msg:'delete a single workout'})
})

//update
router.patch('/:id',(req,res)=>{
    res.json({msg:'update a single workout'})
})

module.exports = router