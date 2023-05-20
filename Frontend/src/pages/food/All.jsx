import React, { useEffect, useState } from "react";
import FoodAdvertiestmentAPI from "../../api/FoodAdvertiestmentAPI";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const All = () => {
  const [foodAdvertiestments, setFoodAdvertiestments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Get all food advertisements
  useEffect(() => {
    FoodAdvertiestmentAPI.getAllFoodAdvertiestments()
      .then((response) => {
        setFoodAdvertiestments(response.data);
      })
      .catch((error) => {
        makeToast({ type: "error", message: "Something went wrong" });
      });
  }, []);

  const handleClick = (foodAdvertiestment) => {
    navigate(`/foodOne/${foodAdvertiestment._id}`, {
      state: { foodAdvertiestment },
    });
  };

  return (
    <div>
      <div className="overflow-hidden mt-5 mx-10">
        <h1 className="text-4xl font-medium text-center mt-10">
          Food Advertisements
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
            {foodAdvertiestments
              // Search by title filter
              .filter((foodAdvertiestment) => {
                if (searchTerm === "") {
                  return foodAdvertiestment;
                } else if (
                  foodAdvertiestment.title
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                ) {
                  return foodAdvertiestment;
                } else {
                  return null;
                }
              })
              .map((foodAdvertiestment) => (
                <div className="p-4 md:w-1/3" key={foodAdvertiestment._id}>
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={foodAdvertiestment.image}
                      alt="blog"
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        FOOD
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {foodAdvertiestment.title}
                      </h1>
                      <p className="leading-relaxed mb-3">
                        {foodAdvertiestment.description}
                      </p>
                      <div className="flex items-center flex-wrap ">
                        <button
                          name="submit"
                          onClick={() => handleClick(foodAdvertiestment)}
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
                        </button>
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

export default All;
