import axios from "axios";
export const axiosApi = axios.create({
    baseURL: 'https://dmcdharan.com/api/',  
    headers:{'Accept': 'application/json','Content-Type':'application/json'}
   
})