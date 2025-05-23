import axios, { AxiosError } from "axios";
import { AuthPayload } from "./auth-payload";
import HttpClientWrapper from "../api/http-client-wrapper";

class AuthApiService {

    private httpClientWrapper: HttpClientWrapper;

    constructor() {
        this.httpClientWrapper = new HttpClientWrapper();
    }


    doSignUp = async (payload: any) => {
        try {
            let data: any = await this.httpClientWrapper.post('/auth/signup', payload);
            return data;
        } catch (error) {
            throw error;
        }
    }
    doLogin = async (payload: AuthPayload, user:any) => {
        try {
            let data: any = await this.httpClientWrapper.post('/auth/login', payload, user);
            return data;
        } catch (error) {
            throw error;
        }
    }
    getUserById= async (id:any, user?:any) => {
        try{
            let data:any = await this.httpClientWrapper.get(`/auth/${id}`, user);
            return data;
        }catch (error){
            throw error;
        }
    }
    doUpdate = async (id:any, payload: any, user?:any) => {
        try {
            let data: any = await this.httpClientWrapper.put(`/auth/${id}`, payload, user);
            return data;
        } catch (error) {
            throw error;
        }
    }
}
export default AuthApiService;