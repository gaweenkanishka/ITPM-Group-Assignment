const EduAdvertiestment = require("../models/eduAdvertiestmentModel");
const mongoose = require("mongoose");

//get all EduAdvertiestments
const getEduAdvertiestments = async (req, res) => {
  const eduAdvertiestments = await EduAdvertiestment.find({})
    .populate("organization", "name email")
    .sort({
      createdAt: -1,
    }); // this varialble will store the data geting from the DB

  // this will send  the data to client.
  res.status(200).json(eduAdvertiestments);
};

// Get all EduAdvertiestments by organization
const getEduAdvertiestmentsByOrganization = async (req, res) => {
  const org_id = req.org_id;
  const eduAdvertiestments = await EduAdvertiestment.find({
    organization: org_id,
  })
    .populate("organization", "name email")
    .sort({
      createdAt: -1,
    }); // this varialble will store the data geting from the DB

  // this will send  the data to client.
  res.status(200).json(eduAdvertiestments);
};

//get a single EduAdvertiestment
const getEduAdvertiestment = async (req, res) => {
  // this is the id send from client.
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such eduAdvertiestment" });
  }

  const eduAdvertiestment = await EduAdvertiestment.findById(id);

  if (!eduAdvertiestment) {
    return res.status(404).json({ error: "No such eduAdvertiestment" });
  }

  res.status(200).json(eduAdvertiestment);
};

//create new EduAdvertiestment
const createEduAdvertiestment = async (req, res) => {
  //add doc to db
  try {
    const eduAdvertiestment = await EduAdvertiestment.create(req.body);
    res.status(200).json(eduAdvertiestment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a EduAdvertiestment
const deleteEduAdvertiestment = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such eduAdvertiestment" });
  }

  const eduAdvertiestment = await EduAdvertiestment.findOneAndDelete({
    _id: id,
  });

  if (!eduAdvertiestment) {
    return res.status(404).json({ error: "No such eduAdvertiestment" });
  }

  res.status(200).json(eduAdvertiestment);
};

//update a EduAdvertiestment
const updateEduAdvertiestment = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such eduAdvertiestment" });
  }

  const eduAdvertiestment = await EduAdvertiestment.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!eduAdvertiestment) {
    return res.status(404).json({ error: "No such eduAdvertiestment" });
  }

  res.status(200).json(eduAdvertiestment);
};
module.exports = {
  getEduAdvertiestments,
  getEduAdvertiestmentsByOrganization,
  getEduAdvertiestment,
  createEduAdvertiestment,
  deleteEduAdvertiestment,
  updateEduAdvertiestment,
};
