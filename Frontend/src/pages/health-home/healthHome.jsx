import React from "react";
import { Navigate } from "react-router-dom";
import Footer from "../home/Footer";

const HealthHome =()  => {
    const stats = [
        {
            data: "165",
            title: "Community Members Helped"
        },
        {
            data: "100%",
            title: "Donations back to the community"
        },
        {
            data: "65",
            title: "Medical referrals given to patients"
        },
    ]


    return(
        
        <div className=" pt-6">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-x-12 items-start justify-between lg:flex md:px-8">
                <div className="sm:hidden lg:block lg:max-w-xl">
                    <img src="https://images.unsplash.com/photo-1598300188480-626f2f79ab8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="rounded-lg" alt="" />
                </div>
                <div className="mt-6 gap-12 sm:mt-0 md:flex lg:block">
                    <div className="max-w-2xl">
                        <h1 className="text-gray-800 text-8xl font-bold ">
                            2023 February Medical Outreach
                        </h1>
                    </div>
                </div>
            </div>
            <section className=" mt-5 py-16 bg-orange-200">
                <div className="mt-12">
                    <ul className="flex flex-col items-center justify-around gap-y-10 sm:flex-row sm:flex-wrap lg:divide-x">
                        {
                            stats.map((item, idx) => (
                                <li key={idx} className="text-center px-20 md:px-16">
                                    <h4 className="text-4xl text-indigo-600 font-semibold">{item.data}</h4>
                                    <h5 className="mt-3 text-xl font-semibold">{item.title}</h5>
                                </li>
                            ))
                        }
                    </ul>
                </div>
        </section>
        <div className=" mt-5 w-full bg-cover bg-center h-60 opacity-90 bg-[url(https://images.unsplash.com/photo-1623399785089-dd231208ef33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80)]">
            <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
                <div className="text-center">
                    <h1 className="text-white text-2xl font-semibold md:text-3xl">Help Us Make the world A Better Place <br></br>for the next generation</h1>
                        <button className="mt-4 px-8 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                        onClick={() => {document.location.href="/donate-Advertisements"}}>Donation</button>
                </div>
            </div>
        </div>
        <div className=" mt-2 mb-1 w-full bg-cover bg-center h-60 opacity-95 bg-[url(https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)] ">
            <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
                <div className="text-center">
                    <h1 className="text-white text-2xl font-semibold md:text-3xl">Let's extend the hands of brotherhood </h1>
                        <button className="mt-4 px-8 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500" 
                        
                        onClick={() => {document.location.href="/event-Advertisements"}}
                        >Events</button>
                </div>
            </div>
        </div>
    <Footer />
    </div>
    );
}

export default HealthHome;