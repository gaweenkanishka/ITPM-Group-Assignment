import React from "react";
import Idcard from "./idcard";
import "./body.scss";
// import "./jellyfish.css";
import Dp from "./dp";
import Category from "./Category";
import Footer from "../../components/home/Footer";
import Newcategory from "./newcategory";
import ProfileCategory from "./profileCategory";
function Profile() {
  return (
    <div className="body center">
      <div id="particle-container">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>

        <div className="content-center">
          <h1 class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600  bg-clip-text text-3xl mt-10 font-extrabold text-transparent sm:text-5xl">
            User Profile
            <span class="sm:block"> Page </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-2 ">
          <Dp />
          <Idcard />
        </div>

        <Newcategory />
        <Category />
        <Footer />
      </div>
    </div>
  );
}

export default Profile;
