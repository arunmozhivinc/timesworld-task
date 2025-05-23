import { useSelector } from "react-redux";
import ApiConfig from "./api-config";
import axios, { AxiosError, AxiosInstance } from "axios";
import { toast } from "react-toastify";

class HttpClientWrapper {

    private axiosClient: AxiosInstance;


    constructor() {
        this.axiosClient = new ApiConfig().getAxiosInstance();
    }

    public post = async (path: string, payload: any, user?:any) => {
        try {
            console.log(this.axiosClient.defaults.baseURL);
            let response: any = await this.axiosClient.post(path, payload ,this.getJsonHeaderConfig(user));
            return response;
        } catch (err: any) {
            throw  err;
            // this.handleApiError(err);
        }
    }

    public put = async (path:string, payload?:any, user?:any) => {
        try {
            let response:any = await this.axiosClient.put(path, payload, this.getJsonHeaderConfig(user));
            return response;
        } catch(err: any) {
            this.handleApiError(err);
        }
    }

    public get = async (path:string, user?:any) => {
        try {
            let response:any = await this.axiosClient.get(path, this.getJsonHeaderConfig(user));
            return response;
        } catch(err: any) {
            this.handleApiError(err);
        }
    }

     getHeaderConfig = (contentType: string, user?: any): any => {
        let headers: any = {};
        headers['Content-Type'] = contentType;
        headers['Access-Control-Allow-Origin'] = true;
        if (user && user.token) {
            headers['Authorization'] = 'Bearer ' + user.token;
        }
        return { headers: headers };
    }
    
    getJsonHeaderConfig = (user:any) => {
        return this.getHeaderConfig('application/json', user);
    }

    private handleApiError = (error: any) => {
        if(error instanceof AxiosError) {
            if (error.response) {
                const errorMessage = (error.response.data as { message: string }).message;
                toast.error(errorMessage, { containerId: 'TR' });
            } else {
                toast.error('No response from server', { containerId: 'TR' });
            }
        }
    };
}
export default HttpClientWrapper;