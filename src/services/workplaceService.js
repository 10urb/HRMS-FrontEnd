import axios from "axios";

export default class WorkplaceService{
    postAdd(){
        return axios.post("http://localhost:8080/api/workplaces/add")
    }
    getGetAll(){
        return axios.get("http://localhost:8080/api/workplaces/getall")
    }

    getGetByWorkplaceId(workplaceId){
        return axios.get("http://localhost:8080/api/workplaces/getbyid?workplaceId=1" + workplaceId)
    }
}