import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EventAdvertisementAPI from "../../api/EventAdvertisementAPI";

const ViewEventAdvertisement = () => {
    const [eventAdvertisement, setEventAdvertisement] = useState({
        location: "",
        venue: "",
        title: "",
        description: "",
        email: "",
        name: "",
        phone: "",
        date: "",
        time: "",
    });
    
    const { id } = useParams();
    
    useEffect(() => {
        EventAdvertisementAPI.getEventAdvertisement(id).then((response) => {
            setEventAdvertisement(response.data);
        });
    }, []);
    return(
        <section>
          <div className="relative mx-auto max-w-screen-xl px-4 py-8">
            <div>
              <h1 className="text-2xl font-bold lg:text-3xl">{eventAdvertisement.title}</h1>
        
              <p className="mt-1 text-md font-semibold text-gray-500">{eventAdvertisement.type}</p>
            </div>
        
            <div className="grid gap-8 lg:grid-cols-4 lg:items-start">
              <div className="lg:col-span-3">
                <div className="relative mt-4">
                  <img
                    alt="event image"
                    src={eventAdvertisement.photos}
                    className=" h-60 w-full rounded-xl object-cover lg:h-[540px]"
                  />
                </div>
              </div>
        
              <div className="lg:sticky lg:top-0">
                <form className="space-y-4 lg:pt-8">
        
                  <div className="rounded border bg-gray-100 p-4">
                    <p className="text-sm">
                      <span className="block">{eventAdvertisement.name} </span>
        
                    </p>
                  </div>

                  <div className="rounded border bg-gray-100 p-4">
                    <p className="text-sm">
                      <span className="block">{eventAdvertisement.email} </span>
        
                    </p>
                  </div>
        
                  <div className="rounded border bg-gray-100 p-4">
                    <p className="text-sm">
                      <span className="block"> {eventAdvertisement.phone} </span>
        
                    </p>
                  </div>
                  
                </form>

                <span className=" mt-9 flex items-center text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {eventAdvertisement.location}
                </span>

                <span className=" mt-9 flex items-center text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    {eventAdvertisement.date.slice(0, 10)}
                </span>

                <span className=" mt-9 flex items-center text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 " fill="currentColor" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                </svg>
                {eventAdvertisement.time}
                </span>
              </div>
        
              <div className="lg:col-span-3">
                <div className="max-w-2xl mx-auto text-center lg:text-left lg:mx-0">
                  <h3 className="text-2xl font-bold lg:text-2xl">Description</h3>
                  <p>
                    {eventAdvertisement.description}
                  </p>
                </div>
                </div>
              </div>
          </div>
        </section>
        
        );
        }
        

export default ViewEventAdvertisement;

