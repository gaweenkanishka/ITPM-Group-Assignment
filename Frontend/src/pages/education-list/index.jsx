import { Link } from "react-router-dom";
import Header from "../../components/header";
import EduAdvertiestmentAPI from "../../api/EduAdvertiestmentAPI";
import { useEffect, useState } from "react";
import makeToast from "../../components/toast";
import { MdDeleteOutline } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import * as XLSX from "xlsx";

const EducationList = () => {
  const [eduAdvertiestments, setEduAdvertiestments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Get all education advertisements
  useEffect(() => {
    EduAdvertiestmentAPI.getAllEduAdvertiestmentsByOrganization()
      .then((response) => {
        setEduAdvertiestments(response.data);
      })
      .catch((error) => {
        makeToast({ type: "error", message: error.response.data.error });
      });
  }, []);

  // Delete education advertisement
  const deleteEduAdvertiestment = (id) => {
    EduAdvertiestmentAPI.deleteEduAdvertiestment(id)
      .then((response) => {
        makeToast({ type: "success", message: "Advertisement deleted" });
        setEduAdvertiestments(
          eduAdvertiestments.filter(
            (eduAdvertiestment) => eduAdvertiestment._id !== id
          )
        );
      })
      .catch((error) => {
        makeToast({ type: "error", message: "Something went wrong" });
      });
  };

  // Download report
  const downloadExcel = (data) => {
    console.log(data);
    // cusromize attribute name
    data = data.map((item) => {
      return {
        "ID": item._id,
        "Title": item.title,
        "Description": item.description,
        "Location": item.location,
        "Contact Number": item.contact_number,
        "Closing Date": item.closing_date.split("T")[0],
      };
    });

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    // Get today's date
    const today = new Date();
    XLSX.writeFile(workbook, "Education Advertisements " + today + ".xlsx");
  };

  return (
    <div className="bg-gray-100">
      <Header />

      <h1 className="text-4xl font-medium text-center mt-10 mb-5">
        Education Advertisements
      </h1>

      <div className="overflow-hidden mt-5 mx-10">
        {/* Add New Education */}
        <Link to="/education-advertisements/add">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full float-left mr-10 mt-5 mb-5">
            Add New Education
          </button>
        </Link>

        {/* Download Report */}
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full float-left mr-10 mt-5 mb-5"
          onClick={() => {
            downloadExcel(eduAdvertiestments);
          }}
        >
          Download Report
        </button>

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
            {eduAdvertiestments &&
              eduAdvertiestments
                .filter((eduAdvertiestment) => {
                  if (searchTerm === "") {
                    return eduAdvertiestment;
                  } else if (
                    eduAdvertiestment.title
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return eduAdvertiestment;
                  } else {
                    return null;
                  }
                })
                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                .map((eduAdvertiestment) => (
                  <tr key={eduAdvertiestment._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className=" font-medium text-gray-900">
                          {eduAdvertiestment._id}
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className=" font-medium text-gray-900">
                          <Link
                            to={`/education-advertisements/${eduAdvertiestment._id}`}
                            key={eduAdvertiestment._id}
                            className="hover:text-blue-500 hover:underline"
                          >
                            {eduAdvertiestment.title}
                          </Link>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap flex">
                      <button
                        className="text-red-500 hover:text-red-900 text-4xl"
                        onClick={() =>
                          deleteEduAdvertiestment(eduAdvertiestment._id)
                        }
                      >
                        <MdDeleteOutline />
                      </button>

                      <Link
                        to={`/education-advertisements/update/${eduAdvertiestment._id}`}
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

export default EducationList;
