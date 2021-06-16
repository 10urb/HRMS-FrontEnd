import axios from "axios";

export default class KnownLanguageService{
    postAdd(){
        return axios.post("http://localhost:8080/api/knownlanguages/add")
    }

    getGetAll(){
        return axios.get("http://localhost:8080/api/knownlanguages/getall")
    }
}