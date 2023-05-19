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

  // Get all donate advertisements
  useEffect(() => {
    DonateAdvertisementAPI.getAllDonateAdvertisementsByOrganization()
      .then((response) => {
        setDonateAdvertisements(response.data);
      })
      .catch((error) => {
        makeToast({ type: "error", message: error.response.data.error });
      });
  }, []);

    // Get all event advertisements
    useEffect(() => {
        EventAdvertisementAPI.getAllEventAdvertisementsByOrganization()
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
    <div className="bg-gray-100">
      <Header />

      <h1 className="text-4xl font-medium text-center mt-10 mb-5">
        Health Advertisements
      </h1>

      <div className="overflow-hidden mt-5 mx-10">
        {/* Add New Donate */}
        <Link to="/donate-Advertisements/create">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full float-left mr-10 mt-5 mb-5">
            Add New Donation
          </button>
        </Link>

        {/* Search */}
        <input
          className="shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline float-right mr-10 mt-5 mb-5"
          type="text"
          placeholder="Enter Title"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>

      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg mt-5 mx-10">
        <table className="min-w-full divide-y divide-gray-200 text-md">
          <thead className="bg-gray-50">
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
          <tbody className="bg-white divide-y divide-gray-200">
            {donateAdvertisements &&
              donateAdvertisements
                .filter((donateAdvertisement) => {
                  if (searchTerm === "") {
                    return donateAdvertisement;
                  } else if (
                    donateAdvertisement.title
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return donateAdvertisement;
                  } else {
                    return null;
                  }
                })
                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                .map((donateAdvertisement) => (
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
                            to={`/education-advertisements/${donateAdvertisement._id}`}
                            key={donateAdvertisement._id}
                            className="hover:text-blue-500 hover:underline"
                          >
                            {donateAdvertisement.title}
                          </Link>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap flex">
                      <button
                        className="text-red-500 hover:text-red-900 text-4xl"
                        onClick={() =>
                          deleteDonateAdvertisement(donateAdvertisement._id)
                        }
                      >
                        <MdDeleteOutline />
                      </button>

                      <Link
                        to={`/donate-Advertisements/edit/${donateAdvertisement._id}`}
                      >
                        <BiEdit className="text-4xl text-blue-500 hover:text-blue-900" />
                      </Link>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>

      <div className="overflow-hidden mt-5 mx-10">
        {/* Add New Event */}
        <Link to="/event-Advertisements/create">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full float-left mr-10 mt-5 mb-5">
            Add New Event
          </button>
        </Link>

        {/* Search */}
        <input
          className="shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline float-right mr-10 mt-5 mb-5"
          type="text"
          placeholder="Enter Title"
          onChange={(event) => {
            setSearchTerm1(event.target.value);
          }}
        />
      </div>

      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg mt-5 mx-10">
        <table className="min-w-full divide-y divide-gray-200 text-md">
          <thead className="bg-gray-50">
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
          <tbody className="bg-white divide-y divide-gray-200">
            {eventAdvertisements &&
              eventAdvertisements
                .filter((eventAdvertisement) => {
                  if (searchTerm1 === "") {
                    return eventAdvertisement;
                  } else if (
                    eventAdvertisement.title
                      .toLowerCase()
                      .includes(searchTerm1.toLowerCase())
                  ) {
                    return eventAdvertisement;
                  } else {
                    return null;
                  }
                })
                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                .map((eventAdvertisement) => (
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
                            to={`/education-advertisements/${eventAdvertisement._id}`}
                            key={eventAdvertisement._id}
                            className="hover:text-blue-500 hover:underline"
                          >
                            {eventAdvertisement.title}
                          </Link>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap flex">
                      <button
                        className="text-red-500 hover:text-red-900 text-4xl"
                        onClick={() =>
                          deleteEventAdvertisement(eventAdvertisement._id)
                        }
                      >
                        <MdDeleteOutline />
                      </button>

                      <Link
                        to={`/event-Advertisements/edit/${eventAdvertisement._id}`}
                      >
                        <BiEdit className="text-4xl text-blue-500 hover:text-blue-900" />
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
