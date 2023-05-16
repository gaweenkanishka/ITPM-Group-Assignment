import React from 'react'

const index = () => {
 return (
//     // <div>
//     //   <h1>Job application</h1>
//     // </div>
//   )
// }
<div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 dark:bg-[url('https://i.pinimg.com/736x/80/bc/b5/80bcb5ae5df313e634410f22153f10d8.jpg')] 
    bg-cover  w-auto">
{/* <img src= 'https://i.pinimg.com/736x/80/bc/b5/80bcb5ae5df313e634410f22153f10d8.jpg'
 className='absolute inset-0 -z-10 min-h-screen h-full w-full object-cover object-right md:object-center'
  ></img> */}
<h1 className="text-center text-3xl font-extrabold text-gray-900 mt-5 mb-5">
Make your job Advertisement Here
</h1>
<form >
  <div className="max-w-2xl mx-auto mt-5 shadow-md overflow-hidden rounded-md bg-white p-10">
    <div className="grid grid-cols-1 gap-6 ">
  
  {/* Name */}
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
       How do you want to receive Application
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
