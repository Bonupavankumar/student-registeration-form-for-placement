

import axios from 'axios';

const JOB_API_BASE_URL = "http://localhost:8080/tpo-profile";

class TpoProfService {
    
    getTpo(){
        return axios.get(JOB_API_BASE_URL);
    }
   

    getTpoById(tpoId){
        return axios.get(JOB_API_BASE_URL + '/ ' + tpoId);
    }

    updateTpo(tpo, tpoId){
        return axios.put(JOB_API_BASE_URL + '/' + tpoId, tpo);
    }

    

}

export default new TpoProfService()