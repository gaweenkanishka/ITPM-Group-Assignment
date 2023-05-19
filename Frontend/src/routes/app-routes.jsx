import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
  HealthHome,
  DonateAdvertisementList,
  EventAdvertisementList,
  ViewHealthAdvertisement,
  ViewEventAdvertisement,
  CreateDonateAdvertisement,
  CreateEventAdvertisement,
  EditDonateAdvertisement,
  EditEventAdvertisement,
  HealthAdmin,
  EducationList,
  EducationAdd,
  EducationOne,
  EducationUpdate,
  Education,
  SignUp,
  SignIn,
  Home,
  FoodCenters,
  FoodCenterDetails,
  JobHome,
  JobApplication,
  JobList,
  JobUpdate,
  JobCareer,
  JobOne,
  JobSeeker,
  Profile,
  OrgLogin,
  OrgSignup,
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
          <Route exact path="/org-signup" element={<OrgSignup />} />
          <Route exact path="/org" element={<OrgDashboard />} />

          {/* Education Routes ------------------------------------ */}
          <Route exact path="/education" element={<Education />} />
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
          <Route exact path="/donate-Advertisements/:id" element={<ViewHealthAdvertisement />} />
          <Route exact path="/event-Advertisements/:id" element={<ViewEventAdvertisement />} />
          <Route exact path="/donate-Advertisements/create" element={<CreateDonateAdvertisement />} />
          <Route exact path="/event-Advertisements/create" element={<CreateEventAdvertisement />} />
          <Route exact path="/donate-Advertisements/edit/:id" element={<EditDonateAdvertisement />} />
          <Route exact path="/event-Advertisements/edit/:id" element={<EditEventAdvertisement />} />
          <Route exact path="/health-admin" element={<HealthAdmin />} />





          {/*--------------------Sign pages-----------------------------------------*/}
          <Route exact path="/signUp" element={<SignUp />} />
          <Route exact path="/signIn" element={<SignIn />} />

          {/*--------------------food center-----------------------------------------*/}
          <Route exact path="/FoodCenters" element={<FoodCenters />} />
          <Route path="/center/:id" element={<FoodCenterDetails />} />
          <Route exact path="/foodHome" element={<FoodHome />} />

          {/* -------------------------Jobs------------------- */}
          <Route exact path="/jobHome" element={<JobHome />} />
          <Route exact path="/jobApplication" element={<JobApplication/>} />
          <Route exact path="/jobList" element={<JobList/>}></Route>
          <Route exact path= "/jobUpdate" element={<JobUpdate/>}></Route>
          <Route exact path="/jobCareer" element={<JobCareer/>}></Route>
          <Route exact path="/jobOne"element={<JobOne/>}></Route>
          <Route exact path= "/jobSeeker" element={<JobSeeker/>}/>

          {/* -------------------------Profile------------------- */}
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
