require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/users");
const eduAdvertisementRoutes = require("./routes/eduAdvertisement");
const healthAdvertisementRoutes = require("./routes/healthAdvertisements");
const jobsApplicantRouts = require("./routes/jobsApplicantRouts");
const eventAdvertisementRoutes = require("./routes/eventAdvertisement");
const organizationRoutes = require("./routes/organization");

// express app
const app = express();

// middleware
app.use(express.json());

// cors
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/eduAdvertisement", eduAdvertisementRoutes); // when user send a req to localhost:8000/api/advertisement this will pass it to  eduAdvertisementRoutes.
app.use("/api/organization", organizationRoutes);
app.use("/api/healthAdvertisements", healthAdvertisementRoutes);
app.use("/api/jobsApplicant", jobsApplicantRouts);
app.use("/api/eventAdvertisement", eventAdvertisementRoutes);

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
