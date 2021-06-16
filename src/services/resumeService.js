import axios from "axios";

export default class ResumeService {
    postAdd() {
        return axios.post("http://localhost:8080/api/resumes/add")
    }
    getGetAll() {
        return axios.get("http://localhost:8080/api/resumes/getall")
    }
    getGetByResumeId(resumeId) {
        return axios.get("http://localhost:8080/api/resumes/getByResumeId?resumeId=" + resumeId)
    }
}