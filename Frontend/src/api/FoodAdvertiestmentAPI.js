import axios from "axios";
import requestConfigJason from "./configJason";
import requestConfig from "./config";

const BASE_URL = import.meta.env.VITE_BACKEND_API;

class FoodAdvertiestmentAPI {
  // Get all FoodAdvertisements
  static getAllFoodAdvertiestments() {
    return axios.get(`${BASE_URL}/api/foodAdvertisement`, requestConfig);
  }

  // Get all Foodadvertisement's by organization
  static getAllFoodAdvertisementsByOrganization() {
    return axios.get(
      `${BASE_URL}/api/foodAdvertisement/organization`,
      requestConfig
    );
  }

  // Get a FoodAdvertisement by id
  static getFoodAdvertisementById(id) {
    return axios.get(`${BASE_URL}/api/foodAdvertisement/${id}`, requestConfig);
  }

  // Add a FoodAdvertisement
  static addFoodAdvertisement(foodAdvertisement) {
    return axios.post(
      `${BASE_URL}/api/foodAdvertisement`,
      foodAdvertisement,
      requestConfigJason
    );
  }

  // Update a FoodAdvertisement
  static updateFoodAdvertisement(id, foodAdvertisement) {
    return axios.patch(
      `${BASE_URL}/api/foodAdvertisement/${id}`,
      foodAdvertisement,
      requestConfigJason
    );
  }

  // Delete a FoodAdvertisement
  static deleteFoodAdvertisement(id) {
    return axios.delete(
      `${BASE_URL}/api/foodAdvertisement/${id}`,
      requestConfig
    );
  }
}

export default FoodAdvertiestmentAPI;
