import axios from "axios";

export default class EducationInformationService {
    getAllEducationInformation() {
        return axios.get("http://localhost:8080/getall")
    }
    getAllByResumeIdOrderByGraduationDateDesc(resumeId) {
        return axios.get("http://localhost:8080/findAllByResumeIdOrderByGraduationDateDesc?resumeId=" + resumeId)
    }
    addEducationInformation(){
        return axios.post("http://localhost:8080/add")
    }
}