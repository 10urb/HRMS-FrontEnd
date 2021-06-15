import axios from "axios";

export default class ImageService{
    getImageById(imageId){
        return axios.get("http://localhost:8080/api/images/getbyid?imageId=" + imageId)
    }
addImage(){
    return axios.post("http://localhost:8080/api/add")
}
}
