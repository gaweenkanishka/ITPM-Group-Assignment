import React from "react";

function Newcategory() {
  return (
    <div>
      <div className="flex justify-center bg-black rounded-sm  py-10 p-3">
        <div className="container mx-auto pr-4">
          <div className="w-72 bg-white max-w-xs mx-auto rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
            <div className="h-20 bg-yellow-400 flex items-center rounded-xl justify-between">
              <p className="mr-0 text-white text-lg pl-5">Foods</p>
            </div>
            <div className="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
              <p>TOTAL</p>
            </div>
            <p className="py-4 text-3xl ml-5">20,456</p>
          </div>
        </div>
        <div className="container mx-auto pr-4">
          <div className="w-72 bg-white max-w-xs mx-auto rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
            <div className="h-20 bg-blue-500 flex items-center rounded-xl justify-between">
              <p className="mr-0 text-white text-lg pl-5">Education</p>
            </div>
            <div className="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
              <p>TOTAL</p>
            </div>
            <p className="py-4 text-3xl ml-5">19,694</p>
          </div>
        </div>
        <div className="container mx-auto pr-4">
          <div className="w-72 bg-white max-w-xs mx-auto rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
            <div className="h-20 bg-red-600 flex items-center rounded-xl justify-between">
              <p className="mr-0 text-white text-lg pl-5">Health</p>
            </div>
            <div className="flex justify-between pt-6 px-5 mb-2 text-sm text-gray-600">
              <p>TOTAL</p>
            </div>
            <p className="py-4 text-3xl ml-5">711</p>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="w-72 bg-white max-w-xs mx-auto rounded-xl overflow-hidden shadow-2xl hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
            <div className="h-20 bg-green-900 flex items-center rounded-xl justify-between">
              <p className="mr-0 text-white text-lg pl-5">Jobs</p>
            </div>
            <div className="flex justify-between pt-6 px-5 mb-2 text-sm text-gray-600">
              <p>TOTAL</p>
            </div>
            <p className="py-4 text-3xl ml-5">0</p>
          </div>
        </div>
      </div>
      {/* 
      <div className="flex justify-center bg-gray-100 py-10 p-5">
        <div className="container mr-5 ml-2 mx-auto bg-white shadow-xl">
          <div className="w-11/12 mx-auto">
            <div className="bg-white my-6">
              <table className="text-left w-full border-collapse">
                <thead>
                  <tr>
                    <th className="py-4 px-6 bg-purple-400 font-bold uppercase text-sm text-white border-b border-grey-light">
                      KEYWORDS
                    </th>
                    <th className="py-4 px-6 text-center bg-purple-400 font-bold uppercase text-sm text-white border-b border-grey-light">
                      TOTAL ENTERIES
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-grey-lighter">
                    <td className="py-4 px-6 border-b border-grey-light">Bible</td>
                    <td className="py-4 px-6 text-center border-b border-grey-light">
                      11980
                    </td>
                  </tr>
                  <tr className="hover:bg-grey-lighter">
                    <td className="py-4 px-6 border-b border-grey-light">Blah</td>
                    <td className="py-4 px-6 text-center border-b border-grey-light">
                      340
                    </td>
                  </tr>
                  <tr className="hover:bg-grey-lighter">
                    <td className="py-4 px-6 border-b border-grey-light">Blah</td>
                    <td className="py-4 px-6 text-center border-b border-grey-light">
                      901
                    </td>
                  </tr>
                  <tr className="hover:bg-grey-lighter">
                    <td className="py-4 px-6 border-b border-grey-light">Blah</td>
                    <td className="py-4 px-6 text-center border-b border-grey-light">
                      11950
                    </td>
                  </tr>
                  <tr className="hover:bg-grey-lighter">
                    <td className="py-4 px-6 border-b border-grey-light">Blah</td>
                    <td className="py-4 px-6 text-center border-b border-grey-light">
                      459
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Newcategory;
