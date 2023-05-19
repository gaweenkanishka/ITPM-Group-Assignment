import React from 'react'
import Footer from '../home/Footer'

const form = () => {
  return (
    <div>
     
      <section class="min-h-screen bg-cover" >
        <img src= 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
             className='absolute inset-0 -z-10 min-h-screen h-full w-full object-cover object-right md:object-center'
        ></img>
         <div class="flex flex-col  bg-black/60">
        <div class="container flex flex-col flex-1 px-6 py-12 mx-auto">
            <div class="flex-1 lg:flex lg:items-center lg:-mx-6">
                <div class="text-white lg:w-1/2 lg:mx-6">
                    <h1 class="text-2xl font-semibold capitalize lg:text-3xl">Ultimate design solution</h1>
                    <p class="max-w-xl mt-6">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem quo
                        aliquid molestiae hic incidunt beatae placeat accusantium! Alias ex quisquam ab tempora. Ratione
                        autem doloremque ducimus numquam doloribus, error sed.
                    </p>

                    <button class="px-8 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                        get in touch
                    </button>

                </div>
              

                <div class="mt-8 lg:w-1/2 lg:mx-6">
                    <div class="w-full px-8 py-10 mx-auto overflow-hidden bg-white  opacity-80 shadow-2xl rounded-xl  lg:max-w-xl">
                        <h1 class="text-xl font-medium text-gray-700 dark:text-gray-900">Contact form</h1>

                        <p class="mt-2 text-gray-500 dark:text-gray-600">
                            Ask us everything and we would love
                            to hear from you
                        </p>

                        <form class="mt-4  ">
                            <div class="flex-1">
                                <label class="text-l text-gray-600 dark:text-gray-700 
                                flex flex-col justify-start items-start mx-4 my-2
                                justify-start item-start">First Name</label>
                                <input type="text" 
                                placeholder="First Name" 
                                class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-700 
                                rounded-md  dark:text-gray-300 dark:border-gray-600 
                                focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 
                                focus:outline-none focus:ring" />
                            </div>

                            <div class="flex-1 mt-6">
                                <label class="block mb-2 text-m text-gray-600 dark:text-gray-700
                                flex flex-col justify-start items-start mx-4 my-2">Last Name</label>
                                <input type="text" placeholder="Last Name" 
                                class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white 
                                border border-gray-700 rounded-md  dark:text-gray-300 
                                dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 
                                dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>


                            <div class="flex-1 mt-6">
                                <label class="block mb-2 text-m text-gray-600 dark:text-gray-700 
                                 justify-start items-start
                                 flex flex-col justify-start items-start mx-4 my-2">Phone number</label>
                                <input type="numbers" placeholder="014567889" 
                                class="block w-full px-5 py-3 mt-2 text-gray-400 bg-white border 
                                border-gray-700 rounded-md  dark:text-gray-200 dark:border-gray-600 
                                focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 
                                focus:outline-none focus:ring" />
                            </div>

                                {/* file input */}
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
                                            {/* submit button */}
                                    <button class="w-full px-6 py-3 mt-6 text-m font-medium tracking-wide text-white capitalize transition-colors 
                                    duration-300 transform bg-blue-600 rounded-md 
                                    hover:bg-blue-500 focus:outline-none focus:ring 
                                    focus:ring-blue-400 focus:ring-opacity-50">
                                      submit
                                    </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<Footer/>
    </div>
  )
}

export default form
