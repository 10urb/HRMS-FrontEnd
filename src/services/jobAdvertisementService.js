import axios from "axios";

export default class JobAdvertisementService {
    getJobAdvertisement() {
        return axios.get("http://localhost:8080/api/JobAdvertisements/getByStatusTrue")
    }

    getJobAdvertisementOrderByDateDesc() {
        return axios.get("http://localhost:8080/api/JobAdvertisements/findByStatusTrueOrderByPublicationDateDesc")
    }

    getByEmployerCompanyNameAndStatusTrue(companyName) {
        return axios.get("http://localhost:8080/api/JobAdvertisements/ findByEmployer_CompanyNameAndStatus?companyName=" + companyName)
    }
    postAdd() {
        return axios.post("http://localhost:8080/api/JobAdvertisements/add")
    }

    postUpdate() {
        return axios.post("http://localhost:8080/api/JobAdvertisements/update")
    }

    getPostDoPassive(jobAdvertisementId) {
        return axios.post("http://localhost:8080/api/JobAdvertisements/updatestatusPassive?id=" + jobAdvertisementId)
    }
}
