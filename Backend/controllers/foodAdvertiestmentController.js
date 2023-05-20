const FoodAdvertiestment = require("../models/foodAdvertiestmentModel");
const mongoose = require("mongoose");

//get all FoodAdvertiestments
const getFoodAdvertiestments = async (req, res) => {
  const foodAdvertiestments = await FoodAdvertiestment.find({})
    .populate("organization", "name email")
    .sort({
      createdAt: -1,
    }); // this variable will store the data getting from the DB

  // this will send  the data to client.
  res.status(200).json(foodAdvertiestments);
};

// Get all FoodAdvertisements by organization
const getFoodAdvertiestmentsByOrganization = async (req, res) => {
  const org_id = req.org_id;
  const foodAdvertiestments = await FoodAdvertiestment.find({
    organization: org_id,
  })
    .populate("organization", "name email")
    .sort({
      createdAt: -1,
    }); // this varialble will store the data geting from the DB

  // this will send  the data to client.
  res.status(200).json(foodAdvertiestments);
};

//get a single FoodAdvertiestment
const getFoodAdvertiestment = async (req, res) => {
  // this is the id send from client.
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such foodAdvertiestment" });
  }

  const foodAdvertiestment = await FoodAdvertiestment.findById(id);

  if (!foodAdvertiestment) {
    return res.status(404).json({ error: "No such foodAdvertiestment" });
  }

  res.status(200).json(foodAdvertiestment);
};

//create new FoodAdvertiestment
const createFoodAdvertiestment = async (req, res) => {
  //add doc to db
  try {
    const foodAdvertiestment = await FoodAdvertiestment.create(req.body);
    res.status(200).json(foodAdvertiestment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a FoodAdvertiestment
const deleteFoodAdvertiestment = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such foodAdvertiestment" });
  }

  const foodAdvertiestment = await FoodAdvertiestment.findOneAndDelete({
    _id: id,
  });

  if (!foodAdvertiestment) {
    return res.status(404).json({ error: "No such foodAdvertiestment" });
  }

  res.status(200).json(foodAdvertiestment);
};

//update a FoodAdvertiestment
const updateFoodAdvertiestment = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such foodAdvertiestment" });
  }

  const foodAdvertiestment = await FoodAdvertiestment.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!foodAdvertiestment) {
    return res.status(404).json({ error: "No such foodAdvertiestment" });
  }

  res.status(200).json(foodAdvertiestment);
};
module.exports = {
  getFoodAdvertiestments,
  getFoodAdvertiestmentsByOrganization,
  getFoodAdvertiestment,
  createFoodAdvertiestment,
  deleteFoodAdvertiestment,
  updateFoodAdvertiestment,
};
