import axios from 'axios';
import requestConfig from './config';
import requestConfigJason from './configJason';

const BASE_URL = import.meta.env.VITE_BACKEND_API;

class EventAdvertisementAPI{

     // Create a Event advertisement
     static createEventAdvertisement(advertisement){
        return axios.post(`${BASE_URL}/api/eventAdvertisement`, advertisement, requestConfigJason);
    }

    // Get all event advertisements
    static getAllEventAdvertisements(){
        return axios.get(`${BASE_URL}/api/eventAdvertisement`, requestConfig);
    }
    
    // Get a single event advertisement
    static getEventAdvertisement(id){
        return axios.get(`${BASE_URL}/api/eventAdvertisement/${id}`, requestConfig);
    }

    static deleteEventAdvertisement(id){
        return axios.delete(`${BASE_URL}/api/eventAdvertisement/${id}`, requestConfig);
    }

    // Update a event advertisement
    static updateEventAdvertisement(id, advertisement){
        return axios.patch(`${BASE_URL}/api/eventAdvertisement/${id}`, advertisement, requestConfigJason);
    }

    // Get all EventAdvertiestments by organization
    static getAllEventAdvertisementsByOrganization() {
        return axios.get(
          `${BASE_URL}/api/eventAdvertisement/organization`,
          requestConfig
        );
      }

}

export default EventAdvertisementAPI;
