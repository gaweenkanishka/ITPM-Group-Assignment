import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import EventAdvertisementAPI from "../../api/EventAdvertisementAPI";
import Header from "../../components/header";

const ViewEventAdvertisement = () => {

    const organizer=localStorage.getItem("user_id");

    const [eventAdvertisement, setEventAdvertisement] = useState({
        organizer: "",
        location: "",
        venue: "",
        title: "",
        image: "",	
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

    const deleteEventAdvertisement = async() => {
      try
      {
          const response = await EventAdvertisementAPI.deleteEventAdvertisement(id);
          setEventAdvertisement(response.data);
          navigate("/event-Advertisements");
      }
      catch (error)
      {
          console.log(error);
      }
  }

  var modal = document.getElementById("modal");

    return(

      <>
      <Header/>
        <section>
          <div className="relative mx-auto max-w-screen-xl px-4 py-8">
            <div>
              <h1 className="text-2xl font-bold lg:text-3xl">{eventAdvertisement.title}</h1>
            </div>
        
            <div className="grid gap-8 lg:grid-cols-4 lg:items-start">
              <div className="lg:col-span-3">
                <div className="relative mt-4">
                  <img
                    alt="event image"
                    src={eventAdvertisement.image}
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
                    {eventAdvertisement.venue} , {eventAdvertisement.location}
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
                <div className=" mx-auto text-justify lg:text-left lg:mx-0">
                  <h3 className="text-2xl font-bold lg:text-2xl">Description</h3>
                  <p>
                    {eventAdvertisement.description}
                  </p>
                </div>
                </div>
                <div className="lg:col-span-4">
                {organizer === eventAdvertisement.organization && (
                  <div className="max-w-2xl mx-auto text-center lg:text-left lg:mx-0 mt-5 flex flex-row justify-center ">
                    <div >
                      <Link to={"/event-Advertisements/edit/"+ id}>
                      <button className=" w-32 h-9 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:bg-blue-700 focus:outline-none">Edit</button>
                      </Link>
                    </div>

                    <div className="ml-5">
                      <button onClick={() => modal.style.display="block"} className="w-32 h-9 text-white bg-red-500 rounded-md hover:bg-red-600 focus:bg-red-700 focus:outline-none ml-7">Delete</button>
                    </div>
                  </div>
                  )}
                  </div>
              </div>

              <div id="modal" className=" hidden fixed z-0 pt-24 left-0 top-0 w-full h-screen overflow-auto bg-gray-900 opacity-95 ">
            <div className=" bg-white m-auto p-5 border-solid border-2 w-2/4">
              <span className="float-right text-2xl font-bold cursor-pointer hover:text-black" onClick={() => modal.style.display="none"}>X</span>
              <div className="flex flex-col space-y-4">
                        <h1 className="font-semibold text-lg text-center">Delete Event Advertisement</h1>
                        <p className=" text-center">Are you sure to delete this event advertisement?</p>
                    </div>
                    <div className="flex flex-row-reverse mt-10">
                        <button onClick={deleteEventAdvertisement} className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:bg-red-700 focus:outline-none ml-7">Delete</button>
                        <button onClick={() =>modal.style.display="none"} className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600 focus:bg-gray-700 focus:outline-none">Cancel</button>
              </div>
            </div>
          </div>

          </div>
        </section>
        </>
        );
        }
        

export default ViewEventAdvertisement;

