import axios from "axios";
import requestConfigJason from "./configJason";

const BASE_URL = import.meta.env.VITE_BACKEND_API;

class OrganizationAPI {
  // Login
  static login(credentials) {
    return axios.post(
      `${BASE_URL}/api/organization/login`,
      credentials,
      requestConfigJason
    );
  }

  // Signup
  static signup(values) {
    return axios.post(
      `${BASE_URL}/api/organization/signup`,
      values,
      requestConfigJason
    );
  }
}

export default OrganizationAPI;
