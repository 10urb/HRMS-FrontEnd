import axios from "axios";

export default class CityService{

  getAllCity(){
    return axios.get("http://localhost:8080/api/cities/getall")
  }
  getCityById(cityId){
      return axios.get("http://localhost:8080/api/cities/getbyid?cityId=" + cityId)
  }

}