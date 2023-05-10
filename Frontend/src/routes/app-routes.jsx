import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
  HealthHome,
  DonateAdvertisementList,
  EventAdvertisementList,
  EducationList,
  EducationAdd,
  EducationOne,
  EducationUpdate,
  SignUp,
  SignIn,
  Home,
  FoodCenters,
  FoodCenterDetails,
  JobHome,
  JobApplication,
  JobList,
  JobUpdate,
  JobSeeker,
  Profile,
} from "../pages";

const AppRoutes = () => {
  return (
    <>
      <Router>
        <Routes>

          {/*--------------------Home pages-----------------------------------------*/}
          <Route exact path="/" element={<Home />} />
          
          {/* Education Routes ------------------------------------ */}
          <Route
            exact
            path="/education-advertisements"
            element={<EducationList />}
          />
          <Route
            exact
            path="/education-advertisements/add"
            element={<EducationAdd />}
          />
          <Route
            exact
            path="/education-advertisements/update/:id"
            element={<EducationUpdate />}
          />
          <Route
            exact
            path="/education-advertisements/:id"
            element={<EducationOne />}
          />
          {/* ----------------------------------------------------- */}
          <Route exact path="/health-home" element={<HealthHome />} />
          <Route exact path="/donate-Advertisements" element={<DonateAdvertisementList />} />
          <Route exact path="/event-Advertisements" element={<EventAdvertisementList />} />



          {/*--------------------Sign pages-----------------------------------------*/}
          <Route exact path="/signUp" element={<SignUp />} />
          <Route exact path="/signIn" element={<SignIn />} />

          {/*--------------------food center-----------------------------------------*/}
          <Route exact path="/FoodCenters" element={<FoodCenters />} />
          <Route path="/center/:id" element={<FoodCenterDetails />} />

          {/* -------------------------Jobs------------------- */}
          <Route exact path="/jobHome" element={<JobHome />} />
          <Route exact path="/jobApplication"element={<JobApplication/>} />
          <Route exact path="/jobList" element={<JobList/>}></Route>
          <Route exact path= "/jobUpdate" element={<JobUpdate/>}></Route>
          <Route exact path="jobSeeker" element={<JobSeeker/>}></Route>

          {/* -------------------------Profile------------------- */}
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
