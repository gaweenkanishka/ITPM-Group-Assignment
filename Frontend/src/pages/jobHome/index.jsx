import React from 'react'
import Image1 from "../../assets/img1.jpeg";
import Image2 from "../../assets/img2.jpg";
import Image3 from "../../assets/img3.jpg";
import Image6 from "../../assets/image6.jpg";

const index = () => {
  return (          
  
  <div>
    
<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mt-12 mb-12">
    <article>
        <h2 class="text-2xl font-extrabold text-gray-900">FIND YOUR PATH</h2>
        <section class="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
            <article class="bg-white group h-96 relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200">
                <div class="relative w-full h-80 md:h-64 lg:h-44">
                    <img src={Image2}
                        alt=""
                        class="w-full h-full object-center object-cover"></img>
                </div>
                 <div class="mt-12 inline-block rounded-full
                  bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] 
                  hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                  href="/download">
                  <span
                  class="block rounded-full bg-white px-8 py-3 text-sm font-medium hover:bg-transparent">
                 Job Seeker
                </span>             
                </div> 


            </article>
            <article class="bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-500">
                <div class="relative w-full h-80 md:h-64 lg:h-44">
                    <img src={Image6}
                        alt=""
                        class="w-full h-full object-center object-cover"></img>
                </div>
              <div class="mt-12 inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                href="/download">

                <span
                  class="block rounded-full bg-white px-8 py-3 text-sm font-medium hover:bg-transparent">
                 Careers
                </span>
              </div> 
            </article>
            <article class="bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200">
                <div class="relative w-full h-80 md:h-64 lg:h-44">
                    <img src={Image3}
                        alt=""
                        class="w-full h-full object-center object-cover"></img>
                </div>
                <div class="mt-12 inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                  href="/download">
              
                  <span
                  class="block rounded-full bg-white px-8 py-3 text-sm font-medium hover:bg-transparent">
                Employer
                </span>             
                </div> 
            </article>
            <article class="bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl 
            transform duration-500">
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
            </article>
        </section>
    </article>
</section>
  </div>



      
   
 

   
  )
}

export default index
