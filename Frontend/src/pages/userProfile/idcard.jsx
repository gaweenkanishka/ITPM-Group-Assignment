import React from "react";
import lastimg from "../../assets/lastimg.png";
import QRCode from "react-qr-code";

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

          <div className="">
            <p className="ml-32">Gaween Kanishka</p>
            <p className="ml-32">Student</p>
            <div className="mt-4 ml-20">
              <QRCode
                size={256}
                bgColor="blue"
                fgColor="white"
                style={{ height: "auto", maxWidth: "100px", width: "100px" }}
                value="www.sliit.lk.com"
                viewBox={`0 0 256 256`}
              />
              <div />
              <div className="flex justify-between">
                <div className="">
                  <p className="font-light text-xs">Valid</p>
                  <p className="font-medium tracking-wider text-sm">11/15</p>
                </div>

                <div className="ml-10">
                  <p className="font-light  text-xs">Expiry</p>

                  <p className="font-medium tracking-wider text-sm">03/25</p>
                </div>
                <div
                  style={{
                    height: "auto",
                    margin: "0 auto",
                    maxWidth: 64,
                    width: "100%",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      //{" "}
    </div>
    //   </div>
    // </div>
  );
}

export default Idcard;
