import React from 'react'

const form = () => {
  return (
    <div>
      {/* <div class="w-full bg-cover height:32rem  bg-center" img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"> 

       
            <div class="text-center">
                <h1 class="text-white text-2xl font-semibold uppercase md:text-3xl">Build Your new <span class="underline text-blue-400">Saas</span></h1>
                <button class="mt-4 px-4 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Start project</button>
            </div>
        </div>
        </div> */}

    <header  className="h-80 bg-cover bg-center bg-no-repeat ">
       <img src= 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
       className='absolute inset-0 -z-10 h-80 w-full object-cover object-right md:object-center'>
     </img>
     <div class="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-75">
     <div class="flex items-center justify-center">
      <h1 class="text-white text-2xl font-bold uppercase md:text-3xl">My Component</h1>
      </div>
      </div>
    </header>
    </div>
  )
}

export default form
