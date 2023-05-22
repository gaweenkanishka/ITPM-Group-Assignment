import React from "react";
import lastimg from "../../assets/lastimg.png";
function Idcard() {
  return (
    <div>
      {/* <div id="particle-container ">
        <div className="bg-white min-h-screen flex justify-center items-center">
          <div className="space-y-1"> */}
      <div className="w-96 h-auto m-auto mt-40 bg-red-100 rounded-xl relative text-white shadow-2xl mb-28 transition-transform transform hover:scale-150">
        <img
          className="relative object-cover w-full h-full rounded-xl"
          src="https://i.imgur.com/kGkSg1v.png"
        ></img>

        <div className="w-full px-12 absolute top-1">
          <div className="absolute left-0 top-0 h-50 w-40 ">
            <img src={lastimg} alt="Heading" />
          </div>

          <div className="pt-6 pr-6">
            <div className="flex justify-between">
              <div className="">
                <p className="font-light text-xs">Valid</p>
                <p className="font-medium tracking-wider text-sm">11/15</p>
              </div>
              <div className="">
                <p className="font-light  text-xs">Expiry</p>
                <p className="font-medium tracking-wider text-sm">03/25</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Idcard;
