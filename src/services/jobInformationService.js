export default class JobInformationService{
    postAdd(){
        return axios.post("http://localhost:8080/api/jobinformations/add")
    }

    getGetAll(){
        return axios.get("http://localhost:8080/api/jobinformations/getall")
    }

    getAllByResumeIdOrderByJobDepartureDateDesc(resumeId){
        return axios.get("http://localhost:8080/api/jobinformations/getAllByResumeIdOrderByJobDepartureDateDesc?resumeId="+ resumeId)
    }
}