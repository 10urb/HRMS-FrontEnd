import axios from "axios";

export default class JobTitleService{
    postAdd(){
        return axios.post("http://localhost:8080/api/jobtitles/add")
    }
    getGetAll(){
        return axios.get("http://localhost:8080/api/jobtitles/getall")
    }
}