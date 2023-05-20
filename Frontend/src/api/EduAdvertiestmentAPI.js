import axios from "axios";
import requestConfigJason from "./configJason";
import requestConfig from "./config";

const BASE_URL = import.meta.env.VITE_BACKEND_API;

class EduAdvertiestmentAPI {
  // Get all EduAdvertiestments
  static getAllEduAdvertiestments() {
    return axios.get(`${BASE_URL}/api/eduAdvertisement`, requestConfig);
  }

  // Get all EduAdvertiestments by organization
  static getAllEduAdvertiestmentsByOrganization() {
    return axios.get(
      `${BASE_URL}/api/eduAdvertisement/organization`,
      requestConfig
    );
  }

  // Get a EduAdvertiestment by id
  static getEduAdvertiestmentById(id) {
    return axios.get(`${BASE_URL}/api/eduAdvertisement/${id}`, requestConfig);
  }

  // Add a EduAdvertiestment
  static addEduAdvertiestment(eduAdvertiestment) {
    return axios.post(
      `${BASE_URL}/api/eduAdvertisement`,
      eduAdvertiestment,
      requestConfigJason
    );
  }

  // Update a EduAdvertiestment
  static updateEduAdvertiestment(id, eduAdvertiestment) {
    return axios.patch(
      `${BASE_URL}/api/eduAdvertisement/${id}`,
      eduAdvertiestment,
      requestConfigJason
    );
  }

  // Delete a EduAdvertiestment
  static deleteEduAdvertiestment(id) {
    return axios.delete(
      `${BASE_URL}/api/eduAdvertisement/${id}`,
      requestConfig
    );
  }
}

export default EduAdvertiestmentAPI;
