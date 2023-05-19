import axios from 'axios';
import requestConfig from './config';
import requestConfigJason from './configJason';

const BASE_URL = import.meta.env.VITE_BACKEND_API;

class DonateAdvertisementAPI{

    // Create a donate advertisement
    static createDonateAdvertisement(advertisement){
        return axios.post(`${BASE_URL}/api/healthAdvertisements`, advertisement, requestConfigJason);
    }

    // Get all donate advertisements
    static getAllDonateAdvertisements(){
        return axios.get(`${BASE_URL}/api/healthAdvertisements`, requestConfig);
    }
    
    // Get a single donate advertisement
    static getDonateAdvertisementById(id){
        return axios.get(`${BASE_URL}/api/healthAdvertisements/${id}`, requestConfig);
    }

    //delete donate advertisement
    static deleteDonateAdvertisement(id){
        return axios.delete(`${BASE_URL}/api/healthAdvertisements/${id}`, requestConfig);
    }

    //update donate advertisement
    static updateDonateAdvertisement(id, advertisement){
        return axios.patch(`${BASE_URL}/api/healthAdvertisements/${id}`, advertisement, requestConfigJason);
    }

    // Get all DonateAdvertiestments by organization
  static getAllDonateAdvertisementsByOrganization() {
    return axios.get(
      `${BASE_URL}/api/donateAdvertisements/organization`,
      requestConfig
    );
  }

}

export default DonateAdvertisementAPI;
