import axios from "axios";
import requestConfigJason from "./configJason";
import requestConfig from "./config";

const BASE_URL = import.meta.env.VITE_BACKEND_API;

class EduAdvertiestmentAPI {
  // Get all EduAdvertiestments
  static getAllEduAdvertiestments() {
    return axios.get(`${BASE_URL}/api/eduAdvertisement`, requestConfig);
  }
}

export default EduAdvertiestmentAPI;
