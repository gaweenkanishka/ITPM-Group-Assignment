import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DonateAdvertisementAPI from "../../api/DonateAdvertisementAPI";
import Header from "../../components/header";

const DonateAdvertisementList =()  => {

    const [advertisements, setAdvertisements] = useState([]);
    
    useEffect(() => {
        DonateAdvertisementAPI.getAllDonateAdvertisements().then((response) => {
            setAdvertisements(response.data);
        });
    }, []);


    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
    };

  const filteredAdvertisements = advertisements.filter((advertisement) =>
    advertisement.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

    return(
        <div>
        <Header/>
        {localStorage.getItem("user_id") && (
            <div className="overflow-hidden mt-5 mx-10 ">
            <div>
            <Link to={"/donate-Advertisements/create"}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-10 mt-5 mb-5">
                    Add New Donation
                </button>
            </Link>
            </div>
        </div>
        )

        }

        

            <section className="mt-12 max-w-screen-lg mx-auto px-4 md:px-8 mb-8">
                
                <h1 className="text-4xl font-medium text-center mt-8 mb-5">
                    Donation Advertisements
                </h1>
            

            <div className="max-w-2xl mx-auto mt-5">
            <input
            type="text"
            className="w-full py-2 px-3 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Search Advertisement..."
            value={searchTerm}
            onChange={handleSearchTermChange}
            />
        </div>
      {filteredAdvertisements.length === 0 ? (
          <p className="text-center">No Advertisement found.</p>
        ) : (
            <ul className="mt-12 space-y-6">
                {
                    filteredAdvertisements.map((advertisement, idx) => (
                        <li key={idx} className="p-5 bg-slate-100 rounded-md shadow-md">
                            <a href={"/donate-Advertisements/"+advertisement._id }>
                                <div>
                                    <div className="flex flex-row relative sm:flex">
                                        <div className="flex-shrink-0">
                                            <img
                                                src={advertisement.photos}
                                                    alt=""
                                                    className="rectagle-full w-32 h-32 rounded-md"
                                            />
                                        </div>
                                        <div className="flex flex-col relative ">
                                            <div >
                                            <h3 className="text-xl font-medium text-cyan-600 text-left ml-5">
                                                {advertisement.title}
                                            </h3>
                                            </div>
                                            <div>
                                            <p  className="text-gray-500 text-left ml-5 pr-2 text-base">
                                                {advertisement.description.split("\n").slice(0,2).map((line, idx) => (
                                                    <span key={idx}>
                                                        {line}
                                                        <br />
                                                    </span>
                                                ))}

                                            </p>
                                            </div>
                                            <div className=" absolute bottom-0 left-5">
                                            <span className="flex items-center text-gray-500 text-base">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                                </svg>
                                                {advertisement.location}
                                            </span>
                                            </div>
                                        </div>
                                        {/* <div className="mt-5 space-y-3 text-xs sm:mt-0 sm:space-y-2 "> */}
                                        <div className=" absolute right-0 bottom-0">
                                            <span className="flex items-center text-gray-500 text-base">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                                </svg>
                                                {advertisement.created_at.slice(0, 10)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                </a>
                        </li>
                    ))
                }
            </ul>
        )}
        </section>
        </div>

    
    );
}

export default DonateAdvertisementList; 