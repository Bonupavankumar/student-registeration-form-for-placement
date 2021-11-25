import axios from 'axios';

const APPLYJOB_API_BASE_URL = "http://localhost:8080/stud";

class APPLYJOBService {
    
    getAPPLYJOB(){
        return axios.get(APPLYJOB_API_BASE_URL);
    }
    createAPPLYJOB(applyjob){
        return axios.post(APPLYJOB_API_BASE_URL,applyjob);
    }

    getSAPPLYJOBById(applyjobID){
        return axios.get(APPLYJOB_API_BASE_URL + '/ ' + applyjobID);
    }

    updateSTUDENT(student, studentID){
        return axios.put(APPLYJOB_API_BASE_URL + '/' + studentID, student);
    }

    deleteSTUDENT(studentID){
        return axios.delete(APPLYJOB_API_BASE_URL + '/' + studentID);
    }

}

export default new APPLYJOBService()