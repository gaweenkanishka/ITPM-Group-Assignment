import React, { useState } from 'react'

function jobApplication(){
  const[jobtitle,setJobTitle]=useState("");
  const[type,setType]=useState("");
  const[location,setLocation]=useState("");
  const[receive,seetReceive]=useState("");
  const[description,setDescription]=useState("");
  const[openfor,setOpenfor]=useState("");
  const[companyName,setCompanyName]=useState("");
  const[uploadFile,SetImageUrl]=useState("");

}

const index = () => {
 return (
//     // <div>
//     //   <h1>Job application</h1>
//     // </div>
//   )
// }
<div className="min-h-screen bg-gray-100 py-6  flex flex-col   sm:py-12">
<h1 className="text-center text-3xl font-extrabold text-gray-900 mt-5 mb-5">
Make your job Advertisement Here
</h1>
<form   >
  <div className="max-w-2xl mx-auto mt-5 shadow-md overflow-hidden rounded-md  bg-white p-10 ">
    <div className="grid grid-cols-1 gap-6 ">
  
  {/* Title */}
 <div className="flex flex-col justify-start items-start mx-4 my-2">
  <label htmlFor="jobtitle" className="block text-sm font-medium text-gray-700 mb-1">
    Job Title
  </label>
  <input
    type="text"
    required
    name="JobTitle"
    id="jobtitle"
    className="w-full py-2 px-4 rounded-lg shadow-md focus:outline-none 
    focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300"
    // value={name}
    // onChange={(event) => setName(event.target.value)}
  />
</div>


{/* Type */}
<div className="col-span-1  items-center">
  <label htmlFor="type" className="block text-sm font-medium text-gray-700 
  flex flex-col justify-start items-start mx-4 my-2">
    Type
  </label>
  <div className="ml-2 flex  block text-sm font-medium text-gray-700 mb-1 border p-4 rounded-md
  w-full py-2 px-4 rounded-lg shadow-md focus:outline-none">
    <div>
      <input
        type="radio"
        id="full-time"
        name="type"
        value="Full Time"
        required
        className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
      />
      <label htmlFor="full-time" className="ml-1 mr-6">
        Full Time
      </label>
    </div>
    <div>
      <input
        type="radio"
        id="part-time"
        name="type"
        value="Part Time"
        required
        className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
      />
      <label htmlFor="part-time" className="ml-1 mr-6">
        Part Time
      </label>
    </div>
    <div>
      <input
        type="radio"
        id="internship"
        name="type"
        value="Internship"
        required
        className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
      />
      <label htmlFor="internship" className="ml-1 mr-6">
        Internship
      </label>
    </div>
    <div>
      <input
        type="radio"
        id="contract"
        name="type"
        value="Contract"
        required
        className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
      />
      <label htmlFor="contract" className="ml-1">
        Contract
      </label>
    </div>
  </div>
</div>


      {/* location */}
      <div className="flex flex-col ">
        <label
          htmlFor="location"
          className="block text-sm font-medium text-gray-700 flex flex-col 
          justify-start items-start mx-4 my-2"
        >
        Location
        </label>
        <input
          type="text"
          required
          name="location"
          id="location"
          className="w-full py-2 px-4 rounded-lg shadow-md focus:outline-none 
          focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300"
          //value={description}
          //onChange={(event) => setDescription(event.target.value)}
        />
            
      </div>

 
      {/* receive application */}
      <div className="col-span-1">
        <label
          htmlFor="receive"
          className="block text-sm font-medium text-gray-700 flex flex-col justify-start 
          items-start mx-4 my-2"
        >
          Receive (How do you want to receive Application)
        </label>
        <input
          type="text"
          required
          name="receive"
          id="receive"
          placeholder='companyname@gmail.com'
          className="w-full py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300"
          //value={address}
          //onChange={(event) => setAddress(event.target.value)}
        />
      </div>

      {/* Description */}
      <div className="col-span-1">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700 flex flex-col justify-start items-start mx-4 my-2"
        >
         Job Description
        </label>
        <textarea
          type="text"
          required
          name="description"
          id="description"
          className="w-full py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300"
          //value={description}
          //onChange={(event) => setdescription(event.target.value)}
        />
      </div>

      <div className='flex'>
         {/*    Open for */}
      <div className="col-span-1">
        <label
          htmlFor=" open for"
          className="block text-sm font-medium text-gray-700
           justify-start items-start  "
        >
         Open for
         (How many days you need to <br></br>
         open the vacancy)
        </label>
        <input
          type="text"
          required
          name="openfor"
          id="openfor"
          className="w-auto py-2 px-4 rounded-lg shadow-md justify-start
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300"

        />
      </div>
      

      {/* companyName */}
      <div className="col-span-1 ml-8">
        <label
          htmlFor="companyName"
          className="block text-sm font-medium text-gray-700
          flex flex-col  my-2 "
        >
        companyName 
        </label>
        <input
          type="text"
          required
          name="companyName"
          id="companyName"
          className="ml-8 py-2 px-4 rounded-lg shadow-md focus:outline-none 
          focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300"
          // value={companyName}
          //onChange={(event) => handlecompanyNameChange(event)}
        />
      </div>
      </div>

           <div>
             <label for="dropzone-file"
               class="mx-auto cursor-pointer flex w-full max-w-lg flex-col items-center rounded-xl border-2 
                border-gray-400 bg-white mt-4 text-center">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-blue-500" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                 <path stroke-linecap="round" stroke-linejoin="round"
                   d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
               </svg>

               <h2 class="mt-2 text-l font-medium text-black tracking-wide">Upload a file</h2>
               <input id="dropzone-file" type="file" class="hidden" />
             </label>
           </div>
     

      {/* Submit Button */}
      <div className="col-span-1">
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent 
          shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 
          hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</form>
</div>
);
};

export default index
