import axios from 'axios';

const STUDENT_API_BASE_URL = "http://localhost:8080/stud";

class STUDENTService {
    
    getSTUDENT(){
        return axios.get(STUDENT_API_BASE_URL);
    }
    createSTUDENT(student){
        return axios.post(STUDENT_API_BASE_URL,student);
    }

    getSTUDENTById(studentID){
        return axios.get(STUDENT_API_BASE_URL + '/ ' + studentID);
    }

    updateSTUDENT(student, studentID){
        return axios.put(STUDENT_API_BASE_URL + '/' + studentID, student);
    }

    deleteSTUDENT(studentID){
        return axios.delete(STUDENT_API_BASE_URL + '/' + studentID);
    }

}

export default new STUDENTService()