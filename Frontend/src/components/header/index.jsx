import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/org-login");
  };

  return (
    <>
      <header className="text-gray-600 body-font shadow-md">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            to="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <span className="ml-3 text-xl">Manusathkama</span>
          </Link>
          {localStorage.getItem("token") && (
            <Link to="/org" className="ml-3 text-xl text-blue-500">
              <span>[{localStorage.getItem("user_name")}]</span>
            </Link>
          )}
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            {localStorage.getItem("token") && (
              <Link to="/org" className="mr-5 hover:text-gray-900">
                Dashboard
              </Link>
            )}
          </nav>

          {/* if local storage has a token, show logout button */}
          {localStorage.getItem("token") ? (
            <button
              className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
              onClick={handleLogout}
            >
              Logout
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          ) : (
            <div className="md:ml-auto flex flex-wrap items-center text-base justify-center gap-4">
              <Link to="/org-signup">
                <button className="text-white inline-flex items-center bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-700 rounded text-base mt-4 md:mt-0">
                  Sign Up
                </button>
              </Link>
              <Link to="/org-login">
                <button className="text-white inline-flex items-center bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-700 rounded text-base mt-4 md:mt-0">
                  Login
                </button>
              </Link>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
