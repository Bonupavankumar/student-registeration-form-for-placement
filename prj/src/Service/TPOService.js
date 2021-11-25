import axios from 'axios';

const TPO_API_BASE_URL = "http://localhost:8080/tpo";

class TPOService {
    
    getTPO(){
        return axios.get(TPO_API_BASE_URL);
    }
    createTPO(tpo){
        return axios.post(TPO_API_BASE_URL,tpo);
    }

    getTPOById(tpoId){
        return axios.get(TPO_API_BASE_URL + '/ ' + tpoId);
    }

    updateTPO(tpo, tpoId){
        return axios.put(TPO_API_BASE_URL + '/' + tpoId, tpo);
    }

    deleteTPO(tpoId){
        return axios.delete(TPO_API_BASE_URL + '/' + tpoId);
    }

}

export default new TPOService()