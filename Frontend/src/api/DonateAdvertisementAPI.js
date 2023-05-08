import axios from 'axios';
import requestConfig from './config';
import requestConfigJason from './configJason';

const Base_URL = 'http://localhost:8000/api/';

class DonateAdvertisementAPI{

    // Get all donate advertisements
    static getAllDonateAdvertisements(){
        return axios.get(`${Base_URL}healthAdvertisements/`, requestConfig);
    }
    
    // Get a single donate advertisement
    static getDonateAdvertisement(id){
        return axios.get(`${Base_URL}healthAdvertisements/${id}`, requestConfig);
    }
}

export default DonateAdvertisementAPI;
