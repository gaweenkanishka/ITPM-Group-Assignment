import { useState } from "react";
import OrganizationAPI from "../../api/OrganizationAPI";
import undraw_Login_re_4vu2 from "../../assets/undraw_Login_re_4vu2.png";
import makeToast from "../../components/toast";

const OrgSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async (event) => {
    event.preventDefault();
    try {
      const response = await OrganizationAPI.signup({
        name,
        email,
        password,
      });
      console.log(response);
      if (response.status === 200) {
        makeToast({ type: "success", message: "Successfully signed up" });
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user_id", response.data.newOrganization._id);
        localStorage.setItem("user_name", response.data.newOrganization.name);
        localStorage.setItem("user_email", response.data.newOrganization.email);
        window.location.href = "/org";
      }
    } catch (error) {
      makeToast({ type: "error", message: error.response.data.error });
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 px-6">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-20 w-auto"
          src={undraw_Login_re_4vu2}
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Sign up for your organization
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={signup}>
            <div>
              <label
                for="name"
                className="block text-sm font-medium leading-5  text-gray-700"
              >
                Name
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  type="text"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
            </div>

            <div className="mt-6">
              <label
                for="email"
                className="block text-sm font-medium leading-5  text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="email"
                  name="email"
                  placeholder="user@example.com"
                  type="email"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
            </div>

            <div className="mt-6">
              <label
                for="password"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required=""
                  placeholder="***********"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
            </div>

            <div className="mt-6">
              <span className="block w-full rounded-md shadow-sm">
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                >
                  Sign up
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrgSignup;
