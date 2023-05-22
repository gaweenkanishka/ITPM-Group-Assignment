import React, { useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const BASE_URL = import.meta.env.VITE_BACKEND_API;

const index = () => {
  const navigate = useNavigate();

  const [jobTitle, setJobTitle] = useState("");
  const [type, setType] = useState([]);
  const [location, setLocation] = useState("");
  const [receive, setReceive] = useState("");
  const [jobDescription, setDescription] = useState("");
  const [openFor, setOpenfor] = useState("");
  const [companyName, setCompanyName] = useState("");





  const clearForm = () => {
    setJobTitle("");
    setType("");
    setLocation("");
    setReceive("");
    setDescription("");
    setOpenfor("");
    setCompanyName("");
   // setFile("");

  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      jobTitle,
      type,
      location,
      receive,
      jobDescription,
      openFor,
      companyName,
      //image,

    };


    axios.post(`http://localhost:8000/api/jobsApplication`, data).
      then((res) => {
        navigate("/jobList");
        console.log(res)
        
      })
      .catch((err) => {
        console.log(err)
      })

  }

  // const handleUpload = () => {
  //   if (!file) {
  //     alert("Please choose a file to upload!");
  //   }

   



  return (
    //     // <div>
    //     //   <h1>Job application</h1>
    //     // </div>
    //   )
    // }
    
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 
   dark:bg-[url('https://i.pinimg.com/736x/80/bc/b5/80bcb5ae5df313e634410f22153f10d8.jpg')] 
    bg-cover w-auto">
      <h1 className="text-center text-3xl font-extrabold text-gray-900 mt-5 mb-5">
        Make your job Advertisement Here
      </h1>
      <div
                    style={{
                        position: 'fixed',
                        top: '20px',
                        left: '20px',
                        cursor: 'pointer',
                    }} >
                    <Link to="/jobHome">
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/010/329/434/original/left-arrow-arrow-3d-illustration-png.png"
                        alt="Back"
                        style={{
                        width: '50px',
                        height: '50px',
                        }}
                    />
                    <span
                        style={{
                        fontSize: '16px',
                        fontWeight: 'bold',
                        color: 'white',
                        }}
                    >
                        Back
                    </span>
                    </Link>
                    </div>

      <form>
        <div className="max-w-2xl mx-auto mt-5 shadow-md overflow-hidden rounded-md  bg-gray-200 p-10 ">
          <div className="grid grid-cols-1 gap-6 ">

            {/* Title */}
            <div className="flex flex-col justify-start items-start mx-4 my-2">
              <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1">
                Job Title
              </label>
              <input
                type="text"
                required
                name="jobTitle"
                id="jobTitle"
                className="w-full py-2 px-4 rounded-lg shadow-md focus:outline-none 
                focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300"
                value={jobTitle}
                onChange={(event) => setJobTitle(event.target.value)}
              />
            </div>


            {/* Type */}
            <div className="col-span-1  items-center">
              <label htmlFor="type" className="block text-sm font-medium text-gray-700 
              flex flex-col justify-start items-start mx-4 my-2">
                Type
              </label>
              <div className="ml-2 flex bg-white block text-sm font-medium text-gray-700 mb-1 border p-4 rounded-md
                w-full py-2 px-4 rounded-lg shadow-md focus:outline-none">
                <div>
                  <input
                    type="radio"
                    id="fulltime"
                    name="type"
                    value="FullTime"

                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                    //value={fulltime}
                    checked={type === 'FullTime'}
                    onChange={(event) => setType(event.target.value)}
                  />
                  <label htmlFor="full-time" className="ml-1 mr-6">
                    Full Time
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="parttime"
                    name="type"
                    value="PartTime"

                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                    //value={parttime}
                    checked={type === 'partTime'}
                    onChange={(event) => setType(event.target.value)}
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

                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                    //value={internship}
                    checked={type === 'Internship'}
                    onChange={(event) => setType(event.target.value)}
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

                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                    // value={contract}
                    checked={type === 'Contract'}
                    onChange={(event) => setType(event.target.value)}
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
                value={location}
                onChange={(event) => setLocation(event.target.value)}
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
                value={receive}
                onChange={(event) => setReceive(event.target.value)}
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
                value={jobDescription}
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>

            <div className='flex'>
              {/*    Open for */}
              <div className="col-span-1">
                <label
                  htmlFor="openFor"
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
                  name="openFor"
                  id="openFor"
                  className="w-auto py-2 px-4 rounded-lg shadow-md justify-start
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300"
                  value={openFor}
                  onChange={(event) => setOpenfor(event.target.value)}
                />
              </div>


              {/* companyName */}
              <div className="col-span-1 ml-12">
                <label
                  htmlFor="companyName"
                  className="block text-sm font-medium text-gray-700
                flex flex-col ml-8  my-2 "
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
                  value={companyName}
                  onChange={(event) => setCompanyName(event.target.value)}
                />
              </div>
            </div>

            {/* <div>
              <label for="dropzone-file"
                class="mx-auto cursor-pointer flex w-full max-w-lg flex-col 
                items-center rounded-xl border-2 
                border-gray-400 bg-white mt-4 text-center"> */}
            {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-blue-500" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg> */}

            {/* <h2 class="mt-2 text-l font-medium text-black tracking-wide" >
                  Upload a file</h2>
                <input id="dropzone-file" type="file" className='hidden'
                onChange={(event) => setFile(event.target.files[0])} />
              </label>

               </div> */}

            {/* <button
                  type="button"
                  className="w-24  justify-end items-center px-1 py-1 border 
                  border-transparent text-base font-bold rounded-md shadow-sm text-white 
                  bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 
                  focus:ring-green-500 "
                  onClick={handleUpload} 
                >
                Upload
                </button>

                {percent > 0 && (
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full my-2"
                      style={{ width: `${percent}%` }}
                    ></div>
                  </div>
                )} 
              // </div> */}

          </div>



        </div>
        {/* Submit Button */}

        <div className="col-span-1 ml-96">
        
            <button
              type="submit"
              className=" flex justify-end inline-flex  mt-4 py-2 px-4 border border-transparent 
               shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 
              hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
               onClick={handleSubmit}
            >
              Submit
            </button>
         
        </div>

      </form>

    </div>
  );
};

export default index
