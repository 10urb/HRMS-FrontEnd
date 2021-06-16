import axios from "axios";

export default class JobSeekerService{
    postAdd(){
        return axios.post("http://localhost:8080/api/jobseekers/add")
    }

    postDelete(jobSeekerId){
        return axios.post("http://localhost:8080/api/jobseekers/delete" + jobSeekerId)
    }

    getGetAll(){
        return axios.get("http://localhost:8080/api/jobseekers/getall")
    }

    getGetByUserId(userId){
        return axios.post("http://localhost:8080/api/jobseekers/getByUserId?userId=" + userId)
    }
}