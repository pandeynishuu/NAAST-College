import axios from "axios";
export const axiosApi = axios.create({
    baseURL: 'http://127.0.0.1:8002/api/',  
    headers:{'Accept': 'application/json','Content-Type':'application/json'}
   
})