import React from "react";
import { useState, useEffect } from "react";



import DonateAdvertisementAPI from "../../api/DonateAdvertisementAPI";

// //Get all the advertisements
// const getAllAdvertisements = async () => {
//     const response = await DonateAdvertisementAPI.getAllDonateAdvertisements();
//     const data = await response.data;
//     return data;
// }


const DonateAdvertisement =()  => {

    const [advertisements, setAdvertisements] = useState([]);
    
    useEffect(() => {
        DonateAdvertisementAPI.getAllDonateAdvertisements().then((response) => {
            setAdvertisements(response.data);
        });
    }, []);



    // const advertisements = [
    //     {
    //         title: "Need Spectacles for 5 children. ",
    //         description: "We need spectacles for 5 children. They are in need of spectacles for their owns. Please help us to get spectacles for them.",	
    //         date: "May 17, 2022",
    //         photos: "https://picsum.photos/64?random=2",
    //         //type: "Full-time",
    //         location: "Kurunagela",
    //         href: "javascript:void(0)"
    //     },
    //     {
    //         title: "Available wheel chairs.",
    //         description: "we have 5 wheel chairs available for donation. Please contact us if you need them wwwwwwwwwwwwwwwwwwwwwwwwwww.",	
    //         date: "May 07, 2022",
    //         photos: "https://picsum.photos/64?random=2",
    //         //type: "Full-time",
    //         location: "Maharagama, Colombo",
    //         href: "javascript:void(0)"
    //     },
    //     {
    //         title: "Available brandnew reusable syringes and needles.",
    //         description: "We have 100 brand new reusable syringes and needles available for donation. Please contact us if you need them.",	
    //         date: "May 04, 2022",
    //         photos: "https://picsum.photos/64?random=2",
    //         //type: "Full-time",
    //         location: "Kanadana, Gampaha",
    //         href: "javascript:void(0)"
    //     },
    //     {
    //         title: "Need vitamins for elders home. ",
    //         description: "We need vitamins for elders home. They are in need of vitamins for their owns. Please help us to get vitamins for them.",	
    //         date: "May 04, 2022",
    //         photos: "https://picsum.photos/64?random=2",
    //         //type: "Full-time",
    //         location: "Anuradhapura",
    //         href: "javascript:void(0)"
    //     },
    //     {
    //         title: " Availble used adjustable bed.",
    //         description: "We have a used adjustable bed available for donation. Please contact us if you need them.",
    //         date: "May 01, 2022",
    //         photos: "https://picsum.photos/64?random=2",
    //         //type: "Full-time",
    //         location: "Kollupitiya, Colombo",
    //         href: "javascript:void(0)"
    //     },
    // ]

    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
    };

  const filteredAdvertisements = advertisements.filter((advertisement) =>
    advertisement.title.toLowerCase().includes(searchTerm.toLowerCase())
  );



    return(
        <>
            <section className="mt-12 max-w-screen-lg mx-auto px-4 md:px-8">
            <div>
                <h1 className="text-gray-800 text-3xl font-semibold">
                    DONATIONS
                </h1>
            </div>

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
                        <li key={idx} className="p-5 bg-white rounded-md shadow-md">
                                <div>
                                    <div className="justify-between sm:flex">
                                        <div className="flex-shrink-0">
                                            <img
                                                src={advertisement.photos}
                                                    alt=""
                                                    className="rectagle-full w-40 h-40 rounded-md"
                                            />
                                        </div>
                                        <div className="flex-col">
                                            <h3 className="text-xl font-medium text-cyan-600 text-left ml-5">
                                                {advertisement.title}
                                            </h3>
                                            <p className="text-gray-500 text-left ml-5 pr-2">
                                                {advertisement.description}
                                            </p>
                                            <span className="flex items-center text-gray-500 mt-6 ml-5">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                                </svg>
                                                {advertisement.location}
                                            </span>
                                        </div>
                                        <div className="mt-5 space-y-3 text-xs sm:mt-0 sm:space-y-2 ">
                                            <span className="flex items-center text-gray-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                                </svg>
                                                {advertisement.date}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                        </li>
                    ))
                }
            </ul>
        )}
        </section>
        </>

    
    );
}

export default DonateAdvertisement; 