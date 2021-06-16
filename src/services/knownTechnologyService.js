import axios from "axios";

export default class KnownTechnologyService{
    postAdd(){
        return axios.post("http://localhost:8080/api/knowntechnologies/add")
    }

    getGetAll(){
        return axios.get("http://localhost:8080/api/knowntechnologies/getall")
    }
}