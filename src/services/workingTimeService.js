import axios from "axios";

export default class WorkingTimeService{
    postAdd(){
        return axios.post("http://localhost:8080/api/workingtimes/add")
    }

    getGetAll(){
        return axios.get("http://localhost:8080/api/workingtimes/getall")
    }

    getGetByWorkingTimeId(workingTimeId){
        return axios.get("http://localhost:8080/api/workingtimes/getbyid?workingTimeId="+ workingTimeId)
    }
}