import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DonateAdvertisementAPI from "../../api/DonateAdvertisementAPI";

const ViewHealthAdvertisement = () => {
    const [healthAdvertisement, setHealthAdvertisement] = useState({
        type: "",
        photos: "",
        title: "",
        description: "",
        phone: "",
        location: "",
        name: "",
        date: "",
    });
    
    const { id } = useParams();
    
    useEffect(() => {
        DonateAdvertisementAPI.getDonateAdvertisementById(id).then((response) => {
            setHealthAdvertisement(response.data);
        });
    }, []);
 
    return(
        <section>
          <div className="relative mx-auto max-w-screen-xl px-4 py-8">
            <div>
              <h1 className="text-2xl font-bold lg:text-3xl">{healthAdvertisement.title}</h1>
            </div>
        
            <div className="grid gap-8 lg:grid-cols-4 lg:items-start">
              <div className="lg:col-span-3">
                <div className="relative mt-4">
                  <img
                    alt="Tee"
                    src={healthAdvertisement.photos}
                    className=" h-60 w-full rounded-xl object-cover lg:h-[540px]"
                  />
                </div>
              </div>
        
              <div className="lg:sticky lg:top-0">
                < h4 className="mt-1 text-md font-semibold text-gray-800">{healthAdvertisement.type}</h4>
                <form className="space-y-4 lg:pt-8">
        
                  <div className="rounded border bg-gray-100 p-4">
                    <p className="text-sm">
                      <span className="block">{healthAdvertisement.name} </span>
        
                    </p>
                  </div>
        
                  <div className="rounded border bg-gray-100 p-4">
                    <p className="text-sm">
                      <span className="block"> {healthAdvertisement.phone} </span>
        
                    </p>
                  </div>
                  
                </form>
              </div>
        
              <div className="lg:col-span-3">
                <div className="max-w-2xl mx-auto text-center lg:text-left lg:mx-0">
                  <h3 className="text-2xl font-bold lg:text-2xl">Description</h3>
                  <p>
                    {healthAdvertisement.description}
                  </p>
                </div>
                </div>
              </div>
          </div>
        </section>
        
        );
        }
        

export default ViewHealthAdvertisement;

