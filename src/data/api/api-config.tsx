import axios, { AxiosInstance } from "axios";
class ApiConfig{

    // private baseURL = '';
    private baseURL:any = process.env.BASE_URL;


    private apiBaseUrl: string;

    constructor() {
        this.apiBaseUrl = this.baseURL;
    }
    private getApiBaseURL = () => {
        return this.apiBaseUrl;
    }

    public getAxiosInstance = () => {
        return axios.create({baseURL: this.getApiBaseURL()});
    }

}
export default ApiConfig;
