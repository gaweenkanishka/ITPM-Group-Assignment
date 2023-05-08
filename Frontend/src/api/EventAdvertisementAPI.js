import axios from 'axios';
import requestConfig from './config';
import requestConfigJason from './configJason';

const Base_URL = 'http://localhost:8000/api/';

class EventAdvertisementAPI{

    // Get all event advertisements
    static getAllEventAdvertisements(){
        return axios.get(`${Base_URL}eventAdvertisement/`, requestConfig);
    }
    
    // Get a single event advertisement
    static getEventAdvertisement(id){
        return axios.get(`${Base_URL}eventAdvertisement/${id}`, requestConfig);
    }
}

export default EventAdvertisementAPI;
