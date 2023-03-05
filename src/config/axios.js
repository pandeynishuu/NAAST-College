import axios from "axios";
export const axiosApi = axios.create({
    baseURL: 'http://192.168.0.101:8000/api/',  
    headers:{'Accept': 'application/json','Content-Type':'application/json'}
   
})