import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import DonateAdvertisementAPI from "../../api/DonateAdvertisementAPI";
import Header from "../../components/header";

const ViewHealthAdvertisement = () => {

    const navigate = useNavigate();

    const organizer=localStorage.getItem("user_id");

    const [healthAdvertisement, setHealthAdvertisement] = useState({
        type: "",
        organization: "",
        photos: "",
        title: "",
        description: "",
        phone: "",
        location: "",
        name: "",
        created_at: "",
    });
    
    const { id } = useParams();
    
    useEffect(() => {
        DonateAdvertisementAPI.getDonateAdvertisementById(id).then((response) => {
            setHealthAdvertisement(response.data);
        });
    }, []);

  const deleteDonateAdvertisement = async() => {
      try
      {
          const response = await DonateAdvertisementAPI.deleteDonateAdvertisement(id);
          setHealthAdvertisement(response.data);
          navigate("/donate-Advertisements");
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
              <h1 className="text-2xl font-bold lg:text-3xl">{healthAdvertisement.title}</h1>
            </div>
        
            <div className="grid gap-8 lg:grid-cols-4 lg:items-start">
              <div className="lg:col-span-3">
                <div className="relative mt-4">
                  <img
                    alt="Tee"
                    src={healthAdvertisement.photos}
                    className=" h-60 w-full rounded-xl object-cover lg:h-[540px] "
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

                <div className="lg:col-span-4">
                {organizer === healthAdvertisement.organization && (
                  <div className="max-w-2xl mx-auto text-center lg:text-left lg:mx-0 mt-5 flex flex-row justify-center ">
                    <div >
                    <Link to={"/donate-Advertisements/edit/"+ id}>
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
          </div>
          <div id="modal" className=" hidden fixed z-0 pt-24 left-0 top-0 w-full h-screen overflow-auto bg-gray-900 opacity-95 ">
            <div className=" bg-white m-auto p-5 border-solid border-2 w-2/4">
              <span className="float-right text-2xl font-bold cursor-pointer hover:text-black" onClick={() => modal.style.display="none"}>X</span>
              <div className="flex flex-col space-y-4">
                        <h1 className="font-semibold text-lg text-center">Delete Donate Advertisement</h1>
                        <p className=" text-center">Are you sure to delete this donate advertisement?</p>
                    </div>
                    <div className="flex flex-row-reverse mt-10">
                        <button onClick={deleteDonateAdvertisement} className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:bg-red-700 focus:outline-none ml-7">Delete</button>
                        <button onClick={() =>modal.style.display="none"} className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600 focus:bg-gray-700 focus:outline-none">Cancel</button>
              </div>
            </div>
          </div>
          
        </section>
        </>
        );
        }
        

export default ViewHealthAdvertisement;

