import React, { useState } from 'react'
import axios from "axios";
import storage from "../../firebase/firebaseConfig"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const BASE_URL = import.meta.env.VITE_BACKEND_API;

const index = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [type, setType] = useState([]);
  const [location, setLocation] = useState("");
  const [receive, setReceive] = useState("");
  const [description, setDescription] = useState("");
  const [openfor, setOpenfor] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [file, setFile] = useState("");
  const [percent, setPercent] = useState(0);


  const clearForm = () => {
    setJobTitle("");
    setType("");
    setLocation("");
    setReceive("");
    setDescription("");
    setOpenfor("");
    setCompanyName("");
    setFile("");

  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      jobTitle,
      type,
      location,
      receive,
      description,
      openfor,
      companyName,
      file,

    };

    console.log(data);

    axios
      .jobsapplications(`${BASE_URL}/jobsapplications`, data)
      .then((response) => {
        console.log(response);
        makeToast({
          type: "success",
          message: "job added successfully!",
        });
        
      })
      .catch((error) => {
        console.log(error);
        makeToast({ type: "error", message: "Error adding !" });
      });

    console.log("Submitted");
    clearForm();
  }

  const handleUpload = () => {
    if (!file) {
      alert("Please choose a file to upload!");
    }

    const storageRef = ref(storage, `/files/${file.title}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        // update upload progress
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setImage(url);
          console.log(image);
        });
      }
    );
  };



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
      <form onSubmit={handleSubmit}>
        <div className="max-w-2xl mx-auto mt-5 shadow-md overflow-hidden rounded-md  bg-white p-10 ">
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
              <div className="ml-2 flex  block text-sm font-medium text-gray-700 mb-1 border p-4 rounded-md
                w-full py-2 px-4 rounded-lg shadow-md focus:outline-none">
                <div>
                  <input
                    type="radio"
                    id="fulltime"
                    name="type"
                    value="Full Time"
                    required
                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                    //value={fulltime}
                    checked={type==='Full Time'}
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
                    value="Part Time"
                    required
                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                    //value={parttime}
                    checked={type==='part Time'}
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
                    required
                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                    //value={internship}
                    checked={type==='Internship'}
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
                    required
                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                    // value={contract}
                    checked={type==='Contract'}
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
                value={description}
                onChange={(event) => setDescription(event.target.value)}
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
                  value={openfor}
                  onChange={(event) => setOpenfor(event.target.value)}
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
                  value={companyName}
                  onChange={(event) => setCompanyName(event.target.value)}
                />
              </div>
            </div>

            <div>
              <label for="dropzone-file"
                class="mx-auto cursor-pointer flex w-full max-w-lg flex-col 
                items-center rounded-xl border-2 
                border-gray-400 bg-white mt-4 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-blue-500" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>

                <h2 class="mt-2 text-l font-medium text-black tracking-wide" >
                  Upload a file</h2>
                <input id="dropzone-file" type="file" class="hidden"
                onChange={(event) => setFile(event.target.files[0])} />
              </label>

               </div>

               <button
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
              </div>


            {/* Submit Button */}
            <div className="col-span-1">
              <button
                type="submit"
                className=" flex justify-end inline-flex  mt-4 py-2 px-4 border border-transparent 
               shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 
              hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Submit
              </button>

             </div>
          </div>
      
      </form>
    </div>
  );
};

export default index
