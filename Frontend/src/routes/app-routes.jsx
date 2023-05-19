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
  ViewHealthAdvertisement,
  ViewEventAdvertisement,
  JobHome,
  JobApplication,
  JobList,
  JobUpdate,
  JobSeeker,
  OrgLogin,
  OrgDashboard,
  FoodHome,
} from "../pages";

const AppRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          {/*--------------------Home pages-----------------------------------------*/}
          <Route exact path="/" element={<Home />} />

          {/* Organization Routes ------------------------------------ */}
          <Route exact path="/org-login" element={<OrgLogin />} />
          <Route exact path="/org" element={<OrgDashboard />} />

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
          <Route
            exact
            path="/donate-Advertisements"
            element={<DonateAdvertisementList />}
          />
          <Route
            exact
            path="/event-Advertisements"
            element={<EventAdvertisementList />}
          />
          <Route
            exact
            path="/view-health-advertisement/:id"
            element={<ViewHealthAdvertisement />}
          />
          <Route
            exact
            path="/view-event-advertisement/:id"
            element={<ViewEventAdvertisement />}
          />

          {/*--------------------Sign pages-----------------------------------------*/}
          <Route exact path="/signUp" element={<SignUp />} />
          <Route exact path="/signIn" element={<SignIn />} />

          {/*--------------------food center-----------------------------------------*/}
          <Route exact path="/FoodCenters" element={<FoodCenters />} />
          <Route path="/center/:id" element={<FoodCenterDetails />} />
          <Route exact path="/foodHome" element={<FoodHome />} />

          {/* -------------------------Jobs------------------- */}
          <Route exact path="/jobHome" element={<JobHome />} />
          <Route exact path="/jobApplication" element={<JobApplication />} />
          <Route exact path="/jobList" element={<JobList />}></Route>
          <Route exact path="/jobUpdate" element={<JobUpdate />}></Route>
          <Route exact path="jobSeeker" element={<JobSeeker />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
