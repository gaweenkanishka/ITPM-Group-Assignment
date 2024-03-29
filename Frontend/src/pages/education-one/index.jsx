import { useParams } from "react-router-dom";
import Header from "../../components/header";
import { useEffect, useState } from "react";
import EduAdvertiestmentAPI from "../../api/EduAdvertiestmentAPI";

const EducationOne = () => {
  const { id } = useParams();
  const [eduAdvertiestment, setEduAdvertiestment] = useState({});

  // Get one education advertisement by id
  useEffect(() => {
    EduAdvertiestmentAPI.getEduAdvertiestmentById(id)
      .then((response) => {
        setEduAdvertiestment(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <h1 className="text-4xl font-medium text-center mt-10 mb-5">
        {eduAdvertiestment.title}
      </h1>

      {/* Card */}
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48"
              src={eduAdvertiestment.image}
              alt="Advertisement"
            />
          </div>
          <div className="p-8">
            <p className="mt-2 text-gray-500">
              {eduAdvertiestment.description}
            </p>
            <p className="mt-2 text-gray-500">{eduAdvertiestment.location}</p>
            <p className="mt-2 text-gray-500">
              {eduAdvertiestment.contact_number}
            </p>
            <p className="mt-2 text-gray-500">
              {eduAdvertiestment.closing_date &&
                eduAdvertiestment.closing_date.split("T")[0]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationOne;
