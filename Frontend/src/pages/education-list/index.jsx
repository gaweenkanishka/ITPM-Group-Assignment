import { Link } from "react-router-dom";
import Header from "../../components/header";

const EducationList = () => {
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
    </div>
  );
};

export default EducationList;
