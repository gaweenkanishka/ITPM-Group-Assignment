import React from "react";

function Dp() {
  return (
    <div>
      <div className="mx-5 min-h-screen grid mt-10 place-content-center">
        <div className="bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl text-white p-8 text-center h-72 max-w-sm mx-auto">
          <h1 className="text-3xl mb-3">Hi Kanishka</h1>
          <p className="text-lg">
            Welcome to Manusathkama Profile <br />" have a nice day"
          </p>
        </div>
        <div className="bg-white py-2 px-10 text-center rounded-md shadow-lg transform -translate-y-20 sm:-translate-y-24 max-w-xs mx-auto">
          <h2 className="font-semibold text-2xl mb-6">User ID</h2>
          <img
            className="w-20 h-20 object-cover rounded-full mx-auto shadow-lg"
            src="https://www.facebook.com/photo.php?fbid=2116774595120882&set=pb.100003650851873.-2207520000.&type=3"
            alt="User avatar"
          ></img>
          <p className="capitalize text-xl mt-1">Gaween Kanishka</p>
          <span className="flex items-center border rounded-full w-24 pr-2 justify-center mx-auto mt-2 mb-12">
            <div className="bg-green-400 rounded-full w-2.5 h-2.5 block mr-2"></div>
            Active
          </span>
          <button className="rounded-md bg-gradient-to-r from-blue-400 to-indigo-500 text-xl text-white pt-3 pb-4 px-8 inline">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dp;
