import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


const jobOneUser = () => {
  const [job, setJob] = useState('');
  const {id} = useParams();

  // const [jobTitle, setJobTitle] = useState(job.jobTitle);
  // const [type, setType] = useState(job.type);
  // const [location, setLocation] = useState(job.location);
  // const [receive, setReceive] = useState(job.receive);
  // const [description, setDescription] = useState(job.description);
  // const [openFor, setOpenFor] = useState(job.openFor);
  // const [companyName, setCompanyName] = useState(job.companyName);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/jobsApplication/${id}`)
      .then((res) => {
        setJob(res.data);
        setViews(res.data.views);
        console.log(res)
      })
      .catch((err) => {
        console.log(err);
      })
  
      axios.post(`http://localhost:8000/api/jobsApplication/incr/${id}`)
        .then(()=>{
        })
        .catch((err)=>{
          console.log(err)
        })
      
  }, []);

  return (
 <div>
  
  <div style={{position: 'fixed',  top: '20px', right: '40px', display: 'flex', flexDirection: 'column',
   alignItems: 'center', marginRight:'20px'  }}>
    <Link to={`/updateForm/${id}`}>
  <img src="https://png.pngtree.com/png-vector/20191125/ourmid/pngtree-beautiful-admin-roles-line-vector-icon-png-image_2035379.jpg" alt="Admin"
     style={{  width: '50px', height: '50px', objectFit: 'cover', borderRadius: '50%', marginTop:'10px',cursor:'pointer'}} />
    <span style={{  marginTop: '5px',  fontSize: '14px', fontWeight: 'bold', color: '#000',  }} >
        Admin
      </span>
     </Link>
   </div>     
   
  
<div class="min-h-screen bg-gray-100 flex items-center overflow-hidden py-20">
  <div class="container mx-auto w-1/3 bg-gray-300 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transform transition-all duration-500">
  <div class="flex items-center justify-between px-4">
    {/* <div class="flex justify-between items-center py-4">
      <img class="w-12 rounded-full" src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg" alt="Alex" />
  
    </div> */}
    <div>
      {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
      </svg> */}
    </div>
  </div>
  {/* <img src="https://images.unsplash.com/photo-1527112862739-c3b9466d902e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=966&q=80" alt=""></img>  */}
  <div class="p-6">
    <h1 class="text-3xl font-bold text-gray-800 cursor-pointer ">JOB DETAILS</h1>
            {/* display job details */}

        <form>
          {/* {(job(
            

          ))} */}
          <div className="flex flex-col justify-start items-start mx-4 my-2">
          <label htmlFor="jobtitle" className="block text-lg font-bold dark:text-blue-800 mb-1"
            >
          Job Title
          <span className='ml-8 font-bold text-gray-800  '> {job.jobTitle} </span>
            </label>

            <label htmlFor="jobtitle" className="block text-l mt-4 font-bold dark:text-blue-800 mb-1">
              Job Type
              <span className='ml-8 font-bold text-gray-800  '> {job.type} </span>
            </label>

            <label htmlFor="jobtitle" className="block text-l mt-4 font-bold dark:text-blue-800 mb-1">
              Location
              <span className='ml-8 font-bold text-gray-800  '> {job.location} </span>
            </label>

            <label htmlFor="jobtitle" className="block text-l mt-4 font-bold dark:text-blue-800 mb-1">
              Recieve
              <span className='ml-8 font-bold text-gray-800  '> {job.receive} </span>
            </label>

            <label htmlFor="jobtitle" className="block text-l mt-4 font-bold dark:text-blue-800 mb-1">
              Job Description
              <span className='ml-8 font-bold text-gray-800  '> {job.jobDescription} </span>
            </label>

            <label htmlFor="openFor" className="block text-l mt-4 font-bold dark:text-blue-800 mb-1">
              Open for
              <span className='ml-8 font-bold text-gray-800  '> {job.openFor} </span>
            </label>

            <label htmlFor="jobtitle" className="block text-l mt-4 font-bold dark:text-blue-800 mb-1">
              company name
              <span className='ml-8 font-bold text-gray-800  '> {job.companyName} </span>
            </label>

            {/* <label htmlFor="jobtitle" className="block text-l mt-4 font-bold dark:text-blue-800 mb-1">
              Image
            </label> */}
               <div className='flex gap-20 mx-auto'>
               <a href="/jobList" class="inline-block px-10 py-2 mt-6 
                text-white bg-green-600 rounded-full hover:bg-green-700 md:mx-0">
                  close
                </a>

                <a href="/jobSeeker" class="inline-block   px-10 py-2  mt-6 
                text-white bg-green-600 rounded-full hover:bg-green-700 md:mx-0">
                  Apply
                </a>
               </div>

               <br />
      {/* {job.map((jobData) => (
        <div key={jobData._id}>
          <h3>{jobData.jobTitle}</h3>
          <p>{jobData.location}</p>
          <h3>{jobData.description}</h3>
          <h3>{jobData.type}</h3>
          {/* <button>Apply</button> 
        </div>
      ))} */}
      <hr />
      <br />
            
          </div>
        </form> 






  </div>
  </div>

        
   



</div>



       
    </div>

  )
}

export default jobOneUser
