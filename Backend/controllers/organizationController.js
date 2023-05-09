require("dotenv").config();
const Organization = require("../models/orgUserModel");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Login
const login = async (req, res) => {
  // Check if the email and password are valid
  const organization = await Organization.findOne({
    email: req.body.email,
  });

  // If the email isn't valid, or the password is incorrect, send an error
  if (
    !organization ||
    !bcrypt.compareSync(req.body.password, organization.password)
  ) {
    return res.status(401).json({ error: "Incorrect email or password" });
  }

  // Create a JWT token
  const token = jwt.sign(
    {
      org_id: organization._id,
    },
    process.env.JWT_SECRET
  );

  // Send the JWT as the response
  res.status(200).json({ token });
};

// Signup
const signup = async (req, res) => {
  // Check if the email is already in use
  const organization = await Organization.findOne({
    email: req.body.email,
  });

  // If the email is already in use, send an error
  if (organization) {
    return res.status(400).json({ error: "Email already in use" });
  }

  // Create a new user
  const newOrganization = await Organization.create({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
  });

  // Create a JWT token
  const token = jwt.sign(
    {
      org_id: newOrganization._id,
    },
    process.env.JWT_SECRET
  );

  // Send the JWT and the new user object as the response
  res.status(200).json({ token, newOrganization });
};

module.exports = {
  login,
  signup,
};
