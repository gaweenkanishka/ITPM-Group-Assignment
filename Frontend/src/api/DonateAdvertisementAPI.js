import axios from 'axios';
import requestConfig from './config';
import requestConfigJason from './configJason';

const Base_URL = 'http://localhost:8000/api/';

class DonateAdvertisementAPI{

    // Create a donate advertisement
    static createDonateAdvertisement(data){
        return axios.post(`${Base_URL}healthAdvertisements/`, data, requestConfigJason);
    }

    // Get all donate advertisements
    static getAllDonateAdvertisements(){
        return axios.get(`${Base_URL}healthAdvertisements/`, requestConfig);
    }
    
    // Get a single donate advertisement
    static getDonateAdvertisementById(id){
        return axios.get(`${Base_URL}healthAdvertisements/${id}`, requestConfig);
    }

}

export default DonateAdvertisementAPI;
