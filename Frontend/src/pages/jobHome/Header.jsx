import React from 'react'

const Header = () => {
  return (
    <div>
      <header class="bg-white  opacity-90">

    <div class="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div class="w-full lg:w-1/2">
            <div class="lg:max-w-lg">
                <h1 class="text-3xl font-semibold tracking-wide text-gray-800 dark:text-black lg:text-4xl">FIND YOUR PATH <br></br>JOIN WITH US</h1>
                <p class="mt-4 text-gray-600 dark:text-gray-700">We work with the best team in ever.</p>
                
                <div class="grid gap-6 mt-8 sm:grid-cols-2">
                    <div class="flex items-center text-gray-800 -px-3 dark:text-black-200">
                        <svg class="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span class="mx-3">Friendly Working Team</span>
                    </div>

                    <div class="flex items-center text-gray-800 -px-3 dark:text-black-200">
                        <svg class="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>

                        <span class="mx-3">Always we guide you</span>
                    </div>

                    <div class="flex items-center text-gray-800 -px-3 dark:text-black-200">
                        <svg class="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>

                        <span class="mx-3">Special Offers</span>
                    </div>

                    <div class="flex items-center text-gray-800 -px-3 dark:text-black-200">
                        <svg class="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>

                        <span class="mx-3">From Us MANUSATHKAMA</span>
                    </div>

                </div>
            </div>
        </div>

        <div class="flex items-center justify-center w-full h-96 lg:w-1/2">
            <img class="object-cover w-full h-full max-w-2xl rounded-md" src="https://images.unsplash.com/photo-1555181126-cf46a03827c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
             alt="glasses photo"></img>
        </div>
    </div>
</header>
    </div>
  )
}

export default Header
