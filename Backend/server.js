require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/users");
const advertisementRoutes = require("./routes/advertisement");
const healthAdvertisementRoutes = require("./routes/healthAdvertisements");
const jobsApplicantRouts = require("./routes/jobsApplicantRouts");

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/users", userRoutes);
app.use("/api/advertisement", advertisementRoutes); // when user send a req to localhost:8000/api/advertisement this will pass it to  advertisementRoutes. 
app.use("/api/healthAdvertisements", healthAdvertisementRoutes);
app.use("/api/jobsApplicant", jobsApplicantRouts);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to database");
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log("listening for requests on port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
