import axios from "axios";

export default class ImageService {
    getGetImageByImageId(imageId) {
        return axios.get("http://localhost:8080/api/images/getbyid?imageId=" + imageId)
    }
    postAdd() {
        return axios.post("http://localhost:8080/api/add")
    }

    getGetAll() {
        return axios.get("http://localhost:8080/api/images/getall")
    }
}
