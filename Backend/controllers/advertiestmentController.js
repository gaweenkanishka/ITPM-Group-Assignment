const Advertiestment = require("../models/advertiestmentModel");
const mongoose = require("mongoose");

//get all Advertiestments
const getAdvertiestments = async (req, res) => {
  const advertiestments = await Advertiestment.find({}).sort({ createdAt: -1 }); // this varialble will store the data geting from the DB
 
  // this will send  the data to client.
  res.status(200).json(advertiestments);
};

//get a single Advertiestment
const getAdvertiestment = async (req, res) => {
  // this is the id send from client.
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such advertiestment" });
  }

  const advertiestment = await Advertiestment.findById(id);

  if (!advertiestment) {
    return res.status(404).json({ error: "No such advertiestment" });
  }

  res.status(200).json(advertiestment);
};

//create new Advertiestment
const createAdvertiestment = async (req, res) => {
  const { title, description, contact_number } = req.body;

  //add doc to db
  try {
    const advertiestment = await Advertiestment.create({
      title,
      description,
      contact_number,
    });
    res.status(200).json(advertiestment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a Advertiestment
const deleteAdvertiestment = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such advertiestment" });
  }

  const advertiestment = await Advertiestment.findOneAndDelete({ _id: id });

  if (!advertiestment) {
    return res.status(404).json({ error: "No such advertiestment" });
  }

  res.status(200).json(advertiestment);
};

//update a Advertiestment
const updateAdvertiestment = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such advertiestment" });
  }

  const advertiestment = await Advertiestment.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!advertiestment) {
    return res.status(404).json({ error: "No such advertiestment" });
  }

  res.status(200).json(advertiestment);
};
module.exports = {
  getAdvertiestments,
  getAdvertiestment,
  createAdvertiestment,
  deleteAdvertiestment,
  updateAdvertiestment,
};
