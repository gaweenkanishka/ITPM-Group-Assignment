import { Link } from "react-router-dom";

const OrgDashboard = () => {
  return (
    <div className="flex flex-col mx-10 my-10">
      <h1 className="text-3xl font-bold">Organization Dashboard</h1>

      <div className="flex flex-row justify-between mt-10">
        <Link
          to="/education-advertisements"
          className="flex flex-col items-center justify-center w-1/4 h-32 p-4 mx-2 text-center text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600"
        >
          <h1 className="text-2xl font-bold">Educational Advertisements</h1>
        </Link>
      </div>
    </div>
  );
};

export default OrgDashboard;
