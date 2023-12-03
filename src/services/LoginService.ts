import Api from './Api';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

export default {
    async login(username: string, password: string): Promise<void> {
        try {
            // let test = axios.create({
            //     baseURL: 'http://localhost:8082',
            //     headers:{
            //         'Accept': 'application/json',
            //         'Content-Type': 'application/json',
            //         'Access-Control-Allow-Origin': 'http://localhost:5173'
            //     }
            // })
            console.log("Login Service");
            const url ='localhost:8080/amaris/Servicio/login';
            console.log("url");
            const response = await axios.post(url, { username, password });
            console.log(response);
            const bearerToken = response.data.access_token;
            console.log(bearerToken);
            const refreshToken = response.data.refresh_token;
            console.log(refreshToken);
            this.setBearerToken(bearerToken);
            this.setRefreshToken(refreshToken);

        } catch (error: any) {
            console.error('Error logging in:', error.message);
            console.log("Error del error");
        }
    },
    async logOut(refreshToken: string): Promise<void> {
        return Api().post(`/logout?refreshToken=${refreshToken}`);
    },
    setBearerToken(bearer_token: string): void {
        localStorage.setItem('bearer_token', bearer_token);
    },
    setRefreshToken(refresh_token: string): void {
        localStorage.setItem('refresh_token', refresh_token);
    },
    getBearerToken(): string | null {
        return localStorage.getItem('bearer_token');
    },
    getRefreshToken(): string | null {
        return localStorage.getItem('refresh_token');
    },
    decodeToken(token: string): any {
        return jwt_decode(token);
    }
};


