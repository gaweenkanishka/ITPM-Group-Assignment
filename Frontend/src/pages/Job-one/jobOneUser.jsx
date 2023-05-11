import React from 'react'

const jobOneUser = () => {
  return (
     <div>
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
          <div className="flex flex-col justify-start items-start mx-4 my-2">
            <label htmlFor="jobtitle" className="block text-l font-semibold text-gray-700 mb-1">
             Job Title
            </label>

            <label htmlFor="jobtitle" className="block text-l mt-4 font-semibold text-gray-700 mb-1">
              Job Type
            </label>

            <label htmlFor="jobtitle" className="block text-l mt-4 font-semibold text-gray-700 mb-1">
              Location
            </label>

            <label htmlFor="jobtitle" className="block text-l mt-4 font-semibold text-gray-700 mb-1">
              Recieve
            </label>

            <label htmlFor="jobtitle" className="block text-l mt-4 font-semibold text-gray-700 mb-1">
              Job Description
            </label>

            <label htmlFor="jobtitle" className="block text-l mt-4 font-semibold text-gray-700 mb-1">
              Open for
            </label>

            <label htmlFor="jobtitle" className="block text-l mt-4 font-semibold text-gray-700 mb-1">
              company name
            </label>

            <label htmlFor="jobtitle" className="block text-l mt-4 font-semibold text-gray-700 mb-1">
              Image
            </label>
               <div className='flex gap-20 mx-auto'>
               <a href="#_" class="inline-block px-10 py-2 mt-6 
                text-white bg-green-600 rounded-full hover:bg-green-700 md:mx-0">
                  close
                </a>

                <a href="#_" class="inline-block   px-10 py-2  mt-6 
                text-white bg-green-600 rounded-full hover:bg-green-700 md:mx-0">
                  Apply
                </a>
               </div>
            
          </div>
        </form> 






  </div>
  </div>

        
   



</div>



       
    </div>

  )
}

export default jobOneUser
