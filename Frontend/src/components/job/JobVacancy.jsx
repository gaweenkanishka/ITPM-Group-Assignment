import React from 'react'
import Search from "../SearchDiv/Search";


const JobVacancy = () => {
    
  return (
    <><div className='navBar flex justify-between items center p-[3rem]'>
          <div className="logoDiv">
              <h1 className="logoText-[25px] text-greenColor"><Strong>Job</Strong>Search</h1>
          </div>

      </div><section>
              <div class="relative items-center w-full py-12 mx-auto md:px-12 lg:px-16 max-w-7xl">
                  <div class="grid grid-cols-1 gap-12 text-center lg:gap-24 lg:grid-cols-3">
                      <div>
                          <div class="p-6 mx-auto">
                              <span class="mb-8 text-xs font-semibold tracking-widest text-blue-600 uppercase"> explain something here </span>

                              <strong class="flex items-end justify-center mx-auto mt-4 mb-8 text-3xl font-black leading-none text-center text-gray-500 lg:text-4xl">
                                  $10
                                  <span class="text-sm"> /mo </span>
                              </strong>
                              <span class="mx-auto text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl"> Short length headline. </span>
                              <p class="mx-auto mt-12 text-base text-gray-500 lading-relaxed">Free and Premium themes, UI Kit's, templates and landing pages built with Tailwind CSS, HTML &amp; Next.js.</p>
                              <div class="mt-6">
                                  <a href="#" class="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Buy for $10</a>
                              </div>
                          </div>
                      </div>
                      <div>
                          <div class="p-6 mx-auto">
                              <span class="mb-8 text-xs font-semibold tracking-widest text-blue-600 uppercase"> explain something here </span>

                              <strong class="flex items-end justify-center mx-auto mt-4 mb-8 text-3xl font-black leading-none text-center text-gray-500 lg:text-4xl">
                                  $50
                                  <span class="text-sm"> /mo </span>
                              </strong>
                              <span class="mx-auto text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl"> Short length headline. </span>
                              <p class="mx-auto mt-12 text-base text-gray-500 lading-relaxed">Free and Premium themes, UI Kit's, templates and landing pages built with Tailwind CSS, HTML &amp; Next.js.</p>
                              <div class="mt-6">
                                  <a href="#" class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Buy for $50</a>
                              </div>
                          </div>
                      </div>
                      <div>
                          <div class="p-6 mx-auto">
                              <span class="mb-8 text-xs font-semibold tracking-widest text-blue-600 uppercase"> explain something here </span>

                              <strong class="flex items-end justify-center mx-auto mt-4 mb-8 text-3xl font-black leading-none text-center text-gray-500 lg:text-4xl">
                                  $10
                                  <span class="text-sm"> /mo </span>
                              </strong>
                              <span class="mx-auto text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl"> Short length headline. </span>
                              <p class="mx-auto mt-12 text-base text-gray-500 lading-relaxed">Free and Premium themes, UI Kit's, templates and landing pages built with Tailwind CSS, HTML &amp; Next.js.</p>
                              <div class="mt-6">
                                  <a href="#" class="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Buy for $10</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section></>
  
  )
    

}
<Search/>

export default JobVacancy
