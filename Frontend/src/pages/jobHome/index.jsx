import React from 'react'
///import Image1 from "../../assets/img1.jpeg";
import Image2 from "../../assets/img2.jpg";
import Image3 from "../../assets/img3.jpg";
import Image6 from "../../assets/image6.jpg";
import Header from './Header';

const index = () => {
  return (

    <div>
      <Header/>
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mt-12 mb-12">
        <article>
          <h1 class="text-3xl font-semibold tracking-wide text-gray-800 dark:text-black lg:text-4xl">FIND YOUR PATH </h1>
          <section class="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">

            {/* Job Seeker */}
            <article class="bg-white group h-96 relative rounded-xl shadow-lg hover:shadow-xl 
              transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                
              <div class="relative w-full h-80 md:h-64 lg:h-44">

                <img src={Image2}
                  alt=""
                  class="w-full h-full object-center object-cover"></img>
                </div>
                <a href="/jobList">
                <div class="mt-12 ml-12 inline-block rounded-full
                  bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] 
                  hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                  >

                <span
                  class="block rounded-full bg-white px-8 py-3 text-sm font-medium hover:bg-transparent">
                  Job Seeker
                </span>

              </div>
              </a>
            </article>

            {/* Career */}
            <article class="bg-white group relative rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
              <div class="relative w-full h-80 md:h-64 lg:h-44">
                <img src={Image6}
                  alt=""
                  class="w-full h-full object-center object-cover"></img>
              </div>
              <a href="/jobCareer">
              <div class="mt-12 ml-16 inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                >

                <span
                  class="block rounded-full bg-white px-8 py-3 text-sm font-medium hover:bg-transparent">
                  Careers
                </span>
              </div>
              </a>
            </article>

            {/* Employer */}
            <article class="bg-white group relative rounded-xl shadow-lg hover:shadow-xl 
            transform hover:scale-110 transition duration-500 mx-auto md:mx-0 ">
              
              <div class="relative w-full h-80 md:h-64 lg:h-44">

                <img src={Image3}
                  alt=""
                  class="w-full h-full object-center object-cover"></img>
              </div>
              <a href="/jobApplication">
              <div class="mt-12 ml-12 inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
               >

                <span
                  class="block rounded-full bg-white px-8 py-3 text-sm font-medium hover:bg-transparent">
                  Employer
                </span>
              </div>
              </a>
            </article>

            {/* Self-employement
            <div class="bg-white group relative 
            rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 
            transition duration-500 mx-auto md:mx-0">

              <div class="relative w-full h-80 md:h-64 lg:h-44">
                <img src={Image1}
                  alt=""
                  class="w-full h-full object-center object-cover"></img>
              </div>
              <div class="mt-12 inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] 
                hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                href="/download">

                <span
                  class="block rounded-full bg-white px-8 py-3 text-sm font-medium hover:bg-transparent">
                  Self-Employement
                </span>
              </div>
            </div> */}
          </section>
        </article>
      </section>

    </div>








  )
}

export default index
