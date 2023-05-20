import { Link } from "react-router-dom";
import Header from "../../components/header";
import DonateAdvertisementAPI from "../../api/DonateAdvertisementAPI";
import EventAdvertisementAPI from "../../api/EventAdvertisementAPI";
import { useEffect, useState } from "react";
import makeToast from "../../components/toast";
import { MdDeleteOutline } from "react-icons/md";
import { BiEdit } from "react-icons/bi";

const HealthAdmin = () => {
  const [donateAdvertisements, setDonateAdvertisements] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [eventAdvertisements, setEventAdvertisements] = useState([]);
    const [searchTerm1, setSearchTerm1] = useState("");

  //get all donate advertisements 
  useEffect(() => {
    DonateAdvertisementAPI.getAllDonateAdvertisements()
      .then((response) => {
        setDonateAdvertisements(response.data);
      })
      .catch((error) => {
        makeToast({ type: "error", message: error.response.data.error });
      });
  }, []);


    // Get all event advertisements
    useEffect(() => {
        EventAdvertisementAPI.getAllEventAdvertisements()
            .then((response) => {
                setEventAdvertisements(response.data);
            })
            .catch((error) => {
                makeToast({ type: "error", message: error.response.data.error });
            });
    }, []);

  // Delete donate advertisement
  const deleteDonateAdvertisement = (id) => {
    DonateAdvertisementAPI.deleteDonateAdvertisement(id)
      .then((response) => {
        makeToast({ type: "success", message: "Advertisement deleted" });
        setDonateAdvertisements(
          donateAdvertisements.filter(
            (donateAdvertisement) => donateAdvertisement._id !== id
          )
        );
      })
      .catch((error) => {
        makeToast({ type: "error", message: "Something went wrong" });
      });
  };

    // Delete event advertisement
    const deleteEventAdvertisement = (id) => {
        EventAdvertisementAPI.deleteEventAdvertisement(id)
            .then((response) => {
                makeToast({ type: "success", message: "Advertisement deleted" });
                setEventAdvertisements(
                    eventAdvertisements.filter(
                        (eventAdvertisement) => eventAdvertisement._id !== id
                    )
                );
            })
            .catch((error) => {
                makeToast({ type: "error", message: "Something went wrong" });
            });
    };


  return (
    <div className="bg-white">
      <Header />

      <h1 className="text-4xl font-medium text-center mt-10 mb-5">
        Health Advertisements
      </h1>

      <h2 className="text-2xl font-medium text-left mt-16 mb-5 ml-8">Donate Advertisements</h2>

      <div className="overflow-hidden mt-5 mx-10">
        {/* Add New Donate */}
        <Link to="/donate-Advertisements/create">
          <button className="bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md float-right mr-10 mt-5 mb-5">
            Add New Donation
          </button>
        </Link>
      </div>

      <div className="shadow overflow-hidden border-b border-red-200 sm:rounded-lg mt-5 mx-10">
        <table className="min-w-full divide-y divide-red-200 text-md">
          <thead className="bg-red-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"
              >
                ID
              </th>

              <th
                scope="col"
                className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"
              >
                Title
              </th>

              <th
                scope="col"
                className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"
              >
                Type
              </th>

              <th
                scope="col"
                className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-red-200">
            {/*filter by organization and map data*/}
            {donateAdvertisements
              .filter((donateAdvertisement) => {
                if (donateAdvertisement.organization === localStorage.getItem("user_id")) {
                  return donateAdvertisement;
                } else {
                  return null;
                }
              }).map((donateAdvertisement) => (
                  <tr key={donateAdvertisement._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className=" font-medium text-gray-900">
                          {donateAdvertisement._id}
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className=" font-medium text-gray-900">
                          <Link
                            to={`/donate-Advertisements/${donateAdvertisement._id}`}
                            key={donateAdvertisement._id}
                            className="hover:text-blue-500 hover:underline"
                          >
                            {donateAdvertisement.title}
                          </Link>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className=" font-medium text-gray-900">
                          {donateAdvertisement.type}
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap flex">
                        <p className="text-xl text-red-500 hover:text-red-900 ml-8 cursor-pointer" onClick={() =>
                          deleteDonateAdvertisement(donateAdvertisement._id)
                        }>
                          delete
                        </p>
                      <Link
                        to={`/donate-Advertisements/edit/${donateAdvertisement._id}`} className=" text-xl text-blue-500 hover:text-blue-900 ml-8 cursor-pointer"
                      >
                        edit
                      </Link>
                      </td>
                  </tr>
                  
                ))}
          </tbody>
        </table>
      </div>

      <div className="overflow-hidden mt-5 mx-10">

      <h2 className="text-2xl font-medium text-left mt-16 mb-5 ml-8">Event Advertisements</h2>
        {/* Add New Event */}
        <Link to="/event-Advertisements/create">
          <button className="bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md float-right mr-10 mt-5 mb-5">
            Add New Event
          </button>
        </Link>
      </div>

      

      <div className="shadow overflow-hidden border-b border-red-200 sm:rounded-lg mt-5 mx-10">
        <table className="min-w-full divide-y divide-red-200 text-md">
          <thead className="bg-red-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"
              >
                ID
              </th>

              <th
                scope="col"
                className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"
              >
                Title
              </th>

              <th
                scope="col"
                className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-red-200">
            {eventAdvertisements.filter((eventAdvertisement) => {
                if (eventAdvertisement.organization === localStorage.getItem("user_id")) {
                  return eventAdvertisement;
                } else {
                  return null;
                }
              }).map((eventAdvertisement) => (
                  <tr key={eventAdvertisement._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className=" font-medium text-gray-900">
                          {eventAdvertisement._id}
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className=" font-medium text-gray-900">
                          <Link
                            to={`/event-Advertisements/${eventAdvertisement._id}`}
                            key={eventAdvertisement._id}
                            className="hover:text-blue-500 hover:underline"
                          >
                            {eventAdvertisement.title}
                          </Link>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap flex">
                        <p className="text-xl text-red-500 hover:text-red-900 ml-8 cursor-pointer" onClick={() =>
                          deleteEventAdvertisement(eventAdvertisement._id)
                        }>
                          delete
                        </p>
                      <Link
                        to={`/event-Advertisements/edit/${eventAdvertisement._id}`} className=" text-xl text-blue-500 hover:text-blue-900 ml-8 cursor-pointer"
                      >
                        edit
                      </Link>
                      </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HealthAdmin;
