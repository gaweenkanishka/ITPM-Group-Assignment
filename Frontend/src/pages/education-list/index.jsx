import { Link } from "react-router-dom";
import Header from "../../components/header";
import EduAdvertiestmentAPI from "../../api/EduAdvertiestmentAPI";
import { useEffect, useState } from "react";
import makeToast from "../../components/toast";

const EducationList = () => {
  const [eduAdvertiestments, setEduAdvertiestments] = useState([]);

  // Get all education advertisements
  useEffect(() => {
    EduAdvertiestmentAPI.getAllEduAdvertiestments()
      .then((response) => {
        setEduAdvertiestments(response.data);
      })
      .catch((error) => {
        makeToast({ type: "error", message: error.response.data.error });
      });
  }, []);

  return (
    <div>
      <Header />
      <h1 className="text-4xl">Education List Page</h1>

      {/* Add New Education */}
      <Link to="/education-advertisements/add">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Add New Education
        </button>
      </Link>

      {/* Education List */}
      {eduAdvertiestments.map((eduAdvertiestment) => (
        <div key={eduAdvertiestment._id}>
          <h1 className="text-2xl font-bold">
            {eduAdvertiestment.organization.name}
          </h1>
          <h1 className="text-2xl font-bold">{eduAdvertiestment.title}</h1>
          <h1 className="text-xl font-bold">{eduAdvertiestment.description}</h1>
        </div>
      ))}
    </div>
  );
};

export default EducationList;
