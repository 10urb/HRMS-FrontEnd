import axios from "axios";

export default class SystemEmployeeService{
    getGetAll(){
        return axios.get("http://localhost:8080/api/systememployees/getall")

    }
    postAdd(){
        return axios.post("http://localhost:8080/api/systememployees/add")
    }

    getGetById(systemEmployeeId){
        return axios.get("http://localhost:8080/api/systememployees/getbyid?id="+ systemEmployeeId)

    }
}