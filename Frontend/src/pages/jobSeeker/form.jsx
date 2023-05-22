import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
    const[firstName,setFirstName]=useState("");
    const[lastName,setLastName]=useState("");
    const[dateOfBirth,setDateOfBirth] =useState("");
    const[selectanOption,setSelectanOption]=useState("");
    const[email,setEmail]=useState("");
    const[description,setDescription]=useState("");

    // clearForm=()=>{
    //     setFirstName("");
    //     setLastName("");
    //     setDateOfBirth("");
    //     setSelectanOption("");
    //     setEmail("");
    //     setDescription("");

    // };

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const data = {
          firstName,
          lastName,
          dateOfBirth,
          selectanOption,
          email,
          description,
    
        };
         //localhostport
        axios.post('http://localhost:8000/api/jobSeeker/', data).
        then((res)=>{
          console.log(res)
          console.log(data)
        })
        .catch((err)=>{
          console.log(err)
        })
       
        // clearForm();   

        }
       
    
           

    return (
        
        <div className="w-full bg-cover" style={{ height: '80rem', backgroundImage: 'url(https://ei.marketwatch.com/Multimedia/2015/08/06/Photos/ZH/MW-DR615_povert_20150806132308_ZH.jpg?uuid=cea9b176-3c5f-11e5-92ee-0015c588e0f6)', background: 'cover' }}>
            <div className="flex  h-full w-full bg-gray-600 bg-opacity-60">
            
                <div className="mt-60 item-center justify-center">
                    <h1 className="text-white mt-8 ml-24 font-semibold uppercase text-3xl">Let's Connect for Zero poverty</h1>
                    <p className="font-semibold text-white text-2xl mt-4 "> <span className='ml-12'>We’re so happy you’ve made it here! We'll assist you in getting  </span> 
                    <span className='ml-12'>back to work if you're eager and driven to do so.</span></p>

                    <div className='ml-12 mt-12'>
                    <p className='font-bold text-white text-2xl'>
                    Don’t have a phone number or email address? <br></br>
                    That’s OK! Give us a call at 0026655546
                    </p>

                </div>

                </div>

            
               

                    <div className="mt-52  w-4/5 h-2/3 flex justify-end mb-80 ">
                    <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl 
                    dark:bg-gray-900 lg:max-w-xl 
                    shadow-gray-300/50 dark:shadow-black/50">
                    <h1 className="text-xl font-medium text-white ml-12">
                    Enter your information below as the first step, <br></br>
                    <span className='ml-8'>and we'll go on to the next.</span>
                    </h1>

                        <form onSubmit={handleSubmit} 
                            className="w-full mt-6 ">
                            <div className="flex-1">
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
                                <input type="text" placeholder="John Doe"
                                 className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-200 
                                bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 
                                dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 
                                dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring 
                                focus:ring-opacity-40"
                                value={firstName}
                                onChange={(event) => setFirstName(event.target.value)} />
                            </div>


                            <div className="flex-1">
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last Name</label>
                                <input type="text" placeholder="John Doe"
                                 className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-200 
                                bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 
                                dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 
                                dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring 
                                focus:ring-opacity-40"
                                value={lastName}
                                onChange={(event) => setLastName(event.target.value)} />
                            </div>

                            <div className="flex-1 mt-6">
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Date Of Birth</label>
                                <input type="date" placeholder="" 
                                className="block w-full px-5 py-3 mt-2 text-gray-700 
                                placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 
                                dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 
                                focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 
                                focus:outline-none focus:ring focus:ring-opacity-40" 
                                value={dateOfBirth}
                                onChange={(event) => setDateOfBirth(event.target.value)}/>
                            </div>


                            <div className="flex w-auto  inline-block">
                                <label className=" w-30 mt-8  mb-2 text-sm text-gray-600 dark:text-gray-200 border
                                 border-gray-200 px-2 py-2 rounded-md">Select An Option</label>
                                <div className="flex mt-6  gap-6">

                                    <div className=" w-auto block mt-2 flex text-sm font-medium text-gray-700  border rounded-md  rounded-lg shadow-md 
                                     focus:outline-none ml-12 ">
                                        <div className='mt-2 ml-2 '>
                                            <input
                                                type="radio"
                                                id="Have E-mail"
                                                name="selectanOption"
                                                value="Have E-mail"

                                                className="mr-2"
                                                checked={selectanOption==='Have E-mail'}
                                                onChange={(event) => setSelectanOption(event.target.value)}
                                            />
                                            <label htmlFor="Have E-mail"
                                            className='text-white'>Have E-mail</label>
                                        </div>


                                        <div className='mt-2 '>
                                            <input
                                                type="radio"
                                                id="Not have E-mail"
                                                name="selectanOption"
                                                value="Not have E-mail"
                                                className="mr-2 ml-4"
                                                checked={selectanOption==='Not have E-mail'}
                                                onChange={(event) => setSelectanOption(event.target.value)}
                                            />
                                            <label htmlFor="Not have E-mail"
                                                className='text-white'>Havn't E-mail</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 mt-6">
                                 <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email(if you have email)</label>
                                     <input type="email" placeholder="optional" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900
                                      dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 
                                      dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none
                                       focus:ring focus:ring-opacity-40" 
                                        value={email}
                                onChange={(event) => setEmail(event.target.value)}/>
                            </div>

                            <div className="flex-1 ">
                                <label className="block mt-4 mb-2 text-sm text-gray-600 dark:text-gray-200">Description about you</label>
                                <textarea className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600
                                 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 
                                 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none 
                                 focus:ring focus:ring-opacity-40" rows="4"
                                 value={description}
                                 onChange={(event) => setDescription(event.target.value)}>
                                 </textarea>
                            </div>

                            <div className="flex justify-center mt-6">
                             <button className="px-4 py-2  font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
