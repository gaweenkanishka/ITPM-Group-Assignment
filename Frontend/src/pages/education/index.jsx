import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import EduAdvertiestmentAPI from "../../api/EduAdvertiestmentAPI";
import { Link } from "react-router-dom";

const Education = () => {
  const [eduAdvertiestments, setEduAdvertiestments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Get all education advertisements
  useEffect(() => {
    EduAdvertiestmentAPI.getAllEduAdvertiestments()
      .then((response) => {
        setEduAdvertiestments(response.data);
      })
      .catch((error) => {
        makeToast({ type: "error", message: "Something went wrong" });
      });
  }, []);

  return (
    <div>
      <Header />

      <div className="overflow-hidden mt-5 mx-10">
        <h1 className="text-4xl font-medium text-center mt-10">
          Education Advertisements
        </h1>

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

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap -m-4">
            {eduAdvertiestments
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
              .map((eduAdvertiestment) => (
                <div className="p-4 md:w-1/3" key={eduAdvertiestment._id}>
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={eduAdvertiestment.image}
                      alt="blog"
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        EDUCATION
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {eduAdvertiestment.title}
                      </h1>
                      <p className="leading-relaxed mb-3">
                        {eduAdvertiestment.description}
                      </p>
                      <div className="flex items-center flex-wrap ">
                        <Link
                          to={`/education-advertisements/${eduAdvertiestment._id}`}
                          className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                        >
                          Learn More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
