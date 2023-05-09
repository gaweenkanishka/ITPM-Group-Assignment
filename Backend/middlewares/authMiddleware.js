require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  // Check if the JWT token is present in the request headers
  const token = req.headers.authorization ? req.headers.authorization.split(" ")[1] : req.headers.authorization;
  if (!token) {
    // The JWT token is not present, so return an unauthorized error
    res.status(401).send({ error: "Unauthorized" });
    return;
  }

  // Try to verify the JWT token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // The JWT token is valid, so continue with the request
    req.org_id = decoded.org_id;
    next();
  } catch (error) {
    // The JWT token is not valid, so return an unauthorized error
    res.status(401).send({ error: "Unauthorizedzzz" });
    return;
  }
};

module.exports = authMiddleware;
