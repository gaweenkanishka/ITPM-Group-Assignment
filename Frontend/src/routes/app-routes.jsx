import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
  HealthHome,
  DonateAdvertisementList,
  ViewHealthAdvertisement,
  EducationList,
  EducationAdd,
  EducationOne,
  EducationUpdate,
  SignUp,
  SignIn,
  Home,
} from "../pages";

const AppRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          
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
          <Route exact path="/healthHome" element={<HealthHome />} />
          <Route exact path="/donate-Advertisements" element={<DonateAdvertisementList />} />
          <Route exact path="/viewAd" element={<ViewHealthAdvertisement />} />



          {/*--------------------Sign pages-----------------------------------------*/}
          <Route exact path="/signUp" element={<SignUp />} />
          <Route exact path="/signIn" element={<SignIn />} />

          {/*--------------------Home pages-----------------------------------------*/}
          <Route exact path="" element={<Home />} />

        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
